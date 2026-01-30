import Fastify from "fastify";

const server = Fastify({ logger: true });

server.get("/ping", async (request, reply) => {
  return {
    status: "Livesport Backend: Ready",
    timestamp: new Date().toISOString(),
  };
});

const start = async () => {
  try {
    await server.listen({ port: 3000 });
    console.log("Server is running at http://localhost:3000");
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

interface FootballMatch {
  id: number;
  homeTeam: string;
  awayTeam: string;
  score: string;
  isLive: boolean;
}

server.get("/match", async (request, reply): Promise<FootballMatch> => {
  return {
    id: 1,
    homeTeam: "Real Madrid",
    awayTeam: "FC Barcelona",
    score: "2-1",
    isLive: true,
  };
});

const updateScoreSchema = {
  body: {
    type: "object",
    required: ["matchId", "newScore"],
    properties: {
      matchId: { type: "number" },
      newScore: { type: "string" },
    },
  },
};

server.post(
  "/update-score",
  { schema: updateScoreSchema },
  async (request, reply) => {
    const { matchId, newScore } = request.body as {
      matchId: number;
      newScore: string;
    };
    server.log.info(`Updating match ${matchId} to ${newScore}`);
    return {
      success: true,
      message: `Score for match ${matchId} updated to ${newScore}`,
    };
  },
);

start();
