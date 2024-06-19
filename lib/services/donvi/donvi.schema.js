"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.donviQueryResolver = exports.donviQueryValidator = exports.donviQuerySchema = exports.donviQueryProperties = exports.donviPatchResolver = exports.donviPatchValidator = exports.donviPatchSchema = exports.donviDataResolver = exports.donviDataValidator = exports.donviDataSchema = exports.donviExternalResolver = exports.donviResolver = exports.donviValidator = exports.donviSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.donviSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    ma: typebox_1.Type.String(),
    ten: typebox_1.Type.String(),
    createdAt: typebox_1.Type.Optional(typebox_1.Type.String({ format: 'date-time' }))
}, { $id: 'Donvi', additionalProperties: false });
exports.donviValidator = (0, typebox_1.getValidator)(exports.donviSchema, validators_1.dataValidator);
exports.donviResolver = (0, schema_1.resolve)({});
exports.donviExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.donviDataSchema = typebox_1.Type.Pick(exports.donviSchema, ['ma', 'ten', 'createdAt'], {
    $id: 'DonviData'
});
exports.donviDataValidator = (0, typebox_1.getValidator)(exports.donviDataSchema, validators_1.dataValidator);
exports.donviDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.donviPatchSchema = typebox_1.Type.Partial(exports.donviSchema, {
    $id: 'DonviPatch'
});
exports.donviPatchValidator = (0, typebox_1.getValidator)(exports.donviPatchSchema, validators_1.dataValidator);
exports.donviPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.donviQueryProperties = typebox_1.Type.Pick(exports.donviSchema, ['id', 'ma', 'ten', 'createdAt']);
exports.donviQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.donviQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.donviQueryValidator = (0, typebox_1.getValidator)(exports.donviQuerySchema, validators_1.queryValidator);
exports.donviQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=donvi.schema.js.map