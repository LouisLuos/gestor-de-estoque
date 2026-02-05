// src/components/CardsDashBoards/SubCardDashboard.jsx
export default function SubCardDashboard({ title }) {
  return (
    <div className="card bg-dark text-white border-secondary mb-3">
      <div className="card-body p-3">
        <h5 className="card-title mb-0 fs-6 fw-semibold text-secondary">
          {title}
        </h5>
      </div>
    </div>
  );
}