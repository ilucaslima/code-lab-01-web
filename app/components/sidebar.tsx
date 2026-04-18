export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-black text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-6">Meu App</h1>

      <nav className="flex flex-col gap-4">
        <a href="/" className="hover:text-yellow-400">Home</a>
        <a href="/" className="hover:text-yellow-400"> Uploads</a>
    
      </nav>
    </aside>
  );
}