import React from "react";
import UserHeader from "../contentwrapper/UserHeader";
import UserSavedLibraries from "../contentwrapper/UserSavedLibraries";
import NewsWrapper from "../contentwrapper/NewsWrapper";

export default function ContentWrapper() {
  return (
    <div className="h-dvh w-full">
      <UserHeader />
      <UserSavedLibraries />
      <NewsWrapper />
    </div>
  );
}
