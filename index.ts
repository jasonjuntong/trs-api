import { getProjects } from "./db";

const server = Bun.serve({
    routes: {
        "/" : new Response("TRS API"),
        "/projects": {
			GET: async () => {
				const projects = await getProjects();
				return Response.json(projects);
			},
        }
    },
    fetch() {
		return new Response("Unmatched route");
	}
})

console.log(`Listening on ${server.url}`);