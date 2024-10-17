
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ModeToggle } from "./ModeToggle";
import LogoutButton from "./LogoutButton";
import IsAvailableTogglebtn from "./IsAvailableTogglebtn";
import Link from "next/link";

export async function DropdownMenuNav() {
  const session = await getServerSession(authOptions);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <ModeToggle />
          </DropdownMenuItem>

          {!session && (
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href={"/login"}>Sign In</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link href={"/register"}>Sign Up</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {!!session && (
          <>
            <DropdownMenuItem>
              <IsAvailableTogglebtn />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>
                <LogoutButton />
              </span>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
