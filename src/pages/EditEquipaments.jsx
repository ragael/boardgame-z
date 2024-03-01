import { useEffect, useState } from "react";
import "./Styles.css";
import { useUiContext } from "../contexts/UiContext";
import { useGameContext } from "../contexts/GameContext";

export const EditEquipaments = () => {
  const { page, changePageBack, changePage, setCardList } = useUiContext();
  const { getCardsByType } = useGameContext();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(page == "EditEquipaments");
  }, [page]);

  const handleBack = () => {
    changePageBack();
  };

  const getPlayerCardImage = (p) => {
    let card = getCardsByType("playerCard").filter((c) => c.place == p);
    if (card.length == 1) {
      return <img src={card[0].img} alt={card[0].name} className="img-fluid" />;
    }
  };

  const handlePlayerCardClick = (p) => {
    let card = getCardsByType("playerCard").filter((c) => c.place == p);
    if (card.length == 1) {
      setCardList((prev) => ({
        ...prev,
        title: "Player " + p,
        place: p,
        single: false,
        type: "equipament",
        rotate: false,
      }));
      changePage("CardList");
    }
  };

  const handleCardClick = (p, title) => {
    setCardList((prev) => ({
      ...prev,
      title: title,
      place: p,
      single: false,
      type: "equipament",
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
      <h5 className="card-header">Edit Equipaments</h5>
      <div className="card-body h-100 overflow-auto">
        <div className="row">
          <div className="col-6 col-sm-4 col-md-2 mb-3">
            <button
              type="button"
              className="btn btn-outline-primary w-100"
              onClick={() => handleCardClick("game", "Equipaments - Game")}
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
              onClick={() => handleCardClick("cemetery", "Equipaments - Cemetery")}
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
          {[1, 2, 3, 4, 5, 6].map((p) => (
            <div className="col-6 col-sm-4 col-md-2 mb-3" key={p}>
              <button
                type="button"
                className={`btn btn-outline-primary px-0 pb-0 w-100 ${
                  getPlayerCardImage(p) ? "" : "d-none"
                }`}
                onClick={() => handlePlayerCardClick(p)}
              >
                <h5>Player {p}</h5>
                {getPlayerCardImage(p)}
              </button>
            </div>
          ))}
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
