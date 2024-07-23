export async function middleware(req) {
  const url = new URL(req.url);

  if (url.pathname.startsWith("/app")) {
    return fetch(`https://app.example.com${url.pathname}`);
  }

  return fetch(`https://landing.example.com${url.pathname}`);
}
