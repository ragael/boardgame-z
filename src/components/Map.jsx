import { useEffect, useState } from "react";
import { useGameContext } from "../contexts/GameContext";
import { useUiContext } from "../contexts/UiContext";

export const Map = () => {
  const { page } = useUiContext();
  const { getCardsByType } = useGameContext();

  const [map, setMap] = useState([]);

  useEffect(() => {
    console.log("useEffect[page]", page);
    if (page == "Main") {
      // setMap(getCardsByType("map").filter((m) => m.place != ""));
      setMap(getCardsByType("map"));
    }
  }, [page]);

  useEffect(() => {
    console.log(map);
  }, [map]);

  const getMapImage = (l, c) => {
    let card = map.find((m) => m.place == l + "x" + c);
    if (card) {
      return (
        <img
          src={card.img}
          alt={card.name}
          style={{
            transform: `rotate(${card.angle}deg)`,
          }}
        />
      );
    }
  };

  return (
    <table className="position-absolute start-0 top-0 m-3">
      <tbody>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((tr) => (
          <tr key={tr}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((td) => (
              <td key={td}>{getMapImage(tr, td)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
