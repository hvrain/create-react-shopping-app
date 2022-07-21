import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useActions() {
  const { addToOrder, removeToOrder, removeAllOrders } = useContext(AppStateContext);
  
  return {addToOrder, removeToOrder, removeAllOrders};
}