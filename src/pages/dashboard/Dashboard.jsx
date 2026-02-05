import CardDashboard from "../../components/CardsDashBoards/CardDashboard"
import RecentItems from "../../components/CardsDashBoards/RecentItems"
import SubCardDashboard from "../../components/CardsDashBoards/SubCardDashboard"

export default function Dashboard() {
    return (
        
        <div>
            <div className="mb-4">
                <h1>Dashboard</h1>
            </div>
            <div className="d-flex gap-5">
                <CardDashboard itemInfo={"Diversidade de Itens"} quantidade={120} />
                <CardDashboard itemInfo={"Iventário total"} quantidade={45} />
                <CardDashboard itemInfo={"Itens recentes"} quantidade={5} />
                <CardDashboard itemInfo={"Itens acabando"} quantidade={200} />
            </div>
            
            <div className="d-flex gap-5 align-items-center">
                <SubCardDashboard />
                <SubCardDashboard />
                <RecentItems nameItem={"Notebook Dell Inspiron"} />
            </div>
        </div>
    )
}