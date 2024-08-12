import { createContext } from "react";
import { IData } from "./Data";

export const DataContext = createContext<{
  cards: IData[];
  setCard: (cards: IData[]) => void;
}>({
  cards: [],
  setCard: (cards: IData[]) => {},
});
