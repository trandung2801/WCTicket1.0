import Home from '../pages/Home';
import Following from '../pages/Following';
import Profiles from '../pages/Profiles';
import LoginRegister from '../pages/LoginRegister';

// Layout
import HeaderLayoutOnly from '../components/Layouts/HeaderLayoutOnly';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profiles', component: Profiles },
    { path: '/loginRegister', component: LoginRegister, layout: HeaderLayoutOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
