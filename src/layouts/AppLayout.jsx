import { Outlet } from "react-router-dom";

import { Footer, Header } from "../components";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="container xl:max-w-[1280px] mx-auto flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
