import { useEffect, useRef, useState } from "react";
import "./Styles.css";
import { useUiContext } from "../contexts/UiContext";

export const SplashScreen = () => {
  const { page, changePage } = useUiContext();

  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setIsVisible(page == "");
  }, [page]);

  useEffect(() => {
    let interval;

    if (count >= 110) {
      changePage("Main");
    } else {
      //Implementing the setInterval method
      interval = setInterval(() => {
        setCount(count + 5);
      }, 100);
    }

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <div
        className={`position-fixed start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center ${
          isVisible ? "fadeIn" : "fadeOut"
        }`}
      >
        <img
          src="Zombicide-2nd-logo.png"
          alt="Zombicide-2nd-logo.png"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      </div>

      <div
        className="progress position-fixed start-0 bottom-0 w-100"
        role="progressbar"
        aria-label="Animated striped example"
        aria-valuenow={count}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ height: "20px" }}
      >
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          style={{ width: `${count}%` }}
        ></div>
      </div>
    </>
  );
};
