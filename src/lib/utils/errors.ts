import { AppError } from "../types/typeErrors.js";

export function sanitizeError(error: AppError): AppError {
    if(error.type === "ValidationError") {
        return error
    }

    if(error.type === "AggregateError") {
        if("errors" in error) {
            const errorMessages = error?.errors?.map(e => e.message);
            return {
                type: "AggregateError",
                message: "Internal server error",
                errors:  errorMessages ? [ ...errorMessages ] : [ "Internal server error"]
            }
        }
    }

    return { ...error, message: "Internal server error"}
}