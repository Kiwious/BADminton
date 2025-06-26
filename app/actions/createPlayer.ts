import { prisma } from "@/lib/prisma";

type Gender = "MALE" | "FEMALE" | "OTHER";
interface NewPlayer {
  name: string;
  gender: Gender;
}

export async function createPlayer({ name, gender }: NewPlayer) {
  const newPlayer = await prisma.player.create({
    data: {
      name,
      gender,
    },
  });
  return newPlayer;
}
