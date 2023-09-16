import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import DefaultRoute from "./pages/DefaulRoute";
import MyNavbar from "./components/UI/Navbar/MyNavbar";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import {useDispatch, useSelector} from "react-redux";
import PrivatePage from "./pages/PrivatePage";
import {check_auth_fetch} from "./store/curentUserReduser";
import MyLoader from "./components/UI/Loader/MyLoader";

function App() {
    const dispatcher = useDispatch()
    const isAuth = useSelector(state => state.user.isAuth)
    const [isloading, setIsLoading] = useState(false)
    function PrivateRoute({ element: Element, isAuthenticated, ...rest }) {
        return isAuthenticated ? (
          <Element {...rest} />
        ) : (
          <Navigate to="/login" replace />
        );
    }

    useEffect(()=> {
        dispatcher(check_auth_fetch({setIsLoading: setIsLoading}))
    }, [])

    return (
        <BrowserRouter>
            <MyNavbar></MyNavbar>
            {isloading
            ?
                <MyLoader/>
            :
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<DefaultRoute/>}/>
                    <Route
                        path="/private"
                        element={<PrivateRoute element={PrivatePage} isAuthenticated={isAuth} />}
                    />
                </Routes>
            }
        </BrowserRouter>
    );
}

export default App;
