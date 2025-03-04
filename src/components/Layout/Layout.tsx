import Sidebar from "./Sidebar";
import MobileNav from "./MobNav";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {

    return (

        <div className="flex min-h-screen bg-background">

            <div className="h-screen sticky top-0 overflow-hidden">

                <Sidebar />

            </div>

            <div className="flex-1 flex flex-col">

                <Header />

                {/* Page Content */}
                <main className="flex-1 pb-20 md:pb-6">

                    <div className="mx-auto max-w-4xl px-2 sm:px-4 py-4 sm:py-6">
                        <Outlet />
                    </div>

                </main>

                <MobileNav />

            </div>

        </div>
    );
};

export default Layout;