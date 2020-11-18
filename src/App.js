import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

import AppRoutes from "./AppRoutes";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header/>
      <AppRoutes />
    </div>
  );
};

export default App;
