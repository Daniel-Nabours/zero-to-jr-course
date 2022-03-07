import "../styles/styles.scss";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
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
      scale: 0.6,
    },
    animate: {
      opacity: 1,
      left: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      left: "100%",
      scale: 0.6,
    },
  },
  transition: {
    duration: 0.7,
  },
};

function MyApp({ Component, pageProps, router }: AppProps) {
  const [index, setIndex] = useState(0);
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const pageRoutes = [
    "./",
    "./intro/startingout/HowWebsitesWork",
    "./FrontAndBackends",
    "./UsingACodeEditor",
    "../git/Repositories",
    "./GitWorkflows",
    "./Ifuckedup",
    "../TDD/JourneyTesting",
    "./UnitTesting",
    "./UITesting",
    "../../frontend/big3/DOM",
    "./Bundles",
    "./Packages",
    "../frameworks/SPA",
    "./MPA",
    "../uiux/Usability",
    "./SASS",
    "./Responsive",
    "../../backend/serverlogic/Endpoints",
    "./Models",
    "./Services",
    "../REST/RESTfulness",
    "../graphQL/DirectAPIQuery",
    "./SingularEndpoint",
    "../../cloudtech/Docker",
    "./Cluster",
    "../databases/concepts/Structures",
    "./ETL",
    "../types/SQLDB",
    "./KeyValueDB",
    "./DocDB",
    "../../csconcepts/Memory",
    "./BigO",
    "./DSA",
    "../Goodbye",
  ];

  const pageRouter = useRouter();

  const handleBack = useCallback(() => {
    setIndex((prev) => prev - 1);
    pageRouter.back();
  }, [setIndex]);

  const handleNext = () => {
    setIndex((prev) => {

      pageRouter.push(pageRoutes[prev + 1]);
      return prev + 1;
    });
  };

  return (
    <div className="app-wrap">
      <div className="ui-wrap">
        <Navigation {...{ setIndex }} />
      </div>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          className="page-wrap"
          key={router.route}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={slideRight.transition}
          variants={slideRight.variants}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Footer
        {...{
          handleBack,
          handleNext,
          isFirst: index === 0,
          isLast: index === pageRoutes.length - 1,
        }}
      />
    </div>
  );
}

export default MyApp;
