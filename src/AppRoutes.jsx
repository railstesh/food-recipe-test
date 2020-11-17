import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
// import UserPage from "./components/UserPage";
// import ContactsList from "./components/ContactsList";
// import AgentsList from "./components/AgentsList";

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {/* <Route exact path="/contacts_list/:zipCode/:distance" component={ContactsList} />
        <Route exact path="/agents_list/:zipCode" component={AgentsList} />
        <Route exact path='/user_page/:userId' component={UserPage}/> */}
      </Switch>
    </>
  );
};

export default AppRoutes;
