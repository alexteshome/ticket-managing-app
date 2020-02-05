import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TicketList = props => {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { tickets } = props;

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    let newTicket;
    try {
      newTicket = await axios.post(`/tickets/newTicket/`, {
        description: description
      });
      console.log(newTicket);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: `900px`,
        marginBottom: `1.45rem`
      }}
    >
      <h1>Ticket List</h1>
      <ul style={{ listStyleType: "none" }}>
        {tickets
          ? tickets.map(ticket => {
              return (
                <li key={ticket.id}>
                  <Link
                    to={`/${ticket.id}`}
                    style={{
                      textDecoration: `none`
                    }}
                  >
                    <h2>Ticket {ticket.id}</h2>
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
      <h3>Create New Ticket</h3>
      <label>Description: </label>
      <form>
        <input
          value={description}
          onChange={e => {
            setDescription(e.target.value);
          }}
        />
        <input type="submit" value="Create" onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default TicketList;
