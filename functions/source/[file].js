export async function onRequestGet(ctx) {
    //console.log("Request URL:", ctx.request.url);

    const path = new URL(ctx.request.url).pathname.replace("/source/", "");
    //console.log("Fetching R2 file:", path);

    const file = await ctx.env.source.get(path);
    if (!file) return new Response(null, { status: 404 });
    return new Response(file.body, {
        headers: { "Content-Type": file.httpMetadata.contentType },
    });
}