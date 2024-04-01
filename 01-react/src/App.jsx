import { lazy, Suspense } from "react";

import Layout from "./components/Layout";
import Counter from "./components/Counter";

import "./App.css";

const Users = lazy(() => import("./components/Users"));

const App = () => {
  return (
    <div className="app-header">
      <Layout>
        <Counter />
        <Suspense fallback={<div>Loading...</div>}>
          <Users />
        </Suspense>
      </Layout>
    </div>
  );
};

export default App;
