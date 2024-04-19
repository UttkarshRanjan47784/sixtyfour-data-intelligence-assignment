import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import React, { useState } from "react";
import Cards from "./Cards";
import { len } from "../helpers/news";
import { Button } from "../ui/button";

export default function NewsCarousel() {
  const [curPage, setCurPage] = useState(1);
  const totalPages = Math.ceil(len / 4);

  const renderDots = [...Array(totalPages)].map((item, index) => {
    if (index != curPage - 1)
      return <Dot className="text-muted-foreground size-8" />;
    return <Dot className="size-12" />;
  });

  const handlePrev = () => {
    setCurPage((prev) => {
      return prev == 1 ? prev : prev - 1;
    });
  };

  const handleNext = () => {
    if (curPage == totalPages) return;
    setCurPage((prev) => {
      return prev == totalPages ? prev : prev + 1;
    });
  };

  return (
    <div className="w-full bg-white shadow-md py-3 rounded-lg">
      <div className="flex">
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={handlePrev}
        >
          <ChevronLeft />
        </div>
        <Cards offset={4 * (curPage - 1)} />
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={handleNext}
        >
          <ChevronRight />
        </div>
      </div>
      <div className="flex justify-center items-center space-x-1">
        {renderDots}
      </div>
      <div className="flex justify-center items-center ">
        <Button>View More</Button>
      </div>
    </div>
  );
}
