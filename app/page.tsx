"use client";

import { useGame } from "@/hooks/useGame";
import { Field } from "@/components/Field";

export default function Home() {
  const { userCells, enemyCells, setCell, clearCell } = useGame();

  return (
    <div className="flex items-center justify-center gap-20 min-h-screen bg-slate-200">
      <Field setCell={setCell} cells={userCells} clearCell={clearCell} />
      <Field setCell={setCell} enemy cells={enemyCells} clearCell={clearCell} />
    </div>
  );
}
