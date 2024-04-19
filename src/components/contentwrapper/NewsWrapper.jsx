import React from "react";
import NewsCarousel from "../newswrapper/NewsCarousel";
import RecentReleases from "../newswrapper/RecentReleases";

export default function NewsWrapper() {
  return (
    <div className="flex mt-3 px-10 space-x-5">
      <div className="basis-3/4">
        <NewsCarousel />
      </div>
      <RecentReleases />
    </div>
  );
}
