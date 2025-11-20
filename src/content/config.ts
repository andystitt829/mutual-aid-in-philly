// src/content/config.ts
import { defineCollection } from "astro:content";
import { airtableLoader } from "@ascorbic/airtable-loader";

const sites = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "tblYm1MR7T8YJ1k6l",
  }),
});

export const collections = { sites };