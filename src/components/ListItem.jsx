/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { edit } from "../features/todo/todoSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeTodo } from "../features/todo/apiServices";

const ListItem = ({ todo }) => {
  const dispatch = useDispatch();

  const { _id, title, description } = todo;

  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: removeTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  // if(!todo) return
  return (
    <li className="list-group-item rounded-0">
      <h1>{title}</h1>
      <p>{description}</p>
      <span className="float-end">
        <button
          className="btn btn-sm btn-warning rounded-0"
          onClick={() => dispatch(edit({ _id, title, description }))}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-danger rounded-0"
          disabled={isPending}
          onClick={() => mutate(_id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
