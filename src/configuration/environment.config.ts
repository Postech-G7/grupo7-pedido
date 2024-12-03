import dotenv from 'dotenv';
import { accessSecretVersion } from './secret-manager';
const NODE_ENV = process.env?.NODE_ENV;
const ENVS = ["DATABASE_URL", "MERCADO_PAGO_URL", "MERCADO_PAGO_USERID", "MERCADO_PAGO_TOKEN", "MERCADO_PAGO_POS", "MERCADO_PAGO_WEBHOOK_URL", "PROJECT_ID", "REGION"];

if (!process.env.NODE_ENV) {
    (async () => {
      try {
        console.log('Iniciando o carregamento de segredos...');
        const secretPromises = ENVS.map(async (env) => {
          try {
            const secret = await accessSecretVersion(env);
            process.env[env] = secret; 
          } catch (error) {
            console.error(`Erro ao acessar segredo ${env}:`, error);
          }
        });
  
        // Aguarda que todos os segredos sejam carregados
        await Promise.all(secretPromises);
        console.log('Todos os segredos foram carregados.');
      } catch (err) {
        console.error('Erro geral ao carregar segredos:', err);
      }
    })();
  }
    
console.log("Ambiente configurado:", NODE_ENV ?? "GCP")
export const Environment = () => {
    if (NODE_ENV) {
        dotenv.config({path: `src/configuration/environments/${NODE_ENV}.env`})
        return;
    }
    return;
} 