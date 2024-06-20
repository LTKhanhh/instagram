import config from '~/config';

// Pages
import Home from "~/pages/Home";
import Register from "~/pages/Register";


// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.register, component: Register, layout: 'registerLayout' },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };