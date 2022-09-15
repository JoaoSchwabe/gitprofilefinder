import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </div>
    );
}

export default App;
