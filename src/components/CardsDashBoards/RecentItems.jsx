export default function RecentItems({ nameItem}) {
    return (
        <div className="w-50 d-flex flex-column gap-3">
            <p>{nameItem}</p>
            <button className="btn btn-light text-dark">Ver</button>
        </div>
    )

}