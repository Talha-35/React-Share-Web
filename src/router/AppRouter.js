import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Main from "../pages/Main";
import UserDetail from "../pages/UserDetail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function AppRouter() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />        
        <Route exact path="/register" component={Signup} />
        {/* bu ikisine girmez ise ototmatik maine gider  */}
        <Route path="/login" component={Signin} />
        <Route exact path="/user/:id" component={UserDetail} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default AppRouter;
