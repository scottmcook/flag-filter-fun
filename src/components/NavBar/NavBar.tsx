import { useState, useEffect } from "react";


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
    <nav className="flex justify-between px-20 mb-10 dark:bg-gray-700 border-b-slate-600 border-b-2">
      <h1 className="text-3xl dark:text-white font-bold">Where in the World?</h1>
      <button className="dark:text-white" onClick={() => toggleTheme()}>Dark Mode</button>
    </nav>
  );
}

export default NavBar;
