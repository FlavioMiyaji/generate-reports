import { Router } from 'express';

import unimed from '../reports/unimed';

const reportsRouter = Router();

reportsRouter.get('/', async (request, response) => {
  const data = unimed.generateData();
  const fileName = await unimed.render(data);
  return response.status(200).json({ fileName });
});

export default reportsRouter;
