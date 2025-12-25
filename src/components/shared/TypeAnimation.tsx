"use client";

import { useState, useEffect, useMemo } from "react";

export function TypeAnimation() {
  const titles = useMemo(
    () => [
      "Full Stack Product Engineer",
      "AWS Cloud Specialist",
      "AI Integration Expert",
    ],
    [],
  );

  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const title = titles[currentTitle];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < title.length) {
            setDisplayText(title.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentTitle((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle, titles]);

  return (
    <span className="text-primary">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
