import { useState } from "react";
import { CardList } from "./components/CardList";

function App() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => setOpen(true)}
            >
                Button
            </button>
            <CardList open={open} place="0x0" single={true} type="map" onCancel={() => setOpen(false)} />
        </>
    )
}

export default App;
