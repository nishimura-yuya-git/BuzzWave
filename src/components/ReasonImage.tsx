interface ReasonImageProps {
  src: string;
  alt: string;
}

export function ReasonImage({ src, alt }: ReasonImageProps) {
  return (
    <img 
      src={src}
      alt={alt}
      className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    />
  );
}