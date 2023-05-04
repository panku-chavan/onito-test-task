import "./App.css";
import DataTabelComponent from "./Task/DataTabel";
import TaskForm from "./Task/TaskForm";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TaskForm />}></Route>
        <Route path="/data" element={<DataTabelComponent />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
