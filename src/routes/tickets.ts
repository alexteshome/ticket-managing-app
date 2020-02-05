import express from "express";
import TicketBackend from "../db";
const router = express.Router();

router.get("/", (req, res) => {
  TicketBackend.tickets()
    .then(tickets => res.send(tickets))
    .catch(err => res.status(400).send({ error: err }));
});

router.get("/:id", (req, res) => {
  const ticketId = +req.params.id;
  TicketBackend.ticket(ticketId)
    .then(ticket => res.send(ticket))
    .catch(err => res.status(400).send({ error: err }));
});

router.post("/newTicket/", (req, res) => {
  const description = req.body.description;
  console.log(description);
  TicketBackend.newTicket(description)
    .then(ticket => {
      console.log(ticket);
      res.send(ticket);
    })
    .catch(err => res.status(400).send({ error: err }));
});

router.post("/assign/", (req, res) => {
  const { ticketId, assigneeId } = req.body;
  console.log(ticketId, assigneeId);
  TicketBackend.assign({ id: ticketId, assigneeId })
    .then(ticket => res.send(ticket))
    .catch(err => res.status(400).send({ error: err }));
});

router.post("/completed/", (req, res) => {
  const { ticketId, completed } = req.body;
  TicketBackend.complete({ id: ticketId, completed })
    .then(ticket => res.send(ticket))
    .catch(err => res.status(400).send({ error: err }));
});

export default router;
