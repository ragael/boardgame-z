import { createContext, useState, useContext } from "react";

const UiContext = createContext();

export const useUiContext = () => {
  return useContext(UiContext);
};

export const UiProvider = ({ children }) => {
  const [page, setPage] = useState("");
  // const [cardType, setCardType] = useState("");
  // const [selectIds, setSelectIds] = useState([]);
  // const [cardPlace, setCardPlace] = useState("");
  const [globalTheme, setGlobalTheme] = useState("");
  const [cardList, setCardList] = useState({
    title: "",
    place: "",
    single: true,
    type: "",
    onConfirm: null,
  });

  const toggleTheme = () => {
    const newTheme = globalTheme == "" ? "dark" : "";
    document.querySelector("html").setAttribute("data-bs-theme", newTheme);
    setGlobalTheme(newTheme);
  };

  return (
    <UiContext.Provider
      value={{
        page,
        setPage,
        // cardType,
        // setCardType,
        // selectIds,
        // setSelectIds,
        // cardPlace,
        // setCardPlace,
        globalTheme,
        toggleTheme,
        cardList,
        setCardList,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
