import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Register from "./pages/Register";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Landing from "./pages/Landing";
import PageNotFound from "./components/NotFound";
import BankDetails from "./pages/BankDetails";
function App() {
  const store = useSelector((store) => store);
  const isLoggedIn=useSelector((store) => store.auth.isLoggedIn);
  //console.log(store)
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          {!isLoggedIn && (
            <Route path="/register" element={<Register />}></Route>
          )}
          {!isLoggedIn && <Route path="/login" element={<Login />}></Route>}
          {isLoggedIn && <Route path="/login/landing" element={<Landing />}></Route>}
          {isLoggedIn && <Route path="/login/landing/:id" element={<BankDetails/>}></Route>}
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
