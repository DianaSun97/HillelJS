import React, { useState, useEffect } from "react";

function App() {
    const [theme, setTheme] = useState("light");
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        const body = document.querySelector("body");
        if (theme === "light") {
            body.classList.remove("dark");
            body.classList.add("light");
        } else {
            body.classList.remove("light");
            body.classList.add("dark");
        }
    }, [theme]);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        const isValidInput = /^[0-9]*$/.test(newValue);
        setValue(newValue);
        setIsValid(isValidInput && newValue !== "");
    };

    return (
        <div className="App">
            <div className="div1">
                <button onClick={() => handleThemeChange("light")}>Light</button>
                <button onClick={() => handleThemeChange("dark")}>Dark</button>
            </div>
            <div className="div2" style={{ backgroundColor: theme === "light" ? "white" : "#2c3e50" }}>
                    <input type="text" value={value}
                           onChange={handleInputChange}
                           style={{ backgroundColor: theme === "light" ? "#cccccc" : "white", color: theme === "light" ? "black"  : "black" }} />
                {!isValid && <div className="error-message">Invalid input</div>}
                <div className="day-night-field">{theme === "light" ? "Day" : "Night"}</div>
            </div>
        </div>
    );
}

export default App;