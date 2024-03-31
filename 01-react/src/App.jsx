import { lazy, Suspense } from "react";
import Counter from "./components/Counter";

import "./App.css";

const Users = lazy(() => import("./components/Users"));

const App = () => {
  return (
    <div className="app-header">
      <Counter />
      <Suspense fallback={<div>Loading...</div>}>
        <Users />
      </Suspense>
    </div>
  );
};

export default App;
