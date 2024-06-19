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
exports.task = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const tasks_schema_1 = require("./tasks.schema");
const tasks_class_1 = require("./tasks.class");
const tasks_shared_1 = require("./tasks.shared");
__exportStar(require("./tasks.class"), exports);
__exportStar(require("./tasks.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const task = (app) => {
    // Register our service on the Feathers application
    app.use(tasks_shared_1.taskPath, new tasks_class_1.TaskService((0, tasks_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: tasks_shared_1.taskMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(tasks_shared_1.taskPath).hooks({
        around: {
            all: [
                (0, authentication_1.authenticate)('jwt'),
                schema_1.hooks.resolveExternal(tasks_schema_1.taskExternalResolver),
                schema_1.hooks.resolveResult(tasks_schema_1.taskResolver)
            ]
        },
        before: {
            all: [schema_1.hooks.validateQuery(tasks_schema_1.taskQueryValidator), schema_1.hooks.resolveQuery(tasks_schema_1.taskQueryResolver)],
            find: [],
            get: [],
            create: [schema_1.hooks.validateData(tasks_schema_1.taskDataValidator), schema_1.hooks.resolveData(tasks_schema_1.taskDataResolver)],
            patch: [schema_1.hooks.validateData(tasks_schema_1.taskPatchValidator), schema_1.hooks.resolveData(tasks_schema_1.taskPatchResolver)],
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
exports.task = task;
//# sourceMappingURL=tasks.js.map