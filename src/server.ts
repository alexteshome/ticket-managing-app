import express from "express";
import { TicketBackend as TicketBackendClass } from "./ticket-backend";
import bodyParser from "body-parser";
import tickets from "./routes/tickets";
import users from "./routes/users";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/tickets/", tickets);
app.use("/api/users/", users);
app.listen(5000, () => console.log("Server listening on port 5000!"));
