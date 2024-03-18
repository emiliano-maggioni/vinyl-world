import "Normalize.css";
import 'App.css';
import AppContainer from "components/appContainer/AppContainer";
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from "context/AppContext";

function App() {
  return (
    <AppContextProvider>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
     </AppContextProvider>
  );
}

export default App;
