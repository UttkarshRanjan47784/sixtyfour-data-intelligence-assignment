import { Bell, Calendar, Clock4 } from "lucide-react";
import React from "react";
import { ModeToggle } from "../mode-toggler";

export default function UserHeader() {
  return (
    <div className="w-full text-white px-10 py-5 flex items-center justify-between">
      <div>
        <p className="text-lg font-semibold">Good Afternoon, Uttkarsh</p>
        <p className="text-xs text-muted-foreground">
          You are subscribed to Retail Plan
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <Calendar />
        <p>Today, 19 April</p>
        <Clock4 />
        <p>13:32</p>
        <div className="flex ml-16 gap-3 items-center">
          {/* <ModeToggle /> */}
          <Bell className="cursor-pointer hover:scale-110" />
        </div>
      </div>
    </div>
  );
}
