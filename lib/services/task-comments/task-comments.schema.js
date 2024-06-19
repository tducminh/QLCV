"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskcommentsQueryResolver = exports.taskcommentsQueryValidator = exports.taskcommentsQuerySchema = exports.taskcommentsQueryProperties = exports.taskcommentsPatchResolver = exports.taskcommentsPatchValidator = exports.taskcommentsPatchSchema = exports.taskcommentsDataResolver = exports.taskcommentsDataValidator = exports.taskcommentsDataSchema = exports.taskcommentsExternalResolver = exports.taskcommentsResolver = exports.taskcommentsValidator = exports.taskcommentsSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
const users_schema_1 = require("../users/users.schema");
// Main data model schema
exports.taskcommentsSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    text: typebox_1.Type.String(),
    dateCreated: typebox_1.Type.Optional(typebox_1.Type.String({ format: 'date-time' })),
    TaskId: typebox_1.Type.Number(),
    UserId: typebox_1.Type.Number(),
    user: typebox_1.Type.Ref(users_schema_1.userSchema),
}, { $id: 'Taskcomments', additionalProperties: false });
exports.taskcommentsValidator = (0, typebox_1.getValidator)(exports.taskcommentsSchema, validators_1.dataValidator);
exports.taskcommentsResolver = (0, schema_1.resolve)({
    user: (0, schema_1.virtual)(async (taskcomment, context) => {
        // Associate the user that sent the message
        return context.app.service('users').get(taskcomment.UserId);
    })
});
exports.taskcommentsExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.taskcommentsDataSchema = typebox_1.Type.Pick(exports.taskcommentsSchema, ['text', 'dateCreated', 'TaskId', 'UserId'], {
    $id: 'TaskcommentsData'
});
exports.taskcommentsDataValidator = (0, typebox_1.getValidator)(exports.taskcommentsDataSchema, validators_1.dataValidator);
exports.taskcommentsDataResolver = (0, schema_1.resolve)({
    UserId: async (_value, _message, context) => {
        // Associate the record with the id of the authenticated user
        if (context.params.user) {
            return context.params.user.id;
        }
    },
    dateCreated: async () => {
        return new Date().toISOString();
    }
});
// Schema for updating existing entries
exports.taskcommentsPatchSchema = typebox_1.Type.Partial(exports.taskcommentsSchema, {
    $id: 'TaskcommentsPatch'
});
exports.taskcommentsPatchValidator = (0, typebox_1.getValidator)(exports.taskcommentsPatchSchema, validators_1.dataValidator);
exports.taskcommentsPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.taskcommentsQueryProperties = typebox_1.Type.Pick(exports.taskcommentsSchema, ['id', 'text', 'dateCreated', 'TaskId', 'UserId']);
exports.taskcommentsQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.taskcommentsQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.taskcommentsQueryValidator = (0, typebox_1.getValidator)(exports.taskcommentsQuerySchema, validators_1.queryValidator);
exports.taskcommentsQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=task-comments.schema.js.map