export async function onRequestGet(ctx) {
    console.log("once again"); // 调试输出
    const path = new URL(ctx.request.url).pathname.replace("/source/", "");
    const file = await ctx.env.source.get(path);
    if (!file) return new Response(null, { status: 404 });
    return new Response(file.body, {
        headers: { "Content-Type": file.httpMetadata.contentType },
    });
}