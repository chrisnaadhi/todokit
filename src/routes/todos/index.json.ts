import type { RequestHandler } from "@sveltejs/kit"

// TODO: Persist in database
let todos: Todo[] = [];

export const get: RequestHandler = () => {
    return {
        status: 200,
        body: todos
    }
}

export const post: RequestHandler<{}, FormData> = (req) => {
    todos.push({
        created_at: new Date(),
        text: req.body.get("todo"),
        done: false
    });

    return {
        status: 303,
        headers: {
            location: "/"
        }
    }
}