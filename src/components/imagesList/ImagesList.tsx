import { Button } from "@mui/material";
import { useActions } from "../../hooks/actions";
import { useTypedSelector } from "../../hooks/selector";

import "./ImagesList.scss";

function ImagesList() {
  const { catsData, page } = useTypedSelector((state) => state.cats);
  const { currentCategory } = useTypedSelector((state) => state.categories);

  const { fetchAdditionalCats } = useActions();

  const handleAdditionalCats = () => {
    if (currentCategory) {
      fetchAdditionalCats(page, 10, currentCategory);
    }
  };

  return (
    <div className="imagesList">
      <div className="imagesList__catsBlock">
        {catsData.map((cat, idx) => {
          return (
            <img
              className="imagesList__image"
              key={idx}
              src={cat.url}
              style={{ height: `${cat.height}`, width: `${cat.width}` }}
            ></img>
          );
        })}
      </div>

      {Object.keys(catsData).length ? (
        <Button onClick={() => handleAdditionalCats()}>Show more</Button>
      ) : null}
    </div>
  );
}

export default ImagesList;
