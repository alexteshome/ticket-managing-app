"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../db"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    db_1.default.users()
        .then(users => res.send(users))
        .catch(err => res.status(400).send({ error: err }));
});
router.get("/:id", (req, res) => {
    const userId = +req.params.id;
    db_1.default.user(userId)
        .then(user => res.send(user))
        .catch(err => res.status(400).send({ error: err }));
});
exports.default = router;
//# sourceMappingURL=users.js.map