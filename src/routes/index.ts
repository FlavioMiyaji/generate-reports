import { Router } from 'express';

import reportsRoutes from './reports.routes';

const routes = Router();

routes.use('/reports', reportsRoutes);

export default routes;
