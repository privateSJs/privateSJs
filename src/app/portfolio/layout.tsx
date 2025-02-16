'use client'
import React, {ReactNode} from "react";

const PortfolioLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-1 items-center justify-center">
            <main className="container">{children}</main>
        </div>
    );
};

export default PortfolioLayout;
