"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchModal() {
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  function onSearch() {
    router.push(`/listing/${profession}/${location}`);
    setOpen(false);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="ml-6">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search Worker</DialogTitle>
          <DialogDescription>
            Put profession's name and location.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="profession" className="text-right">
              Profession
            </Label>
            <Input
              id="profession"
              placeholder="e.g electrician"
              className="col-span-3"
              type="text"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            <Input
              id="location"
              className="col-span-3"
              placeholder="e.g jorpati"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={onSearch}>
            Search
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
