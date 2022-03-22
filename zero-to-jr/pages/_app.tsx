import "../styles/styles.scss";
import "../styles/prism.css";
import type { AppProps } from "next/app";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import { useRouter } from "next/router";
import { KeyboardEvent, TouchEvent, memo } from "react";

const slideRight = {
  name: "Slide Right",
  variants: {
    initial: {
      opacity: 0,
      left: "-100%",
      scale: 0.4,
    },
    animate: {
      opacity: 1,
      left: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      left: "100%",
      scale: 0.4,
    },
  },
  transition: {
    duration: 0.7,
  },
};

const slideLeft = {
  name: "Slide Left",
  variants: {
    initial: {
      opacity: 0,
      left: "100%",
      scale: 0.4,
    },
    animate: {
      opacity: 1,
      left: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      left: "-100%",
      scale: 0.4,
    },
  },
  transition: {
    duration: 0.7,
  },
};

function MyApp({ Component, pageProps, router }: AppProps) {
  const [dir, setDir] = useState(true);

  const pageRoutes = [
    "/",
    "/intro/startingout/HowWebsitesWork",
    "/intro/startingout/FrontAndBackends",
    "/intro/startingout/UsingACodeEditor",
    "/intro/git/Repositories",
    "/intro/git/GitWorkflows",
    "/intro/git/Ifuckedup",
    "/intro/TDD/TestDrivenDevelopment",
    "/intro/TDD/JourneyTesting",
    "/intro/TDD/UnitTesting",
    "/intro/TDD/UITesting",
    "/frontend/big3/DOM",
    "/frontend/big3/Bundles",
    "/frontend/big3/Packages",
    "/frontend/frameworks/SPA",
    "/frontend/frameworks/MPA",
    "/frontend/uiux/Usability",
    "/frontend/uiux/SASS",
    "/frontend/uiux/Responsive",
    "/backend/serverlogic/Endpoints",
    "/backend/serverlogic/Models",
    "/backend/serverlogic/Services",
    "/backend/REST/RESTfulness",
    "/backend/graphQL/SingularEndpoint",
    "/backend/graphQL/DirectAPIQuery",
    "/cloudtech/Docker",
    "/cloudtech/Cluster",
    "/databases/concepts/Structures",
    "/databases/concepts/ETL",
    "/databases/types/SQLDB",
    "/databases/types/KeyValueDB",
    "/databases/types/DocDB",
    "/csconcepts/Memory",
    "/csconcepts/BigO",
    "/csconcepts/DSA",
    "/Goodbye",
  ];

  const pageRouter = useRouter();

  const handleBack = () => {
    setDir(false);
    pageRouter.push({
      pathname: pageRoutes[pageRoutes.indexOf(router.route) - 1],
    });
  };

  const handleNext = () => {
    setDir(true);
    pageRouter.push({
      pathname: pageRoutes[pageRoutes.indexOf(router.route) + 1],
    });
  };

  let touchendX = 0,
    touchstartX = 0;
  function handleGesture() {
    if (touchendX < touchstartX) handleNext();
    if (touchendX > touchstartX) handleBack();
  }

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchstartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
  };

  useEffect(() => {
    document.onkeyup = (e) => {
      if (e.key === "ArrowLeft") handleBack();
      if (e.key === "ArrowRight") handleNext();
    };
    return () => {
      document.onkeyup = null
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="app-wrap"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="ui-wrap">
        <Navigation {...{ setDir, pages: pageRoutes }} />
      </div>

      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter={false}>
          <motion.div
            className="page-wrap"
            key={router.route}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={dir ? slideLeft.transition : slideRight.transition}
            variants={dir ? slideLeft.variants : slideRight.variants}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </LazyMotion>

      <Footer
        {...{
          handleBack,
          handleNext,
        }}
      />
    </div>
  );
}

export default memo(MyApp);
