import MainSearchTickets from "../components/Header/MainSearchTickets";
import Footer from "../components/Footer/Footer";

export default function Layout({ main, sidebar, sidebarBottom }) {
  return (
    <>
      <MainSearchTickets />
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
