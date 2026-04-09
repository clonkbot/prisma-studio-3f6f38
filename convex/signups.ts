import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const joinLab = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);

    // Check if already signed up
    const existing = await ctx.db
      .query("labSignups")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      return { success: true, message: "Already signed up!" };
    }

    await ctx.db.insert("labSignups", {
      email: args.email,
      userId: userId ?? undefined,
      createdAt: Date.now(),
    });

    return { success: true, message: "Welcome to the lab!" };
  },
});

export const submitInquiry = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);

    await ctx.db.insert("inquiries", {
      name: args.name,
      email: args.email,
      message: args.message,
      userId: userId ?? undefined,
      createdAt: Date.now(),
    });

    return { success: true };
  },
});

export const getSignupCount = query({
  args: {},
  handler: async (ctx) => {
    const signups = await ctx.db.query("labSignups").collect();
    return signups.length;
  },
});
