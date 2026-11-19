import { useEffect, type ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_META } from "@/seo";

interface PageLayoutProps {
  path: keyof typeof PAGE_META;
  children: ReactNode;
}

const PageLayout = ({ path, children }: PageLayoutProps) => {
  useEffect(() => {
    const meta = PAGE_META[path];
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
  }, [path]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
