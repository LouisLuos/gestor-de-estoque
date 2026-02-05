export default function RecentItems({ nameItem }) {
  return (
    <div className="d-flex justify-content-between align-items-center py-2 border-bottom border-secondary last-child-border-0">
      <span className="text-light">{nameItem}</span>
      <button className="btn btn-sm btn-outline-light">Ver</button>
    </div>
  );
}
