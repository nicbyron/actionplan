import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonItem, IonList, IonMenu, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, setupConfig } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tabs from './tabs/Tabs';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ExamplePage from './pages/ExamplePage';

setupConfig({
  mode: 'ios'
});

const App: React.FC = () => (

  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonContent>
            <IonList>
              <IonItem routerLink="/tabs/featured">Featured</IonItem>
              <IonItem routerLink="/example-page">Example Page</IonItem>
              <IonItem>Menu Item</IonItem>
              <IonItem>Menu Item</IonItem>
              <IonItem>Menu Item</IonItem>
              <IonItem>Menu Item</IonItem>
            </IonList>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
          <Route path="/tabs" component={Tabs} />
          <Route path="/example-page" component={ExamplePage} />
          <Route exact path="/" render={() => <Redirect to="/tabs/action-plan" />} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
    /* <IonReactRouter>
      <IonSplitPane contentId="main">
        <IonRouterOutlet>
          <Route path="/tabs"/>
          <Route path="/home" component={Home} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter> */

);

export default App;
