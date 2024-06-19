"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phongQueryResolver = exports.phongQueryValidator = exports.phongQuerySchema = exports.phongQueryProperties = exports.phongPatchResolver = exports.phongPatchValidator = exports.phongPatchSchema = exports.phongDataResolver = exports.phongDataValidator = exports.phongDataSchema = exports.phongExternalResolver = exports.phongResolver = exports.phongValidator = exports.phongSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.phongSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    ma: typebox_1.Type.String(),
    ten: typebox_1.Type.String(),
    ghichu: typebox_1.Type.String(),
    createdAt: typebox_1.Type.Optional(typebox_1.Type.String({ format: 'date-time' }))
}, { $id: 'Phong', additionalProperties: false });
exports.phongValidator = (0, typebox_1.getValidator)(exports.phongSchema, validators_1.dataValidator);
exports.phongResolver = (0, schema_1.resolve)({});
exports.phongExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.phongDataSchema = typebox_1.Type.Pick(exports.phongSchema, ['ma', 'ten', 'ghichu', 'createdAt'], {
    $id: 'PhongData'
});
exports.phongDataValidator = (0, typebox_1.getValidator)(exports.phongDataSchema, validators_1.dataValidator);
exports.phongDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.phongPatchSchema = typebox_1.Type.Partial(exports.phongSchema, {
    $id: 'PhongPatch'
});
exports.phongPatchValidator = (0, typebox_1.getValidator)(exports.phongPatchSchema, validators_1.dataValidator);
exports.phongPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.phongQueryProperties = typebox_1.Type.Pick(exports.phongSchema, ['id', 'ma', 'ten', 'ghichu', 'createdAt']);
exports.phongQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.phongQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.phongQueryValidator = (0, typebox_1.getValidator)(exports.phongQuerySchema, validators_1.queryValidator);
exports.phongQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=phong.schema.js.map