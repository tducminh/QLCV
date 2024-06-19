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
exports.donvi = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const donvi_schema_1 = require("./donvi.schema");
const donvi_class_1 = require("./donvi.class");
const donvi_shared_1 = require("./donvi.shared");
__exportStar(require("./donvi.class"), exports);
__exportStar(require("./donvi.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const donvi = (app) => {
    // Register our service on the Feathers application
    app.use(donvi_shared_1.donviPath, new donvi_class_1.DonviService((0, donvi_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: donvi_shared_1.donviMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(donvi_shared_1.donviPath).hooks({
        around: {
            all: [
                (0, authentication_1.authenticate)('jwt'),
                schema_1.hooks.resolveExternal(donvi_schema_1.donviExternalResolver),
                schema_1.hooks.resolveResult(donvi_schema_1.donviResolver)
            ]
        },
        before: {
            all: [schema_1.hooks.validateQuery(donvi_schema_1.donviQueryValidator), schema_1.hooks.resolveQuery(donvi_schema_1.donviQueryResolver)],
            find: [],
            get: [],
            create: [schema_1.hooks.validateData(donvi_schema_1.donviDataValidator), schema_1.hooks.resolveData(donvi_schema_1.donviDataResolver)],
            patch: [schema_1.hooks.validateData(donvi_schema_1.donviPatchValidator), schema_1.hooks.resolveData(donvi_schema_1.donviPatchResolver)],
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
exports.donvi = donvi;
//# sourceMappingURL=donvi.js.map