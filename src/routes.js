import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Mateus Correia Bezzan',
        email: 'mateusbhn998@gmail.com',
        password_hash: '1238546189',
    });
    return res.json(user);
});
export default routes;
