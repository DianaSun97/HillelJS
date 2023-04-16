import React from "react";
//создаем пустые массивы для входных данных
export const AuthContext = React.createContext({
    doLogin: () => {},
    doLogout: () => {},
    token: undefined
});