"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.TaskService = void 0;
const knex_1 = require("@feathersjs/knex");
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class TaskService extends knex_1.KnexService {
}
exports.TaskService = TaskService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('mssqlClient'),
        name: 'tasks'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=tasks.class.js.map