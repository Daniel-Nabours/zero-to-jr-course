import React from "react";
import arrow from "./arrow.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const Footer: React.FC<{
  handleNext: React.MouseEventHandler;
  handleBack: React.MouseEventHandler;
}> = ({ ...props }): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <footer className="nav-button-container">
        {router.route !== "/" && (
          <div className="triangle-left">
            <Image
              alt="left arrow button"
              src={arrow}
              onClick={props.handleBack}
            />
          </div>
        )}
        {router.route !== "/Goodbye" && (
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
