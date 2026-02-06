import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { StockContext } from "../../contexts/StockContexts";

export default function DetailsItem() {
  const { id } = useParams();
  const { getItem, deleteItem } = useContext(StockContext);
  const item = getItem(id); //

  if (!item) return <h2 className="text-light">Item não encontrado!</h2>;

  return (
    <div className="text-light">
      <div className="d-flex align-items-center gap-3 mb-4">
        <h2 className="mb-0">{item.name}</h2>
        <Link to={`/items/update/${item.id}`} className="btn btn-sm btn-outline-light">Atualizar</Link>
        <button onClick={() => deleteItem(item.id)} className="btn btn-sm btn-danger">Excluir</button>
      </div>

      <div className="row g-3 mb-4 text-center">
        <div className="col-md-3 border border-secondary p-3 rounded">Categoria: {item.category}</div>
        <div className="col-md-3 border border-secondary p-3 rounded">Quantidade: {item.quantity}</div>
        <div className="col-md-3 border border-secondary p-3 rounded">Preço: R$ {item.price}</div>
      </div>

      <p className="fs-5">{item.description}</p>
      
      <div className="small text-secondary mt-5">
        <p>Cadastrado em: {item.createdAt.toLocaleString()}</p>
        <p>Atualizado em: {item.updatedAt.toLocaleString()}</p>
      </div>
    </div>
  );
}