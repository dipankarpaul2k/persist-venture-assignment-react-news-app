import { useRef, useState } from "react";
import { category } from "../utils/constants";

export default function CategoryList({
  selectedCategory,
  setSelectedCategory,
}) {
  // Reference to the container element
  const containerRef = useRef(null);
  // State to track if the user is dragging the container
  const [isDragging, setIsDragging] = useState(false);
  // State to track the initial X position when dragging starts
  const [startX, setStartX] = useState(0);
  // State to track the initial scroll position when dragging starts
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handler for mouse down event
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  // Handler for mouse up event
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handler for mouse move event
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handler for mouse leave event
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="categorylist flex gap-2 overflow-x-auto"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      {category.map((category) => (
        <button
          key={category}
          className={`px-2 py-1.5 rounded ${
            selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-[#edf5fe]"
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
