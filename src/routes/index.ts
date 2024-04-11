import Home from '@/pages/home/home.tsx';
import NonAuthedLayout from "@/layouts/non-authed-layout.tsx";
import SignIn from "@/pages/authentication/sign-in.tsx";
import Dashboard from "@/pages/admin/dashboard/dashboard.tsx";

const publicRoutes = [
    { path: '/', component: Home, layout: NonAuthedLayout },
    { path: '/login', component: SignIn, layout: NonAuthedLayout }
];

const privateRoutes = [
    { path: '/dashboard', component: Dashboard, layout: NonAuthedLayout },
    // { path: '/dashboard/tag', component: TagTable, layout: MasterLayout },
    // { path: '/dashboard/film', component: FilmTable, layout: MasterLayout },
];

export { publicRoutes, privateRoutes };