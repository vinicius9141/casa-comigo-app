import React, { useEffect, useState } from "react"; 
import primeirMensagem from "../assets/images/primeira-msg.jpeg";
import video1 from "../assets/videos/video1.mp4"; // ✅ importa o vídeo local

const History = () => {
  const startDate = new Date("2025-03-01T00:00:00");
  const [showVideoModal, setShowVideoModal] = useState(false);

  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeElapsed({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const loveParagraphs = [
    {
      id: 1,
      text: `Como eu te disse uma vez: existem mais de 370 mil palavras no dicionário brasileiro,
      e eu queria muito que alguma delas descrevesse o quanto eu te amo.
      Mas nenhuma é suficiente. Assim como nenhum tempo ao seu lado será o bastante pra mostrar o que sinto.
      E ainda assim, em cada segundo, eu tento. 💌`,
    },
    {
      id: 2,
      text: `No dia 12 de agosto de 2025 celebramos nosso primeiro mês de namoro.
      Um mês que parece pouco diante de tudo o que já vivemos, mas que carrega a intensidade de uma vida inteira.
      Você já é meu lugar favorito, meu porto seguro e a melhor parte dos meus dias. ✨`,
    },
    {
      id: 3,
      text: `Chegamos ao nosso terceiro mês de namoro, e como eu já te disse inúmeras vezes: eu te amo um tantão. 
      É um tantão porque não existe palavra que consiga descrever a imensidão desse amor. 
      E este mês foi ainda mais especial — você pegou o buquê da noiva, um sinal do destino que confirma aquilo que meu coração já sabe: 
      que ainda vamos nos casar e viver uma vida inteira lado a lado. 💍❤️`
    },
    {
      id: 4,
      text: `No nosso quarto mês de namoro, a vida decidiu nos presentear de um jeito que eu nunca vou esquecer. 
  Foi o mês em que te pedi em casamento — o passo mais bonito que já dei — e o mês em que descobri que seria pai. 
  Nunca senti uma felicidade tão profunda, tão cheia de sentido. 
  Era como se, de repente, todas as peças do mundo se encaixassem e tudo fizesse sentido, porque eu tenho você, 
  e agora, temos o nosso pedacinho de amor crescendo dentro de nós. 👶💍❤️`
    }
  ];

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>💗 Desde o primeiro momento, em números:</h2>

      <p style={timeStyle}>
        {timeElapsed.days} <span style={light}>dias</span>,{" "}
        {timeElapsed.hours} <span style={light}>horas</span>,{" "}
        {timeElapsed.minutes} <span style={light}>minutos</span> e{" "}
        {timeElapsed.seconds} <span style={light}>segundos</span>
        <h2 style={{ fontSize: "1rem" }}>
          💗 Eu te amo a todo esse tempo e contando
        </h2>
      </p>

      <div>
        <p style={sectionTitle}>📩 Primeira mensagem — 03/05</p>
        <img src={primeirMensagem} alt="Primeira mensagem" style={imageStyle} />

        <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <p style={sectionTitle}>🎵 Essa música me lembra você</p>
          <iframe
            title="Música que me lembra você"
            src="https://open.spotify.com/embed/track/3tqLTlt2O0300Aakkr0PEO?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: 12, marginTop: 12 }}
          />
        </div>
      </div>

      {/* Renderiza todos os parágrafos da lista */}
      {loveParagraphs.map((p) => (
        <p key={p.id} style={loveText}>
          {p.text}
        </p>
      ))}

      <div style={loveText}>
        <p>Fiz isso pra você não é muito mas eu realmente espero que goste</p>
        <button style={styles.button} onClick={() => setShowVideoModal(true)}>
          👉 Clica aqui
        </button>
      </div>

      {/* Modal do vídeo */}
      {showVideoModal && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <button
              onClick={() => setShowVideoModal(false)}
              style={modalClose}
            >
              &times;
            </button>
            <video
              src={video1}
              controls
              autoPlay
              style={{
                width: "100%",
                borderRadius: "12px",
                maxHeight: "70vh",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// 🎨 Estilos
const containerStyle = {
  maxWidth: 460,
  margin: "40px auto",
  padding: "24px",
  borderRadius: 16,
  background: "linear-gradient(145deg, #fff0f5, #ffe4e1)",
  color: "#3d1c2d",
  boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "1.6rem",
  fontWeight: "600",
  marginBottom: 10,
  color: "#c2185b",
};

const timeStyle = {
  fontSize: "1.8rem",
  fontWeight: "700",
  marginTop: 15,
};

const light = {
  fontWeight: "400",
  fontSize: "1rem",
};

const sectionTitle = {
  fontSize: "1.25rem",
  fontWeight: "600",
  marginTop: 30,
  color: "#6a1b4d",
};

const imageStyle = {
  marginTop: 20,
  width: "100%",
  borderRadius: 12,
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

const loveText = {
  marginTop: "2.5rem",
  fontSize: "1.05rem",
  lineHeight: "1.8",
  backgroundColor: "#ffffffaa",
  borderRadius: 12,
  padding: "1rem",
  color: "#4a2c3a",
  fontWeight: "500",
};

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContent = {
  backgroundColor: "#fff",
  padding: "1rem",
  borderRadius: "12px",
  maxWidth: "640px",
  width: "90%",
  position: "relative",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
};

const modalClose = {
  position: "absolute",
  top: "10px",
  right: "16px",
  fontSize: "1.5rem",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "#333",
};

const styles = {
  button: {
    background: "linear-gradient(135deg, #4ade80, #22c55e)",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.5rem",
    fontSize: "1.1rem",
    fontWeight: "bold",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
};

export default History;
