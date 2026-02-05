


export default function CardDashboard({itemInfo, quantidade}) {
  return (
    <div className="card bg-black text-white" style={{ width: "25%", height: "10rem"}}>
        <div className="card-header px-4">{itemInfo}</div>
      <div className="card-body d-flex justify-content-center align-items-center fs-1">{quantidade}</div>
    </div>
  );
}
