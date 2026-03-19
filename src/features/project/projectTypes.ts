import { z } from "zod";
import { ProjectCreateSchema, ProjectSchema, ProjectUpdateSchema } from "./projectSchema.js";

export type Project = z.infer<typeof ProjectSchema>;

export type ProjectCreate = z.infer<typeof ProjectCreateSchema>;

export type ProjectUpdate = z.infer<typeof ProjectUpdateSchema>;