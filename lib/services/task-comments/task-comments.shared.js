"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskcommentsClient = exports.taskcommentsMethods = exports.taskcommentsPath = void 0;
exports.taskcommentsPath = 'task-comments';
exports.taskcommentsMethods = [
    'find',
    'get',
    'create',
    'patch',
    'remove'
];
const taskcommentsClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.taskcommentsPath, connection.service(exports.taskcommentsPath), {
        methods: exports.taskcommentsMethods
    });
};
exports.taskcommentsClient = taskcommentsClient;
//# sourceMappingURL=task-comments.shared.js.map