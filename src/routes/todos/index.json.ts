import type { RequestHandler } from "@sveltejs/kit"
import { api } from "./_api"

export const get: RequestHandler = (request) => {
    return api(request);
}

export const post: RequestHandler<{}, FormData> = (request) => {
    return api(request, {
        uid: `${Date.now()}`, // TODO: Replace the UID based on UUID Package
        created_at: new Date(),
        text: request.body.get("todo"),
        done: false
    });
}