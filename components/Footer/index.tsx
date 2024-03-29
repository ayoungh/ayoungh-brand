import React from 'react'
import { useThemeContext } from '../../context/ThemeContext';

interface Props {
    children?: React.ReactNode;
}


const Footer = ({children}: Props) => {
    const { themeState, setThemeState } = useThemeContext();
    return (
      <footer className="flex">
        <div className="border flex-grow">
            <button onClick={()=>{setThemeState(!themeState)}}>Theme {themeState ? "light" : "dark"}</button>
        </div>
        <div className="border flex-grow">
          <a
            href="https://vercel.com?utm_source=fan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proudly Powered by{' '}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/vercel.svg" alt="Vercel Logo" className=" h-5" />
          </a>
        </div>
      </footer>
    );
}

export default Footer;
