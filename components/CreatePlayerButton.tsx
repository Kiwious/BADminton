"use client";

import { createPlayer } from "@/app/actions/createPlayer";

export function CreatePlayerButton() {
  const handleClick = async () => {
    await createPlayer({
      name: "Alice",
      gender: "FEMALE",
    });
    // Optionally, refresh the page or update state here
  };

  return <button onClick={handleClick}>Create Player</button>;
}
