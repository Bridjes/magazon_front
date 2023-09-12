import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DefaultRoute from "./pages/DefaulRoute";
import MyNavbar from "./components/UI/Navbar/MyNavbar";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <BrowserRouter>
            <MyNavbar></MyNavbar>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                </Route>
                <Route path="*" element={<DefaultRoute />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
