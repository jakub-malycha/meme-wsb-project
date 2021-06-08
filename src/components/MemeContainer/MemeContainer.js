import classes from "./MemeContainer.module.css";

function MemeContainer(props) {
  return <div className={classes.container}>{props.children}</div>;
}

export default MemeContainer;
