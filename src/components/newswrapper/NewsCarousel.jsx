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
      return (
        <Dot
          className="text-muted-foreground size-8"
          key={`Dot${index}${Math.random()}`}
        />
      );
    return <Dot className="size-12" key={`Dot${index}${Math.random()}`} />;
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

  const handleMore = (event) => {
    event.preventDefault();
    alert(`F`);
  };

  return (
    <div className="w-full bg-white shadow-md pb-3 rounded-lg">
      <div className="flex gap-3">
        <button
          className="flex justify-center items-center cursor-pointer hover:bg-slate-200/50 rounded-tl-md"
          onClick={handlePrev}
        >
          <ChevronLeft />
        </button>
        <Cards offset={4 * (curPage - 1)} />
        <button
          className="flex justify-center items-center cursor-pointer hover:bg-slate-200/50 rounded-tr-md"
          onClick={handleNext}
        >
          <ChevronRight />
        </button>
      </div>
      <div className="flex justify-center items-center space-x-1">
        {renderDots}
      </div>
      <div className="flex justify-center items-center ">
        <Button onClick={handleMore}>
          <p className="text-xs">View More</p>
        </Button>
      </div>
    </div>
  );
}
