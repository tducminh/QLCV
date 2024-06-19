"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskQueryResolver = exports.taskQueryValidator = exports.taskQuerySchema = exports.taskQueryProperties = exports.taskPatchResolver = exports.taskPatchValidator = exports.taskPatchSchema = exports.taskDataResolver = exports.taskDataValidator = exports.taskDataSchema = exports.taskExternalResolver = exports.taskResolver = exports.taskValidator = exports.taskSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
const users_schema_1 = require("../users/users.schema");
// Main data model schema
exports.taskSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    text: typebox_1.Type.String(),
    description: typebox_1.Type.Optional(typebox_1.Type.String()),
    assignedTo: typebox_1.Type.Optional(typebox_1.Type.String()),
    dueDate: typebox_1.Type.Optional(typebox_1.Type.String({ format: 'date-time' })),
    completed: typebox_1.Type.Optional(typebox_1.Type.Boolean()),
    note: typebox_1.Type.Optional(typebox_1.Type.String()),
    userId: typebox_1.Type.Number(),
    userCreated: typebox_1.Type.Optional(typebox_1.Type.String()),
    user: typebox_1.Type.Ref(users_schema_1.userSchema),
    createdAt: typebox_1.Type.Optional(typebox_1.Type.String({ format: 'date-time' })),
    point: typebox_1.Type.Optional(typebox_1.Type.Number()),
    taskId: typebox_1.Type.Optional(typebox_1.Type.Number())
}, { $id: 'Task', additionalProperties: false });
exports.taskValidator = (0, typebox_1.getValidator)(exports.taskSchema, validators_1.dataValidator);
exports.taskResolver = (0, schema_1.resolve)({
    user: (0, schema_1.virtual)(async (task, context) => {
        // Associate the user that sent the task
        return context.app.service('users').get(task.userId);
    })
});
exports.taskExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.taskDataSchema = typebox_1.Type.Pick(exports.taskSchema, ['text', 'description', 'assignedTo', 'dueDate', 'completed', 'note', 'userCreated'], {
    $id: 'TaskData'
});
exports.taskDataValidator = (0, typebox_1.getValidator)(exports.taskDataSchema, validators_1.dataValidator);
exports.taskDataResolver = (0, schema_1.resolve)({
    userId: async (_value, _message, context) => {
        // Associate the record with the id of the authenticated user
        if (context.params.user) {
            return context.params.user.id;
        }
    },
    createdAt: async () => {
        return new Date().toISOString();
    },
    userCreated: async (_value, _task, context) => {
        if (context.params.user) {
            return context.params.user.Ma;
        }
    }
});
// Schema for updating existing entries
exports.taskPatchSchema = typebox_1.Type.Partial(exports.taskSchema, {
    $id: 'TaskPatch'
});
exports.taskPatchValidator = (0, typebox_1.getValidator)(exports.taskPatchSchema, validators_1.dataValidator);
exports.taskPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.taskQueryProperties = typebox_1.Type.Pick(exports.taskSchema, ['id', 'text', 'description', 'assignedTo',
    'dueDate', 'completed', 'note', 'userCreated'], {});
exports.taskQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.taskQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.taskQueryValidator = (0, typebox_1.getValidator)(exports.taskQuerySchema, validators_1.queryValidator);
exports.taskQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=tasks.schema.js.map