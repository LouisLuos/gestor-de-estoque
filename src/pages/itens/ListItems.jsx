import { useContext } from "react";
import { Link } from "react-router-dom";
import { StockContext } from "../../contexts/StockContexts"; //

export default function ListItems() {
  const { items, deleteItem } = useContext(StockContext); // Puxa dados e função de excluir

  return (
    <section>
      <div className="card bg-dark border-secondary text-light">
        <div className="table-responsive">
          <table className="table table-dark table-hover mb-0">
            <thead>
              <tr>
                <th className="px-4 py-3 border-secondary text-secondary small">ID</th>
                <th className="py-3 border-secondary text-secondary small">Nome</th>
                <th className="py-3 border-secondary text-secondary small">Em Estoque</th>
                <th className="py-3 border-secondary text-secondary small">Categoria</th>
                <th className="px-4 py-3 border-secondary text-end text-secondary small">Ações</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="align-middle">
                  <td className="px-4 border-secondary text-secondary">{item.id}</td>
                  <td className="border-secondary fw-semibold">{item.name}</td>
                  <td className="border-secondary">{item.quantity} unid.</td>
                  <td className="border-secondary">
                    <span className="badge bg-secondary text-dark fw-bold">{item.category}</span>
                  </td>
                  <td className="px-4 border-secondary text-end">
                    <div className="d-flex gap-2 justify-content-end">
                      <Link to={`/items/details/${item.id}`} className="btn btn-sm btn-outline-light">Ver</Link>
                      <Link to={`/items/update/${item.id}`} className="btn btn-sm btn-outline-primary">Atualizar</Link>
                      <button onClick={() => deleteItem(item.id)} className="btn btn-sm btn-outline-danger">Excluir</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}