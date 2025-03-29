import {R2Bucket} from "@cloudflare/workers-types";

interface CloudflareEnv {
    source: R2Bucket;
}

export const onRequest: PagesFunction<Env> = async (context) => {
    const obj = await context.env.source.get("some-key");
    if (obj === null) {
        return new Response("Not found", { status: 404 });
    }
    return new Response(obj.body);
};