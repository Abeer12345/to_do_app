import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListTask from './components/ListTask';
import AddTask from './components/AddTask';
import FiltreTask from './components/FiltreTask';
import { useState } from 'react';

function App() {
  const [doneType, setDoneType] = useState('')
  return (
    <div >
      <center>
          <h1 style={{padding:'50px'}}>My Tasks List </h1>
       </center>
      
      <Routes>
        
        <Route path='/' element={<ListTask/>} ></Route>
        <Route path='/Task_type' element={<FiltreTask doneType={doneType} />} ></Route>
       

      </Routes>

    </div>
  );
}

export default App;
