import { prisma } from "@/lib/prisma";
import { createPlayer } from "../actions/createPlayer";

export default async function UserPage() {
  const newPlr = async () => {
    await createPlayer({
      name: "Alice",
      gender: "FEMALE",
    });
  };

  const players = await prisma.player.findMany();
  

  return (
    <div className="flex flex-col w-full gap-y-4 p-4">
      <div className="flex flex-col gap-y-4">
        {players.map((item) => (
          <div key={item.id} className="p-4 border rounded">
            <p>Name: {item.name}</p>
            <p>Gender: {item.gender}</p>
            <p>Created At: {item.createdAt.toString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
