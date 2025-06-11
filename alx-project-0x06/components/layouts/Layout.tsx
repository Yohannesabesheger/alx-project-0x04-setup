// components/layouts/Layout.tsx
import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header/>
      <main className="pt-24 px-4">{children}</main>
    </>
  );
};

export default Layout;
