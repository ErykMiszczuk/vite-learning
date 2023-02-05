import { createRegExp, oneOrMore, digit, char } from "magic-regexp";
import { z } from "zod";

export function isEmail(str: string): Boolean {
  const regex = createRegExp(
    oneOrMore(digit)
      .or(oneOrMore(char))
      .and("@")
      .and(oneOrMore(char).and(".").and(oneOrMore(char)))
  );

  return regex.test(str);
}

export function parseUser(obj: any) {
  const schema = z.object({
    username: z.string(),
    id: z.number(),
    email: z.string().refine(val => isEmail(val))
  })

  return schema.parse(obj);
}