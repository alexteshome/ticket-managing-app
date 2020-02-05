import express from "express";
import TicketBackend from "../db";
const router = express.Router();

router.get("/", (req, res) => {
  TicketBackend.users()
    .then(users => res.send(users))
    .catch(err => res.status(400).send({ error: err }));
});

router.get("/:id", (req, res) => {
  const userId = +req.params.id;
  TicketBackend.user(userId)
    .then(user => res.send(user))
    .catch(err => res.status(400).send({ error: err }));
});

export default router;
