import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({

    scores: defineTable({
        email: v.string(),
        name: v.string(),
        score: v.number(),
        date: v.number(),
    })
})