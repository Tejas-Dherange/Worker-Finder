import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ProfileCard = ({ name, profession, location, avatarFallback }) => (
  <div className="flex items-center gap-4">
    <Avatar className="w-16 h-16">
      <AvatarImage src="/placeholder-user.jpg" />
      <AvatarFallback>{avatarFallback}</AvatarFallback>
    </Avatar>
    <div className="grid gap-1">
      <div className="text-lg font-medium">{name}</div>
      <div className="text-sm text-muted-foreground">{profession}</div>
      <div className="text-sm text-muted-foreground">{location}</div>
    </div>
  </div>
);

export default ProfileCard;
