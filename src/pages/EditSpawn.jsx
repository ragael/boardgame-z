import { useEffect, useState } from "react";
import "./Styles.css";
import { useUiContext } from "../contexts/UiContext";
import { useGameContext } from "../contexts/GameContext";

export const EditSpawn = () => {
  const { page, changePageBack, changePage, setCardList } = useUiContext();
  const { getCardsByType } = useGameContext();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(page == "EditSpawn");
  }, [page]);

  const handleBack = () => {
    changePageBack();
  };

  const handleCardClick = (p, title) => {
    setCardList((prev) => ({
      ...prev,
      title: title,
      place: p,
      single: false,
      type: "spawn",
      rotate: false,
    }));
    changePage("CardList");
  };

  return (
    <div
      className={`card position-fixed start-0 top-0 w-100 h-100 ${
        isVisible ? "fadeIn" : "fadeOut"
      }`}
    >
      <h5 className="card-header">Edit Spawn</h5>
      <div className="card-body h-100 overflow-auto">
        <div className="row">
          <div className="col-6 col-sm-4 col-md-2 mb-3">
            <button
              type="button"
              className="btn btn-outline-primary w-100"
              onClick={() => handleCardClick("game", "Spawn - Game")}
            >
              <h5>Game</h5>
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/dusk/64/cards.png"
                alt="cards"
              />
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 mb-3">
            <button
              type="button"
              className="btn btn-outline-primary w-100"
              onClick={() => handleCardClick("cemetery", "Spawn - Cemetery")}
            >
              <h5>Cemetery</h5>
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/dusk/64/poison.png"
                alt="poison"
              />
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
