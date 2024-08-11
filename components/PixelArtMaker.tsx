"use client";

import { useState } from "react";

const DEFAULT_GRID_SIZE = 16;
const DEFAULT_GRID_COLOR = "#fff";
const DEFAULT_SELECTED_COLOR = "#000";

export default function PixelArtMaker() {
  const [gridSize, setGridSize] = useState<number>(DEFAULT_GRID_SIZE);
  const [grid, setGrid] = useState<string[]>(
    Array(gridSize * gridSize).fill(DEFAULT_GRID_COLOR)
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    DEFAULT_SELECTED_COLOR
  );

  const handleCellClick = (index: number) => {
    const newGrid = [...grid];
    newGrid[index] = selectedColor;
    setGrid(newGrid);
  };

  const handleGridChange = (newGridSize: number) => {
    setGridSize(newGridSize);
    setGrid(Array(newGridSize * newGridSize).fill(DEFAULT_GRID_COLOR));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex gap-3">
        <label>Pick grid size:</label>
        <input
          type="number"
          value={gridSize}
          onChange={(e) => handleGridChange(+e.target.value)}
          className="text-black"
        />
        <label>Pick color:</label>
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        />
      </div>
      <div
        className="grid w-[30rem] h-[30rem]"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        }}
      >
        {grid.map((color, index) => (
          <div
            key={index}
            onClick={() => handleCellClick(index)}
            className="border"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}
