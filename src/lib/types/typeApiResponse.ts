export type APISuccessResponse<T = unknown> = {
    success: true;
    data: T;
    message?: string;
    meta?: {
        page?: number;
        limit?: number;
        total?: number;
        count?: number;
    };
}

export type APIErrorResponse = {
    success: false;
    error: {
        message: string;
        code?: string;
        details?: unknown;
    };
}

export type APIResponse<T = unknown> = APISuccessResponse<T> | APIErrorResponse