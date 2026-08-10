import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import './about.css';
import fotoperfil from '../../assets/fotoperfil.jpeg';

// --- Personalize aqui ---
const WHATSAPP_NUMBER = '5511911543874'; // DDI + DDD + número, sem espaços/símbolos
const WHATSAPP_MESSAGE = 'Olá! Vim pelo site da PettaTech e gostaria de saber mais.';
const EMAIL = 'pettatech@outlook.com.br';
// ------------------------

const stats = [
  { id: 1, number: '10+', label: 'Anos de Experiência' },
  { id: 2, number: '50+', label: 'Projetos Entregues' },
  { id: 3, number: '200+', label: 'Clientes Satisfeitos' },
  { id: 4, number: '20+', label: 'Automações' },
];

const values = [
  {
    id: 1,
    title: 'Inovação',
    description:
      'Buscamos sempre as melhores tecnologias e metodologias para entregar soluções modernas.',
    icon: '🚀',
  },
  {
    id: 2,
    title: 'Qualidade',
    description:
      'Comprometidos com a excelência em cada projeto que desenvolvemos.',
    icon: '⭐',
  },
  {
    id: 3,
    title: 'Compromisso',
    description:
      'Dedicados a cumprir prazos e expectativas de nossos clientes.',
    icon: '🤝',
  },
  {
    id: 4,
    title: 'Transparência',
    description:
      'Comunicação clara e honesta em todas as etapas do projeto.',
    icon: '👁️',
  },
];

export default function About() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;
  const emailLink = `mailto:${EMAIL}`;

  return (
    <section className="about" id="sobre">
      <div className="about__container">
        <div className="about__header">
          <h2 className="about__title">Sobre</h2>
          <p className="about__subtitle">
            Saiba mais sobre a Petta Tech
          </p>
        </div>

        <div className="about__content">
          <div className="about__text">
            <h3>Quem Somos</h3>
            <p>
              A Petta Tech é uma empresa especializada em desenvolvimento web e soluções
              digitais de alta qualidade. Trabalhamos para transformar ideias em produtos digitais que fazem a diferença.
            </p>
            <p>
              Murilo Di Petta, após anos trabalhando com TI, notou algo importante:  
              a tecnologia está avançando mais do que a humanidade pode acompanhar.
              Com o objetivo de conectar pessoas e tecnologia, Murilo decidiu fundar a Petta Tech. 
            </p>

            <h3 style={{ marginTop: '2rem' }}>Nossa Missão</h3>
            <p>
              Entregar soluções digitais de excelência que transformem negócios e
              gerem valor real para nossos clientes, utilizando tecnologias de
              ponta e práticas sustentáveis.
            </p>

            <h3 style={{ marginTop: '2rem' }}>Nossa Visão</h3>
            <p>
              Ser referência no mercado de tecnologia, conhecidos pela qualidade,
              inovação e compromisso com o sucesso dos nossos clientes.
            </p>
          </div>

          <div className="about__image">
            <div className="about__image-placeholder">
              <img
                src={fotoperfil}
                alt="Sobre Nossa Empresa"
                className="about__img"
              />
            </div>
          </div>
        </div>

        <div className="about__stats">
          {stats.map((stat) => (
            <div key={stat.id} className="stat__card">
              <h4 className="stat__number">{stat.number}</h4>
              <p className="stat__label">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="about__values">
          <h3 className="values__title">Nossos Valores</h3>
          <div className="values__grid">
            {values.map((value) => (
              <div key={value.id} className="value__card">
                <span className="value__icon">{value.icon}</span>
                <h4 className="value__title">{value.title}</h4>
                <p className="value__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about__cta" id="contato">
          <h3>Quer saber mais?</h3>
          <p>Entre em contato para melhorar seu negócio</p>
          <div className="about__cta-buttons">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="about__cta-btn about__cta-btn--whatsapp"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a href={emailLink} className="about__cta-btn about__cta-btn--email">
              <Mail size={20} />
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
