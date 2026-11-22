export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. Common redirects
    if (url.pathname === "/solutions" || url.pathname === "/solutions.html") {
      return Response.redirect(new URL("/portfolio.html", request.url), 301);
    }
    if (url.pathname === "/terms-conditions") {
      return Response.redirect(new URL("/terms.html", request.url), 301);
    }

    // 2. Root path -> serve index.html directly
    if (url.pathname === "/" || url.pathname === "" || url.pathname === "/index") {
      const indexRequest = new Request(new URL("/index.html", request.url), request);
      return env.ASSETS.fetch(indexRequest);
    }

    // 3. Fetch the requested static asset
    let response = await env.ASSETS.fetch(request);

    // 4. Clean URL fallback (e.g. /about -> /about.html, /services -> /services.html)
    if (response.status === 404 && !url.pathname.includes(".")) {
      const htmlUrl = new URL(`${url.pathname}.html`, request.url);
      const htmlResponse = await env.ASSETS.fetch(new Request(htmlUrl, request));
      if (htmlResponse.status === 200) {
        return htmlResponse;
      }
    }

    // 5. Custom 404 fallback
    if (response.status === 404) {
      const notFoundUrl = new URL("/404.html", request.url);
      const notFoundResponse = await env.ASSETS.fetch(new Request(notFoundUrl, request));
      if (notFoundResponse.status === 200) {
        return new Response(notFoundResponse.body, {
          status: 404,
          statusText: "Not Found",
          headers: notFoundResponse.headers
        });
      }
    }

    return response;
  }
};
