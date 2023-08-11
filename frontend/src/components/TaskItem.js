import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

const TaskItem = ({ goal }) => {
  const dispatch = useDispatch();
  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.text}</h2>
      <button
        onClick={() => {
          dispatch(deleteTask(goal._id));
        }}
        className="close"
      >
        X
      </button>
    </div>
  );
};

export default TaskItem;
