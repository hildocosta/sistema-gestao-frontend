export const loginUser = (email, password) => {
  // Simulação de um banco de dados simples
  const ADMIN_EMAIL = "hyldo.costa@gmail.com";
  const ADMIN_PASS = "123";

  return email === ADMIN_EMAIL && password === ADMIN_PASS;
};