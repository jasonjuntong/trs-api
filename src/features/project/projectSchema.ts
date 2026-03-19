import { z } from "zod";

export const ProjectSchema = z.object({
    uuid: z.uuid(),
    title: z.string().trim().min(1, "Title is required"),
    authors: z.string().trim().min(1, "Authors is required"),
    keywords: z.string().trim().min(1, "Keywords is required"),
    year: z.number().int().min(1900).max(3000),
    create_at: z.date(),
    update_at: z.date(),
}).strict();


export const ProjectCreateSchema = ProjectSchema.omit({ uuid: true }).strict();

export const ProjectUpdateSchema = ProjectCreateSchema.partial().strict();

