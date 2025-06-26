import React, { FC } from "react";

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
    <div className="flex flex-col">
      <div>{name}</div>
      <div>{playerOne}</div>
      <div>{playerTwo}</div>
    </div>
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
