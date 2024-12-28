"use client";
import { AdsWrapper } from "@/components/wrappers/ad-wrapper";
import { useEffect } from "react";

const slotIds = [
  "/22971894985/PM_S1_336X280",
  "/22971894985/PM_S2_336X280",
  "/22971894985/PM_S3_336X280",
  "/22971894985/PM_S4_336X280",
  "/22971894985/PM_S5_336X280",
];

export const Ad1 = () => {
  return <AdsWrapper slot={slotIds[0]} id="div-gpt-ad-1735361119354-0" />;
};

export const Ad2 = () => {
  return <AdsWrapper slot={slotIds[1]} id="div-gpt-ad-1735361341825-0" />;
};

export const Ad3 = () => {
  return <AdsWrapper slot={slotIds[2]} id="div-gpt-ad-1735361424736-0" />;
};

export const Ad4 = () => {
  return <AdsWrapper slot={slotIds[3]} id="div-gpt-ad-1735361519382-0" />;
};

export const Ad5 = () => {
  return <AdsWrapper slot={slotIds[4]} id="div-gpt-ad-1735363826535-0" />;
};
