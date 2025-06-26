"use client";

import CreatePlayerButton from "@/components/CreatePlayerButton";
import Leaderboard from "@/components/Leaderboard";
import Round from "@/components/Round";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Home() {
  const rounds = [
    {
      teamOne: {
        name: "Team A",
        playerOne: "Alice",
        playerTwo: "Bob",
      },
      teamTwo: {
        name: "Team B",
        playerOne: "Charlie",
        playerTwo: "Diana",
      },
    },
    {
      teamOne: {
        name: "Team C",
        playerOne: "Eve",
        playerTwo: "Frank",
      },
      teamTwo: {
        name: "Team D",
        playerOne: "Grace",
        playerTwo: "Heidi",
      },
    },
    {
      teamOne: {
        name: "Team E",
        playerOne: "Ivan",
        playerTwo: "Judy",
      },
      teamTwo: {
        name: "Team F",
        playerOne: "Karl",
        playerTwo: "Lena",
      },
    },
    {
      teamOne: {
        name: "Team G",
        playerOne: "Mallory",
        playerTwo: "Niaj",
      },
      teamTwo: {
        name: "Team H",
        playerOne: "Olivia",
        playerTwo: "Peggy",
      },
    },
    {
      teamOne: {
        name: "Team I",
        playerOne: "Quentin",
        playerTwo: "Rita",
      },
      teamTwo: {
        name: "Team J",
        playerOne: "Sybil",
        playerTwo: "Trent",
      },
    },
  ];

  return (
    <div className="size-full flex">
      <div className="w-[60%] flex text-white h-fit justify-center">
        <div className="flex flex-col items-center justify-center gap-y-18 p-4">
          <div>
            <Label className="text-xl">Current Round</Label>
            <Round {...rounds?.at(0)!} />
          </div>
          <div>
            <Label className="text-xl">Next Round</Label>
            <div className="flex flex-col gap-y-4">
              {rounds.slice(1).length > 0 ? (
                rounds?.map((item) => (
                  <Round
                    key={item.teamOne.name + item.teamTwo.name}
                    {...item}
                  />
                ))
              ) : (
                <Label className="text-gray-500">
                  Keine weiteren Runden verfügbar
                </Label>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[40%] flex flex-col items-end justify-start border-l border-gray-700 p-6 gap-y-4">
        <Card className="w-full p-6 flex flex-col items-center gap-y-4">
          <Leaderboard />
        </Card>
        <CreatePlayerButton />
      </div>
    </div>
  );
}
