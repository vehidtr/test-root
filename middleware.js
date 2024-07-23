export function middleware(request) {
    const url = new URL(request.url);
  
    if (url.pathname.startsWith("/app")) {
      url.hostname = "app.moonastudios.com";
      return Response.redirect(url.toString(), 307);
    } else if (url.pathname === "/") {
      url.hostname = "landing.moonastudios.com";
      return Response.redirect(url.toString(), 307);
    }
  
    return fetch(request);
  }
  