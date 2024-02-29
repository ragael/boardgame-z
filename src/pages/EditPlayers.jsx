import { useEffect, useState } from "react";
import "./Styles.css";
import { useUiContext } from "../contexts/UiContext";
import { useGameContext } from "../contexts/GameContext";

export const EditPlayers = () => {
  const { page, changePage, changePageBack, setCardList } = useUiContext();
  const { getCardByPlace } = useGameContext();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(page == "EditPlayers");
  }, [page]);

  const handleBack = () => {
    changePageBack();
  };

  const handlePlayerCardClick = (p) => {
    setCardList((prev) => ({
      ...prev,
      title: "Player " + p,
      place: p,
      single: true,
      type: "playerCard",
      rotate: false,
    }));
    changePage("CardList");
  };

  const getPlayerCardImage = (p) => {
    let card = getCardByPlace(p);
    if (card) {
      return <img src={card.img} alt={card.name} className="img-fluid" />;
    }
  };

  return (
    <div
      className={`card position-fixed start-0 top-0 w-100 h-100 ${
        isVisible ? "fadeIn" : "fadeOut"
      }`}
    >
      <h5 className="card-header">Edit Players</h5>
      <div className="card-body h-100 overflow-auto">
        <div className="row">
          {[1, 2, 3, 4, 5, 6].map((p) => (
            <div className="col-6 col-sm-4 col-md-2 mb-3" key={p}>
              <button
                type="button"
                className="btn btn-outline-primary px-0 pb-0 w-100"
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
