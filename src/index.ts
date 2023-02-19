import fastify from "fastify";

// Instantiate the server
const server = fastify({ logger: true });

// Declare a route
server.get("/", async (request, reply) => {
  return { hello: "world" };
});

// Run the server!
const start = async () => {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
