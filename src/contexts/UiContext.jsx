import { createContext, useState, useContext, useEffect } from "react";

const UiContext = createContext();

const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const useUiContext = () => {
  return useContext(UiContext);
};

export const UiProvider = ({ children }) => {
  const [pageList, setPageList] = useState([""]);
  const [page, setPage] = useState("");
  const [globalTheme, setGlobalTheme] = useState("");
  const [cardList, setCardList] = useState({
    title: "",
    place: "",
    single: true,
    type: "",
    rotate: true,
  });
  const [showCard, setShowCard] = useState({
    name: "",
    image: "",
    angle: 0,
  });

  useEffect(() => {
    let lastTheme = getCookie("data-bs-theme");
    if (lastTheme != globalTheme) {
      toggleTheme();
    }
  }, []);

  useEffect(() => {
    setPage(pageList.slice(-1));
  }, [pageList]);

  const toggleTheme = () => {
    const newTheme = globalTheme == "" ? "dark" : "";
    document.querySelector("html").setAttribute("data-bs-theme", newTheme);
    setGlobalTheme(newTheme);
    setCookie("data-bs-theme", newTheme, 30);
  };

  const changePage = (newPage) => {
    setPageList((prev) => [...prev, newPage]);
  };

  const changePageBack = () => {
    setPageList((prev) => prev.slice(0, -1));
  };

  return (
    <UiContext.Provider
      value={{
        page,
        changePage,
        changePageBack,
        globalTheme,
        toggleTheme,
        cardList,
        setCardList,
        showCard,
        setShowCard,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
