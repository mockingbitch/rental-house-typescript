import HeaderSignIn from "@/components/header/header-sign-in.tsx";
import React from "react";

const NonAuthedLayout = ({ children }: Readonly<{children: React.ReactNode}>) => {
    return (
        <>
            <HeaderSignIn/>
            { children }
        </>
    );
}

export default NonAuthedLayout;