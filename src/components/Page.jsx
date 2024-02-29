import { useEffect, useState } from "react";
import "./Styles.css";
import { useUiContext } from "../contexts/UiContext";

export const Page = () => {
  const { page, changePageBack } = useUiContext();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(page == "Page");
  }, [page]);

  const handleBack = () => {
    changePageBack();
  };

  return (
    <div
      className={`card position-fixed start-0 top-0 w-100 h-100 ${
        isVisible ? "fadeIn" : "fadeOut"
      }`}
    >
      <h5 className="card-header">Page</h5>
      <div className="card-body h-100 overflow-auto"></div>
      <div className="card-footer text-body-secondary text-end">
        <button
          type="button"
          className="btn btn-danger me-2"
          onClick={() => handleBack()}
        >
          Back
        </button>
        <button type="button" className="btn btn-primary">
          Confirm
        </button>
      </div>
    </div>
  );
};
