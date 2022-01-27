const TaskList = (props) => {
  return (
    <div>
      {props.taskList.map((task, i) => (
        <div key={i}>
          <div>{task}</div>
          <button onClick={() => props.delTask(task)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
