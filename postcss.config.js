// This import statement is the crucial part.
// It tells Next.js to load our global CSS file on every page.
import '../styles/globals.css';

// This is a standard Next.js setup.
// The 'Component' prop is the active page, and 'pageProps' are its initial props.
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;