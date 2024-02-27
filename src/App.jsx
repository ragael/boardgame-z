import { useUiContext } from "./contexts/UiContext";
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
    </>
  );
}

export default App;
