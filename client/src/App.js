import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import TicketList from "./components/TicketList";
import TicketDetails from "./components/TicketDetails";
import axios from "axios";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const tickets = await axios.get("/tickets/");
      const users = await axios.get("/users/");
      setTickets(tickets.data);
      setUsers(users.data);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route
              exact
              path="/:id"
              render={() => <TicketDetails tickets={tickets} users={users} />}
            />
            <Route
              exact
              path="/"
              render={() => <TicketList tickets={tickets} />}
            />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
