import React from "react";
import './CustomButton.styles.scss'

export const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button">{children}</button>
);
