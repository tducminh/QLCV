"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phongClient = exports.phongMethods = exports.phongPath = void 0;
exports.phongPath = 'phong';
exports.phongMethods = ['find', 'get', 'create', 'patch', 'remove'];
const phongClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.phongPath, connection.service(exports.phongPath), {
        methods: exports.phongMethods
    });
};
exports.phongClient = phongClient;
//# sourceMappingURL=phong.shared.js.map