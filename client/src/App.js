import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
//Importing pages
import Home from "./pages/Home";
import InsLanding from "./pages/InsLanding";
import Unauthorized from "./Components/Unauthorized";
//Protected Route component
import ProtectedRoute from "./Components/ProtectedRoute";
//Importing CSS
import "./App.css";
import InsCoursePage from "./pages/InsCoursePage";

function App() {
  //importing from global state
  const [isAuthenticatedUser, authObj] = useSelector((gState) => [
    gState.isAuthenticatedUser,
    gState.authObj,
  ]);

  //verify __session validity if user is authenticated
  const isSessionValid = () => {
    if (isAuthenticatedUser) return authObj;
    return false;
  }

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/instructor" auth={isSessionValid()} component={InsLanding} />
        <ProtectedRoute exact path="/instructor-courses" auth={isSessionValid()} component={InsCoursePage} />
        {/* <Route exact path="/instructor" component={InsLanding} /> */}
        <Route exact path="/unauthorized" component={Unauthorized} />
      </Switch>
    </div>
  );
}

export default App;
