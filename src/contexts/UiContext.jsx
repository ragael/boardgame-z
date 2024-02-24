import { createContext, useState, useContext } from "react";

const UiContext = createContext();

export const useUiContext = () => {
  return useContext(UiContext);
};

export const UiProvider = ({ children }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [cardType, setCardType] = useState("");
  const [selectIds, setSelectIds] = useState([]);
  const [cardPlace, setCardPlace] = useState("");

  return (
    <UiContext.Provider
      value={{
        pageIndex,
        setPageIndex,
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
