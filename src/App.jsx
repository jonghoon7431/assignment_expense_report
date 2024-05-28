import { Provider } from "react-redux";
import GlobalStyle from "./components/GlobalStyle";
import store from "./redux/config/configStore";
import Router from "./shared/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
