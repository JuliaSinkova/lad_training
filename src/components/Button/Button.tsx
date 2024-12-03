import classes from './Button.module.scss'

const Button: React.FC<{
  label: string
}> = ({ label }) => {
  return <button className={classes.btn}>{label}</button>;
};

export default Button;
