export default function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center px-4 bg-gray-500 h-20 rounded-lg ">
        <h1>Dashboard</h1>
        <input
          type="text"
          placeholder="Search"
          className="rounded-lg bg-amber-50 text-black p-2 w-2xs"
        />
        <button>Logout</button>
      </nav>
    </header>
  );
}
