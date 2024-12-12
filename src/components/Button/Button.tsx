
import classes from './Button.module.scss'

type ButtonProps = {
  children?: React.ReactNode,
  onClick?: () => void
}

const Button = (props : ButtonProps) => {
  return <button onClick={props.onClick} className={classes.btn}>{props.children}</button>;
};

export default Button;
