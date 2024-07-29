import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function ToggleButton() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="toggle-button" />
      <Label htmlFor="toggle-button" className="text-sm font-medium">
        Toggle Button
      </Label>
    </div>
  );
}
