import React, { useContext } from "react";
import {AuthContext} from "../authorization/authContext";

const Login= () => {
    const authCtx = useContext(AuthContext);

    const doLogin = (event) => {
        event.preventDefault();
        authCtx.doLogin(event.target[0].value);
    }

    return <>
        <form onSubmit={doLogin}>
            <input placeholder="login" type="text" />
            <button type="submit">Login</button>
        </form>
    </>
}

export default Login;