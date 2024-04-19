import React from "react";
import NewsCarousel from "../newswrapper/NewsCarousel";

export default function NewsWrapper() {
  return (
    <div className="flex mt-3 px-10">
      <div className="basis-2/3 col-span-3">
        <NewsCarousel />
      </div>
      <div className="basis-1/3 col-span-1"></div>
    </div>
  );
}
