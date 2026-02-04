import CardDashboard from "../../components/CardsDashBoards/CardDashboard"

export default function Dashboard() {
    return (
        
        <div>
            <div className="mb-4">
                <h1>Dashboard</h1>
            </div>
            <div className="d-flex gap-5">
                <CardDashboard />
                <CardDashboard />
                <CardDashboard />
                <CardDashboard />
            </div>
            
            <div>
                
            </div>
        </div>
    )
}