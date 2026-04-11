import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Autorizamos el tráfico desde tu celular en la red local
  allowedDevOrigins: ['10.0.0.15', 'http://10.0.0.15:3000'],
  
  /* Aquí pueden ir otras configuraciones que ya tenías, 
     si el archivo estaba vacío o casi vacío, con esto basta */
};

export default nextConfig;