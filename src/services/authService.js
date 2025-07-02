// Mock auth service for development
export const authService = {
  async login(email, password) {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock validation
    if (email === "admin@leirisonda.com" && password === "admin123") {
      return {
        user: {
          id: 1,
          name: "Administrador",
          email: "admin@leirisonda.com",
          role: "admin",
        },
        token: "mock-jwt-token-123",
      };
    }

    throw new Error("Credenciais inválidas");
  },

  async validateToken(token) {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (token === "mock-jwt-token-123") {
      return {
        id: 1,
        name: "Administrador",
        email: "admin@leirisonda.com",
        role: "admin",
      };
    }

    throw new Error("Token inválido");
  },
};
