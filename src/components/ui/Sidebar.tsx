import Link from "next/link"

export default function Sidebar() {
    return (
    <div className="flex flex-col w-64 h-full p-6 gap-2">
      <div className="mb-8 px-2">
        <h2 className="text-xl font-bold text-gray-900 leading-none">Parth Nikam</h2>
      </div>
      <nav className="flex flex-col gap-1">
        <Link 
          href="/" 
          className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
          About
        </Link>
        <Link 
          href="/projects" 
          className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
          Projects
        </Link>
      </nav>
    </div>
    );
}