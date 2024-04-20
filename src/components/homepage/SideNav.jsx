import {
  Building,
  CalendarPlus,
  CircleDollarSign,
  CircleHelp,
  Headphones,
  Monitor,
  Search,
  Settings,
} from "lucide-react";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function SideNav() {
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
    <div className="w-[70px] h-dvh bg-background shadow-md hidden sm:flex flex-col justify-between pb-5">
      <div>
        <img src={logo} className="size-full" />
      </div>
      <div className="space-y-7 -translate-y-16">
        <Search
          className="mx-auto hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
          id="Search"
          onClick={handleClick}
        />
        <Monitor
          className="mx-auto hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
          id="Monitor"
          onClick={handleClick}
        />
        <CircleHelp
          className="mx-auto hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
          id="CircleHelp"
          onClick={handleClick}
        />
        <CalendarPlus
          className="mx-auto hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
          id="CalendarPlus"
          onClick={handleClick}
        />
        <Building
          className="mx-auto hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
          id="Building"
          onClick={handleClick}
        />
        <CircleDollarSign
          className="mx-auto hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
          id="CircleDollarSign"
          onClick={handleClick}
        />
        <Headphones
          className="mx-auto hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground"
          id="Headphones"
          onClick={handleClick}
        />
      </div>
      <div className="text-center">
        <Dialog>
          <DialogTrigger>
            <Settings className="hover:scale-105 hover:text-primary cursor-pointer transition-all duration-300  text-muted-foreground" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Settings</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
