import { useContext } from "react";
import { lightTheme, darkTheme } from "../assets/theme/theme";
import { ThemeContext } from "../contexts";

const useTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const currentTheme = theme === "light" ? lightTheme : darkTheme;

    return { theme, toggleTheme, currentTheme };
};

export default useTheme;