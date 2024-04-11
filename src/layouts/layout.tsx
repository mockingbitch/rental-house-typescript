import React from "react";

const Layout = ({ children }: Readonly<{children: React.ReactNode}>) => {
    return (
        <>
            Default layout
            { children }
        </>
    );
}

export default Layout;