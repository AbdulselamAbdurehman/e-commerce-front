
export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Store</h1>
        <nav>
          <a href="/" className="px-4">Home</a>
          <a href="/cart" className="px-4">Cart</a>
        </nav>
      </div>
    </header>
  );
}
