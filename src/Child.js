import React from "react";

export function Child(props) {
    return (
        <div>
            <h1>{props.children}</h1>
        </div>
    );
}