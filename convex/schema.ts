import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables,
  // Store newsletter signups / lab join requests
  labSignups: defineTable({
    email: v.string(),
    userId: v.optional(v.id("users")),
    createdAt: v.number(),
  }).index("by_email", ["email"]),

  // Store inquiry submissions
  inquiries: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    userId: v.optional(v.id("users")),
    createdAt: v.number(),
  }).index("by_created", ["createdAt"]),
});
