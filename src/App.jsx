import { useUiContext } from "./contexts/UiContext";
import { CardList } from "./pages/CardList";
import { Config } from "./pages/Config";
import { EditMap } from "./pages/EditMap";
import { Main } from "./pages/Main";

function App() {
  const { page, setPage } = useUiContext();

  return (
    <>
      <Main />
      <Config />
      <EditMap />
      <CardList />
    </>
  );
}

export default App;
