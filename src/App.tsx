import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components";
import { Reservas, Turnos } from "./pages";
import { PublicRoutes } from "./models";
import { useState } from "react";
import { ContextReserva } from "./context";

function App() {
    const [timeSelected, setTimeSelected] = useState<string>("");
    const [serviceSelected, setServiceSelected] = useState<any>(null);
    const [dateSelected, setDateSelected] = useState<string>("");
    const [shifts, setShifts] = useState<any[]>([]);

    return (
        <div className="app">
            <ContextReserva.Provider
                value={{
                    timeSelected,
                    setTimeSelected,
                    serviceSelected,
                    setServiceSelected,
                    dateSelected,
                    setDateSelected,
                    shifts,
                    setShifts,
                }}
            >
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to={PublicRoutes.RESERVAS} />} />
                        <Route path={PublicRoutes.RESERVAS} element={<Reservas />} />
                        <Route path={PublicRoutes.TURNOS} element={<Turnos />} />
                    </Routes>
                    <Navigation />
                </BrowserRouter>
            </ContextReserva.Provider>
        </div>
    );
}

export default App;
