import { useState } from "react";
import { CardList } from "./components/CardList";

function App() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");

  const handleOpenModal = () => {
    setType("map");
    setOpen(true);
  };

  const handleCancelModal = () => {
    setOpen(false);
    setTimeout(() => {
      setType("");
    }, 500);
  };
  const handleConfirmModal = (selects) => {
    handleCancelModal();
    console.log(selects);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleOpenModal()}
      >
        Button
      </button>
      <CardList
        title="Maps"
        open={open}
        place={""}
        single={true}
        type={type}
        onCancel={() => handleCancelModal()}
        onConfirm={handleConfirmModal}
      />
    </>
  );
}

export default App;
