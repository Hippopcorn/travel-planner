import { useState, useEffect } from "react";

function AddTask(props) {
    const listTask = props.listTask
    const setListTask = props.setListTask


  const [taskToAdd, setTaskToAdd] = useState("");


  useEffect(() => {

// check si il exite deja des données dans le local storage, si oui, les récupère et les ajoute à la listTask
    const taskStock = window.localStorage.getItem("task");
    if (taskStock) {
      console.log(taskStock)
      const parseTasks = JSON.parse(taskStock);
      setListTask(parseTasks);
    } else setListTask([]);
  }, []);


  function handleAddTask(e){
    e.preventDefault();
    const updatedTasks = [...listTask, taskToAdd];
    window.localStorage.setItem("task", JSON.stringify(updatedTasks));
    setListTask(updatedTasks);
    console.log(updatedTasks)

    setTaskToAdd("");
  };

  return (
    <div>
      <h1>Créer une nouvelle tâche</h1>

      <form id="monFormulaire" onSubmit={handleAddTask}>
        <label>Ajouter une nouvelle tâche : </label>
        <input
          type="text"
          id="taskName"
          value={taskToAdd}
          onChange={(e) => setTaskToAdd(e.target.value)}
        ></input>

        <button type="submit">Valider</button>
      </form>
    </div>
  );
}

export default AddTask;
