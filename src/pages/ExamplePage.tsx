import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonMenuButton, IonButtons, IonInput } from '@ionic/react'
import { actionItems } from '../store';
import { observer } from 'mobx-react';
import { ExampleActionItemList } from '../components/ExampleActionItemList';

const ExamplePage: React.FC = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [submit, setSubmit] = useState(false)
  
  useEffect(() => {
    if (submit) { updateActionItems() } // The submit value will be set on load, so need to ensure that it is true
   }, [ submit ]) // A change in this value triggers the useEffect hook

  const updateActionItems = async () => {
    const doc = await actionItems.add({
      name: name,
      description: description
    })
    resetNewActionItemState()
    console.log(doc.id)
    return 
  }

  const resetNewActionItemState = () => {
    setName('')
    setDescription('')
    setSubmit(false)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton autoHide={false}></IonMenuButton>
          </IonButtons>
          <IonTitle>Example Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding ion-text-justify ion-justify-content-center ion-align-self-center">
      <h1>Pushing New Data</h1>
        <IonInput 
          value={name} 
          placeholder="Enter Name" 
          onIonChange={e=>setName(e.detail.value!)}>
        </IonInput>
        <IonInput 
          value={description} 
          placeholder="Enter Description" 
          onIonChange={e=>setDescription(e.detail.value!)}>
        </IonInput>
        <IonButton onClick={() => setSubmit(!submit)}>Submit New Action Item</IonButton>
      <h1>Getting lists of data</h1>  
        <ExampleActionItemList></ExampleActionItemList>
      </IonContent>
    </IonPage>
  );
};

export default observer(ExamplePage);