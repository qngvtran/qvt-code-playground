const fastify = require("fastify")({ logger: true });

const PORT = 3000;

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
    console.log("Server is running at http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
