import { useContext } from "react";
import classes from "./Button.module.scss";
import { ThemeContext } from "@/context/ThemeContext/ThemeContext";


type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  const {theme} = useContext(ThemeContext);
  return (
    <button onClick={props.onClick} className={classes.btn}>
      {props.children}
    </button>
  );
};

export default Button;
