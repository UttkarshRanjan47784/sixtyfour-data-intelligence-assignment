import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import news from "../helpers/news.js";

export default function Cards(props) {
  const renderCards = news.map((item, index) => {
    if (index >= props.offset && index < props.offset + 4)
      return (
        <div className="h-72 w-52 bg-purple-400">
          <img src={item.imgurl} className="h-1/2 w-full" />
          <h3>{item.headline}</h3>
          <p>{item.body}</p>
        </div>
      );
    else return null;
  });

  return (
    <div className="w-full text-center flex flex-wrap justify-between">
      {renderCards}
    </div>
  );
}
