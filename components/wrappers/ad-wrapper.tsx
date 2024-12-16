"use client";
import { AdUnit } from "next-google-adsense";

export const AdsWrapper = ({ id }: { id: string }) => {
  return (
    <div className="text-center flex w-full items-center justify-center flex-col">
      <span className="text-[10px]">SPONSORED</span>
      <div style={{ minWidth: "336px", minHeight: "280px" }}>
        <AdUnit
          publisherId="pub-8113530297751450"
          slotId={id}
          layout="display"
        />
      </div>
    </div>
  );
};
