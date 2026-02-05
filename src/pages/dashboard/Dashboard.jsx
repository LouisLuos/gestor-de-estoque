import CardDashboard from "../../components/CardsDashBoards/CardDashboard";
import RecentItems from "../../components/CardsDashBoards/RecentItems";
import SubCardDashboard from "../../components/CardsDashBoards/SubCardDashboard";

export default function Dashboard() {
  return (
    <div className="container-fluid pb-4">
      <h1 className="mb-4 fw-bold">Dashboard</h1>

      {/* Cards de Resumo Principais */}
      <div className="row g-4 mb-5">
        <div className="col-12 col-md-6 col-lg-3">
          <CardDashboard itemInfo={"Diversidade de Itens"} quantidade={120} />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <CardDashboard itemInfo={"Inventário Total"} quantidade={45} />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <CardDashboard itemInfo={"Itens Recentes"} quantidade={5} />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <CardDashboard itemInfo={"Itens Esgotando"} quantidade={200} />
        </div>
      </div>

      {/* Seção de Tabelas/Listas de Resumo */}
      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <SubCardDashboard title="Itens Recentes" />
          <div className="bg-dark border border-secondary rounded p-3">
            <RecentItems nameItem={"Notebook Dell Inspiron"} />
            <RecentItems nameItem={"Teclado Mecânico"} />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <SubCardDashboard title="Itens Acabando" />
          <div className="bg-dark border border-secondary rounded p-3">
            <RecentItems nameItem={"Mouse Gamer"} />
          </div>
        </div>
      </div>
    </div>
  );
}
