import axios from "axios";

export default function App() {
  const onClickUsers = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
    </div>
  )
}