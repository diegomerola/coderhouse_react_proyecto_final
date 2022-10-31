import React from "react";
import Item from "../Item/Item";
import data from "../../utilities/db.js";

const ItemList = () => {
  return (
    <section>
      <div className="container py-4">
        <div className="row">
          <div className="container pb-5">
            <div className="row justify-content-center">
              {data.map((element) => (
                <Item
                  key={element.id}
                  category={element.category}
                  brand={element.brand}
                  title={element.title}
                  price={element.price}
                  pictureUrl={element.pictureUrl}
                  stock={element.stock}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemList;
