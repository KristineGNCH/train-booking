import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Layout({ main, sidebar, sidebarBottom }) {
  return (
    <>
      <Header />
      <main className="main-container">
        <section className="sidebar-content">
          {sidebar}
          {sidebarBottom ? sidebarBottom : null}
        </section>
        {main}
      </main>
      <Footer />
    </>
  );
}
