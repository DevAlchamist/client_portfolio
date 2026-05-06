import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email'),
  scope: z.string().min(10, 'Please add a bit more detail (10+ characters)'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
