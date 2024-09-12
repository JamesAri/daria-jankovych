import { Suspense } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./index.css";

const App = () => {
  return (
    <div className="container-fluid dark:bg-slate-900">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path={"/*"}
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
