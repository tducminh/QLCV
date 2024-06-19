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
exports.phong = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const phong_schema_1 = require("./phong.schema");
const phong_class_1 = require("./phong.class");
const phong_shared_1 = require("./phong.shared");
__exportStar(require("./phong.class"), exports);
__exportStar(require("./phong.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const phong = (app) => {
    // Register our service on the Feathers application
    app.use(phong_shared_1.phongPath, new phong_class_1.PhongService((0, phong_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: phong_shared_1.phongMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(phong_shared_1.phongPath).hooks({
        around: {
            all: [
                (0, authentication_1.authenticate)('jwt'),
                schema_1.hooks.resolveExternal(phong_schema_1.phongExternalResolver),
                schema_1.hooks.resolveResult(phong_schema_1.phongResolver)
            ]
        },
        before: {
            all: [schema_1.hooks.validateQuery(phong_schema_1.phongQueryValidator), schema_1.hooks.resolveQuery(phong_schema_1.phongQueryResolver)],
            find: [],
            get: [],
            create: [schema_1.hooks.validateData(phong_schema_1.phongDataValidator), schema_1.hooks.resolveData(phong_schema_1.phongDataResolver)],
            patch: [schema_1.hooks.validateData(phong_schema_1.phongPatchValidator), schema_1.hooks.resolveData(phong_schema_1.phongPatchResolver)],
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
exports.phong = phong;
//# sourceMappingURL=phong.js.map