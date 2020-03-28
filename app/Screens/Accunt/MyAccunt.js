import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import Loading from "../../Components/Loading";

import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

const MyAccunt = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      //s user es false o nullo
      // pasa a decir usuer no logiado
      // de lo contrario  si esta logiado
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) {
    return <Loading isvisible={true} text="Cargando..." />;
  }
  return login ? <UserLogged /> : <UserGuest />;
};

export default MyAccunt;
