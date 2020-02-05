"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const randomize = () => Math.random() * 4000;
const randomWait = () => new Promise(resolve => {
    setTimeout(resolve, randomize());
});
class TicketBackend {
    constructor() {
        this._tickets = [
            {
                id: 0,
                description: "Install a monitor arm",
                assigneeId: 111,
                completed: false
            },
            {
                id: 1,
                description: "Move the desk to the new location",
                assigneeId: 111,
                completed: false
            }
        ];
        this._users = [
            { id: 111, name: "Julie" },
            { id: 222, name: "Hank" },
            { id: 333, name: "Al" }
        ];
    }
    tickets() {
        return __awaiter(this, void 0, void 0, function* () {
            yield randomWait();
            return this._tickets;
        });
    }
    users() {
        return __awaiter(this, void 0, void 0, function* () {
            yield randomWait();
            return this._users;
        });
    }
    ticket(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield randomWait();
            return this._tickets.find(t => t.id === id);
        });
    }
    user(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield randomWait();
            return this._users.find(u => u.id === id);
        });
    }
    newTicket({ description }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield randomWait();
            if (!description)
                throw new Error("Ticket can only be created with a valid description");
            const newTicket = {
                id: Math.max(...this._tickets.map(t => t.id)) + 1,
                description,
                assigneeId: null,
                completed: false
            };
            this._tickets.push(newTicket);
            return Object.assign({}, newTicket);
        });
    }
    assign({ id: ticketId, assigneeId }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield randomWait();
            const matchTicket = this._tickets.find(t => t.id === ticketId);
            const matchUser = this._users.find(u => u.id === assigneeId);
            if (!matchTicket)
                throw new Error(`Cannot find ticket ${ticketId}`);
            if (!matchUser)
                throw new Error(`Cannot find user ${assigneeId}`);
            matchTicket.assigneeId = assigneeId;
            return Object.assign({}, matchTicket);
        });
    }
    complete({ id: ticketId, completed }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield randomWait();
            const matchTicket = this._tickets.find(t => t.id === ticketId);
            if (!matchTicket)
                throw new Error(`Cannot find ticket ${ticketId}`);
            matchTicket.completed = completed;
            return Object.assign({}, matchTicket);
        });
    }
}
exports.TicketBackend = TicketBackend;
//# sourceMappingURL=ticket-backend.js.map