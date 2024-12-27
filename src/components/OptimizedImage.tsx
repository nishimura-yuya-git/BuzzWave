interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
    width?: number;
    height?: number;
}
  
export function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  priority = false,
  width,
  height 
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} transition-opacity duration-300`}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      width={width}
      height={height}
      style={{
        backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiPjxyZWN0IGZpbGw9IiNmM2Y0ZjYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48L3N2Zz4=)',
        backgroundSize: 'cover'
      }}
    />
  );
}