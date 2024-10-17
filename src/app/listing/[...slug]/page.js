import { searchProfileList } from "@/actions/profileActions";
import ProfileCard from "@/components/ProfileCard";
import { Button } from "@/components/ui/button";
import { FilterIcon, ListOrderedIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function page({ params }) {
  console.log(params);
  console.log(params?.slug[0]);
  const profession = params?.slug[0] || "";
  const location = params?.slug[1] || "";

  const profiles = await searchProfileList(profession, location);

  // console.log(profiles[0]._id.toString());
  console.log(profiles);

  return (
    <section className="container px-4 md:px-6 py-12 md:py-16">
      <div className="grid gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Professionals</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <FilterIcon className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <ListOrderedIcon className="w-4 h-4" />
              Sort
            </Button>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {profiles?.map((profile, index) => (
            <Link href={`/view/${profile._id.toString()}`}>
              <ProfileCard key={index} {...profile} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
