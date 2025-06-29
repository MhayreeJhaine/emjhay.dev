import { Timestamp } from "firebase/firestore";

export const formatDate = (dateInput: string | Date | Timestamp) => {
  let inputDate: Date;

  // Convert Firestore Timestamp to JS Date
  if (
    typeof dateInput === "object" &&
    "seconds" in dateInput &&
    "nanoseconds" in dateInput
  ) {
    inputDate = new Date(dateInput.seconds * 1000);
  } else {
    inputDate = new Date(dateInput);
  }

  const now = new Date();
  const diffMillis = now.getTime() - inputDate.getTime();
  const diffMinutes = Math.floor(diffMillis / (1000 * 60));
  const diffHours = Math.floor(diffMillis / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMillis / (1000 * 60 * 60 * 24));

  const optionsWithYear: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const optionsWithoutYear: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
  };

  // ✅ FUTURE DATE GUARD (e.g., clock difference)
  if (diffMinutes < 0) return "Just now";

  if (diffMinutes === 1) return "Just now";
  if (diffMinutes < 60) return `${diffMinutes} minutes ago`;
  if (diffHours < 24) return `${diffHours} hours ago`;
  if (diffDays === 1) return "Yesterday";
  if (diffDays <= 7) return `${diffDays} days ago`;

  if (inputDate.getFullYear() === now.getFullYear()) {
    return inputDate.toLocaleDateString("en-GB", optionsWithoutYear);
  }

  return inputDate.toLocaleDateString("en-GB", optionsWithYear);
};
