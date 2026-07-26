/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // generates a static site in /out — deployable anywhere (Netlify, S3, GitHub Pages, Nginx)
  images: { unoptimized: true },
};

export default nextConfig;
