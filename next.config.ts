import type { NextConfig } from "next";

const nextConfig = {
  experimental:{
    globalNotFound: true
  },
  typescript: {
   
    ignoreBuildErrors: true,
  },
  
 eslint: {
    // Salta los errores de linting (formato/estilo)
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
