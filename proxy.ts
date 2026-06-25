import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(
  async function proxy(req: any) {
    console.log("look at me", req.kindeAuth);
  },
  {
    // Proxy still runs on all routes, but doesn't protect the home route
    publicPaths: ["/"], // e.g. ["/api/public", "/blog", "/about"]
  }
);

export const config = {
  matcher: [
    "/blog/:id/edit",
    "/blog/create"
  ],
}
