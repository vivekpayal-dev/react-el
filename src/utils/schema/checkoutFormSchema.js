import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  number: z.string().min(10, "Number must be at least 10 digits"),
});
