import { createContext, useState, useContext, useEffect } from "react";

const GameContext = createContext();

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
  const [cards, setCards] = useState([
    { type: "map", id: 0, name: "1B", img: "maps/1B.png", place: "", angle: 0 },
    { type: "map", id: 0, name: "1C", img: "maps/1C.png", place: "", angle: 0 },
    { type: "map", id: 0, name: "2B", img: "maps/2B.png", place: "", angle: 0 },
    { type: "map", id: 0, name: "2C", img: "maps/2C.png", place: "", angle: 0 },
    { type: "map", id: 0, name: "3B", img: "maps/3B.png", place: "", angle: 0 },
    { type: "map", id: 0, name: "3C", img: "maps/3C.png", place: "", angle: 0 },
    { type: "map", id: 0, name: "4B", img: "maps/4B.png", place: "", angle: 0 },
    { type: "map", id: 0, name: "4C", img: "maps/4C.png", place: "", angle: 0 },
    { type: "map", id: 0, name: "4D", img: "maps/4D.png", place: "", angle: 0 },
    { type: "map", id: 0, name: "4E", img: "maps/4E.png", place: "", angle: 0 },
    { type: "map", id: 0, name: "5B", img: "maps/5B.png", place: "", angle: 0 },
    { type: "map", id: 0, name: "5C", img: "maps/5C.png", place: "", angle: 0 },
    { type: "map", id: 0, name: "5D", img: "maps/5D.png", place: "", angle: 0 },
    { type: "map", id: 0, name: "5E", img: "maps/5E.png", place: "", angle: 0 },
    { type: "map", id: 0, name: "5F", img: "maps/5F.png", place: "", angle: 0 },
    { type: "map", id: 0, name: "6B", img: "maps/6B.png", place: "", angle: 0 },
    { type: "map", id: 0, name: "6C", img: "maps/6C.png", place: "", angle: 0 },
    { type: "map", id: 0, name: "7B", img: "maps/7B.png", place: "", angle: 0 },
    //PLAYER CARDS
    {
      type: "playerCard",
      id: 0,
      name: "Amy",
      img: "players-card/sic-amy.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "playerCard",
      id: 0,
      name: "Doug",
      img: "players-card/sic-doug.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "playerCard",
      id: 0,
      name: "Josh",
      img: "players-card/sic-josh.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "playerCard",
      id: 0,
      name: "Ned",
      img: "players-card/sic-ned.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "playerCard",
      id: 0,
      name: "Phil",
      img: "players-card/sic-phil.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "playerCard",
      id: 0,
      name: "Wanda",
      img: "players-card/sic-wanda.jpg",
      place: "",
      angle: 0,
    },
    // EQUIPAMENTS
    {
      type: "equipament",
      id: 0,
      name: "aaahh",
      img: "equipaments/aaahh.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "aaahh",
      img: "equipaments/aaahh.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "aaahh",
      img: "equipaments/aaahh.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "aaahh",
      img: "equipaments/aaahh.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "bag-of-rice",
      img: "equipaments/bag-of-rice.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "bag-of-rice",
      img: "equipaments/bag-of-rice.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "bag-of-rice",
      img: "equipaments/bag-of-rice.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "baseball-bat",
      img: "equipaments/baseball-bat.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "baseball-bat",
      img: "equipaments/baseball-bat.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "canned-food",
      img: "equipaments/canned-food.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "canned-food",
      img: "equipaments/canned-food.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "canned-food",
      img: "equipaments/canned-food.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "chainsaw",
      img: "equipaments/chainsaw.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "chainsaw",
      img: "equipaments/chainsaw.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "crowbar",
      img: "equipaments/crowbar.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "crowbar",
      img: "equipaments/crowbar.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "evil-twins",
      img: "equipaments/evil-twins.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "fire-axe",
      img: "equipaments/fire-axe.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "fire-axe",
      img: "equipaments/fire-axe.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "flash-light",
      img: "equipaments/flash-light.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "flash-light",
      img: "equipaments/flash-light.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "gasoline",
      img: "equipaments/gasoline.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "gasoline",
      img: "equipaments/gasoline.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "glass-bottle",
      img: "equipaments/glass-bottle.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "glass-bottle",
      img: "equipaments/glass-bottle.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "goalie-mask",
      img: "equipaments/goalie-mask.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "katana",
      img: "equipaments/katana.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "katana",
      img: "equipaments/katana.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "machete",
      img: "equipaments/machete.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "machete",
      img: "equipaments/machete.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "machete",
      img: "equipaments/machete.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "machete",
      img: "equipaments/machete.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "ma's-shotgun",
      img: "equipaments/ma's-shotgun.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "molotov",
      img: "equipaments/molotov.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "molotov",
      img: "equipaments/molotov.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "pan",
      img: "equipaments/pan.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "pan",
      img: "equipaments/pan.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "pan",
      img: "equipaments/pan.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "pistol",
      img: "equipaments/pistol.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "pistol",
      img: "equipaments/pistol.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "pistol",
      img: "equipaments/pistol.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "plenty-of-ammo",
      img: "equipaments/plenty-of-ammo.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "plenty-of-ammo",
      img: "equipaments/plenty-of-ammo.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "plenty-of-ammo",
      img: "equipaments/plenty-of-ammo.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "plenty-of-ammo-shotgun",
      img: "equipaments/plenty-of-ammo-shotgun.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "plenty-of-ammo-shotgun",
      img: "equipaments/plenty-of-ammo-shotgun.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "plenty-of-ammo-shotgun",
      img: "equipaments/plenty-of-ammo-shotgun.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "rifle",
      img: "equipaments/rifle.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "rifle",
      img: "equipaments/rifle.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "sawed-off",
      img: "equipaments/sawed-off.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "sawed-off",
      img: "equipaments/sawed-off.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "sawed-off",
      img: "equipaments/sawed-off.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "sawed-off",
      img: "equipaments/sawed-off.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "scope",
      img: "equipaments/scope.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "scope",
      img: "equipaments/scope.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "shotgun",
      img: "equipaments/shotgun.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "shotgun",
      img: "equipaments/shotgun.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "sub-mg",
      img: "equipaments/sub-mg.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "sub-mg",
      img: "equipaments/sub-mg.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "water",
      img: "equipaments/water.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "water",
      img: "equipaments/water.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "equipament",
      id: 0,
      name: "water",
      img: "equipaments/water.jpg",
      place: "",
      angle: 0,
    },
    // SPAWN
    {
      type: "spawn",
      id: 0,
      name: "1",
      img: "spawn/1.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "2",
      img: "spawn/2.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "3",
      img: "spawn/3.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "4",
      img: "spawn/4.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "5",
      img: "spawn/5.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "6",
      img: "spawn/6.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "7",
      img: "spawn/7.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "8",
      img: "spawn/8.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "9",
      img: "spawn/9.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "10",
      img: "spawn/10.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "11",
      img: "spawn/11.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "12",
      img: "spawn/12.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "13",
      img: "spawn/13.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "14",
      img: "spawn/14.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "15",
      img: "spawn/15.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "16",
      img: "spawn/16.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "17",
      img: "spawn/17.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "18",
      img: "spawn/18.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "19",
      img: "spawn/19.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "20",
      img: "spawn/20.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "21",
      img: "spawn/21.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "22",
      img: "spawn/22.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "23",
      img: "spawn/23.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "24",
      img: "spawn/24.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "25",
      img: "spawn/25.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "26",
      img: "spawn/26.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "27",
      img: "spawn/27.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "28",
      img: "spawn/28.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "29",
      img: "spawn/29.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "30",
      img: "spawn/30.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "31",
      img: "spawn/31.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "32",
      img: "spawn/32.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "33",
      img: "spawn/33.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "34",
      img: "spawn/34.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "35",
      img: "spawn/35.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "36",
      img: "spawn/36.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "37",
      img: "spawn/37.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "38",
      img: "spawn/38.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "39",
      img: "spawn/39.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "40",
      img: "spawn/40.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "41",
      img: "spawn/41.jpg",
      place: "",
      angle: 0,
    },
    {
      type: "spawn",
      id: 0,
      name: "42",
      img: "spawn/42.jpg",
      place: "",
      angle: 0,
    },
  ]);

  useEffect(() => {
    setCards(cards.map((card, i) => ({ ...card, id: i + 1 })));
  }, []);

  // useEffect(() => {
  //   console.log(cards);
  // }, [cards]);

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
