import CreatePlayerButton from "@/components/CreatePlayerButton";
import Round from "@/components/Round";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="size-full flex">
      <div className="w-[60%] flex text-white h-fit justify-center">
        <div className="flex flex-col items-center justify-center gap-y-4 p-4">
          <Label>Current Round</Label>
          <Round
            teamOne={{
              name: "Team A",
              playerOne: "Alice",
              playerTwo: "Bob",
            }}
            teamTwo={{
              name: "Team B",
              playerOne: "Charlie",
              playerTwo: "Diana",
            }}
          />
        </div>
      </div>
      <div className="w-[40%] flex items-end justify-end border-l border-gray-700">
        <CreatePlayerButton />
      </div>
    </div>
  );
}
