import AuthForm from "../components/AuthForm";
import "../styles/auth.css";

const AuthModule = () => {
  return (
    <div className="auth-container">
      <h2>Iniciar Sesión</h2>
      <AuthForm />
    </div>
  );
};

export default AuthModule;
