import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Image = ({
  src,
  alt,
  onError,
  radius = 0,
  fit = "cover",
  fallbackSrc = "https://placehold.co/600x400?text=Alt%20Image",
  ...props
}) => {
  // Track the current src of the image
  const [currentSrc, setCurrentSrc] = useState(src);

  // Error handler for the image
  const handleError = (event) => {
    if (onError) {
      onError(event); // Call the provided onError callback if it exists
    }
    if (fallbackSrc) {
      setCurrentSrc(fallbackSrc); // Set the fallback source if the image fails to load
    }
  };

  return (
    <img
      src={currentSrc}
      onError={handleError}
      style={{ objectFit: fit, borderRadius: radius }}
      className={twMerge("w-full h-full")}
      alt={alt}
      {...props}
    />
  );
};

export default Image;
