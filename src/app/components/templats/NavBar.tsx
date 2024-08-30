'use client';
import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { PocketKnife } from "lucide-react";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

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

  return (
    <Navbar
      className={`bg-sky-950 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}
    >
      <NavbarBrand>
        <PocketKnife size={24} />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
