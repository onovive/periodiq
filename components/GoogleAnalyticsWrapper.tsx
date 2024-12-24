"use client";

import { Suspense } from "react";
import GoogleAnalytics from "./GoogleAnalytics";

export default function GoogleAnalyticsWrapper({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  return (
    <Suspense fallback={null}>
      <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
    </Suspense>
  );
}
