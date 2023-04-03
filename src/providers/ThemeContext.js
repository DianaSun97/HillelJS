import React from "react";

export const ThemeContext = React.createContext({
    changeTheme: () => {},
    theme: false
});