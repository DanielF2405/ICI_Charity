import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const donationsRouter = createTRPCRouter({
    getUserDonations: protectedProcedure.query(async ({ ctx }) => {
        const userId = ctx.session.user.id;
        const donations = await ctx.db.donation.findMany({
            where: { userId },
        });
        return donations;
    }),
});
