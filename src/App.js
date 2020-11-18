import AppRoutes from "./AppRoutes";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div>
      <Header/>
      <AppRoutes />
    </div>
  );
};

export default App;
