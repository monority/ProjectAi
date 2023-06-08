// React import
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addId } from "./slices";

// Style SCSS

import "../src/sass/main.scss";

// Components

import Header from "../src/components/Header";
import Card from "./components/Card";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDollarSign,
  faFireFlameCurved,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
library.add(faTruckFast, faFireFlameCurved, faDollarSign);

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const generateId = () => {
    return Math.floor(Math.random() * 100);
  };
  const createNewOrder = () => {
    const newId = generateId();
    dispatch(addId(newId));
    navigate(`/newOrder/${newId}`);
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="container">
          <div id="home">
            <Card
              className="bgBlue wrapperCard"
              icon={faTruckFast}
              size="4x"
              title="Nouvelle commande"
              text="Créer et enregistrer une nouvelle commande"
              action={() => createNewOrder()}
            />
            <Card
              className="bgRed wrapperCard"
              icon={faFireFlameCurved}
              title="Commandes en cours"
              text="Voir le détail des commandes en cours"
              action={() => navigate("/currentOrder")}
            />
            <Card
              className="bgGreen wrapperCard"
              icon={faDollarSign}
              title="Paiement commande"
              text="Encaisser une commande"
              action={() => navigate("/paid")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
