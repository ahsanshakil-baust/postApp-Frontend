import React, { lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPost from "./components/post/add/AddPost";
import Home from "./components/pages/home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const LazyHome = lazy(() => import("./components/pages/home/Home"));

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<LazyHome />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
