import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

const MyButton = props => {
  const { onClick, placement, children, title, className } = props;
  return (
    <>
      <Tooltip title={title} placement={placement}>
        <Button className={className} onClick={onClick}>
          {children}
        </Button>
      </Tooltip>
    </>
  );
};

export default MyButton;
