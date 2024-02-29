import { useEffect, useState } from "react";
import "./Styles.css";
import { useUiContext } from "../contexts/UiContext";

export const Config = () => {
  const { page, changePage, changePageBack, globalTheme, toggleTheme } =
    useUiContext();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(page == "Config");
  }, [page]);

  const handleBack = () => {
    changePageBack();
  };

  const handleEditMap = () => {
    changePage("EditMap");
  };

  const handleEditPlayers = () => {
    changePage("EditPlayers");
  };

  return (
    <div
      className={`card position-fixed start-0 top-0 w-100 h-100 ${
        isVisible ? "fadeIn" : "fadeOut"
      }`}
    >
      <h5 className="card-header">Setup</h5>
      <div className="card-body h-100 overflow-auto d-flex justify-content-center align-items-center">
        <div className="row text-center">
          <div className="col-4">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => handleEditMap()}
            >
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/dusk/64/map-editing.png"
                alt="map-editing"
              />
            </button>
          </div>
          <div className="col-4">
            <button type="button" className="btn btn-outline-primary"
              onClick={() => handleEditPlayers()}>
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/dusk/64/conference-call.png"
                alt="conference-call"
              />
            </button>
          </div>
          <div className="col-4">
            <button type="button" className="btn btn-outline-primary">
              ???
            </button>
          </div>
          <div className="col-4 my-2">
            <button type="button" className="btn btn-outline-primary">
              ???
            </button>
          </div>
          <div className="col-4 my-2">
            <button type="button" className="btn btn-outline-primary">
              ???
            </button>
          </div>
          <div className="col-4 my-2">
            <button type="button" className="btn btn-outline-primary">
              ???
            </button>
          </div>
          <div className="col-4">
            <button type="button" className="btn btn-outline-primary">
              ???
            </button>
          </div>
          <div className="col-4">
            <button type="button" className="btn btn-outline-primary">
              ???
            </button>
          </div>
          <div className="col-4">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => toggleTheme()}
            >
              {globalTheme != "dark" && (
                <img
                  width="64"
                  height="64"
                  src="https://img.icons8.com/dusk/64/light-on.png"
                  alt="light-on"
                />
              )}
              {globalTheme == "dark" && (
                <img
                  width="64"
                  height="64"
                  src="https://img.icons8.com/dusk/64/light--v1.png"
                  alt="light--v1"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="card-footer text-body-secondary text-end">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleBack()}
        >
          Back
        </button>
      </div>
    </div>
  );
};
