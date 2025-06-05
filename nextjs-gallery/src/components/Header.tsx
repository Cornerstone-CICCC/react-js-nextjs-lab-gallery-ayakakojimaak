import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Gallery</h1>
      <nav className="mt-2">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:underline">
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
