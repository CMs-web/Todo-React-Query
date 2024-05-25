import axios from "axios"

//DONE
export const fetchTodo = async () => {
  const response = await axios.get('/api/todo');
    return response.data
}

//DONE
export const addTodo = async (todo) => {
  const response = await axios.post("/api/todo", todo);
  return response.data;
};

export const editTodo = async (todo) => {
  const response = await axios.put("/api/todo/" + todo._id, todo);
  return response.data;
};

//DONE
export const removeTodo = async (id) => {
  const response = await axios.delete("/api/todo/" + id);
  return response.data;
};