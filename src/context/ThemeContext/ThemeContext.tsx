import { createContext } from "react";

export type ThemeType = "light" | "dark"

type ThemeContextType = {
    theme: ThemeType,
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>>
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: () => {}
});