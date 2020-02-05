"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const tickets_1 = __importDefault(require("./routes/tickets"));
const users_1 = __importDefault(require("./routes/users"));
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use("/api/tickets/", tickets_1.default);
app.use("/api/users/", users_1.default);
app.listen(5000, () => console.log("Server listening on port 5000!"));
//# sourceMappingURL=server.js.map