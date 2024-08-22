import express, { Request, Response } from 'express';
const router = express.Router();

// Add this export statement
export default router; // Ensure 'router' is defined and initialized

router.get('/', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'get user' });
});

router.get('/:id', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'get user by :id' });
});

router.post('/', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'post user' });

});

router.put('/:id', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'put user id' })
});

router.delete('/:id', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'delete user' });
});