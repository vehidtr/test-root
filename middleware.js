export function middleware(request) {
  const url = new URL(request.url);

  // Redirect requests to /app/* to the app subdomain
  if (url.pathname.startsWith("/app")) {
    url.hostname = "app.moonastudios.com";
    return Response.redirect(url.toString(), 308);
  }

  // Default redirect to the landing subdomain
  url.hostname = "landing.moonastudios.com";
  return Response.redirect(url.toString(), 308);
}
