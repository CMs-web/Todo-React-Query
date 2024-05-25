import { Toaster } from "react-hot-toast";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";

const App = () => {
  return (
    <>
      <div className="container p-5">
        <h1 className="display-6 my-3 text-center">REDUX TODO</h1>
        <Form />
        <ListGroup />
      </div>


      <Toaster position="top-center" gutter={2} containerStyle={{ margin: "8px" }} toastOptions={{
        style: {
          fontSize: "16px",
          maxWidth: "500px",
          padding: "16px 24px",
          backgroundColor : "beige",
        }
      }} />
      
    </>
  );
};

export default App;
