import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import Layout from "@/layouts/layout.tsx";
import { ThemeProvider } from "@/components/theme/theme-provider.tsx"
import { ReactNode } from "react";
// import Loader from "@/components/loading/loader.tsx";

const App = (props: {
    children?: ReactNode;
    isLoggedIn: boolean
}) => {
    const isLoggedIn = props.isLoggedIn;
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            {/*<Loader/>*/}
            <Routes>
                { publicRoutes.map((publicRoute, index) => {
                    const PublicLayout = publicRoute.layout || Layout;
                    const PublicPage = publicRoute.component;

                    return (
                        <Route key={ index } path={ publicRoute.path } element={
                            <PublicLayout>
                                <PublicPage />
                            </PublicLayout>
                        } />
                    )
                })}

                { isLoggedIn && privateRoutes.map((privateRoute, index) => {
                    const PrivateLayout = privateRoute.layout || Layout;
                    const PrivatePage = privateRoute.component;

                    return (
                        <Route key={ index } path={ privateRoute.path } element={
                            <PrivateLayout>
                                <PrivatePage />
                            </PrivateLayout>
                        } />
                    )
                })}
            </Routes>
        </ThemeProvider>
    )
}

export default App;