import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Booking from "./Pages/Booking/Booking";
import AuthProvider from "./Contex/AuthProvider/AuthProvider";
import PrivetRoute from "./Contex/PrivetRoute/PrivetRoute";
import Regi from "./Pages/Regi/Regi";
import Purchase from "./Pages/Purchase/Purchase";
import MyOrder from "./Pages/MyOrder/MyOrder";
import Gallery from "./Pages/ProductGallery/Gallery/Gallery";
import Dashbord from "./Pages/Dashbord/Dashbord/Dashbord";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route path="/myorder">
              <MyOrder></MyOrder>
            </Route>
            <PrivetRoute path="/purchase/:purchaseId">
              <Purchase></Purchase>
            </PrivetRoute>
            <PrivetRoute path="/dashbord">
              <Dashbord></Dashbord>
            </PrivetRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/regi">
              <Regi></Regi>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
