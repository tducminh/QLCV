"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const task_comments_1 = require("./task-comments/task-comments");
const tasks_1 = require("./tasks/tasks");
const phong_1 = require("./phong/phong");
const donvi_1 = require("./donvi/donvi");
const users_1 = require("./users/users");
const services = (app) => {
    app.configure(task_comments_1.taskcomments);
    app.configure(tasks_1.task);
    app.configure(phong_1.phong);
    app.configure(donvi_1.donvi);
    app.configure(users_1.user);
    // All services will be registered here
};
exports.services = services;
//# sourceMappingURL=index.js.map