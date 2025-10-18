import { baseProcedure, createTRPCRouter } from "../init";
import prisma from "@/lib/bd";
export const appRouter = createTRPCRouter({
  gerUsers: baseProcedure.query(() => {
    return prisma.user.findMany();
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
