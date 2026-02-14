type RouteHandler = (req: Request) => Promise<Response | null>;

export class Router {
  private routes: RouteHandler[] = [];

  use(handler: RouteHandler) {
    this.routes.push(handler);
    return this;
  }

  async handle(req: Request): Promise<Response> {
    for (const route of this.routes) {
      const response = await route(req);
      if (response) return response;
    }

    return Response.json(
      { success: false, error: 'Route not found' },
      { status: 404 }
    );
  }
}