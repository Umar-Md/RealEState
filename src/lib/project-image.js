export function getProjectImageSrc(src) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath.replace(/\/$/, '')}${src}`;
}
