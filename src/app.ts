import 'reflect-metadata'; // We need this in order to use @Decorators

import express from 'express';

async function startServer() {
  const app = express();

  app.listen(process.env.PORT || 3095, () => {
    console.log(`
      ################################################
      🛡️  Server listening on port: ${process.env.PORT || 3095} 🛡️
      ################################################
    `);
  }).on('error', err => {
    console.error(err);
    process.exit(1);
  });

}

startServer();