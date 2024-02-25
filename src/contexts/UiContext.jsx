import { createContext, useState, useContext } from "react";

const UiContext = createContext();

export const useUiContext = () => {
  return useContext(UiContext);
};

export const UiProvider = ({ children }) => {
  const [page, setPage] = useState("");
  const [cardType, setCardType] = useState("");
  const [selectIds, setSelectIds] = useState([]);
  const [cardPlace, setCardPlace] = useState("");

  return (
    <UiContext.Provider
      value={{
        page,
        setPage,
        cardType,
        setCardType,
        selectIds,
        setSelectIds,
        cardPlace,
        setCardPlace,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
