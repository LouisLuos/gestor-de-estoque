import { useContext } from "react";
import { StockContext } from "../../contexts/StockContexts";
import CardDashboard from "../../components/CardsDashBoards/CardDashboard";

export default function Dashboard() {
  const { items } = useContext(StockContext);

  const totalDifferentItems = items.length;
  const totalItems = items.reduce((sum, item) => sum + Number(item.quantity), 0);
  
  const today = new Date();
  const limitDate = new Date();
  limitDate.setDate(today.getDate() - 10);
  const recentItems = items.filter((item) => item.createdAt >= limitDate);
  
  const lowStockItems = items.filter((item) => item.quantity < 10);

  return (
    <div>
      <h1 className="h3 mb-4 fw-bold">Dashboard</h1>
      <div className="row g-4 mb-5">
        <div className="col-md-3"><CardDashboard itemInfo="Itens Diferentes" quantidade={totalDifferentItems} /></div>
        <div className="col-md-3"><CardDashboard itemInfo="Inventário Total" quantidade={totalItems} /></div>
        <div className="col-md-3"><CardDashboard itemInfo="Itens Recentes" quantidade={recentItems.length} /></div>
        <div className="col-md-3"><CardDashboard itemInfo="Itens Escassos" quantidade={lowStockItems.length} /></div>
      </div>
      {/* Aqui você pode listar os itens recentes e escassos em tabelas menores */}
    </div>
  );
}