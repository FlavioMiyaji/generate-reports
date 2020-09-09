import { Router } from 'express';

const reportsRouter = Router();

reportsRouter.get('/', async (request, response) => {
  return response.status(200).json({ teste: true });
});

export default reportsRouter;
