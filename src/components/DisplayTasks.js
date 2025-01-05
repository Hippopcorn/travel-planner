function DisplayTask({ listTask, setListTask }) {

  
  return (
    <div>
      <h1>Mes tâches</h1>
      <div>
        {listTask.map((task) => (
          <div key={task}>
            <label>{task}</label>
            <input type="checkbox"></input>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayTask;
