"use client";
import { AdsWrapper } from "@/components/wrappers/ad-wrapper";
import { url } from "@/constant";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

export const OutBrain1 = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setOpen(true);

    return () => {
      setOpen(false);
    };
  }, [pathname]);

  if (!open) return;

  return (
    <div className="OUTBRAIN" data-src={url} data-widget-id="CRMB_2"></div>
  );
};

export const OutBrain2 = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setOpen(true);

    return () => {
      setOpen(false);
    };
  }, [pathname]);

  if (!open) return;

  return (
    <div className="OUTBRAIN" data-src={url} data-widget-id="CRMB_1"></div>
  );
};

export const OutBrain3 = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setOpen(true);

    return () => {
      setOpen(false);
    };
  }, [pathname]);

  if (!open) return;

  return (
    <div className="OUTBRAIN" data-src={url} data-widget-id="CRMB_3"></div>
  );
};
