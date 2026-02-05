// src/components/CardsDashBoards/CardDashboard.jsx
export default function CardDashboard({ itemInfo, quantidade }) {
  return (
    <div className="card bg-dark text-white border-secondary shadow-sm">
      <div className="card-header px-4 border-secondary text-secondary small fw-bold">
        {itemInfo}
      </div>
      <div className="card-body d-flex justify-content-center align-items-center py-4">
        <span className="display-6 fw-bold">{quantidade}</span>
      </div>
    </div>
  );
}