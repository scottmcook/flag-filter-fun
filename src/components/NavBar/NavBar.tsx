import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Check for the theme in local storage when the component mounts
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    // Apply the theme class to the body element when the theme changes
    document.body.classList.toggle("dark", isDarkTheme);

    // Save the theme preference to local storage
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
    
  }, [isDarkTheme]);

  const toggleTheme = () => {
    // Toggle between dark and light themes
    console.log(isDarkTheme)
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <nav className="flex justify-between px-8 py-5 mb-10 bg-white dark:bg-dark-blue-elements shadow-sm">
      <Link to={'/'}>
        <h1 className="text-3xl  font-bold">Where in the World?</h1>
      </Link>
      <button className="flex justify-center items-center" onClick={() => toggleTheme()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline dark:fill-white w-5 h-5 pr-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>
{isDarkTheme ? 'Light': 'Dark'} Mode</button>
    </nav>
  );
}

export default NavBar;
