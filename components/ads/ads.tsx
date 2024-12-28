"use client";
import { AdsWrapper } from "@/components/wrappers/ad-wrapper";
import { useEffect } from "react";
import { DefineAdSlot } from "./google-publisher-tag";

const slotIds = [
  "/22971894985/PM_S1_336X280",
  "/22971894985/PM_S2_336X280",
  "/22971894985/PM_S3_336X280",
  "/22971894985/PM_S4_336X280",
  "/22971894985/PM_S5_336X280",
];

export const Ad1 = () => {
  return <DefineAdSlot adUnit={slotIds[0]} size={[336, 280]} />;
};

export const Ad2 = () => {
  return <DefineAdSlot adUnit={slotIds[1]} size={[336, 280]} />;
};

export const Ad3 = () => {
  return <DefineAdSlot adUnit={slotIds[2]} size={[336, 280]} />;
};

export const Ad4 = () => {
  return <DefineAdSlot adUnit={slotIds[3]} size={[336, 280]} />;
};

export const Ad5 = () => {
  return <DefineAdSlot adUnit={slotIds[4]} size={[336, 280]} />;
};

export const InterstellarAds = () => {
  useEffect(() => {
    const scriptTag = document.createElement("script");

    scriptTag.innerHTML = `
    window.googletag = window.googletag || { cmd: [] };

let interstitialSlot;

googletag.cmd.push(() => {
  // Define a web interstitial ad slot.
  interstitialSlot = googletag.defineOutOfPageSlot(
    "/22971894985/PM_S_INTERSTITIAL",
    googletag.enums.OutOfPageFormat.INTERSTITIAL
  );

  // Slot returns null if the page or device does not support interstitials.
  if (interstitialSlot) {
    // Enable optional interstitial triggers and register the slot.
    interstitialSlot.addService(googletag.pubads()).setConfig({
      interstitial: {
        triggers: {
          navBar: true,
          unhideWindow: true,
        },
      },
    });

    document.getElementById("status").textContent =
      "Interstitial is loading...";

    // Add event listener to enable navigation once the interstitial loads.
    // If this event doesn't fire, try clearing local storage and refreshing
    // the page.
    googletag.pubads().addEventListener("slotOnload", (event) => {
      if (interstitialSlot === event.slot) {
        document.getElementById("link").style.display = "block";
        document.getElementById("status").textContent =
          "Interstitial is loaded.";
      }
    });
  }

  googletag.enableServices();
});

`;

    document.body.append(scriptTag);
  }, []);

  return <div className="hidden">Interstaller Ad</div>;
};
