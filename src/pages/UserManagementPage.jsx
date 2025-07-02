import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import "./UserManagementPage.css";

const UserManagementPage = () => {
  const { user, logout } = useAuth();
  const [users] = useState([
    {
      id: 1,
      name: "Administrador",
      email: "admin@leirisonda.com",
      role: "admin",
      active: true,
    },
    {
      id: 2,
      name: "João Silva",
      email: "joao@leirisonda.com",
      role: "manager",
      active: true,
    },
    {
      id: 3,
      name: "Maria Santos",
      email: "maria@leirisonda.com",
      role: "technician",
      active: false,
    },
  ]);

  const getRoleLabel = (role) => {
    switch (role) {
      case "admin":
        return "Administrador";
      case "manager":
        return "Gestor";
      case "technician":
        return "Técnico";
      default:
        return role;
    }
  };

  return (
    <div className="user-management-page">
      <header className="page-header">
        <div className="header-content">
          <div className="header-nav">
            <Link to="/dashboard" className="back-button">
              ← Dashboard
            </Link>
            <h1>Gestão de Utilizadores</h1>
          </div>
          <div className="user-info">
            <span>Bem-vindo, {user?.name}</span>
            <button onClick={logout} className="logout-button">
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="page-main">
        <div className="page-content">
          <div className="page-actions">
            <button className="primary-button">+ Novo Utilizador</button>
          </div>

          <div className="users-table-container">
            <table className="users-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Função</th>
                  <th>Estado</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {users.map((userItem) => (
                  <tr key={userItem.id}>
                    <td>{userItem.name}</td>
                    <td>{userItem.email}</td>
                    <td>{getRoleLabel(userItem.role)}</td>
                    <td>
                      <span
                        className={`status ${userItem.active ? "active" : "inactive"}`}
                      >
                        {userItem.active ? "Ativo" : "Inativo"}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button className="edit-button">Editar</button>
                        <button className="delete-button">Eliminar</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserManagementPage;
