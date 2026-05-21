"use client";

import { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function SplineScene({ scene }: { scene: string }) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#E8602A] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <Spline scene={scene} />
    </Suspense>
  );
}
