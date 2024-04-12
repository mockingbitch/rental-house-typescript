import Home from '@/pages/home/home.tsx';
import NonAuthedLayout from "@/layouts/non-authed-layout.tsx";
import SignIn from "@/pages/authentication/sign-in.tsx";
import Dashboard from "@/pages/admin/dashboard/dashboard.tsx";
import SignUp from "@/pages/authentication/sign-up.tsx";

const publicRoutes = [
    { path: '/', component: Home, layout: NonAuthedLayout },
    { path: '/sign-in', component: SignIn, layout: NonAuthedLayout },
    { path: '/sign-up', component: SignUp, layout: NonAuthedLayout }
];

const privateRoutes = [
    { path: '/dashboard', component: Dashboard, layout: NonAuthedLayout },
    // { path: '/dashboard/tag', component: TagTable, layout: MasterLayout },
    // { path: '/dashboard/film', component: FilmTable, layout: MasterLayout },
];

export { publicRoutes, privateRoutes };