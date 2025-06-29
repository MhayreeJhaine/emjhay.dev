import { useEffect, useRef, useState, useCallback } from "react";

export const useStoryNavigation = ({
  length,
  onComplete,
  onFirstPrev,
}: {
  length: number;
  onComplete: () => void;
  onFirstPrev: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressWidths, setProgressWidths] = useState<number[]>(
    Array(length).fill(0)
  );
  const isPaused = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startProgress = useCallback((index: number) => {
    clearInterval(intervalRef.current!);
    clearTimeout(timeoutRef.current!);

    intervalRef.current = setInterval(() => {
      if (isPaused.current) return;
      setProgressWidths((prev) => {
        const updated = [...prev];
        updated[index] = Math.min(updated[index] + 1, 100);
        return updated;
      });
    }, 100);

    timeoutRef.current = setTimeout(() => {
      goToNext();
    }, 10000);
  }, []);

  const goToNext = useCallback(() => {
    setProgressWidths((prev) => {
      const updated = [...prev];
      updated[currentIndex] = 100;
      return updated;
    });

    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex < length) {
        setTimeout(() => startProgress(nextIndex), 0);
        return nextIndex;
      } else {
        onComplete();
        return prev;
      }
    });
  }, [currentIndex, length, onComplete, startProgress]);

  // const goToPrev = useCallback(() => {
  //   // if (currentIndex === 0) return;
  //   if (currentIndex === 0) {
  //     if (onFirstPrev) {
  //       onFirstPrev();
  //     }
  //     return;
  //   }

  //   const newIndex = currentIndex - 1;

  //   setProgressWidths((prev) => {
  //     const updated = [...prev];
  //     updated[currentIndex] = 0; // Clear current progress
  //     updated[newIndex] = 0; // Reset the new current one as well
  //     return updated;
  //   });

  //   setCurrentIndex(newIndex);
  //   setTimeout(() => startProgress(newIndex), 0);
  // }, [currentIndex, startProgress]);
  const goToPrev = useCallback(() => {
    if (currentIndex === 0) {
      if (onFirstPrev) {
        onFirstPrev();
      }
      return;
    }

    const newIndex = currentIndex - 1;

    setProgressWidths((prev) => {
      const updated = [...prev];
      updated[currentIndex] = 0;
      updated[newIndex] = 0;
      return updated;
    });

    setCurrentIndex(newIndex);
    setTimeout(() => startProgress(newIndex), 0);
  }, [currentIndex, startProgress, onFirstPrev]);

  useEffect(() => {
    startProgress(currentIndex);

    const handleVisibility = () => {
      isPaused.current = document.visibilityState === "hidden";
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearInterval(intervalRef.current!);
      clearTimeout(timeoutRef.current!);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [currentIndex, startProgress]);

  return {
    currentIndex,
    progressWidths,
    goToNext,
    goToPrev,
  };
};
