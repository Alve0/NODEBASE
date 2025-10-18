import { trpc } from "@/trpc/server";
import React from "react";

async function page() {
  const users = await trpc.gerUsers();
  return <div>{JSON.stringify(users)}</div>;
}

export default page;
