import express, { Request, Response } from 'express';
const router = express.Router();

// Add this export statement
export default router; // Ensure 'router' is defined and initialized

router.get('/', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'get category' });
});

router.get('/:id', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'get category by :id' });
});

router.post('/', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'post category' });

});

router.put('/:id', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'put category id' })
});

router.delete('/:id', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'delete category' });
});