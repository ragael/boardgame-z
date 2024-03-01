import { useEffect, useState } from "react";
import "./Styles.css";
import { useGameContext } from "../contexts/GameContext";
import { useUiContext } from "../contexts/UiContext";

export const CardList = () => {
  const {
    page,
    changePage,
    changePageBack,
    cardList,
    setCardList,
    setShowCard,
  } = useUiContext();
  const { getCardsByType, getCardsByPlace, setCard } = useGameContext();

  const [isVisible, setIsVisible] = useState(false);
  const [localCards, setLocalCards] = useState([]);
  const [allNone, setAllNone] = useState("");
  const [viewCard, setViewCard] = useState(false);

  useEffect(() => {
    setIsVisible(page == "CardList");
    if (page == "CardList") {
      if (viewCard) {
        setViewCard(false);
      } else {
        setAllNone("All");
        setLocalCards(
          getCardsByType(cardList.type).map((card) => ({
            ...card,
            select: card.place == cardList.place && cardList.place != "",
            disabled: card.place != cardList.place && card.place != "",
          }))
        );
      }
    }
  }, [page, cardList]);

  const isMobile = () => {
    const regex =
      /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  };

  const handleRotate = (id) => {
    setLocalCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, angle: card.angle + 90 } : card
      )
    );
  };

  const handleSelection = (id) => {
    if (id == "ALL") {
      setLocalCards((prevCards) =>
        prevCards.map((card) => ({ ...card, select: true }))
      );
      setAllNone("None");
    } else if (id == "NONE") {
      setLocalCards((prevCards) =>
        prevCards.map((card) => ({ ...card, select: false }))
      );
      setAllNone("All");
    } else if (id == "INVERT") {
      setLocalCards((prevCards) =>
        prevCards.map((card) => ({
          ...card,
          select:
            card.place == cardList.place || card.place == ""
              ? !card.select
              : card.select,
        }))
      );
    } else if (!cardList.single) {
      setLocalCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, select: !card.select } : { ...card }
        )
      );
    } else {
      setLocalCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id
            ? { ...card, select: !card.select }
            : { ...card, select: false }
        )
      );
    }
    if (isMobile()) {
      document.querySelector("body").click();
    }
  };

  const handleShowCard = (src, alt, angle) => {
    setShowCard((prev) => ({
      name: alt,
      image: src,
      angle: angle,
    }));
    changePage("ShowCard");
    setViewCard(true);
  };

  const handleBack = () => {
    setCardList((prev) => ({ ...prev, type: "" }));
    changePageBack("EditMap");
  };

  const handleConfirm = () => {
    const ajustAngle = (a) => {
      while (a >= 360) {
        a -= 360;
      }
      return a;
    };

    setLocalCards((prevCards) =>
      prevCards.map((card) => ({ ...card, angle: ajustAngle(card.angle) }))
    );

    let cards = getCardsByPlace(cardList.place).filter(
      (c) => c.type == cardList.type
    );
    for (const card of cards) {
      setCard(card.id, "", 0);
    }

    for (const card of localCards.filter((card) => card.select)) {
      setCard(card.id, cardList.place, card.angle);
    }

    handleBack();
  };

  return (
    <div
      className={`card position-fixed start-0 top-0 w-100 h-100 ${
        isVisible ? "fadeIn" : "fadeOut"
      }`}
    >
      <h5 className="card-header">{cardList.title}</h5>
      <div className="card-body h-100 overflow-auto">
        <div className="row">
          {localCards.map((card) => (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3"
              key={card.id}
            >
              <div className="btn-group-vertical w-100" role="group">
                <button
                  type="button"
                  className={`text-capitalize btn ${
                    card.disabled
                      ? "btn-secondary"
                      : card.select
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  disabled={card.disabled}
                  onClick={() => handleSelection(card.id)}
                >
                  {card.name}
                </button>
                <button
                  type="button"
                  className={`btn ${
                    card.disabled ? "btn-secondary" : "btn-outline-primary"
                  }`}
                  onClick={() =>
                    handleShowCard(card.img, card.name, card.angle)
                  }
                >
                  <img
                    className="img-fluid"
                    src={card.img}
                    alt={card.alt}
                    style={{
                      transition: "transform 250ms linear",
                      transform: `rotate(${card.angle}deg)`,
                    }}
                  />
                </button>
                {cardList.rotate && (
                  <button
                    className={`btn ${
                      card.disabled ? "btn-secondary" : "btn-outline-primary"
                    }`}
                    disabled={card.disabled}
                    onClick={() => handleRotate(card.id)}
                  >
                    Rotate
                  </button>
                )}
              </div>
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
        {!cardList.single && (
          <>
            {/* <button
              type="button"
              className="btn btn-outline-primary ms-2"
              onClick={() => handleSelection(allNone.toUpperCase())}
            >
              {allNone}
            </button> */}
            <button
              type="button"
              className="btn btn-outline-primary ms-2"
              onClick={() => handleSelection("INVERT")}
            >
              Invert
            </button>
          </>
        )}
        <button
          type="button"
          className="btn btn-primary ms-2"
          onClick={() => handleConfirm()}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
