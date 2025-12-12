import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex
import { AuthModule } from "./modules/Auth_module";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthModule></AuthModule>
      </BrowserRouter>
    </>
  );
};
