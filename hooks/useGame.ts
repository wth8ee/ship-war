import { useState } from "react";

export function useGame() {

    const [userCells, setUserCells] = useState(Array(100).fill([]))
    const [enemyCells, setEnemyCells] = useState(Array(100).fill([]))

    function setCell(i: number, newCell: string, enemy: boolean) {
        const newCells = enemy ? enemyCells.slice() : userCells.slice()
        const cell = newCells[i]
        if (cell.includes(newCell)) {
            newCells[i] = cell.filter((flag: string) => flag != newCell)
        } else {
            const cell = newCells[i]
            newCells[i] = [...cell, newCell]
        }
        if (!enemy) {
            setUserCells(newCells)
        } else {
            setEnemyCells(newCells)
        }
    }

    function clearCell(i: number, enemy: boolean) {
        if (enemy) {
            const newCells = enemyCells.slice()
            newCells[i] = []
            setEnemyCells(newCells)
        } else {
            const newCells = userCells.slice()
            newCells[i] = []
            setUserCells(newCells)
        }
    }

    return {userCells, enemyCells, setCell, clearCell}
}