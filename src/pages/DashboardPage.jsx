import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import "./DashboardPage.css";

const DashboardPage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Leirisonda 2025</h1>
          <div className="user-info">
            <span>Bem-vindo, {user?.name}</span>
            <button onClick={logout} className="logout-button">
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-content">
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>Obras em Andamento</h3>
              <div className="card-number">12</div>
              <p>Projetos ativos</p>
            </div>

            <div className="dashboard-card">
              <h3>Manutenções Agendadas</h3>
              <div className="card-number">8</div>
              <p>Para esta semana</p>
            </div>

            <div className="dashboard-card">
              <h3>Piscinas Geridas</h3>
              <div className="card-number">45</div>
              <p>Total de piscinas</p>
            </div>

            <div className="dashboard-card">
              <h3>Clientes Ativos</h3>
              <div className="card-number">32</div>
              <p>Contratos vigentes</p>
            </div>
          </div>

          <div className="quick-actions">
            <h2>Ações Rápidas</h2>
            <div className="actions-grid">
              <Link to="/users" className="action-button">
                <span className="action-icon">👥</span>
                <span>Gestão de Utilizadores</span>
              </Link>

              <button className="action-button">
                <span className="action-icon">🏗️</span>
                <span>Nova Obra</span>
              </button>

              <button className="action-button">
                <span className="action-icon">🏊</span>
                <span>Agendar Manutenção</span>
              </button>

              <button className="action-button">
                <span className="action-icon">📊</span>
                <span>Relatórios</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
