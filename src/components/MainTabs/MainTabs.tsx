import React from "react";
import Home from "pages/Home/Home";
import Offers from "pages/Offers/Offers";
import { Route } from "react-router";
import { 
  home, 
  listOutline, 
  chatbubbleOutline, 
  menu 
} from "ionicons/icons";
import Chats from "pages/Chats/Chats";
import Chat from "pages/Chat/Chat";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { useTranslation } from "react-i18next";
import Menu from "pages/Menu/Menu";

const MainTabs = () => {
  const { t } = useTranslation();

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/:tab(offers)">
          <Offers />
        </Route>
        <Route exact path="/:tab(chats)">
          <Chats />
        </Route>
        <Route exact path="/:tab(chats)/:conversationId">
          <Chat />
        </Route>
        <Route exact path="/:tab(home)">
          <Home />
        </Route>
        <Route exact path="/:tab(menu)">
          <Menu />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel>{t("footer.home")}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="chats" href="/chats">
          <IonIcon icon={chatbubbleOutline} />
          <IonLabel>{t("footer.chats")}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="offers" href="/offers">
          <IonIcon icon={listOutline} />
          <IonLabel>{t("footer.offers")}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="menu" href="/menu">
          <IonIcon icon={menu} />
          <IonLabel>{t("footer.menu")}</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
