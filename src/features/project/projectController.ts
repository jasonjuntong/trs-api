import { APIResponse } from "../../lib/types/typeApiResponse.js";
import { sanitizeError } from "../../lib/utils/errors.js";
import { withResult } from "../../lib/utils/result.js";
import { Project } from "./projectTypes.js";
import { pool } from "../../db.js";

export type ProjectController = ReturnType<typeof createProjectController>

export function createProjectController() {
    return {
        async getAll(): Promise<APIResponse<Project[]>> {
            const resultPromise = pool.query("SELECT * FROM projects");
            const result = await withResult(resultPromise);

            if (!result.success) {
                const sanitizedError = sanitizeError(result.error)
                return {
                    success: false,
                    error: { ...sanitizedError }
                }
            }

            return {
                success: true,
                data: result.value.rowCount
                    ? result.value.rows as Project[]
                    : [] as Project[]
            }

        },

        async create(payload: unknown) {

        }
    }
}