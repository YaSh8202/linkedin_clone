import React from "react";
import classes from "./styles.module.css";
const Input = ({ label }) => {
  return (
    <label className={classes.label}>
      <input className={classes.input} placeholder=" " />
      <span className={classes.span}>{label}</span>
    </label>
  );
};

export default Input;
