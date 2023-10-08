import React, { Suspense, lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const LazyHome = lazy(() => import("./components/pages/home/Home"));
const LazySignUp = lazy(() => import("./components/pages/form/SignUpForm"));
const LazyLogin = lazy(() => import("./components/pages/form/LoginForm"));
const LazyPostView = lazy(() =>
    import("./components/pages/home/singlePost/PostView")
);

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LazyHome />} />
                    <Route path="/signup" element={<LazySignUp />} />
                    <Route path="/login" element={<LazyLogin />} />
                    <Route path="/view-post/:id" element={<LazyPostView />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
