import React from "react";
//создаем пустые массивы для входных данных
export const AuthContext = React.createContext({
    doLogin: () => {
        console.log("LOGIN A")
    },
    doLogout: () => {},
    token: undefined
});