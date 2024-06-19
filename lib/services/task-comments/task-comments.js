"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskcomments = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const task_comments_schema_1 = require("./task-comments.schema");
const task_comments_class_1 = require("./task-comments.class");
const task_comments_shared_1 = require("./task-comments.shared");
__exportStar(require("./task-comments.class"), exports);
__exportStar(require("./task-comments.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const taskcomments = (app) => {
    // Register our service on the Feathers application
    app.use(task_comments_shared_1.taskcommentsPath, new task_comments_class_1.TaskcommentsService((0, task_comments_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: task_comments_shared_1.taskcommentsMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(task_comments_shared_1.taskcommentsPath).hooks({
        around: {
            all: [
                (0, authentication_1.authenticate)('jwt'),
                schema_1.hooks.resolveExternal(task_comments_schema_1.taskcommentsExternalResolver),
                schema_1.hooks.resolveResult(task_comments_schema_1.taskcommentsResolver)
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(task_comments_schema_1.taskcommentsQueryValidator),
                schema_1.hooks.resolveQuery(task_comments_schema_1.taskcommentsQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(task_comments_schema_1.taskcommentsDataValidator),
                schema_1.hooks.resolveData(task_comments_schema_1.taskcommentsDataResolver)
            ],
            patch: [
                schema_1.hooks.validateData(task_comments_schema_1.taskcommentsPatchValidator),
                schema_1.hooks.resolveData(task_comments_schema_1.taskcommentsPatchResolver)
            ],
            remove: []
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.taskcomments = taskcomments;
//# sourceMappingURL=task-comments.js.map