import { CardList } from "./pages/CardList";
import { Config } from "./pages/Config";
import { EditMap } from "./pages/EditMap";
import { EditPlayers } from "./pages/EditPlayers";
import { Main } from "./pages/Main";
import { ShowCard } from "./pages/ShowCard";

function App() {
  return (
    <>
      <Main />
      <Config />
      <EditMap />
      <CardList />
      <ShowCard />
      <EditPlayers />
    </>
  );
}

export default App;
