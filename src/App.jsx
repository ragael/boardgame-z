import { CardList } from "./pages/CardList";
import { Config } from "./pages/Config";
import { EditEquipaments } from "./pages/EditEquipaments";
import { EditMap } from "./pages/EditMap";
import { EditPlayers } from "./pages/EditPlayers";
import { EditSpawn } from "./pages/EditSpawn";
import { Main } from "./pages/Main";
import { ShowCard } from "./pages/ShowCard";
import { SplashScreen } from "./pages/SplashScreen";

function App() {
  return (
    <>
      <SplashScreen />
      <Main />
      <Config />
      <EditMap />
      <CardList />
      {/* <ShowCard /> */}
      <EditPlayers />
      <EditEquipaments />
      <EditSpawn />
    </>
  );
}

export default App;
