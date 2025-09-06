import { startServer } from './infrastructure/server/api';

startServer().catch((err) => {
  console.error('❌ Error starting server:', err);
  process.exit(1);
});
