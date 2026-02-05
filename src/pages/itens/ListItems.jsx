import { Link } from "react-router-dom";

export default function ListItems() {
  // Exemplo de dados para visualização da estrutura
  const items = [
    { id: 1, name: "Exemplo de Item", quantity: 10, category: "Geral" }
  ];

  return (
    <section>
      <div className="d-flex justify-content-start align-items-center mb-4 text-light border-bottom border-secondary pb-2 gap-3">
        <Link to="/items" className="mb-0 btn text-light">Todos os Items</Link>
        <Link to="/items/create" className="btn text-light">
          Novo Item
        </Link>
      </div>

      <div className="card bg-dark border-secondary">
        <div className="table-responsive">
          <table className="table table-dark table-hover mb-0">
            <thead>
              <tr>
                <th className="px-4 py-3 border-secondary">ID</th>
                <th className="py-3 border-secondary">Nome</th>
                <th className="py-3 border-secondary">Em Estoque</th>
                <th className="py-3 border-secondary">Categoria</th>
                <th className="px-4 py-3 border-secondary text-end">Ações</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="align-middle">
                  <td className="px-4 border-secondary text-secondary">{item.id}</td>
                  <td className="border-secondary fw-semibold">{item.name}</td>
                  <td className="border-secondary">{item.quantity} unid.</td>
                  <td className="border-secondary">
                    <span className="badge bg-secondary text-dark fw-bold">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-4 border-secondary text-end">
                    <div className="d-flex gap-2 justify-content-end">
                      <Link 
                        to={`/items/details/${item.id}`} 
                        className="btn btn-sm btn-outline-light"
                      >
                        Ver
                      </Link>
                      <Link 
                        to={`/items/update/${item.id}`} 
                        className="btn btn-sm btn-outline-primary"
                      >
                        Atualizar
                      </Link>
                      <button className="btn btn-sm btn-outline-danger">
                        Excluir
                      </button>
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