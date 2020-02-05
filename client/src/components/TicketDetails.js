import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default props => {
  let { id } = useParams();
  const [ticket, setTicket] = useState({});
  const [loading, setLoading] = useState(true);
  const [assignee, setAssignee] = useState(0);
  const [assigneeName, setAssigneeName] = useState("");

  useEffect(() => {
    const getData = async () => {
      let ticket;
      try {
        ticket = await axios.get(`/tickets/${id}`);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
      if (props.users)
        for (let user in props.users) {
          if (user.id === assignee) setAssigneeName(user.name);
        }
      setTicket(ticket.data);
    };
    getData();
  }, [id]);
  //   if (tickets.length === 0) return "Invalid ticket selected";
  const onComplete = async () => {
    setLoading(true);
    const completeTicket = await axios.post(`/tickets/completed`, {
      ticketId: ticket.id,
      completed: true
    });
    setLoading(false);
    setTicket(completeTicket.data);
  };

  const onAssign = async e => {
    e.preventDefault();
    setLoading(true);
    let assignedTicket;
    try {
      assignedTicket = await axios.post(`/tickets/assign`, {
        ticketId: ticket.id,
        assigneeId: assignee
      });
    } catch (err) {
      console.log(err.response.data);
    }
    setLoading(false);
    setTicket(assignedTicket.data);
  };

  const onChange = e => {
    setAssignee(e.target.value);
  };

  return (
    <div>
      <h2>Ticket {ticket.id} Details</h2>
      {loading ? (
        <b>Loading...</b>
      ) : (
        <ul style={{ listStyleType: "none" }}>
          <li>
            <b>Description: </b> {ticket.description}
          </li>

          <li>
            <b>Completed: </b>
            {ticket.completed ? "Completed" : "Incomplete"}
          </li>

          {ticket.completed ? null : (
            <button
              style={{ margin: "1em", display: "inline-block" }}
              onClick={onComplete}
            >
              Complete
            </button>
          )}
          {ticket.assignee ? (
            <li>
              <b>Assignee: </b> {ticket.assigneeName}
            </li>
          ) : (
            <div>
              <select
                value={assignee}
                onChange={onChange}
                name="userlist"
                form="assignForm"
              >
                {props.users.map(user => {
                  return (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  );
                })}
              </select>
              <form onSubmit={onAssign} id="assignForm">
                <input type="submit" value="Assign" />
              </form>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};
