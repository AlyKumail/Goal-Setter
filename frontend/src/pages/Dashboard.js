import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getGoals, reset } from "../features/goals/goalSlice";

import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import Sidebar from "../components/Sidebar";

import Spinner from "../components/Spinner";
import Goals from "../components/Goals";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isError, message, isLoading } = useSelector((state) => {
    return state.goals;
  });

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getGoals());
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

  return (
    <>
      <section className="heading">
        <div className="heading-text">
          <h1>Welcome {user && user.name}</h1>
          <p>
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum.
          </p>
        </div>
        <div className="heading-btn">
          <button className="btn">Add new Goal +</button>
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
