import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';
import authMiddlewares from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionControler.store);

routes.use(authMiddlewares);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), (req, res) => {
    return res.json({ ok: true });
});

export default routes;
