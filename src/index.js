import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
    { id: "todo-0", name: "Wake up", completed: true },
    { id: "todo-1", name: "Eat Lunch", completed: false },
    { id: "todo-2", name: "Sleep", completed: false }
  ];

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <App tasks={DATA} />, document.getElementById("root")
);
