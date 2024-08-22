import express from 'express';
import type { Application } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// Import routes (adjust the paths as needed)
import articleRoutes from './routes/article';
import categoryRoutes from './routes/category';
import userRoutes from './routes/user';

// Import middleware
import errorHandler from './middlewares/errorHandler';

// Load environment variables
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/articles', articleRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/users', userRoutes);

// Error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});