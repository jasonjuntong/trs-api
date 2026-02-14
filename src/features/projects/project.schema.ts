import { z } from "zod";

export const ProjectSchema = z.object({
    id: z.number().int(),
    uuid: z.uuid(),
    title: z.string().trim().min(1, "Title is required"),
    authors: z.string().trim().min(1, "Authors is required"),
    keywords: z.string().trim().min(1, "Keywords is required"),
    year: z.number().int().min(1900).max(3000),
}).strict();

export const CreateProjectSchema = ProjectSchema.omit({ id: true, uuid: true }).strict();

export const UpdateProjectSchema = CreateProjectSchema.partial().strict();

export const BulkCreateProjectSchema = z.array(CreateProjectSchema);

export const BulkUpdateProjectSchema = z.array(UpdateProjectSchema);