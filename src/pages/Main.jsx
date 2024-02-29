import { useEffect, useState } from "react";
import "./Styles.css";
import { useUiContext } from "../contexts/UiContext";

export const Main = () => {
  const { page, changePage } = useUiContext();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(page == "");
  }, [page]);

  const handleConfig = () => {
    changePage("Config");
  };

  return (
    <div
      className={`card position-fixed start-0 top-0 w-100 h-100 ${
        isVisible ? "fadeIn" : "fadeOut"
      }`}
    >
      {/* <h5 className="card-header">Zombicide</h5> */}
      <div className="card-body h-100 d-flex overflow-auto justify-content-center align-items-center">
        <img
          src="Zombicide-2nd-logo.png"
          alt="Zombicide-2nd-logo.png"
          className="img-fluid"
        />
      </div>
      <div className="card-footer text-body-secondary">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleConfig()}
        >
          Setup
        </button>
      </div>
    </div>
  );
};
