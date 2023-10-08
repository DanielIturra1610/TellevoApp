import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tellevoapp.app',
  appName: 'TeLlevoApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SQLite: {
      dbEncryption: {
        secret: "admin", // Cambia esto por tu contraseña secreta
        newsecret: "admin", // Cambia esto por tu nueva contraseña secreta si es necesario
        algorithm: "aes-256-gcm", // Algoritmo de cifrado
        mode: "encryption" // Modo: "encryption" o "secret"
      }
    }
  }
};

export default config;
