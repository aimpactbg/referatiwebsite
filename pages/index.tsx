import Head from 'next/head';

// This is a React component. It's a function that returns JSX (HTML-like code).
// Next.js will render this component when someone visits the homepage.
export default function HomePage() {
  return (
    // The <> and </> are called a Fragment. They let us return multiple elements.
    <>
      {/* The <Head> component from Next.js allows us to add elements
        to the <head> of the HTML document, like the title.
      */}
      <Head>
        <title>Referati | Lead Generation Landing Page</title>
        <meta name="description" content="Landing page for Referati to generate leads." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* In JSX, we use `className` instead of `class` for CSS classes.
        The Tailwind CSS classes will work exactly the same.
      */}
      <div className="bg-gray-50 text-gray-800 font-sans">

        {/* Header Section */}
        <header className="w-full bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto p-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold text-blue-600">
                    Referati
                </a>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#features" className="text-gray-600 hover:text-blue-600 transition duration-300">Features</a>
                    <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition duration-300">Pricing</a>
                    <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">Contact</a>
                    <a href="#get-started" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                        Get Started
                    </a>
                </div>

                {/* Mobile Menu Button - In JSX, SVG attributes are camelCased (e.g., strokeLinecap) */}
                <button className="md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </nav>
        </header>

        {/* Main Content Area */}
        <main className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Page Content Goes Here</h1>
                <p className="text-gray-600 mt-2">Our Hero Section will replace this.</p>
            </div>
        </main>
      </div>
    </>
  );
}
