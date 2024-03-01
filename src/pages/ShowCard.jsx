import { useEffect, useState } from "react";
import "./Styles.css";
import { useUiContext } from "../contexts/UiContext";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  showAll: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
});

export const ShowCard = () => {
  const { page, changePageBack, showCard } = useUiContext();

  const classes = useStyles();

  const [isVisible, setIsVisible] = useState(false);
  const [originalSize, setOriginalSize] = useState(false);

  useEffect(() => {
    setIsVisible(page == "ShowCard");
    if (page == "ShowCard") {
      setOriginalSize(false);
    }
  }, [page]);

  const handleBack = () => {
    changePageBack("CardList");
  };

  const handleImageClick = () => {
    setOriginalSize((prev) => !prev);
  };

  return (
    <div
      className={`card position-fixed start-0 top-0 w-100 h-100 ${
        isVisible ? "fadeIn" : "fadeOut"
      }`}
    >
      <h5 className="card-header">{showCard.name}</h5>
      <div className="card-body h-100 overflow-auto text-center">
        <img
          src={showCard.image}
          alt={showCard.name}
          className={originalSize ? "" : classes.showAll}
          style={{
            transform: `rotate(${showCard.angle}deg)`,
            cursor: "pointer",
          }}
          onClick={() => handleImageClick()}
        />
      </div>
      <div className="card-footer text-body-secondary text-end">
        <button
          type="button"
          className="btn btn-danger me-2"
          onClick={() => handleBack()}
        >
          Back
        </button>
      </div>
    </div>
  );
};
