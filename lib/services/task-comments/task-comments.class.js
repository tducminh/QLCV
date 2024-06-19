"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.TaskcommentsService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class TaskcommentsService extends knex_1.KnexService {
}
exports.TaskcommentsService = TaskcommentsService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('mssqlClient'),
        name: 'task-comments'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=task-comments.class.js.map