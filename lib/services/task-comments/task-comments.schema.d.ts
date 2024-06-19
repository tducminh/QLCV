import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
import type { TaskcommentsService } from './task-comments.class';
export declare const taskcommentsSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    text: import("@sinclair/typebox").TString<string>;
    dateCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
    TaskId: import("@sinclair/typebox").TNumber;
    UserId: import("@sinclair/typebox").TNumber;
    user: import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        Ma: import("@sinclair/typebox").TString<string>;
        Ten: import("@sinclair/typebox").TString<string>;
        email: import("@sinclair/typebox").TString<string>;
        password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        level: import("@sinclair/typebox").TNumber;
        PhongId: import("@sinclair/typebox").TNumber;
        DonviId: import("@sinclair/typebox").TNumber;
        createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
    }>>;
}>;
export type Taskcomments = Static<typeof taskcommentsSchema>;
export declare const taskcommentsValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const taskcommentsResolver: import("@feathersjs/schema").Resolver<{
    dateCreated?: string | undefined;
    id: number;
    text: string;
    user: {
        password?: string | undefined;
        createdAt?: string | undefined;
        id: number;
        email: string;
        level: number;
        Ma: string;
        Ten: string;
        PhongId: number;
        DonviId: number;
    };
    TaskId: number;
    UserId: number;
}, HookContext<TaskcommentsService<import("./task-comments.class").TaskcommentsParams>>>;
export declare const taskcommentsExternalResolver: import("@feathersjs/schema").Resolver<{
    dateCreated?: string | undefined;
    id: number;
    text: string;
    user: {
        password?: string | undefined;
        createdAt?: string | undefined;
        id: number;
        email: string;
        level: number;
        Ma: string;
        Ten: string;
        PhongId: number;
        DonviId: number;
    };
    TaskId: number;
    UserId: number;
}, HookContext<TaskcommentsService<import("./task-comments.class").TaskcommentsParams>>>;
export declare const taskcommentsDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    text: import("@sinclair/typebox").TString<string>;
    dateCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
    TaskId: import("@sinclair/typebox").TNumber;
    UserId: import("@sinclair/typebox").TNumber;
    user: import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        Ma: import("@sinclair/typebox").TString<string>;
        Ten: import("@sinclair/typebox").TString<string>;
        email: import("@sinclair/typebox").TString<string>;
        password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        level: import("@sinclair/typebox").TNumber;
        PhongId: import("@sinclair/typebox").TNumber;
        DonviId: import("@sinclair/typebox").TNumber;
        createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
    }>>;
}>, ["text", "dateCreated", "TaskId", "UserId"]>;
export type TaskcommentsData = Static<typeof taskcommentsDataSchema>;
export declare const taskcommentsDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const taskcommentsDataResolver: import("@feathersjs/schema").Resolver<{
    dateCreated?: string | undefined;
    id: number;
    text: string;
    user: {
        password?: string | undefined;
        createdAt?: string | undefined;
        id: number;
        email: string;
        level: number;
        Ma: string;
        Ten: string;
        PhongId: number;
        DonviId: number;
    };
    TaskId: number;
    UserId: number;
}, HookContext<TaskcommentsService<import("./task-comments.class").TaskcommentsParams>>>;
export declare const taskcommentsPatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    text: import("@sinclair/typebox").TString<string>;
    dateCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
    TaskId: import("@sinclair/typebox").TNumber;
    UserId: import("@sinclair/typebox").TNumber;
    user: import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        Ma: import("@sinclair/typebox").TString<string>;
        Ten: import("@sinclair/typebox").TString<string>;
        email: import("@sinclair/typebox").TString<string>;
        password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        level: import("@sinclair/typebox").TNumber;
        PhongId: import("@sinclair/typebox").TNumber;
        DonviId: import("@sinclair/typebox").TNumber;
        createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
    }>>;
}>>;
export type TaskcommentsPatch = Static<typeof taskcommentsPatchSchema>;
export declare const taskcommentsPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const taskcommentsPatchResolver: import("@feathersjs/schema").Resolver<{
    dateCreated?: string | undefined;
    id: number;
    text: string;
    user: {
        password?: string | undefined;
        createdAt?: string | undefined;
        id: number;
        email: string;
        level: number;
        Ma: string;
        Ten: string;
        PhongId: number;
        DonviId: number;
    };
    TaskId: number;
    UserId: number;
}, HookContext<TaskcommentsService<import("./task-comments.class").TaskcommentsParams>>>;
export declare const taskcommentsQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    text: import("@sinclair/typebox").TString<string>;
    dateCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
    TaskId: import("@sinclair/typebox").TNumber;
    UserId: import("@sinclair/typebox").TNumber;
    user: import("@sinclair/typebox").TRef<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TNumber;
        Ma: import("@sinclair/typebox").TString<string>;
        Ten: import("@sinclair/typebox").TString<string>;
        email: import("@sinclair/typebox").TString<string>;
        password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        level: import("@sinclair/typebox").TNumber;
        PhongId: import("@sinclair/typebox").TNumber;
        DonviId: import("@sinclair/typebox").TNumber;
        createdAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
    }>>;
}>, ["id", "text", "dateCreated", "TaskId", "UserId"]>;
export declare const taskcommentsQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        dateCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        TaskId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        UserId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("id" | "text" | "dateCreated" | "TaskId" | "UserId")[]>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TString<string> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TString<string> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        dateCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        TaskId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        UserId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
    }>>, import("@sinclair/typebox").TObject<{
        $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TNumber;
                $gte: import("@sinclair/typebox").TNumber;
                $lt: import("@sinclair/typebox").TNumber;
                $lte: import("@sinclair/typebox").TNumber;
                $ne: import("@sinclair/typebox").TNumber;
                $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
                $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TString<string>;
                $gte: import("@sinclair/typebox").TString<string>;
                $lt: import("@sinclair/typebox").TString<string>;
                $lte: import("@sinclair/typebox").TString<string>;
                $ne: import("@sinclair/typebox").TString<string>;
                $in: import("@sinclair/typebox").TString<string> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
                $nin: import("@sinclair/typebox").TString<string> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            dateCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
                $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
                $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
                $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
                $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
                $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>>;
                $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            TaskId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TNumber;
                $gte: import("@sinclair/typebox").TNumber;
                $lt: import("@sinclair/typebox").TNumber;
                $lte: import("@sinclair/typebox").TNumber;
                $ne: import("@sinclair/typebox").TNumber;
                $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
                $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
            UserId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TNumber;
                $gte: import("@sinclair/typebox").TNumber;
                $lt: import("@sinclair/typebox").TNumber;
                $lte: import("@sinclair/typebox").TNumber;
                $ne: import("@sinclair/typebox").TNumber;
                $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
                $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            }>, import("@sinclair/typebox").TObject<{
                [key: string]: import("@sinclair/typebox").TSchema;
            } | undefined>]>>]>>;
        }>>>;
    }>]>>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TString<string>;
            $gte: import("@sinclair/typebox").TString<string>;
            $lt: import("@sinclair/typebox").TString<string>;
            $lte: import("@sinclair/typebox").TString<string>;
            $ne: import("@sinclair/typebox").TString<string>;
            $in: import("@sinclair/typebox").TString<string> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
            $nin: import("@sinclair/typebox").TString<string> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        dateCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        TaskId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
        UserId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>, import("@sinclair/typebox").TObject<{
            [key: string]: import("@sinclair/typebox").TSchema;
        } | undefined>]>>]>>;
    }>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TNumber;
        $gte: import("@sinclair/typebox").TNumber;
        $lt: import("@sinclair/typebox").TNumber;
        $lte: import("@sinclair/typebox").TNumber;
        $ne: import("@sinclair/typebox").TNumber;
        $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    text: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TString<string>;
        $gte: import("@sinclair/typebox").TString<string>;
        $lt: import("@sinclair/typebox").TString<string>;
        $lte: import("@sinclair/typebox").TString<string>;
        $ne: import("@sinclair/typebox").TString<string>;
        $in: import("@sinclair/typebox").TString<string> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
        $nin: import("@sinclair/typebox").TString<string> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    dateCreated: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">> | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<"date-time">>>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    TaskId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TNumber;
        $gte: import("@sinclair/typebox").TNumber;
        $lt: import("@sinclair/typebox").TNumber;
        $lte: import("@sinclair/typebox").TNumber;
        $ne: import("@sinclair/typebox").TNumber;
        $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
    UserId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TNumber;
        $gte: import("@sinclair/typebox").TNumber;
        $lt: import("@sinclair/typebox").TNumber;
        $lte: import("@sinclair/typebox").TNumber;
        $ne: import("@sinclair/typebox").TNumber;
        $in: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        $nin: import("@sinclair/typebox").TNumber | import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    }>, import("@sinclair/typebox").TObject<{
        [key: string]: import("@sinclair/typebox").TSchema;
    } | undefined>]>>]>>;
}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type TaskcommentsQuery = Static<typeof taskcommentsQuerySchema>;
export declare const taskcommentsQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const taskcommentsQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        id?: number | undefined;
        text?: number | undefined;
        dateCreated?: number | undefined;
        TaskId?: number | undefined;
        UserId?: number | undefined;
    };
    $select: ("id" | "text" | "dateCreated" | "TaskId" | "UserId")[];
    $and: ({
        id?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number | number[];
            $nin: number | number[];
        } & {}> | undefined;
        text?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string | string[];
            $nin: string | string[];
        } & {}> | undefined;
        dateCreated?: string | Partial<{
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in: string | string[];
            $nin: string | string[];
        } & {}> | undefined;
        TaskId?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number | number[];
            $nin: number | number[];
        } & {}> | undefined;
        UserId?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number | number[];
            $nin: number | number[];
        } & {}> | undefined;
    } | {
        $or: {
            id?: number | Partial<{
                $gt: number;
                $gte: number;
                $lt: number;
                $lte: number;
                $ne: number;
                $in: number | number[];
                $nin: number | number[];
            } & {}> | undefined;
            text?: string | Partial<{
                $gt: string;
                $gte: string;
                $lt: string;
                $lte: string;
                $ne: string;
                $in: string | string[];
                $nin: string | string[];
            } & {}> | undefined;
            dateCreated?: string | Partial<{
                $gt?: string | undefined;
                $gte?: string | undefined;
                $lt?: string | undefined;
                $lte?: string | undefined;
                $ne?: string | undefined;
                $in: string | string[];
                $nin: string | string[];
            } & {}> | undefined;
            TaskId?: number | Partial<{
                $gt: number;
                $gte: number;
                $lt: number;
                $lte: number;
                $ne: number;
                $in: number | number[];
                $nin: number | number[];
            } & {}> | undefined;
            UserId?: number | Partial<{
                $gt: number;
                $gte: number;
                $lt: number;
                $lte: number;
                $ne: number;
                $in: number | number[];
                $nin: number | number[];
            } & {}> | undefined;
        }[];
    })[];
    $or: {
        id?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number | number[];
            $nin: number | number[];
        } & {}> | undefined;
        text?: string | Partial<{
            $gt: string;
            $gte: string;
            $lt: string;
            $lte: string;
            $ne: string;
            $in: string | string[];
            $nin: string | string[];
        } & {}> | undefined;
        dateCreated?: string | Partial<{
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in: string | string[];
            $nin: string | string[];
        } & {}> | undefined;
        TaskId?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number | number[];
            $nin: number | number[];
        } & {}> | undefined;
        UserId?: number | Partial<{
            $gt: number;
            $gte: number;
            $lt: number;
            $lte: number;
            $ne: number;
            $in: number | number[];
            $nin: number | number[];
        } & {}> | undefined;
    }[];
}> & {
    id?: number | Partial<{
        $gt: number;
        $gte: number;
        $lt: number;
        $lte: number;
        $ne: number;
        $in: number | number[];
        $nin: number | number[];
    } & {}> | undefined;
    text?: string | Partial<{
        $gt: string;
        $gte: string;
        $lt: string;
        $lte: string;
        $ne: string;
        $in: string | string[];
        $nin: string | string[];
    } & {}> | undefined;
    dateCreated?: string | Partial<{
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in: string | string[];
        $nin: string | string[];
    } & {}> | undefined;
    TaskId?: number | Partial<{
        $gt: number;
        $gte: number;
        $lt: number;
        $lte: number;
        $ne: number;
        $in: number | number[];
        $nin: number | number[];
    } & {}> | undefined;
    UserId?: number | Partial<{
        $gt: number;
        $gte: number;
        $lt: number;
        $lte: number;
        $ne: number;
        $in: number | number[];
        $nin: number | number[];
    } & {}> | undefined;
} & {}, HookContext<TaskcommentsService<import("./task-comments.class").TaskcommentsParams>>>;
