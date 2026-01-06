"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MetaPixelPageView() {
  const pathname = usePathname();

  useEffect(() => {
    (window as any).fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
