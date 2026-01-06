"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function MetaPixelPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // מחכה שהפיקסל יהיה קיים
    // @ts-ignore
    if (typeof window !== "undefined" && (window as any).fbq) {
      // @ts-ignore
      (window as any).fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  return null;
}
