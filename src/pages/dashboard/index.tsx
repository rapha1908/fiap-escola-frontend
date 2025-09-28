export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="bg-red-500 max-w-7xl mx-auto px-4 py-6">
        <header>
          <nav className="flex justify-between items-center px-4 bg-cyan-600 h-20 rounded-lg ">
            <h1>Dashboard</h1>
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg bg-amber-50 text-black p-2 w-2xs"
            />
            <button>Logout</button>
          </nav>
        </header>
        <section>
          <h2>Welcome to the Dashboard</h2>
          <p>This is the dashboard page</p>
        </section>
      </div>
    </main>
  );
}
