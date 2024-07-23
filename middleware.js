// middleware.js

export function middleware(request) {
    const url = new URL(request.url);
  
    if (url.pathname.startsWith("/app")) {
      // Rewrite requests starting with /app to the app subdomain
      url.hostname = "app.moonastudios.com";
      return Response.redirect(url.toString(), 307);
    } else if (url.pathname === "/") {
      // Rewrite root path to the landing page
      url.hostname = "landing.moonastudios.com";
      return Response.redirect(url.toString(), 307);
    }
  
    // For other paths, serve the content from the current domain
    return fetch(request);
  }
  