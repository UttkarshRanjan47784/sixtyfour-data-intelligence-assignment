import React from "react";
import UserHeader from "../contentwrapper/UserHeader";
import UserSavedLibraries from "../contentwrapper/UserSavedLibraries";
import NewsWrapper from "../contentwrapper/NewsWrapper";
import Background from "../contentwrapper/Background";

export default function ContentWrapper() {
  return (
    <div className="h-dvh w-full">
      <div className="flex w-full bg-red-300 relative">
        <Background />
      </div>
      <UserHeader />
      <UserSavedLibraries />
      <NewsWrapper />
    </div>
  );
}
