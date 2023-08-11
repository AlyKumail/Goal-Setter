import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createTask } from "../features/tasks/taskSlice";

const GoalForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(createTask({ text }));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add goal
          </button>
        </div>
      </form>
    </section>
  );
};

export default GoalForm;
