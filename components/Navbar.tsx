"use client"
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
  BlogIcon,
} from "@/components/icons";

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80; // 可根据 Navbar 实际高度调整
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export const Navbar = () => {
  const navItems = [
    { href: "about-me", label: "About Me" },
    { href: "publications", label: "Publications" },
    { href: "projects", label: "Projects" },
    { href: "rewards", label: "Honors and Awards" },
    { href: "educations", label: "Educations" },
  ];

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" isBordered={true}>
      <NavbarContent justify="start" className="gap-10">
        <NavbarBrand>
          <NavbarItem>
            <NextLink className="flex justify-start items-center gap-1" href="/">
              {/* <Logo /> */}
              <p className="font-bold text-inherit">HomePage</p>
            </NextLink>
          </NavbarItem>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="start">


          {navItems.map(({ href, label }) => (
            <NavbarItem key={href}>
              <div className="group relative inline-block">
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(href);
                  }}
                  color="foreground"
                  className="relative z-10 transition-colors duration-300"
                >
                  {label}
                </Link>
                <span
                  className="absolute inset-x-0 bottom-[-10px] h-1 w-0 bg-default-700 transition-all duration-300 group-hover:w-full"
                />
              </div>
            </NavbarItem>
          ))}
        </NavbarContent>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          {/* <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link> */}
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href="https://www.imlld.com"
            startContent={<BlogIcon className="text-primary" />}
            variant="flat"
          >
            Visit My Blog
          </Button>
        </NavbarItem>
      </NavbarContent>

    </HeroUINavbar>
  );
};
