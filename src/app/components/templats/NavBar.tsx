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
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import { Popcorn, ChevronDown } from 'lucide-react';

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
    { name: "Movies" },
    { name: "About", href: "/about" },
  ];

  const subMenuItems = [
    { name: "En Cines", href: "/movies/now-playing" },
    { name: "Popular", href: "/movies/popular" },
    { name: "Mejor Valoradas", href: "/movies/top-rated" },
    { name: "Proximamente", href: "/movies/upcoming" },
  ];


  return (
    <Navbar
      //isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`bg-sky-950 transition-transform duration-400
                  ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
                  ${lastScrollTop == 0 ? 'top-0 transition-transform duration-300' : 'fixed top-0 w-full z-[1000]'}`}
    //style={lastScrollTop == 0 ? {top: 0, transition} : {position: 'fixed', top: 0, width: '100%', zIndex: 1000}}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-sky-800"
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <Popcorn size={24} className="text-white" />
          <p className="font-bold text-inherit text-white p-4">Cinema App</p>
        </NavbarBrand>
      </NavbarContent>
      
      <NavbarBrand 
        className="hidden sm:flex" 
      >
        <Popcorn size={24} className="text-white" />
        <p className="font-bold text-inherit text-white p-4">Cinema App</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">

        {menuItems.map((item, index) => (
          <div
            key={index}>
            {item.name === "Movies" ? (
              <Dropdown key={index} className="bg-sky-950/80">
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      as = {Link}
                      disableRipple
                      className={`font-medium ${pathname.startsWith("/movies/") ? 'text-sky-500' : 'text-white'}
                              p-0 bg-transparent data-[hover=true]:bg-transparent`}
                      endContent={<ChevronDown size={16} />}
                      radius="sm"
                      variant="solid"
                      data-hover="true"
                    >
                      
                      Movies
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  aria-label="ACME features"
                  className="w-[340px]"
                  itemClasses={{
                    base: "gap-2",
                  }}

                >
                  {subMenuItems.map((subItem) => (
                    <DropdownItem
                      className="data-[hover]:bg-sky-700"
                      textValue={subItem.name}
                      key={subItem.href}>
                      <Link
                        className={`flex w-full h-full ${(pathname === subItem.href) ? 'text-sky-500' : 'text-white'}`}
                        href={subItem.href}
                      >
                        {subItem.name}
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>

            ) : (
              <NavbarItem
                key={item.href}
                isActive={pathname === item.href}
              >
                <Link
                  className={`data-[hover=true]:text-sky-500 font-medium ${(pathname === item.href) ? 'text-sky-500' : 'text-white '}`}
                  href={item.href}>
                  {item.name}
                </Link>
              </NavbarItem>
            )}
          </div>
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
        {menuItems.map((item, index) => (
          <div
            key={index}>
            {item.name === "Movies" ? (

              <Dropdown key={index} className="bg-sky-950/90">
                <DropdownTrigger>
                  <Button as = {Link}
                    disableRipple
                    className={`font-medium bg-black ${pathname.startsWith("/movies/") ? 'text-sky-500' : 'text-white'}
                            p-0 bg-transparent data-[hover=true]:bg-transparent`}
                    endContent={<ChevronDown size={16} />}
                    //radius="sm"
                    variant="light"
                    data-hover="true"
                  >
                  Movies
                  </Button>
                </DropdownTrigger>
                <DropdownMenu 
                  aria-label="ACME features"
                  className="w-[340px]"
                  itemClasses={{
                    base: "gap-2",
                  }}
                >
                  {subMenuItems.map((subItem) => (
                    <DropdownItem
                      className="hover:bg-sky-900/90"
                      textValue={subItem.name}
                      key={subItem.href}>
                      <Link
                        className={`sm:hover:bg-black font-medium flex w-full h-full ${(pathname === subItem.href) ? 'text-sky-500' : 'text-white'}`}
                        href={subItem.href}
                      >
                        {subItem.name}
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavbarMenuItem 
                key={item.href}>
                <Link
                  className={`p-1 font-medium ${(pathname === item.href) ? 'text-sky-500' : 'text-white'}`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
            )}
          </div>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
