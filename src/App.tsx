import { useActions } from "./hooks/actions";
import { useTypedSelector } from "./hooks/selector";

import "./App.scss";
import { Header } from "./components/Header/Header";
import ImagesList from "./components/imagesList/ImagesList";

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
