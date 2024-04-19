import { Bell, Calendar, Clock4 } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import notifications from "../helpers/notifications";
import { ScrollArea } from "../ui/scroll-area";

export default function UserHeader() {
  const renderNotifications = notifications.map((item, index) => {
    return (
      <div
        key={`Notification${index}${Math.random()}`}
        className="p-5 w-11/12 border-2 border-muted-foreground shadow-md rounded-lg my-5 mx-auto hover:scale-105 cursor-pointer transition-all duration-300"
      >
        <p>{item}</p>
      </div>
    );
  });

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
          <Sheet>
            <SheetTrigger>
              <Bell className="cursor-pointer hover:scale-125 hover:text-muted-foreground transition-all duration-300" />
            </SheetTrigger>
            <SheetContent className="px-5">
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
              </SheetHeader>
              <SheetDescription>
                <ScrollArea className="h-dvh flex flex-col items-center">
                  {renderNotifications}
                </ScrollArea>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
