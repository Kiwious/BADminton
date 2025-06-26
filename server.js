const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

// --- PLAYER ROUTES ---

// Get all players
app.get('/api/players', async (req, res) => {
  const players = await prisma.player.findMany({ include: { pauses: true, rankings: true } });
  res.json(players);
});

// Add a player
app.post('/api/players', async (req, res) => {
  const { name, gender } = req.body;
  const player = await prisma.player.create({ data: { name, gender } });
  res.json(player);
});

// Update a player
app.put('/api/players/:id', async (req, res) => {
  const { id } = req.params;
  const { name, gender, isActive } = req.body;
  const player = await prisma.player.update({
    where: { id: Number(id) },
    data: { name, gender, isActive }
  });
  res.json(player);
});

// Delete a player
app.delete('/api/players/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.player.delete({ where: { id: Number(id) } });
  res.json({ success: true });
});

// --- PAUSE ROUTES ---

app.get('/api/pauses', async (req, res) => {
  const pauses = await prisma.pause.findMany();
  res.json(pauses);
});

app.post('/api/pauses', async (req, res) => {
  const { playerId, start, end } = req.body;
  const pause = await prisma.pause.create({ data: { playerId, start, end } });
  res.json(pause);
});

// --- ROUND ROUTES ---

app.get('/api/rounds', async (req, res) => {
  const rounds = await prisma.round.findMany({ include: { matches: true, rankings: true } });
  res.json(rounds);
});

app.post('/api/rounds', async (req, res) => {
  const { name } = req.body;
  const round = await prisma.round.create({ data: { name } });
  res.json(round);
});

// --- MATCH ROUTES ---

app.get('/api/matches', async (req, res) => {
  const matches = await prisma.match.findMany({ include: { sets: true } });
  res.json(matches);
});

app.post('/api/matches', async (req, res) => {
  const {
    roundId,
    team1Player1Id,
    team1Player2Id,
    team2Player1Id,
    team2Player2Id,
    winnerTeam,
    finished
  } = req.body;
  const match = await prisma.match.create({
    data: {
      roundId,
      team1Player1Id,
      team1Player2Id,
      team2Player1Id,
      team2Player2Id,
      winnerTeam,
      finished
    }
  });
  res.json(match);
});

// --- SET ROUTES ---

app.get('/api/sets', async (req, res) => {
  const sets = await prisma.set.findMany();
  res.json(sets);
});

app.post('/api/sets', async (req, res) => {
  const { matchId, team1Score, team2Score, setNumber } = req.body;
  const set = await prisma.set.create({
    data: { matchId, team1Score, team2Score, setNumber }
  });
  res.json(set);
});

// --- RANKING ROUTES ---

app.get('/api/rankings', async (req, res) => {
  const rankings = await prisma.ranking.findMany();
  res.json(rankings);
});

app.post('/api/rankings', async (req, res) => {
  const { playerId, roundId, points, wins, losses } = req.body;
  const ranking = await prisma.ranking.create({
    data: { playerId, roundId, points, wins, losses }
  });
  res.json(ranking);
});

// --- START SERVER ---
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});