"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
  className?: string;
}

export function ImageComparison({
  beforeImage,
  afterImage,
  altBefore = "Before",
  altAfter = "After",
  className,
}: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = React.useCallback(
    (clientX: number) => {
      if (!isDragging || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      let newPosition = ((clientX - rect.left) / rect.width) * 100;
      newPosition = Math.max(0, Math.min(100, newPosition));

      setSliderPosition(newPosition);
    },
    [isDragging]
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = React.useCallback(() => setIsDragging(false), []);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) =>
    handleMove(e.clientX);

  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    handleMove(e.touches[0].clientX);

  React.useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseUp]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[4/3] w-full max-w-4xl mx-auto select-none touch-none overflow-hidden rounded-xl shadow-2xl sm:aspect-video",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Before image (top layer, clipped to the left side by the slider) */}
      <div
        className="absolute inset-0 z-10 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={altBefore}
          fill
          draggable={false}
          className="object-cover object-left"
          sizes="(max-width: 896px) 100vw, 896px"
        />
      </div>

      {/* After image (base layer, visible on the right side) */}
      <Image
        src={afterImage}
        alt={altAfter}
        fill
        draggable={false}
        className="object-cover object-left"
        sizes="(max-width: 896px) 100vw, 896px"
      />

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-20 flex w-1.5 cursor-ew-resize items-center justify-center bg-white/80"
        style={{ left: `calc(${sliderPosition}% - 0.375rem)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-all duration-200 ease-in-out",
            isDragging && "scale-110 shadow-xl"
          )}
        >
          <ChevronLeft className="-mr-2 h-4 w-4 text-gray-700" aria-hidden="true" />
          <ChevronRight className="-ml-2 h-4 w-4 text-gray-700" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
