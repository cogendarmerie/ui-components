import React from "react";

export function Button({variant = 'primary', children}) {
    return (
        <button className={`btn btn-${variant}`}>
            {children}
        </button>
    )
}