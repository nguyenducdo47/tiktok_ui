//Layouts
import config from '~/configs';
import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

const publicRoutes = [
    { path: config.routes.home, components: Home },
    { path: config.routes.following, components: Following },
    { path: config.routes.profile, components: Profile },
    { path: config.routes.upload, components: Upload, layout: HeaderOnly },
    { path: config.routes.search, components: Search, layout: null },
    { path: config.routes.live, components: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
