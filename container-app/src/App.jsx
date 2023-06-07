import React, { lazy, Suspense } from "react";
import "./styles.css";

const FirstApp = lazy(() => import("MICROFRONTEND_ONE/app"));

const App = () => {
  const [name, setName] = React.useState(null);

  return (
    <div className="App">
      <h1>CONTAINER (HOST)</h1>
      { name ? <p>Your name is: {name}</p> : null }
      <div>
        <Suspense fallback={<span>Loading...</span>}>
          <FirstApp onChange={(e) => setName(e.target.value)} />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
