"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskClient = exports.taskMethods = exports.taskPath = void 0;
exports.taskPath = 'tasks';
exports.taskMethods = ['find', 'get', 'create', 'patch', 'remove'];
const taskClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.taskPath, connection.service(exports.taskPath), {
        methods: exports.taskMethods
    });
};
exports.taskClient = taskClient;
//# sourceMappingURL=tasks.shared.js.map