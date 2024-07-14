import React from "react";
import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { bgblue, bggreen, bgyellow } from "../const/colors";
import { AccordionShow } from "../components/Accordion";

function Home() {
  const [messages, setMessages] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const eventSource = new EventSource("https://ipsum-backend.onrender.com/");

    eventSource.onmessage = (event) => {
      const eventData = event.data;
      const jsonData = JSON.parse(eventData);
      setMessages(jsonData);
      setLoading(false);
    };

    return () => eventSource.close();
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <div className="titles">
          <h1 className="mainTitle">
            ¡Bienvenido de nuevo, <span>Steven</span>! 👋
          </h1>
          <h1 className="mainTitle">Proyectos Pendientes</h1>
          {loading ? <h1 className="mainTitle">Loading...</h1> : null}
        </div>
        <section className="cards">
          {messages ? (
            <>
              <div className="card">
                <AccordionShow
                  title="Sin Agendar"
                  data={messages?.filter(
                    (message) => message.status == "sinAgendar",
                  )}
                  bgColor={`${bgyellow}`}
                  className="cardTitle"
                />
              </div>

              <div className="card">
                <AccordionShow
                  title="Por visitar"
                  data={messages?.filter(
                    (message) => message.status == "porVisitar",
                  )}
                  bgColor={`${bgblue}`}
                  className="cardTitle"
                />
              </div>

              <div className="card">
                <AccordionShow
                  title="En Construccion"
                  data={messages?.filter(
                    (message) => message.status == "enConstruccion",
                  )}
                  bgColor={`${bggreen}`}
                  className="cardTitle"
                />
              </div>
            </>
          ) : null}
        </section>
      </main>
    </>
  );
}

export default Home;
