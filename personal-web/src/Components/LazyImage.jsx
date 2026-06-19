import React, { useState } from "react";

const LazyImage = ({
  src,
  alt = "",
  className = "",
  loading = "lazy",
  ...props
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative">
      {/* Blur placeholder while loading */}
      {!imageLoaded && !imageError && (
        <div
          className={`absolute inset-0 bg-gray-300 animate-pulse rounded ${className}`}
        />
      )}

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        className={`${className} ${
          imageLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
