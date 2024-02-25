import { useGameContext } from "./contexts/GameContext";
import { useUiContext } from "./contexts/UiContext";
import { EditMap } from "./pages/EditMap";

function App() {
  const { page, setPage } = useUiContext();
  const { newMap } = useGameContext();

  const handleEditMap = () => {
    newMap();
    setPage("EditMap");
  };

  return (
    <>
      {page == "EditMap" ? (
        <EditMap />
      ) : (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleEditMap()}
        >
          Edit Map
        </button>
      )}
    </>
  );
}

export default App;
