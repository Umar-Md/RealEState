/** Responsive local photography; generated sizes avoid external requests and runtime transforms. */
export default function ArchitecturalImage({
  image,
  priority = false,
  sizes = "100vw",
  className = "",
}) {
  const base = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/architecture/${image}`;

  return (
    <img
      src={`${base}-1280.webp`}
      srcSet={`${base}-640.webp 640w, ${base}-1280.webp 1280w, ${base}-1920.webp 1920w`}
      sizes={sizes}
      alt=""
      aria-hidden="true"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}
