import React from "react";

const Goals = () => {
  return (
    <div className="goals">
      <div className="todo">
        <span className="header-tag">Todo</span>

        <div className="goals-col">
          <div className="goal">
            <span className="goal-tag">Design</span>
            <h3 className="goal-title">Task Title</h3>
            <p>Task Description...</p>
          </div>
          <div className="goal">
            <span className="goal-tag">Design</span>
            <h3 className="goal-title">Task Title</h3>
            <p>Task Description...</p>
          </div>
          <div className="goal">
            <span className="goal-tag">Design</span>
            <h3 className="goal-title">Task Title</h3>
            <p>Task Description...</p>
          </div>
        </div>
      </div>
      <div className="progress">
        {" "}
        <span className="header-tag">In Progess</span>
        <div className="goal">
          <span className="goal-tag">Design</span>
          <h3 className="goal-title">Task Title</h3>
          <p>Task Description...</p>
        </div>
        <div className="goal">
          <span className="goal-tag">Design</span>
          <h3 className="goal-title">Task Title</h3>
          <p>Task Description...</p>
        </div>
        <div className="goal">
          <span className="goal-tag">Design</span>
          <h3 className="goal-title">Task Title</h3>
          <p>Task Description...</p>
        </div>
      </div>
      <div className="completed">
        {" "}
        <span className="header-tag">Completed</span>
        <div className="goal">
          <span className="goal-tag">Design</span>
          <h3 className="goal-title">Task Title</h3>
          <p>Task Description...</p>
        </div>
        <div className="goal">
          <span className="goal-tag">Design</span>
          <h3 className="goal-title">Task Title</h3>
          <p>Task Description...</p>
        </div>
        <div className="goal">
          <span className="goal-tag">Design</span>
          <h3 className="goal-title">Task Title</h3>
          <p>Task Description...</p>
        </div>
      </div>
    </div>
  );
};

export default Goals;
