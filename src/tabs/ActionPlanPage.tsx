import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton, IonMenuButton, IonIcon, IonButtons, IonImg } from '@ionic/react'
import { checkmarkCircleOutline } from 'ionicons/icons';
import { observer } from 'mobx-react';

const ActionPlanPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton autoHide={false}></IonMenuButton>
          </IonButtons>
          <IonTitle>Action Plan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonImg src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_1800,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FVL08Udt6ujVqM5XkCGIa%2Fpub%2Fa3pxzh1m2PIjVxdcEHN0.png"></IonImg>
      <IonContent class="ion-padding ion-text-justify ion-justify-content-center ion-align-self-center">
        <IonButton expand="block" fill="outline" class="ion-margin-bottom">Signup / Login</IonButton>
        <IonButton expand="block">
          <IonIcon icon={checkmarkCircleOutline} class="ion-padding-end"></IonIcon>
          <IonLabel>Action Items</IonLabel>
        </IonButton>
        <h1>How Action Plan Works</h1>
        <ul>
          <li>Use the "Featured", "Issues", and "Browse" tabs to find ways to take action.</li>
          <li>Save items to your Action Plan todo list.</li>
          <li>Items you save will then show up on this tab.</li>
          <li>Once you've completed the action item, mark it as complete.</li>
          <li>Check back in daily or weekly to find and complete more actions!</li>
        </ul>
      </IonContent>
    </IonPage>
  );
};

export default observer(ActionPlanPage);