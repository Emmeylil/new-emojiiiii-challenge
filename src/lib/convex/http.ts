import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";
import type { Id } from "./_generated/dataModel";


const http = httpRouter()


http.route({
    path: '/scores',
    method: 'GET',
    handler: httpAction(async (ctx, req) => {

        try {
            const result = await ctx.runQuery(internal.scores.getScoresInternal, {})
            return new Response(JSON.stringify(result), { status: 200 })
        } catch (error: any) {
            return new Response(JSON.stringify({ message: error.message, error: true }))
        }
    })
})

export default http