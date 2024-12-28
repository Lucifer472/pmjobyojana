"use client";
import { useEffect } from "react";

export const AdsWrapper = ({ id }: { id: string }) => {
  useEffect(() => {
    // Ensure googletag is available before attempting to display the ad
    if (typeof window !== "undefined" && window.googletag) {
      window.googletag.cmd.push(function () {
        window.googletag.display(id);
      });
    }
  }, [id]);

  return (
    <div className="text-center flex w-full items-center justify-center flex-col">
      <span className="text-[10px]">SPONSORED</span>
      <div id={id} style={{ minWidth: "336px", minHeight: "280px" }}></div>
    </div>
  );
};
