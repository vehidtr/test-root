export async function middleware(req) {
  const url = new URL(req.url);

  if (url.pathname.startsWith("/app")) {
    return fetch(`https://app.moonastudios.com${url.pathname}`);
  }

  return fetch(`https://landing.moonastudios.com${url.pathname}`);
}
