"use server";

import { db } from "@/lib/db";

export const addNavigator = async (navigator: string) => {
  try {
    await db.navigator.create({
      data: {
        navigator,
      },
    });

    return null;
  } catch {
    return null;
  }
};
