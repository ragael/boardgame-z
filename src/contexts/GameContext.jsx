import { createContext, useState, useContext } from "react";

const GameContext = createContext();

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
  const [cards, setCards] = useState([
    {
      type: "map",
      id: 1,
      name: "1B",
      img: "maps/1B.png",
      place: "1x1",
      angle: 180,
    },
    {
      type: "map",
      id: 2,
      name: "1C",
      img: "maps/1C.png",
      place: "",
      angle: 0,
    },
    { type: "map", id: 3, name: "2B", img: "maps/2B.png", place: "", angle: 0 },
    { type: "map", id: 4, name: "2C", img: "maps/2C.png", place: "", angle: 0 },
    { type: "map", id: 5, name: "3B", img: "maps/3B.png", place: "", angle: 0 },
    { type: "map", id: 6, name: "3C", img: "maps/3C.png", place: "", angle: 0 },
    { type: "map", id: 7, name: "4B", img: "maps/4B.png", place: "", angle: 0 },
    { type: "map", id: 8, name: "4C", img: "maps/4C.png", place: "", angle: 0 },
    { type: "map", id: 9, name: "4D", img: "maps/4D.png", place: "", angle: 0 },
    {
      type: "map",
      id: 10,
      name: "4E",
      img: "maps/4E.png",
      place: "",
      angle: 0,
    },
    {
      type: "map",
      id: 11,
      name: "5B",
      img: "maps/5B.png",
      place: "",
      angle: 0,
    },
    {
      type: "map",
      id: 12,
      name: "5C",
      img: "maps/5C.png",
      place: "",
      angle: 0,
    },
    {
      type: "map",
      id: 13,
      name: "5D",
      img: "maps/5D.png",
      place: "",
      angle: 0,
    },
    {
      type: "map",
      id: 14,
      name: "5E",
      img: "maps/5E.png",
      place: "",
      angle: 0,
    },
    {
      type: "map",
      id: 15,
      name: "5F",
      img: "maps/5F.png",
      place: "",
      angle: 0,
    },
    {
      type: "map",
      id: 16,
      name: "6B",
      img: "maps/6B.png",
      place: "",
      angle: 0,
    },
    {
      type: "map",
      id: 17,
      name: "6C",
      img: "maps/6C.png",
      place: "",
      angle: 0,
    },
    {
      type: "map",
      id: 18,
      name: "7B",
      img: "maps/7B.png",
      place: "0x0",
      angle: 0,
    },
  ]);

  const newMap = () =>
    setCards(cards.map((card) => ({ ...card, place: "", angle: 0 })));

  const getCardById = (id) => cards.find((card) => card.id === id) || false;

  const getCardsByType = (type) => cards.filter((card) => card.type === type);

  const getCardByPlace = (place) =>
    cards.find((card) => card.place === place) || false;

  const getCardsByPlace = (place) =>
    cards.filter((card) => card.place === place);

  const setCard = (id, place, angle) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, place: place, angle: angle } : card
      )
    );
  };

  return (
    <GameContext.Provider
      value={{
        cards,
        newMap,
        getCardById,
        getCardByPlace,
        getCardsByType,
        getCardsByPlace,
        setCard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
