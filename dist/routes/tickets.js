"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../db"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    db_1.default.tickets()
        .then(tickets => res.send(tickets))
        .catch(err => res.status(400).send({ error: err }));
});
router.get("/:id", (req, res) => {
    const ticketId = +req.params.id;
    db_1.default.ticket(ticketId)
        .then(ticket => res.send(ticket))
        .catch(err => res.status(400).send({ error: err }));
});
router.post("/newTicket/", (req, res) => {
    const description = req.body.description;
    console.log(description);
    db_1.default.newTicket(description)
        .then(ticket => {
        console.log(ticket);
        res.send(ticket);
    })
        .catch(err => res.status(400).send({ error: err }));
});
router.post("/assign/", (req, res) => {
    const { ticketId, assigneeId } = req.body;
    console.log(ticketId, assigneeId);
    db_1.default.assign({ id: ticketId, assigneeId })
        .then(ticket => res.send(ticket))
        .catch(err => res.status(400).send({ error: err }));
});
router.post("/completed/", (req, res) => {
    const { ticketId, completed } = req.body;
    db_1.default.complete({ id: ticketId, completed })
        .then(ticket => res.send(ticket))
        .catch(err => res.status(400).send({ error: err }));
});
exports.default = router;
//# sourceMappingURL=tickets.js.map