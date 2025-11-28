"use client";

import AdUnit, { AdUnitProps } from "../AdUnit";

export default function AdClientWrapper(props: Readonly<AdUnitProps>) {
  return <AdUnit {...props} />;
}
