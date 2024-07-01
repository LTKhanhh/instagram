import config from '~/config';

// Pages
import Home from "~/pages/Home";
import Register from "~/pages/Register";
import Login from '~/pages/Login';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.register, component: Register, layout: 'registerLayout' },
    { path: config.routes.login, component: Login, layout: 'registerLayout' },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };