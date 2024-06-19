"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.donviClient = exports.donviMethods = exports.donviPath = void 0;
exports.donviPath = 'donvi';
exports.donviMethods = ['find', 'get', 'create', 'patch', 'remove'];
const donviClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.donviPath, connection.service(exports.donviPath), {
        methods: exports.donviMethods
    });
};
exports.donviClient = donviClient;
//# sourceMappingURL=donvi.shared.js.map