import MainRoutes from "./MainRoutes";
import MovieContextProvider from "./contexts/MovieContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Navbar from "./compontents/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <MovieContextProvider>
        <AuthContextProvider>
          <Navbar />
          <MainRoutes />
        </AuthContextProvider>
      </MovieContextProvider>
    </>
  );
};

export default App;
