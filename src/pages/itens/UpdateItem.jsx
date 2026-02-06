import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StockContext } from "../../contexts/StockContexts";

export default function UpdateItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getItem, updateItem } = useContext(StockContext);
  const item = getItem(id);

  const [formData, setFormData] = useState(item);

  // Redireciona se o item não existir
  useEffect(() => {
    if (!item) navigate("/items");
  }, [item, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    updateItem(id, formData); //
    alert("Item atualizado!");
    navigate("/items");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!item) return null;

  return (
    <form onSubmit={handleSubmit} className="row g-4 text-light">
      <div className="col-12 col-lg-4">
        <label className="form-label">Nome</label>
        <input type="text" name="name" className="form-control bg-dark text-light border-secondary" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="col-6 col-lg-2">
        <label className="form-label">Quantidade</label>
        <input type="number" name="quantity" className="form-control bg-dark text-light border-secondary" value={formData.quantity} onChange={handleChange} required />
      </div>
      <div className="col-6 col-lg-2">
        <label className="form-label">Preço</label>
        <input type="number" name="price" className="form-control bg-dark text-light border-secondary" value={formData.price} onChange={handleChange} step="0.01" required />
      </div>
      <div className="col-12 col-lg-4">
        <label className="form-label">Categoria</label>
        <select name="category" className="form-select bg-dark text-light border-secondary" value={formData.category} onChange={handleChange} required>
          <option value="Jogos">Jogos</option>
          <option value="Livros">Livros</option>
          <option value="Informatica">Informática</option>
        </select>
      </div>
      <div className="col-12">
        <label className="form-label">Descrição</label>
        <textarea name="description" className="form-control bg-dark text-light border-secondary" rows={8} value={formData.description} onChange={handleChange} required></textarea>
      </div>
      <div className="col-12 mt-4">
        <button type="submit" className="btn btn-primary px-4 py-2">Salvar Alterações</button>
      </div>
    </form>
  );
}