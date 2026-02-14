import { z } from "zod";
import type { 
    BulkCreateProjectSchema, 
    BulkUpdateProjectSchema, 
    CreateProjectSchema, 
    ProjectSchema 
} from "./project.schema";


export type Project = z.infer<typeof ProjectSchema>

export type CreateProject = z.infer<typeof CreateProjectSchema>

export type BulkCreateProject = z.infer<typeof BulkCreateProjectSchema>

export type BulkUpdateProject = z.infer<typeof BulkUpdateProjectSchema>