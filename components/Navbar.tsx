// File: components/Navbar.tsx
// This is our reusable Navbar component.
// Note: The href attributes now point to the new section IDs.

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600">
          Referati
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition duration-300">Услуги</a>
          <a href="#process" className="text-gray-600 hover:text-blue-600 transition duration-300">Процес на работа</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition duration-300">Цени</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Контакти</a>
          <a href="#final-cta" className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Поръчай сега
          </a>
        </div>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
    </header>
  );
}