import { FC, MouseEventHandler, memo } from "react";
import arrow from "../res/navbutton.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const Footer: FC<{
  handleNext: MouseEventHandler;
  handleBack: MouseEventHandler;
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

export default memo(Footer);
