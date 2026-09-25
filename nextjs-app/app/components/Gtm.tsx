"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

function gtag(...args: any[]) {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(args);
  }
}

function pageview(url: string) {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });
  }
}

export default function Gtm() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    if (pathname) pageview(pathname);

    const consentGiven = getCookie("consent") === "true";

    gtag("consent", consentGiven ? "update" : "default", {
      ad_storage: consentGiven ? "granted" : "denied",
      analytics_storage: consentGiven ? "granted" : "denied",
      functionality_storage: consentGiven ? "granted" : "denied",
      personalization_storage: consentGiven ? "granted" : "denied",
      security_storage: consentGiven ? "granted" : "denied",
    });

    const handleGTMConsentUpdate = () => {
      gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
        functionality_storage: "granted",
        personalization_storage: "granted",
        security_storage: "granted",
      });
      window.dataLayer?.push({ event: "cookie_consent_given" });
    };

    window.addEventListener("updateGTMConsent", handleGTMConsentUpdate);
    return () => {
      window.removeEventListener("updateGTMConsent", handleGTMConsentUpdate);
    };
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
