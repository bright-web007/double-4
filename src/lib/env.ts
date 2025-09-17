import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string(),
  NEXT_PUBLIC_FOOTER_FORM_UUID: z.string(),
  NEXT_PUBLIC_FOOTER_RESPONSE_FIELD_ID: z.string(),
  NEXT_PUBLIC_FORM_UUID: z.string(),
  NEXT_PUBLIC_FIRST_NAME_ID: z.string(),
  NEXT_PUBLIC_LAST_NAME_ID: z.string(),
  NEXT_PUBLIC_EMAIL_ID: z.string(),
  NEXT_PUBLIC_PHONE_ID: z.string(),
  NEXT_PUBLIC_SUBJECT_ID: z.string(),
  NEXT_PUBLIC_MESSAGE_ID: z.string(),
  NEXT_PUBLIC_TERMS_ID_KEY: z.string(), // field ID as string
  NEXT_PUBLIC_TERMS_ID: z.string().transform((val) => val === "true"), // boolean value
  NEXT_PUBLIC_GRAPHQL_URI: z.string(),
});

const raw = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_FOOTER_FORM_UUID: process.env.NEXT_PUBLIC_FOOTER_FORM_UUID,
  NEXT_PUBLIC_FOOTER_RESPONSE_FIELD_ID: process.env.NEXT_PUBLIC_FOOTER_RESPONSE_FIELD_ID,
  NEXT_PUBLIC_FORM_UUID: process.env.NEXT_PUBLIC_FORM_UUID,
  NEXT_PUBLIC_FIRST_NAME_ID: process.env.NEXT_PUBLIC_FIRST_NAME_ID,
  NEXT_PUBLIC_LAST_NAME_ID: process.env.NEXT_PUBLIC_LAST_NAME_ID,
  NEXT_PUBLIC_EMAIL_ID: process.env.NEXT_PUBLIC_EMAIL_ID,
  NEXT_PUBLIC_PHONE_ID: process.env.NEXT_PUBLIC_PHONE_ID,
  NEXT_PUBLIC_SUBJECT_ID: process.env.NEXT_PUBLIC_SUBJECT_ID,
  NEXT_PUBLIC_MESSAGE_ID: process.env.NEXT_PUBLIC_MESSAGE_ID,
  NEXT_PUBLIC_TERMS_ID_KEY: process.env.NEXT_PUBLIC_TERMS_ID_KEY,
  NEXT_PUBLIC_TERMS_ID: process.env.NEXT_PUBLIC_TERMS_ID,
  NEXT_PUBLIC_GRAPHQL_URI: process.env.NEXT_PUBLIC_GRAPHQL_URI,
};

export const env = envSchema.parse(raw);

export type Env = z.infer<typeof envSchema>;
