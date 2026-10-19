"use client";

import { useEffect } from "react";
import { incrementView } from "@/services/increment-view";

// Survives React Strict Mode remounts in the same JS realm
const trackedSlugs = new Set<string>();

type ViewTrackerProps = {
  slug: string;
};

const ViewTracker = ({ slug }: ViewTrackerProps) => {
  useEffect(() => {
    if (trackedSlugs.has(slug)) return;

    trackedSlugs.add(slug);
    void incrementView(slug);
  }, [slug]);

  return null;
};

export { ViewTracker };
