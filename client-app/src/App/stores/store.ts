import { createContext, useContext } from "react";
import ActivitiyStore from "./activityStore";

interface Store {
    activityStore: ActivitiyStore;
}

export const store: Store ={
    activityStore: new ActivitiyStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}