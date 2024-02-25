import { useEffect, useRef, useState } from "react";
import { useGameContext } from "../contexts/GameContext";

export const CardList = ({
  title = "",
  place = "",
  single = true,
  type = "",
  open = false,
  onCancel,
  onConfirm,
}) => {
  const { getCardsByType } = useGameContext();
  const [localCards, setLocalCards] = useState([]);
  const [modalSrc, setModalSrc] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [modalAngle, setModalAngle] = useState(0);
  const [modalZoom, setModalZoom] = useState(false);
  const [modal, setModal] = useState(null);
  const [reOpen, setReOpen] = useState(false);
  const modalRef = useRef(null);
  const [allNone, setAllNone] = useState("");

  useEffect(() => {
    setModal(new bootstrap.Modal(modalRef.current));
  }, []);

  useEffect(() => {
    setAllNone("All");
    setLocalCards(
      getCardsByType(type).map((card) => ({
        ...card,
        select: card.place == place && place != "",
        disabled: card.place != place && card.place != "",
      }))
    );
  }, [type]);

  useEffect(() => {
    if (modal) {
      if (open) {
        modal.show();
      } else {
        modal.hide();
      }
    }
  }, [open, reOpen]);

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
        prevCards.map((card) => ({ ...card, select: !card.select }))
      );
    } else if (!single) {
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

  const handleCloseShowCard = () => {
    setReOpen((prev) => !prev);
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
    onConfirm(localCards.filter((card) => card.select));
  };

  return (
    <>
      <div
        className="modal fade"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        ref={modalRef}
      >
        <div className="modal-dialog modal-fullscreen-md-down modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => onCancel()}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                {localCards.map((card) => (
                  <div className="col-6 col-sm-4 col-lg-2 mb-3" key={card.id}>
                    <div className="btn-group-vertical w-100" role="group">
                      <button
                        type="button"
                        className={`btn ${
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
                          card.disabled
                            ? "btn-secondary"
                            : "btn-outline-primary"
                        }`}
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
                        className={`btn ${
                          card.disabled
                            ? "btn-secondary"
                            : "btn-outline-primary"
                        }`}
                        disabled={card.disabled}
                        onClick={() => handleRotate(card.id)}
                      >
                        Rotate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => onCancel()}
              >
                Cancel
              </button>
              {!single && (
                <>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => handleSelection(allNone.toUpperCase())}
                  >
                    {allNone}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => handleSelection("INVERT")}
                  >
                    Invert
                  </button>
                </>
              )}
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleConfirm()}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        id="modalZoom"
      >
        <div className="modal-dialog modal-dialog-centered modal-fullscreen-md-down modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{modalAlt}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => handleCloseShowCard()}
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
};
