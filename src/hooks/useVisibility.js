"use client";
import { createContext, useContext, useState } from "react";

const VisibilityContext = createContext();

export function VisibilityProvider({ children }) {
    const [hidden, setHidden] = useState(false);
    return (
        <VisibilityContext.Provider value={{ hidden, setHidden }}>
            {children}
        </VisibilityContext.Provider>
    );
}

export const useVisibility = () => useContext(VisibilityContext);
