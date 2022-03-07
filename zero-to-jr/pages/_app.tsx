import "../styles/styles.scss";
import type { AppProps } from "next/app";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";

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
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(true);
 

  const pageRoutes = [
    "/",
    "/intro/startingout/HowWebsitesWork",
    "/intro/startingout/FrontAndBackends",
    "/intro/startingout/UsingACodeEditor",
    "/intro/git/Repositories",
    "/intro/git/GitWorkflows",
    "/intro/git/Ifuckedup",
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
    "/backend/graphQL/DirectAPIQuery",
    "/backend/graphQL/SingularEndpoint",
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
    setIndex((prev) => {
      pageRouter.push({ pathname: pageRoutes[prev - 1] });
      return prev - 1;
    });
  };

  const handleNext = () => {
    setDir(true);
    setIndex((prev) => {
      pageRouter.push({ pathname: pageRoutes[prev + 1] });
      return prev + 1;
    });
  };

  return (
    <div className="app-wrap">
      <div className="ui-wrap">
        <Navigation {...{ setIndex, setDir, pages:pageRoutes }} />
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
          isFirst: index < 1,
          isLast: index === pageRoutes.length - 1,
        }}
      />
    </div>
  );
}

export default MyApp;
