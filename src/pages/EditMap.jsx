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

  const { getCardByPlace } = useGameContext();
  const { page, changePage, changePageBack, setCardList } = useUiContext();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(page == "EditMap");
  }, [page]);

  const handleBack = () => {
    changePageBack();
  };

  const handleCellClick = (l, c) => {
    setCardList((prev) => ({
      ...prev,
      title: "Maps",
      place: l + "x" + c,
      single: true,
      type: "map",
      rotate: true,
    }));
    changePage("CardList");
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
                    onClick={() => handleCellClick(l, c)}
                  >
                    {getMapImage(l, c)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
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
