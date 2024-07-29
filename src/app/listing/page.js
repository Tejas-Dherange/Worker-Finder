import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Component() {
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
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="text-lg font-medium">John Doe</div>
              <div className="text-sm text-muted-foreground">
                Software Engineer
              </div>
              <div className="text-sm text-muted-foreground">
                San Francisco, CA
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="text-lg font-medium">Jane Smith</div>
              <div className="text-sm text-muted-foreground">
                Product Designer
              </div>
              <div className="text-sm text-muted-foreground">New York, NY</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="text-lg font-medium">Michael Johnson</div>
              <div className="text-sm text-muted-foreground">
                Marketing Manager
              </div>
              <div className="text-sm text-muted-foreground">Chicago, IL</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="text-lg font-medium">Sarah Anderson</div>
              <div className="text-sm text-muted-foreground">Data Analyst</div>
              <div className="text-sm text-muted-foreground">Seattle, WA</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>RD</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="text-lg font-medium">Robert Davis</div>
              <div className="text-sm text-muted-foreground">
                Project Manager
              </div>
              <div className="text-sm text-muted-foreground">Miami, FL</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>EW</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="text-lg font-medium">Emily Wilson</div>
              <div className="text-sm text-muted-foreground">
                UI/UX Designer
              </div>
              <div className="text-sm text-muted-foreground">Boston, MA</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="text-lg font-medium">James Lee</div>
              <div className="text-sm text-muted-foreground">
                Software Developer
              </div>
              <div className="text-sm text-muted-foreground">
                Los Angeles, CA
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>KS</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="text-lg font-medium">Karen Simmons</div>
              <div className="text-sm text-muted-foreground">
                Business Analyst
              </div>
              <div className="text-sm text-muted-foreground">Houston, TX</div>
            </div>
          </div>
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
