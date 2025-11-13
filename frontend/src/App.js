import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const API_URL = 'http://localhost:5000'; // Points to your backend

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API_URL}/tasks`);
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    try {
      await axios.post(`${API_URL}/tasks`, { title: newTask });
      setNewTask('');
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleComplete = async (id, completed) => {
    const task = tasks.find(t => t.id === id);
    try {
      await axios.put(`${API_URL}/tasks/${id}`, { title: task.title, completed: !completed });
      fetchTasks();
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const startEdit = (id, title) => {
    setEditingId(id);
    setEditTitle(title);
  };

  const saveEdit = async (id) => {
    if (!editTitle.trim()) return;
    try {
      await axios.put(`${API_URL}/tasks/${id}`, { title: editTitle, completed: tasks.find(t => t.id === id).completed });
      setEditingId(null);
      setEditTitle('');
      fetchTasks();
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle('');
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <form onSubmit={addTask}>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          maxLength={100}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {editingId === task.id ? (
              <div className="edit-form">
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  maxLength={100}
                />
                <button onClick={() => saveEdit(task.id)}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </div>
            ) : (
              <div className="task-content">
                <span
                  onClick={() => toggleComplete(task.id, task.completed)}
                  className="task-title"
                >
                  {task.title}
                </span>
                <div className="task-actions">
                  <button onClick={() => startEdit(task.id, task.title)}>Edit</button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p>No tasks yet—add one above!</p>}
    </div>
  );
}

export default App;