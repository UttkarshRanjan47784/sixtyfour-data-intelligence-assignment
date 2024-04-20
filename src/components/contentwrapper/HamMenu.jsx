import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Building,
  CalendarPlus,
  CircleDollarSign,
  CircleHelp,
  Headphones,
  Menu,
  Monitor,
  Search,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HamMenu() {
  const navigate = useNavigate();
  const handleClick = (event) => {
    switch (event.target.id) {
      case "Search":
        navigate(`/blank`);
        break;
      case "Monitor":
        navigate(`/blank`);
        break;
      case "CircleHelp":
        navigate(`/blank`);
        break;
      case "CalendarPlus":
        navigate(`/blank`);
        break;
      case "Building":
        navigate(`/blank`);
        break;
      case "CircleDollarSign":
        navigate(`/blank`);
        break;
      case "Headphones":
        navigate(`/blank`);
        break;
    }
  };
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="size-6 sm:hidden cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="mt-10">SixtyFour Data Intelligence</SheetTitle>
          <div className="py-16 space-y-5 grid gap-3 text-center">
            <div
              className="flex w-44 mx-auto  justify-between  items-center hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
              id="Search"
              onClick={handleClick}
            >
              <div>Search</div>
              <div>
                <Search />
              </div>
            </div>
            <div
              className="flex w-44 mx-auto  justify-between items-center hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
              id="Search"
              onClick={handleClick}
            >
              <div>View</div>
              <div>
                <Monitor />
              </div>
            </div>
            <div
              className="flex w-44 mx-auto  justify-between  items-center hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
              id="Search"
              onClick={handleClick}
            >
              <div>Help</div>
              <div>
                <CircleHelp />
              </div>
            </div>
            <div
              className="flex w-44 mx-auto  justify-between  items-center hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
              id="Search"
              onClick={handleClick}
            >
              <div>Calendar</div>
              <div>
                <CalendarPlus />
              </div>
            </div>
            <div
              className="flex w-44 mx-auto  justify-between  items-center hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
              id="Search"
              onClick={handleClick}
            >
              <div>Data Centers</div>
              <div>
                <Building />
              </div>
            </div>
            <div
              className="flex w-44 mx-auto  justify-between  items-center hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
              id="Search"
              onClick={handleClick}
            >
              <div>Finance</div>
              <div>
                <CircleDollarSign />
              </div>
            </div>
            <div
              className="flex w-44 mx-auto justify-between items-center hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
              id="Search"
              onClick={handleClick}
            >
              <div>Audio</div>
              <div>
                <Headphones />
              </div>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
