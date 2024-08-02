import ProfileCard from "@/components/ProfileCard";

export default function page() {
  const profiles = [
    {
      name: "John Doe",
      profession: "Software Engineer",
      location: "San Francisco, CA",
      avatarFallback: "JD",
    },
    {
      name: "Jane Smith",
      profession: "Product Designer",
      location: "New York, NY",
      avatarFallback: "JS",
    },
    {
      name: "Michael Johnson",
      profession: "Marketing Manager",
      location: "Chicago, IL",
      avatarFallback: "MJ",
    },
    {
      name: "Sarah Anderson",
      profession: "Data Analyst",
      location: "Seattle, WA",
      avatarFallback: "SA",
    },
    {
      name: "Robert Davis",
      profession: "Project Manager",
      location: "Miami, FL",
      avatarFallback: "RD",
    },
    {
      name: "Emily Wilson",
      profession: "UI/UX Designer",
      location: "Boston, MA",
      avatarFallback: "EW",
    },
    {
      name: "James Lee",
      profession: "Software Developer",
      location: "Los Angeles, CA",
      avatarFallback: "JL",
    },
    {
      name: "Karen Simmons",
      profession: "Business Analyst",
      location: "Houston, TX",
      avatarFallback: "KS",
    },
  ];
  return (
    <section className="container px-4 md:px-6 py-12 md:py-16">
      <div className="grid gap-8">
        <div className="flex items-center justify-between">
          {/* <h1 className="text-3xl font-bold tracking-tight">Professionals</h1> */}
          {/* <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <FilterIcon className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <ListOrderedIcon className="w-4 h-4" />
              Sort
            </Button>
          </div> */}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function ListOrderedIcon(props) {
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
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
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
