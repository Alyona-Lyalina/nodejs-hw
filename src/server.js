import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import pinoHttp from 'pino-http';
import notesRoutes from './routes/notesRoutes.js';
import { connectMongoDB } from './db/connectMongoDB.js';

const PORT = process.env.PORT || 3000;
const app = express();

const logger = pinoHttp({
  transport: {
    target: 'pino-pretty', 
    options: { colorize: true },
  },
  customProps: () => ({ operation: 'http-request' }),
  level: 'info',
});
app.use(logger);


app.use(cors());
app.use(express.json());


app.use('/notes', notesRoutes);


app.get('/test-error', (req, res, next) => {
  req.log.error('Simulating server error...'); 
  next(new Error('Simulated server error')); 
});


app.use((req, res, next) => {
  req.log.warn(`Route not found: ${req.method} ${req.originalUrl}`); 
  res.status(404).json({ message: 'Route not found' });
});


app.use((err, req, res, next) => {
  req.log.error(err, 'Caught server error'); 
  const statusCode = err.status || 500;
  res.status(statusCode).json({ message: err.message || 'Internal Server Error' });
});


const startServer = async () => {
  await connectMongoDB(); 
  app.listen(PORT, () => {
    console.log(`Server successfully started on port ${PORT}.`);
    console.log(`Test links: http://localhost:${PORT}/notes and http://localhost:${PORT}/test-error`);
  });
};

startServer();
