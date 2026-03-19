import { AppError } from "../types/typeErrors.js";
import { DatabaseError } from "pg";

export type Result<T, E = AppError> = 
    | { success: true; value: T }
    | { success: false; error: E };

export function success<T>(value: T): Result<T, never> {
    return { success: true, value };
}

export function failure<E>(error: E): Result<never, E> {
    return { success: false, error };
}

export async function withResult<T>(promise: Promise<T>): Promise<Result<T, AppError>> {
    try {
        const value = await promise;
        return success(value);
    } catch (error) {
        return failure(toError(error))
    }
}

function toError(error: unknown): AppError {
    if(error instanceof DatabaseError) {
        return {
            type: "PostgresError",
            message: error.message,
            code: error.code || "unknown",
        }
    }

    if(error instanceof AggregateError) {
        return {
            type: "AggregateError",
            message: error.message,
            errors: error.errors.map(e => toError(e))
        }
    }

    if(error instanceof Error) {
        return {
            type: error.name || "UnknownError",
            message: error.message,
        }
    }

    if (typeof error === 'string') {
        return {
            type: "UnknownError",
            message: error,
        }
    }

    if (
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof error.message === 'string'
    ) {
        return {
            type: "UnknownError",
            message: error.message,
        }
    }

    return {
        type: "UnknownError",
        message: String(error),
    }
}