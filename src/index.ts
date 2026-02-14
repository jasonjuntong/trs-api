import pg from "./lib/db";

const server = Bun.serve({
    port: 3000,
    routes: {
        "/":  new Response("BUN"),
        "/api/v1/projects": {
            GET: async ()  => {
                const projects = await pg`SELECT * FROM projects`;
                return Response.json(projects);
            }
        }
    },
    fetch() {
        return new Response("Not Found", { status: 404 });
    },
})

console.log(`Listening on ${server.url}`);