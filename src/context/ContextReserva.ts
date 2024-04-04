import React from "react";
import { createContext } from "react";

interface Context{
    timeSelected: string,
    setTimeSelected: React.Dispatch<React.SetStateAction<string>>,
    serviceSelected: any;
    setServiceSelected: React.Dispatch<React.SetStateAction<any>>,
    dateSelected: any;
    setDateSelected: React.Dispatch<React.SetStateAction<any>>
    shifts: any;
    setShifts: React.Dispatch<React.SetStateAction<any>>
}

export const ContextReserva = createContext<Context>({
    timeSelected: "",
    setTimeSelected: () => {},
    serviceSelected: null,
    setServiceSelected: () => {},
    dateSelected: null,
    setDateSelected: () => {},
    shifts: [],
    setShifts: () => {}
  });