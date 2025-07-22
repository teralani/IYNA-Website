"use client"
import React, { useEffect, useRef } from 'react';

const HoverCircle = ({text = "Hover Me", textClass = "", strokeColor = "white"}) => {
  const markerRef = useRef<HTMLParagraphElement>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  // Your provided circlePath function, adapted to take cx, cy, and base_r
  const circlePath = (cx:number, cy:number, base_r:number, dr_min:number, dr_max:number, θ0_min:number, θ0_max:number, dθ_min:number, dθ_max:number) => {
    const c = 0.551915024494; // This constant is for circular bezier segments
    const β = Math.atan(c);
    const d_factor = Math.sqrt(c * c + 1 * 1); // d from original, renamed to avoid conflict with path 'd' attribute

    let r = base_r; // Use the provided base radius
    let θ = ((θ0_min + Math.random() * (θ0_max - θ0_min)) * Math.PI) / 180;
    let path = "M";

    // Start point: translated by cx, cy
    path += `${cx + r * Math.sin(θ)} ${cy + r * Math.cos(θ)}`;

    // First bezier control point: translated by cx, cy
    path += ` C${cx + d_factor * r * Math.sin(θ + β)} ${cy + d_factor * r * Math.cos(θ + β)}`;

    for (let i = 0; i < 4; i++) {
      θ += (Math.PI / 2) * (1 + dθ_min + Math.random() * (dθ_max - dθ_min));
      r *= 1 + dr_min + Math.random() * (dr_max - dr_min);

      // Subsequent control point (S for smooth curve): translated by cx, cy
      // Note: "S" command implicitly uses the reflected control point of the previous command
      path +=
        " " +
        (i ? "S" : "") +
        `${cx + d_factor * r * Math.sin(θ - β)} ${cy + d_factor * r * Math.cos(θ - β)}`;

      // End point of segment: translated by cx, cy
      path += ` ${cx + r * Math.sin(θ)} ${cy + r * Math.cos(θ)}`;
    }
    return path;
  };


  useEffect(() => {
    const marker = markerRef.current;
    if (!marker) return;

    // Parameters for the custom circlePath function
    // You can adjust these values to change the 'randomness' and appearance
    const dr_min = -0.15;
    const dr_max = 0.05;
    const θ0_min = 150;
    const θ0_max = 190; // Initial angle in degrees
    const dθ_min = 0.05;
    const dθ_max = 0.3;

    const widthGain = 1;
    const heightGain = 1;

    // Get current dimensions of the marker text
    const width = marker.offsetWidth;
    const height = 2 * marker.offsetHeight; // Original logic for height
    const ns = "http://www.w3.org/2000/svg";

    // Create or select the SVG container
    let svg = marker.querySelector("svg");
    if (!svg) {
      svg = document.createElementNS(ns, "svg");
      marker.appendChild(svg);
    }

    // Set SVG dimensions and transform
    svg.style.width = `${width}px`;
    svg.style.height = `${height}px`;
    // The transform for the SVG scales it to maintain the aspect ratio based on original logic
    svg.style.transform = `scale(${(2 * widthGain * width) / height}, ${heightGain})`;
    svg.setAttribute("width", `${width}`);
    svg.setAttribute("height", `${height}`);

    // Create or select the path element
    let path = svg.querySelector("path");
    if (!path) {
      path = document.createElementNS(ns, "path");
      svg.appendChild(path);
    }
    pathRef.current = path; // Store path in ref

    // Calculate center (cx, cy) and base radius (r) for the path relative to the SVG
    const cx = width / 2;
    const cy = height / 2;
    const base_r = height / 2.5; // Base radius for the circular path

    // Generate the path data using the new function
    path.setAttribute("d", circlePath(cx, cy, base_r, dr_min, dr_max, θ0_min, θ0_max, dθ_min, dθ_max));
    path.style.fill = "none";
    path.style.stroke = strokeColor;
    path.style.strokeWidth = "2";

    // Get the actual length of the generated path for stroke animation
    // This must be done AFTER the 'd' attribute is set and the element is in the DOM
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`; // Initially hidden
    path.style.transition = "stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)";


    // --- Intersection Observer Logic ---
    const animatePath = () => {
      if (pathRef.current) {
        pathRef.current.style.strokeDashoffset = "0";
      }
    };

    // const resetPath = () => {
    //   if (pathRef.current) {
    //     // Recalculate dashoffset based on the current path's length
    //     pathRef.current.style.strokeDashoffset = `${pathRef.current.getTotalLength()}`;
    //   }
    // };

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0.9,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        animatePath();
      }
      
    });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(marker);

    // Cleanup function
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [text]); // Re-run effect if text changes to adjust path

  return (
    <>
      <style jsx>{`
        .marker {
          position: relative;
          text-decoration: none;
          display: inline-block;
          cursor: pointer;
        }

        .marker :global(svg) {
          position: absolute;
          left: 0;
          top: -50%;
          pointer-events: none;
          overflow: visible;
          z-index: 1;
        }

        .marker :global(path) {
          transition: stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
      <div className="flex justify-center my-5">
        <p className={`${textClass} marker`} ref={markerRef}>
          {text}
        </p>
      </div>
    </>
  );
};

export default HoverCircle;