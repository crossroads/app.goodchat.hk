import React from "react";
import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import MainRouter from "components/MainRouter/MainRouter";
import AuthProvider from "components/AuthProvider/AuthProvider";
import { ApolloProvider } from "@apollo/client";
import HasuraClient from "lib/HasuraClient";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "theme/variables.css";

const App: React.FC = () => {
  return (
    <IonApp>
      <AuthProvider>
        <ApolloProvider client={HasuraClient}>
          <IonReactRouter>
            <MainRouter />
          </IonReactRouter>
        </ApolloProvider>
      </AuthProvider>
    </IonApp>
  );
};

export default App;
