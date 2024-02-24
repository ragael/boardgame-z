import { useEffect, useState } from "react";
import { useGameContext } from "./contexts/GameContext";
import { useUiContext } from "./contexts/UiContext";

function App() {
  // cardPlace
  // singleCard
  // cardType

  const { getCardsByType, setCard } = useGameContext();
  const { cardType, setCardType, setPageIndex, cardPlace } = useUiContext();
  const [localCards, setLocalCards] = useState([]);
  const [modalSrc, setModalSrc] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [modalAngle, setModalAngle] = useState(0);
  const [modalZoom, setModalZoom] = useState(false);
  const [singleCard, setSingleCard] = useState(false);

  useEffect(() => {
    setLocalCards(
      getCardsByType("map").map((card) => ({
        ...card,
        // select: selectIds.includes(card.id),
        select:
          card.place == cardPlace &&
          ((cardPlace != "" && singleCard) || !singleCard),
      }))
    );
  }, []);

  const handleRotate = (id) => {
    setLocalCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, angle: card.angle + 90 } : card
      )
    );
  };

  const handleSelection = (id) => {
    if (singleCard) {
      setLocalCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id
            ? { ...card, select: !card.select }
            : { ...card, select: singleCard }
        )
      );
    } else {
      setLocalCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, select: !card.select } : { ...card }
        )
      );
    }
  };

  const handleShowCard = (src, alt, angle) => {
    setModalAlt(alt);
    setModalSrc(src);
    setModalAngle(angle);
    setModalZoom(false);
  };

  const handleZoom = () => {
    setModalZoom((prev) => !prev);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalCardList"
      >
        Button
      </button>

      <div className="modal" tabIndex="-1" id="modalCardList">
        <div className="modal-dialog modal-fullscreen-md-down modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Maps</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                {localCards.map((card) => (
                  <div className="col-6 col-sm-4 col-lg-2 mb-3" key={card.id}>
                    <button
                      className={`w-100 btn ${
                        card.select ? "btn-primary" : "btn-outline-primary"
                      }`}
                      onClick={() => handleSelection(card.id)}
                    >
                      {card.name}
                    </button>
                    <button
                      type="button"
                      className="w-100 btn btn-light"
                      data-bs-toggle="modal"
                      data-bs-target="#modalZoom"
                    >
                      <img
                        className="img-fluid"
                        src={card.img}
                        alt={card.alt}
                        style={{
                          transition: "transform 250ms linear",
                          transform: `rotate(${card.angle}deg)`,
                        }}
                        onClick={() =>
                          handleShowCard(card.img, card.name, card.angle)
                        }
                      />
                    </button>
                    <button
                      className="w-100 btn btn-outline-secondary"
                      onClick={() => handleRotate(card.id)}
                    >
                      Rotate
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" tabIndex="-1" id="modalZoom">
        <div className="modal-dialog modal-dialog-centered modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{modalAlt}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-toggle="modal"
                data-bs-target="#modalCardList"
              ></button>
            </div>
            <div className="modal-body overflow-auto text-center">
              <img
                src={modalSrc}
                alt={modalAlt}
                style={{
                  transform: `rotate(${modalAngle}deg)`,
                  cursor: "pointer",
                  maxHeight: modalZoom ? "" : "73vh",
                  maxWidth: modalZoom ? "" : "100%",
                }}
                onClick={() => handleZoom()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
