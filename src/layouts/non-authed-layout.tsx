import React from "react";
import HeaderSignIn from "@/components/header/header-sign-in.tsx";
import Footer from "@/components/Footer/Footer.tsx";

const NonAuthedLayout = ({ children }: Readonly<{children: React.ReactNode}>) => {
    return (
        <>
            <HeaderSignIn/>
                { children }
            <Footer />
        </>
    );
}

export default NonAuthedLayout;