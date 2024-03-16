import "Normalize.css";
import 'App.css';
import AppContainer from "components/appContainer/AppContainer";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
  );
}

export default App;
