export default function RootLayout() {
  return (
    <div className="container-fluid">
        <header>
            <nav className="nav d-flex  justify-content-between">
                <h1>React Stock</h1>
                <button>Inicío</button> // esse butom vai ter um link que vai levar ao Dashboard com Link do react router
                <button>Items</button> // aqui tb
            </nav>
        </header>
    </div>
  );
}