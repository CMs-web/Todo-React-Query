import { useQuery } from "@tanstack/react-query";
import ListItem from "./ListItem";
import { fetchTodo } from "../features/todo/apiServices";

const ListGroup = () => {
  const {
    isPending,
    isError,
    data: allTodos,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodo,
  });
  if (isError) {
    return <h1 className="text-center">somethig...</h1>;
  }
  if (isPending) {
    return <h1 className="text-center">Please wait.....</h1>;
  }

  if (!allTodos || allTodos.length === 0) {
    return <h1 className="text-center">No Todos yet..</h1>;
  }
 

  return (
    <ul className="list-group my-2">
      {allTodos.map((tds) => (
        <ListItem key={tds._id} todo={tds} />
      ))}
    </ul>
  );
};

export default ListGroup;
