import React from "react";
import news from "../helpers/news.js";

export default function Cards(props) {
  const renderCards = news.map((item, index) => {
    if (index >= props.offset && index < props.offset + 4)
      return (
        <div className="h-72 w-56 shadow-md">
          <img src={item.imgurl} className="h-1/2 w-full" />
          <div className="px-5">
            <h3 className="text-sm font-semibold mt-2 text-left">
              {item.headline}
            </h3>
            <p className="text-xs text-muted-foreground text-left mt-3">
              {item.body}
            </p>
          </div>
        </div>
      );
    else return null;
  });

  return (
    <div className="w-full text-center flex justify-between">{renderCards}</div>
  );
}
