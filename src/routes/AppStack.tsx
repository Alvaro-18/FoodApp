import {AppContextProvider} from "../store/AppContext";
import {RootStack} from "./RootStack";

export function AppStack() {
  return (
      <AppContextProvider>
        <RootStack />
      </AppContextProvider>
  );
}
