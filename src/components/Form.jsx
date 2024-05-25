import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo, editTodo } from "../features/todo/apiServices";
import toast from "react-hot-toast";

const Form = () => {
  const queryClient = useQueryClient();


  const { edit } = useSelector((state) => state.todos);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const add = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      toast.success("add successfully")
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
    onError : ()=> toast.error("Something went wrong")
  });

  const update = useMutation({
    mutationFn: editTodo,
    onSuccess: () => {
      toast.success("updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });


  useEffect(() => {
    setTitle(edit.todo.title);
    setDescription(edit.todo.description);
  }, [edit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      edit.isEdit
        ? update.mutate({ _id: edit.todo._id, title, description })
        : add.mutate({ title: title, description: description });
    }
    setTitle("");
    setDescription("");
  };

  return (
    <div className="card my-2 p-3 rounded-0">
      <Form className="my-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="my-2 rounded-0 form-control"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Tittle here..."
        />
        <input
          type="text"
          className="my-2 rounded-0 form-control"
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Description here..."
        />
        <button className="btn btn-success rounded-0 w-100">Submit</button>
      </Form>
    </div>
  );
};

export default Form;
