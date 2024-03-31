import Counter from "./components/Counter";
import Users from "./components/Users";

import "./App.css";

const App = () => {
  return (
    <div className="app-header">
      <Counter />
      <Users />
    </div>
  );
};

export default App;
