"use server";

import prisma from "@/lib/prisma";

// create new user
export async function createUser(data: {
  email: string;
  display_name: string;
}) {
  const created = await prisma.user.create({
    data: {
      email: data.email,
      display_name: data.display_name,
    },
  });

  return created;
}
