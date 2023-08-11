import axios from "axios";

const API_URL = "/api/tasks/";

// Create a new Task
const createTask = async (taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, taskData, config);

  return response.data;
};

// Get user Tasks
const getTasks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user Task
const deleteTask = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + id, config);
  console.log(response);

  return response.data;
};

const taskService = {
  createTask,
  getTasks,
  deleteTask,
};

export default taskService;
