import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import classes from './MyNavbar.component.css'
import {useDispatch, useSelector} from "react-redux";
import MyButton from "../Button/MyButton";
import {logout_fetch} from "../../../store/curentUserReduser";
import MyLoader from "../Loader/MyLoader";

const MyNavbar = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const isAuth = useSelector(state => state.user.isAuth)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    return (
        <nav>
            <div className={"logo"}>
                <Link className={"logo-link"} to={"/"}>Magazon</Link>
            </div>
            <div className={"nav"}>
                <div>
                    <button onClick={() => navigate("/submitting_an_ad")}>
                        Подать объявление
                    </button>
                </div>
            </div>
            <div className={"auth"}>
                {isAuth
                    ?
                    <div className={"auth_content"}>
                        {isLoading
                            ?
                            <MyLoader/>
                            :
                            <div>
                                <div>{user.username}</div>
                                <div>
                                    <button onClick={()=>dispatch(logout_fetch({setIsLoading: setIsLoading}))}>
                                        Выйти
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                    :
                    <MyButton onClick={() => navigate('/login')}>
                        Войти
                    </MyButton>
                }
            </div>
        </nav>
    );
};

export default MyNavbar;