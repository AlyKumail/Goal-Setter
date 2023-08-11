import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTasks, reset } from "../features/tasks/taskSlice";

import GoalForm from "../components/GoalForm";
import TaskItem from "../components/TaskItem";
import Sidebar from "../components/Sidebar";

import Spinner from "../components/Spinner";
import Goals from "../components/Goals";
import AddGoal from "../components/AddGoal";

import { RxCross2 } from "react-icons/rx";

function Dashboard() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [due, setDue] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { tasks, isError, message, isLoading } = useSelector((state) => {
    return state.tasks;
  });

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getTasks());
    }

    if (isError) {
      console.log(message);
      return;
    }

    return () => {
      dispatch(reset());
    };
  }, [user, message, isError, dispatch, navigate]);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const onSubmitHandler = () => {};

  const openGoalHandler = () => {
    setIsAddOpen(true);
  };

  const modalCloseHandler = () => {
    setIsAddOpen(false);
  };

  return (
    <>
      {isAddOpen ? (
        <section className="addGoal-form">
          <div className="modal">
            <div onClick={modalCloseHandler} className="modal-close">
              <RxCross2></RxCross2>{" "}
            </div>
            <form>
              <form onSubmit={onSubmitHandler}>
                <h2>Add New Goal</h2>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="text">Description</label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tag">Tag</label>

                  <input
                    type="text"
                    name="tag"
                    id="tag"
                    value={tag}
                    onChange={(e) => {
                      setTag(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="due">Due Date</label>

                  <input
                    type="dateTime-local"
                    name="due"
                    id="due"
                    value={due}
                    onChange={(e) => {
                      setDue(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <select name="status" id="status">
                    <option value="A">Todo</option>
                    <option value="A">In Progress</option>
                    <option value="A">Completed</option>
                  </select>
                </div>
                <div className="form-group">
                  <button className="btn btn-block" type="submit">
                    Add goal
                  </button>
                </div>
              </form>
            </form>
          </div>
        </section>
      ) : (
        ""
      )}

      <section className="heading">
        <div className="heading-text">
          <h1>Welcome {user && user.name}</h1>
          <p>
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum.
          </p>
        </div>
        <div className="heading-btn">
          <button onClick={openGoalHandler} className="btn">
            Add new Goal +
          </button>
        </div>
      </section>
      {/* <GoalForm /> */}
      <section className="content">
        <Goals />
        {/* {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => {
              return <GoalItem key={goal._id} goal={goal} />;
            })}
          </div>
        ) : (
          <h3>You have not set any goal</h3>
        )} */}
      </section>
    </>
  );
}

export default Dashboard;
