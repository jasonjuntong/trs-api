
export type BaseError = {
    readonly type: string;
    readonly message: string;
}

export type UnknownError = BaseError & {
    readonly type: "UnknownError";
}

export type PostgresError = BaseError & {
    readonly type: "PostgresError";
    readonly code?: string;
}

export type ValidationError = BaseError & {
    readonly type: "ValidationError";
    readonly details?: unknown;
}

export type AggregateError = BaseError & {
    readonly type: "AggregateError";
    readonly errors?: AppError[]
}

export type AppError = BaseError | UnknownError | AggregateError | PostgresError | ValidationError