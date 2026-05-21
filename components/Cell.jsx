"use client";

import {
  Anchor,
  CircleX,
  Cross,
  Crosshair,
  CrossIcon,
  Trash,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useGame } from "@/hooks/useGame";
import { cn } from "@/lib/utils";

export function Cell({ cell, enemy, index, setCell, clearCell }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          className={cn(
            cell.includes("ship")
              ? "bg-blue-400 hover:bg-blue-500"
              : "bg-white hover:bg-slate-100",
            "h-10.5 aspect-square rounded shadow flex justify-center items-center cursor-pointer transition-all",
          )}
        >
          {cell.includes("miss") && (
            <div className="aspect-square h-2 rounded-full bg-black" />
          )}
          {cell.includes("hit") && <X />}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setCell(index, "miss", enemy)}>
          Miss
          <DropdownMenuShortcut>
            <CircleX />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCell(index, "hit", enemy)}>
          Hit
          <DropdownMenuShortcut>
            <Crosshair />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        {!enemy && (
          <DropdownMenuItem onClick={() => setCell(index, "ship", enemy)}>
            Ship
            <DropdownMenuShortcut>
              <Anchor />
            </DropdownMenuShortcut>{" "}
          </DropdownMenuItem>
        )}
        <DropdownMenuItem
          onClick={() => clearCell(index, enemy)}
          variant="destructive"
        >
          Clear
          <DropdownMenuShortcut>
            <Trash className="text-destructive" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
