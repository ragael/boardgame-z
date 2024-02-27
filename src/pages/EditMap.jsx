import { useEffect, useState } from "react";
import "./Styles.css";
import { useUiContext } from "../contexts/UiContext";
import { useGameContext } from "../contexts/GameContext";
import { createUseStyles } from "react-jss";

const size = 70;
const useStyles = createUseStyles({
  cell: {
    width: size + "px",
    height: size + "px",
    minWidth: size + "px",
    minHeight: size + "px",
    maxWidth: size + "px",
    maxHeight: size + "px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#0d6efd",
      "& img": {
        opacity: "0.5",
      },
    },
  },
});

export const EditMap = () => {
  const classes = useStyles();

  const { getCardByPlace, getCardsByPlace, setCard } = useGameContext();
  const { page, setPage } = useUiContext();

  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [place, setPlace] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(page == "EditMap");
  }, [page]);

  const handleBack = () => {
    setPage("Config");
  };

  const handleOpenModal = (l, c) => {
    setPlace(l + "x" + c);
    setType("map");
    setOpen(true);
  };

  const handleCancelModal = () => {
    setOpen(false);
    setTimeout(() => {
      setType("");
    }, 500);
  };

  const handleConfirmModal = async (selects) => {
    let cards = getCardsByPlace(place);
    for (const card of cards) {
      setCard(card.id, "", 0);
    }
    for (const card of selects) {
      setCard(card.id, place, card.angle);
    }
    handleCancelModal();
  };

  const getMapImage = (l, c) => {
    let card = getCardByPlace(l + "x" + c);
    if (card) {
      return (
        <img
          src={card.img}
          alt={card.name}
          className="w-100"
          style={{
            transform: `rotate(${card.angle}deg)`,
          }}
        />
      );
    }
  };

  return (
    <div
      className={`card position-fixed start-0 top-0 w-100 h-100 ${
        isVisible ? "fadeIn" : "fadeOut"
      }`}
    >
      <h5 className="card-header">Edit Map</h5>
      <div className="card-body h-100 overflow-auto">
        <table className="mx-auto">
          <tbody>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((l) => (
              <tr key={l}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((c) => (
                  <td
                    key={c}
                    className={"p-0 border " + classes.cell}
                    onClick={() => handleOpenModal(l, c)}
                  >
                    {getMapImage(l, c)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer text-body-secondary">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleBack()}
        >
          Back
        </button>
      </div>
      {/* <CardList
        title="Maps"
        open={open}
        place={place}
        single={true}
        type={type}
        onCancel={() => handleCancelModal()}
        onConfirm={handleConfirmModal}
      /> */}
    </div>
  );
};
