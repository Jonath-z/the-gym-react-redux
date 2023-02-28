import { useSelector } from "react-redux";
import "./App.css";
import ChangeColor from "./components/ChangeColor";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div
      className="App"
      style={{
        background: theme,
      }}
    >
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
