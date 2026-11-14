/** Local photography using the image sizes included in the repository. */
export default function ArchitecturalImage({
  image,
  priority = false,
  sizes = "100vw",
  className = "",
}) {
  const base = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/architecture/${image}`;
  const width = image === "photo-1497366754035-f200968a6e72" ? 640 : 1920;

  return (
    <img
      src={`${base}-${width}.webp`}
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
