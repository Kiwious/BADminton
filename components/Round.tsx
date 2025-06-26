import React, { FC } from "react";
import { Card } from "./ui/card";

interface Team {
  name: string;
  playerOne: string;
  playerTwo: string;
}

interface RoundProps {
  teamOne: Team;
  teamTwo: Team;
}

const Team: FC<Team> = ({ name, playerOne, playerTwo }) => {
  return (
    <Card className="flex flex-col w-[200px] gap-y-0">
      <div>{name}</div>
      <div>{playerOne}</div>
      <div>{playerTwo}</div>
    </Card>
  );
};

const Round: FC<RoundProps> = ({ teamOne, teamTwo }) => {
  return (
    <div className="flex items-center gap-x-12 text-center">
      <Team {...teamOne} />
      <div>VS</div>
      <Team {...teamTwo} />
    </div>
  );
};

export default Round;
