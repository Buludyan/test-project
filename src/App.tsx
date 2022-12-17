import { useActions } from "./hooks/actions";
import { useTypedSelector } from "./hooks/selector";

import { Header } from "./components/Header/Header";
import ImagesList from "./components/ImagesList/ImagesList";

import "./App.scss";

function App() {
  const { catsData } = useTypedSelector((state) => state.cats);
  const { fetchCats } = useActions();

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
