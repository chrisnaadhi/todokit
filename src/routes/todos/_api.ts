import type { Request } from "@sveltejs/kit";
import PrismaClient from "$lib/prisma";

const prisma = new PrismaClient();

export const api = async (request: Request, data?: Record<string, unknown>) => {
    let body = {};
    let status = 500;
    
    switch (request.method.toUpperCase()) {
        case "GET":
            body = await prisma.todos.findMany();
            status = 200;
            break;
        case "POST":
            // todos.push(data as Todo);
            body = await prisma.todos.create({
                data: {
                    created_at: data.created_at as Date,
                    text: data.text as string,
                    done: data.done as boolean
                }
            })
            status = 201;
            break;
        case "DELETE":
            // todos = todos.filter(todo => todo.uid !== request.params.uid)
            body = await prisma.todos.delete({
                where: {
                    uid: request.params.uid
                }
            })
            status = 200;
            break;
        case "PATCH":
                body = await prisma.todos.update({
                  where: {
                    uid: request.params.uid
                  },
                  data: {
                    done: data.done,
                    text: data.text != null ? data.text : undefined
                  }
                })
                status = 200;
                break;
        default:
            break;
    }

    if (request.method.toUpperCase() !== "GET" && request.headers.accept !== "application/json") {
        return {
            status: 303,
            headers: {
                location: "/"
            }
        };
    }

    return {
        status,
        body
    }
}