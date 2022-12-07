import React, { createContext, useReducer, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Buycar from "./components/Buycar";
import Dashboard from "./components/Dashboard";
import AdminSignin from "./components/AdminSignin";
import AdminSignout from "./components/AdminSignout";
import Addcars from "./components/dashboardComponents/Addcars";
import Salecarreports from "./components/dashboardComponents/Salecarreports";
import Rentcarreports from "./components/dashboardComponents/Rentcarreports";
import Saleyourcars from "./components/Saleyourcars";
import Availableusers from "./components/dashboardComponents/Availableusers";
import Usermessages from "./components/dashboardComponents/Usermessages";
import Getsalecars from "./components/dashboardComponents/Getsalecars";
import Getrentcars from "./components/dashboardComponents/Getrentcars";
import Mycart from "./components/Mycart";
import Rentacar from "./components/Rentacar";
import Rentcarcart from "./components/Rentcarcart";
import Carreviews from "./components/Carreviews";
import Rentcarreviews from "./components/Rentcarreviews";
import Signout from "./components/Signout";
import ExploreSaleCar from "./components/ExploreSaleCar";
import ExploreRentCar from "./components/ExploreRentCar";

import { initialState, reducer } from "../src/reducer/UseReducer";
import {
  adminInitialState,
  adminreducer,
} from "../src/reducer/UseReducerAdmin";

export const UserContext = createContext();
export const AdminContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [adminState, dispatchadmin] = useReducer(
    adminreducer,
    adminInitialState
  );

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signout" element={<Signout />} />
          <Route exact path="/buycar" element={<Buycar />} />
          <Route exact path="/mycart" element={<Mycart />} />
          <Route exact path="/carreviews" element={<Carreviews />} />
          <Route exact path="/rentcar" element={<Rentacar />} />
          <Route exact path="/rentcarcart" element={<Rentcarcart />} />
          <Route exact path="/rentcarreviews" element={<Rentcarreviews />} />
          <Route exact path="/saleyourcar" element={<Saleyourcars />} />
          <Route exact path="/exploreSaleCars" element={<ExploreSaleCar />} />
          <Route exact path="/exploreRentCars" element={<ExploreRentCar />} />
        </Routes>
      </UserContext.Provider>

      <AdminContext.Provider value={{ adminState, dispatchadmin }}>
        <Routes>
          <Route exact path="/adminsignin" element={<AdminSignin />} />

          <Route exact path="/adminsignout" element={<AdminSignout />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/addcars" element={<Addcars />} />
          <Route exact path="/salecarsreports" element={<Salecarreports />} />
          <Route exact path="/rentcarsreports" element={<Rentcarreports />} />
          <Route exact path="/availableusers" element={<Availableusers />} />
          <Route exact path="/usermessages" element={<Usermessages />} />
          <Route exact path="/getsalecarsforadmin" element={<Getsalecars />} />
          <Route exact path="/getrentcarsforadmin" element={<Getrentcars />} />
        </Routes>
      </AdminContext.Provider>
    </>
  );
};

export default App;
