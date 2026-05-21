import { Cell } from "./Cell";

export function Field({ cells, enemy = false, setCell, clearCell }) {
  const letters = ["", "А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "К", "И"];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex gap-1.5">
        {letters.map((letter, i) => (
          <div
            key={i}
            className="h-10.5 aspect-square flex items-center justify-center"
          >
            {letter}
          </div>
        ))}
      </div>
      <div className="flex gap-1.5">
        <div className="flex flex-col gap-1.5">
          {numbers.map((number) => (
            <div
              key={number}
              className="h-10.5 aspect-square flex items-center justify-center"
            >
              {number}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-10 gap-1.5">
          {cells.map((cell, i) => (
            <Cell
              index={i}
              enemy={enemy}
              key={i}
              cell={cell}
              setCell={setCell}
              clearCell={clearCell}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
