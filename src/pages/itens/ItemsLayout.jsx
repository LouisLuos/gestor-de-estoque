import { Outlet, Link, useLocation } from "react-router-dom";

export default function ItemsLayout() {
  const { pathname } = useLocation();

  return (
    <section>
      <div className="d-flex justify-content-start align-items-center mb-4 text-light border-bottom border-secondary pb-2 gap-3">
        <Link 
          to="/items" 
          className={`mb-0 btn text-light ${pathname === "/items" ? "border-bottom border-white rounded-0" : ""}`}
        >
          Todos os Items
        </Link>
        <Link 
          to="/items/create" 
          className={`btn text-light ${pathname === "/items/create" ? "border-bottom border-white rounded-0" : ""}`}
        >
          Novo Item
        </Link>
      </div>

      {/* O Outlet renderizará ListItems, CreateItem, DetailsItem ou UpdateItem */}
      <Outlet />
    </section>
  );
}