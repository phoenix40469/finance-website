import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Finance Grind
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
          <Link href="/resources" className="hover:text-blue-600 transition">Resources</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
        </div>
        {/* Mobile Menu (Add toggle logic if needed) */}
        <div className="md:hidden">
          <button className="text-gray-600">Menu</button>
        </div>
      </div>
    </nav>
  );
}
