// Function to format time based on the given time string
export function formatTime(timeString) {
  // Get the current date and time
  const now = new Date();
  // Convert the given time string to a Date object
  const givenDate = new Date(timeString);
  // Calculate the difference in days between the current date and the given date
  const difference =
    (now.getTime() - givenDate.getTime()) / 1000 / 60 / 60 / 24;

  // If the difference is more than 1 day, format the date
  if (difference > 1) {
    const formattedDate = givenDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  } else {
    // If the difference is less than or equal to 1 day, format the time
    const formattedTime = givenDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return formattedTime;
  }
}
