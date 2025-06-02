import ejemplo from "./ejemplo.routes.js";
import Productos from "./productos.routes.js";
import { Router } from 'express';

const indexRoutes= Router();

indexRoutes.use('/ejemplo', ejemplo);
indexRoutes.use('/productos', Productos);

export default indexRoutes;


