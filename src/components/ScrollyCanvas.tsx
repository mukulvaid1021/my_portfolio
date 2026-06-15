"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 60;
const currentFrame = (index: number) => 
  `/sequence/frame_${index.toString().padStart(2, "0")}_delay-0.066s.png`;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      
      const handleLoad = () => {
        loadedCount++;
        loadedImages[i] = img;
        
        // Progressively update state to start rendering ASAP
        if (loadedCount === 1 || loadedCount % 5 === 0 || loadedCount === FRAME_COUNT) {
          setImages([...loadedImages]);
        }
      };

      img.onload = handleLoad;
      img.onerror = handleLoad; // Fallback so it doesn't hang forever
      
      img.src = currentFrame(i);
    }
  }, []);

  const renderFrame = useCallback((index: number) => {
    if (images.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const img = images[index];
    // If the exact frame isn't loaded yet, try to find the closest previous loaded frame
    let renderImg = img;
    if (!renderImg || !renderImg.complete || renderImg.naturalWidth === 0) {
      for (let i = index - 1; i >= 0; i--) {
        if (images[i] && images[i].complete && images[i].naturalWidth > 0) {
          renderImg = images[i];
          break;
        }
      }
    }
    
    if (!renderImg || !renderImg.complete || renderImg.naturalWidth === 0) return;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = renderImg.width / renderImg.height;

    let renderWidth = canvas.width;
    let renderHeight = canvas.height;

    if (canvasRatio > imgRatio) {
      renderHeight = canvas.width / imgRatio;
    } else {
      renderWidth = canvas.height * imgRatio;
    }

    // Apply a slight zoom to push the edges (and the Gemini watermark) outside the visible canvas
    const zoom = 1.08;
    renderWidth *= zoom;
    renderHeight *= zoom;

    const offsetX = (canvas.width - renderWidth) / 2;
    // We can push the image slightly down if we want to crop the bottom more, 
    // but a centered zoom is usually best to avoid cutting off top content.
    const offsetY = (canvas.height - renderHeight) / 2;

    // Clear and draw the zoomed image
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(renderImg, offsetX, offsetY, renderWidth, renderHeight);
  }, [images]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Use the current scroll position to determine which frame to draw
      const latest = scrollYProgress.get();
      const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(latest * FRAME_COUNT));
      renderFrame(frameIndex);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [renderFrame, scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover"
        />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
