//@ts-nocheck
"use client";
import { useEffect } from "react";

export const AdsWrapper = ({ id, slot }: { id: string; slot?: string }) => {
  useEffect(() => {
    // Ensure googletag is available before attempting to display the ad
    if (typeof window !== "undefined" && window.googletag) {
      window.googletag = window.googletag || { cmd: [] };
      googletag.cmd.push(function () {
        googletag
          .defineSlot(slot, [336, 280], "div-gpt-ad-1735361119354-0")
          .addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });
    }
  }, [id, slot]);

  return (
    <div className="w-full space-y-2">
      <span className="text-[10px] text-center w-full">SPONSORED</span>
      <div id={id} style={{ minWidth: "336px", minHeight: "280px" }}></div>
    </div>
  );
};
