import { v } from "convex/values"
import { internalQuery, mutation, query } from "./_generated/server"
import type { iResult } from "@toolsntuts/utils"

export const insertScore = mutation({
    args: {
        email: v.string(),
        name: v.string(),
        score: v.number(),
        date: v.number(),
    },
    handler: async (ctx, args) => {
        const exists = await ctx.db.query("scores")
            .filter(
                q => q.eq(q.field("email"), args.email)
            ).unique()

        if (exists) {
            const result: iResult = { message: "You have already won voucher in this campaign", status: "error" }
            return result
        } else {

            const id = await ctx.db.insert("scores", {
                email: args.email,
                name: args.name,
                score: args.score,
                date: args.date
            })
            const result: iResult = { message: "Successful", status: "success", data: id }
            return result
        }
    }
})

export const getScoresInternal = internalQuery({
    args: {
    },
    handler: async (ctx, args) => {
        const scores = await ctx.db.query("scores").collect()

        return scores
    }
})

export const getScores = query({
    args: {
    },
    handler: async (ctx, args) => {
        const scores = await ctx.db.query("scores").collect()

        return scores
    }
})