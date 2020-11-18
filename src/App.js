import React, { useState } from 'react'

import AppRoutes from "./AppRoutes";
import Header from "./components/Header";

const userState = { name: '', isLoggedIn: false }

const App = () => {
  const [user, setUser] = useState({ ...userState })

  return (
    <div>
      <Header user={user} setUser={setUser} />
      <AppRoutes isLoggedIn={user.isLoggedIn} setUser={setUser} />
    </div>
  );
};

export default App;
