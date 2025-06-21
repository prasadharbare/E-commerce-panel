import { Router } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../entity/Product';

const router = Router();

router.get('/', async (_, res) => {
  const products = await getRepository(Product).find();
  res.json(products);
});

router.post('/', async (req, res) => {
  const repo = getRepository(Product);
  const result = await repo.save(req.body);
  res.json(result);
});

router.put('/:id', async (req, res) => {
  await getRepository(Product).update(req.params.id, req.body);
  res.json({ message: 'Product updated' });
});

router.delete('/:id', async (req, res) => {
  await getRepository(Product).delete(req.params.id);
  res.json({ message: 'Product deleted' });
});

export default router;
