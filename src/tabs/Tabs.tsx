import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonHeader } from '@ionic/react';
import { checkmarkCircle, flame, globe, home, search, settings } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';

import SettingsPage from './FeaturedPage';
import ActionPlanPage from './ActionPlanPage';

const Tabs: React.FC = () => (
      <IonTabs >
        <IonTabBar slot="bottom">
          <IonTabButton tab="action-plan" href="/tabs/action-plan">
            <IonIcon icon={checkmarkCircle} />
            <IonLabel>Action Plan</IonLabel>
          </IonTabButton>
          <IonTabButton tab="featured" href="/tabs/featured">
            <IonIcon icon={flame} />
            <IonLabel>Featured</IonLabel>
          </IonTabButton>
          <IonTabButton tab="issues" href="/tabs/issues">
            <IonIcon icon={globe} />
            <IonLabel>Issues</IonLabel>
          </IonTabButton>
          <IonTabButton tab="browse" href="/tabs/browse">
            <IonIcon icon={search} />
            <IonLabel>Browse</IonLabel>
          </IonTabButton>
        </IonTabBar>
    
          <IonRouterOutlet >
            <Route path="/tabs/action-plan" component={ActionPlanPage} />
            <Route path="/tabs/featured" component={SettingsPage} />
          </IonRouterOutlet>
      </IonTabs>
);

export default Tabs;