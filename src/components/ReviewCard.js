import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const ReviewCard = ({ avatarFallback, name, reviewText }) => (
  <div className="bg-background rounded-lg p-6 shadow-sm">
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-4">
        <Avatar className="w-10 h-10 border">
          <AvatarImage
            src="/placeholder-user.jpg"
            alt={`@${name.toLowerCase().replace(" ", "")}`}
          />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium">{name}</h4>
          {/* <p className="text-sm text-muted-foreground">{date}</p> */}
        </div>
      </div>
      <Button variant="ghost" size="icon">
        <HeartIcon className="w-5 h-5 fill-primary" />
        <span className="sr-only">Like</span>
      </Button>
    </div>
    <p className="mt-4 text-muted-foreground">{reviewText}</p>
  </div>
);

export default ReviewCard;

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

//   <Button variant="ghost" size="icon" className="text-primary">
//     <HeartIcon className="w-5 h-5" />
//     <span className="sr-only">Like</span>
//   </Button>;

function HeartIcon1(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
