// src/pages/Vouchers.js
import React from 'react';
import '../styles/Vouchers.css';
import coelhoImg from '../assets/coelho.png';

const vouchers = [
  { title: 'Vale um abraço', description: 'Pode ser resgatado quando precisar de um abraço.' },
  { title: 'Vale um chamego', description: 'Pra um momento de carinho sem hora marcada.' },
  { title: 'Vale se ver agora', description: 'É só mandar mensagem e usar sem pensar duas vezes.' },
  { title: 'Vale uma noite onde você quiser', description: 'A noite é sua pra escolher o destino.' },
  { title: 'Vale uma rodada de perguntas', description: 'Pode me perguntar qualquer coisa que eu respondo de verdade.' },
  { title: 'Vale uma massagem', description: 'Pra relaxar e esquecer do mundo.' },
  { title: 'Vale um "Faça minha vontade hoje" ', description: 'Desde de que não envolva pular de paraquedas.' },
  { title: 'Vale uma comida feita por mim(sem garantias de qualidade)', description: 'Mas prometo esforço.' },
  { title: 'Vale uma noite da preguiça', description: 'Pode ser série, filme, travesseiro e silencio confortavel.' },

];

function Vouchers() {
  const handleShare = (voucher) => {
    const message = `🎁 *${voucher.title}* 🎫\n${voucher.description}`;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="vouchers-container" style={{ backgroundImage: `url(${coelhoImg})` }}>
      <h2 className='blinking' style={{ color: 'red' }}>Seus Vales Especiais</h2>
      <div className="vouchers-grid">
        {vouchers.map((voucher, index) => (
          <div
            key={index}
            className="voucher-card"
            onClick={() => handleShare(voucher)}
          >
            <div className="ticket-left"></div>
            <div className="ticket-right"></div>
            <h3>{voucher.title}</h3>
            <p>{voucher.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vouchers;
