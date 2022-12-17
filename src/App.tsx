import { Header } from "./components/Header/Header";
import ImagesList from "./components/ImagesList/ImagesList";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="app__inner">
        <Header />
        <ImagesList />
      </div>
    </div>
  );
}

export default App;
