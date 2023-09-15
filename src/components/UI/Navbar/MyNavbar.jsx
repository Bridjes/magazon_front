import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import classes from './MyNavbar.component.css'
import {useDispatch, useSelector} from "react-redux";
import MyButton from "../Button/MyButton";
import {checkAuth} from "../../../store/curentUserReduser";

const MyNavbar = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const isAuth = useSelector(state => state.user.isAuth)

    return (
        <nav>
            <div className={"logo"}>
                <Link className={"logo-link"} to={"/"}>Magazon</Link>
            </div>
            <div className={"nav"}>

            </div>
            <div className={"auth"}>
                {isAuth
                    ? <div>{user.username}</div>
                    : <div>Неавторизован</div>
                }
            </div>
        </nav>
    );
};

export default MyNavbar;