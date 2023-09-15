import React, {useContext, useState} from 'react';
import MyButton from "../components/UI/Button/MyButton";
import {useDispatch, useSelector} from "react-redux";
import {login_fetch, register, register_fetch} from "../store/curentUserReduser";
import {useFatching} from "../hooks/useFatching";
import MyLoader from "../components/UI/Loader/MyLoader";

const Login = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    console.log(isLoading)

    return (
        <div>
            {isLoading
                ?
                <MyLoader/>
                :
                <div>
                    <input onChange={e => setUsername(e.target.value)}
                       value={username}
                       type="text"
                       name="username"
                       placeholder="Имя пользователя..."/>
                    <input onChange={e => setEmail(e.target.value)}
                       value={email}
                       type="email"
                       name="email"
                       placeholder="email..."/>
                    <input onChange={e => setPassword(e.target.value)}
                       value={password}
                       type="password"
                       name="password"
                       placeholder="Пароль..."/>
                    <MyButton onClick={() => dispatch(login_fetch({
                        username: username,
                        password: password,
                        setIsLoading: setIsLoading
                    }))}>
                        Логин
                    </MyButton>
                    <MyButton onClick={() => dispatch(register_fetch({
                        username:username,
                        email:email,
                        password:password
                    }))}>
                        Регистрация
                    </MyButton>
                </div>
            }
        </div>
    );
};

export default Login;