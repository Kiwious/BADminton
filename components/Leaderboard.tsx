import { Label } from "@/components/ui/label";

type LeaderboardEntry = {
  name: string;
  points: number;
  wins: number;
  losses: number;
};

const sampleLeaderboard: LeaderboardEntry[] = [
  { name: "Alice", points: 12, wins: 4, losses: 1 },
  { name: "Bob", points: 10, wins: 3, losses: 2 },
  { name: "Charlie", points: 8, wins: 2, losses: 3 },
  { name: "Diana", points: 6, wins: 2, losses: 4 },
];

export default function Leaderboard() {
  return (
    <div className="w-full p-4 text-white">
      <Label className="text-xl mb-2 block text-white">Leaderboard</Label>
      <table className="w-full text-left border-collapse text-white">
        <thead>
          <tr>
            <th className="py-1">Name</th>
            <th className="py-1">Punkte</th>
            <th className="py-1">Siege</th>
            <th className="py-1">Niederl.</th>
          </tr>
        </thead>
        <tbody>
          {sampleLeaderboard.map((entry) => (
            <tr key={entry.name}>
              <td className="py-1">{entry.name}</td>
              <td className="py-1">{entry.points}</td>
              <td className="py-1">{entry.wins}</td>
              <td className="py-1">{entry.losses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}