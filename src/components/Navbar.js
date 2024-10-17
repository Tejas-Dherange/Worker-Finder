import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import React from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import SearchModal from "./SearchModal";
import SideBar from "./SideBar";
import { DropdownMenuNav } from "./DropdownMenuNav";
import { Button } from "./ui/button";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <>
      <header className="flex z-50 h-16 stickytop-0 w-full shrink-0 items-center px-4 md:px-6 dark:bg-black/30 backdrop-blur-lg  bg-green-500 ">
        <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
          <MountainIcon className="h-8 w-8  text-white" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <NavigationMenu className="hidden lg:flex ">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className="group  inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-6 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="/profile"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-6 ml-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Profile
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        <SideBar />
        <Link
                href="/StoreB"
                className="group inline-flex h-9 w-max ml-2 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Store
              </Link>
        <SearchModal />
       
        <div className="ml-auto flex gap-5 items-center">
          {!!session && (
            <>
            <Button className="dark:bg-black dark:text-white bg-slate-50 text-black hover:bg-slate-200">

              <Link href={"/account"}>{session?.user?.name}</Link>
            </Button>
            </>
          )}
          <DropdownMenuNav />
        </div>
      </header>
    </>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
