'use client'; // Asegura que todo el código en este archivo se ejecute en el cliente

import React, { useEffect } from "react";
import { usePathname } from "next/navigation"; // Usa usePathname desde next/navigation
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from "@nextui-org/react";
import { Popcorn } from 'lucide-react';

export default function 
NavBar() {
  const pathname = usePathname(); // Obtiene la ruta actual
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollTop, setLastScrollTop] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Si el usuario se desplaza hacia abajo
      if (scrollTop > lastScrollTop) {
        setIsVisible(false);
      } 
      // Si el usuario se desplaza hacia arriba
      else {
        setIsVisible(true);
      }

      // Actualiza la última posición de desplazamiento
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Popular", href: "/movies/popular" },
    { name: "Proximamente", href: "/movies/upcoming" },
    { name: "About", href: "/about" },
  ];

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen} 
      className={`bg-sky-950 transition-transform duration-400 justify-around
                  ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
                  ${lastScrollTop == 0 ? 'top-0 transition-transform duration-300' : 'fixed top-0 w-full z-[1000]'}`}
      //style={lastScrollTop == 0 ? {top: 0, transition} : {position: 'fixed', top: 0, width: '100%', zIndex: 1000}}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Popcorn size={24} className="text-white" />
          <p className="font-bold text-inherit text-white p-4">Cinema App</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href} isActive={pathname === item.href}>
            <Link 
             className={(pathname === item.href) ? 'text-sky-500' : 'text-white'}
              href={item.href}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link 
            href="#"
            className="text-white"
          >Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu
        className="bg-sky-950/40"
      >
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              className={`w-full ${(pathname === item.href) ? 'text-sky-500' : 'text-white'}`}
              //color={pathname === item.href ? "primary" : "foreground"}
              //className="w-full"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
