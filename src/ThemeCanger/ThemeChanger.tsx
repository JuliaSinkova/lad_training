import { ThemeContext } from "@/context/ThemeContext/ThemeContext";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import classes from './ThemeCanger.module.scss'

const ThemeChanger = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={classes.theme_icon}>
      {theme === "light" ? (
        <FontAwesomeIcon
          icon={faMoon}
          size="2xl"
          style={{ color: "#3c3c3c", cursor: "pointer" }}
          onClick={() => setTheme("dark")}
        />
      ) : (
        <FontAwesomeIcon
          icon={faSun}
          style={{ color: "#FFD43B", cursor: "pointer" }}
          size="2xl"
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
};

export default ThemeChanger;
