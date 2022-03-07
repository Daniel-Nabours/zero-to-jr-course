import React from "react";
import arrow from "./arrow.svg";
import Image from "next/image";

const Footer: React.FC<{
  handleNext: React.MouseEventHandler;
  handleBack: React.MouseEventHandler;
  isFirst: Boolean;
  isLast: Boolean;
}> = ({ ...props }): JSX.Element => {
  return (
    <>
      <footer className="nav-button-container">
        {!props.isFirst && (
          <div className="triangle-left">
            <Image
              alt="left arrow button"
              src={arrow}
              onClick={props.handleBack}
            />
          </div>
        )}
        {!props.isLast && (
          <div className="triangle-right">
            <Image
              alt="right arrow button"
              src={arrow}
              onClick={props.handleNext}
            />
          </div>
        )}
      </footer>
    </>
  );
};

export default React.memo(Footer);
