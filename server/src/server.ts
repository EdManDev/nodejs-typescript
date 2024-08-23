import express from 'express';
import type { Application } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// Import routes (adjust the paths as needed)
import articleRoutes from './routes/article.routes';
import categoryRoutes from './routes/category.routes';
import userRoutes from './routes/user.routes';

// Import middleware
import errorHandler from './middlewares/errorHandler';

// Load environment variables
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', articleRoutes);
app.use('/api', categoryRoutes);
app.use('/api', userRoutes);

// Error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});