import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";

// Importez votre logo et autres ressources ici
// import logo from './logo.svg';

const Header = () => {
  return (
    <header className="bg-black py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
        <div className="flex items-center">
          {/* Remplacez `logo.svg` par le chemin vers votre propre logo */}
          <img src="./logo.svg" className="h-10 mr-3" alt="Logo" />
          <span className="text-xl font-semibold">Streaming animés</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-red-500">
                Accueil
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-red-500">
                À propos
              </a>
            </li>
            <li>
              <a href="/services" className="text-white hover:text-red-500">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-red-500">
                Contact
              </a>
            </li>
            <li>
              <Button asChild className="bg-white hover:bg-red-500 text-black">
                <Link href="/login">Login</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
