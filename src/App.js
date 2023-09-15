import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DefaultRoute from "./pages/DefaulRoute";
import MyNavbar from "./components/UI/Navbar/MyNavbar";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import {useDispatch, useSelector} from "react-redux";
import {checkAuth} from "./store/curentUserReduser";

function App() {
    const dispatch = useDispatch()


    // useEffect(() => {
    //     if (localStorage.getItem('access')) {
    //         dispatch(checkAuth())
    //     }
    // }, [])

    return (
        <BrowserRouter>
            <MyNavbar></MyNavbar>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<DefaultRoute/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
