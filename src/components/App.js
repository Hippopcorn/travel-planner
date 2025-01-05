import { useState } from "react";

import "../styles/App.css";
import Banner from "../components/Banner";
import { travelList } from "../datas/travelList";
import AddTask from '../components/AddTask';
import { taskDefault } from "../datas/tasksdefault";
import DisplayTask from "../components/DisplayTasks";



function App() {

const [listTask, setListTask] = useState([taskDefault]);

const storage = window.localStorage.getItem("task")
console.log(storage)
  if (storage == null) {
    window.localStorage.setItem("task", JSON.stringify(taskDefault))
  }

  return (
    <div className="App">
      <Banner />
      {/* <DestinationList list={travelList} />  */}
      <DisplayTask listTask={listTask} setListTask={setListTask}/>
      <AddTask listTask={listTask} setListTask={setListTask}/>
    </div>
  );
}

export default App;
