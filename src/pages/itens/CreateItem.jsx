import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StockContext } from "../../contexts/StockContexts"; //

export default function CreateItem() {
  const { addItem } = useContext(StockContext); //
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    
    // Objeto com os dados do estado para o contexto
    const newItem = {
      name,
      quantity: Number(quantity),
      price: Number(price),
      category,
      description
    };

    addItem(newItem); // Chama a função do contexto
    alert("Item criado com sucesso!");
    navigate("/items"); // Redireciona para a listagem
  }

  return (
    <form onSubmit={handleSubmit} className="row g-4 text-light">
      <div className="col-12 col-lg-4">
        <label htmlFor="name" className="form-label">Nome</label>
        <input type="text" id="name" className="form-control bg-dark text-light border-secondary p-2" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="col-6 col-lg-2">
        <label htmlFor="quantity" className="form-label">Quantidade</label>
        <input type="number" id="quantity" className="form-control bg-dark text-light border-secondary p-2" value={quantity} onChange={(e) => setQuantity(e.target.value)} min={0} required />
      </div>
      <div className="col-6 col-lg-2">
        <label htmlFor="price" className="form-label">Preço</label>
        <input type="number" id="price" className="form-control bg-dark text-light border-secondary p-2" value={price} onChange={(e) => setPrice(e.target.value)} min={0} step="0.01" required />
      </div>
      <div className="col-12 col-lg-4">
        <label htmlFor="category" className="form-label">Categoria</label>
        <select id="category" className="form-select bg-dark text-light border-secondary p-2" value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="" disabled>Selecione...</option>
          <option value="Jogos">Jogos</option>
          <option value="Livros">Livros</option>
          <option value="Informatica">Informática</option>
        </select>
      </div>
      <div className="col-12">
        <label htmlFor="description" className="form-label">Descrição</label>
        <textarea id="description" className="form-control bg-dark text-light border-secondary" rows={8} style={{ resize: 'none' }} value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      </div>
      <div className="col-12 mt-4">
        <button type="submit" className="btn btn-primary px-4 py-2 fs-5">Salvar</button>
      </div>
    </form>
  );
}