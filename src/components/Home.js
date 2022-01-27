import React, { useState } from "react";
import TaskList from "./TaskList";
import Sentiment from "sentiment";

const Home = () => {
  const [task, setTask] = useState(""); // hook should be always in sq bracket(var, fun)
  const [taskList, setTaskList] = useState([]); //usestate initially is empty array

  const addTask = (tsk) => {
    const sentiment = new Sentiment();
    let result = sentiment.analyze(tsk);
    if (result.comparative < 0) {
      let r = window.confirm("Are you sure you want to send this message?");
      console.log("r", r);
      if (r) {
        let tasks = [...taskList, tsk];
        // let temp = taskList
        // temp.push(tsk)
        setTaskList(tasks);
        setTask("");
      } else {
        setTask("");
      }
    } else {
      let tasks = [...taskList, tsk];
      // let temp = taskList
      // temp.push(tsk)
      setTaskList(tasks);
      setTask("");
    }
  };
  const delTask = (tsk) => {
    console.log("tsk", tsk);
    let taskLists = taskList;
    const index = taskLists.indexOf(tsk);
    if (index > -1) {
      taskLists.splice(index, 1);
      setTaskList(taskLists);
    }
  };

  return (
      <div className="text-center" >
      <div className="border rounded  p-5 text-center" >
          <span>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a message"
          className="p-1 form-control"
        />
        </span>
        <span>
        <button className="btn btn-primary w-25 mt-1"onClick={() => addTask(task)}>ADD </button>
        </span>
      </div>
      <TaskList delTask={delTask} taskList={taskList} />
    </div>
    // </div>
  );
};

export default Home;
