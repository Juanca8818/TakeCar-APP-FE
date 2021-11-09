import {
    IonAlert,
    IonToggle,
    IonCardHeader,
    IonLabel,
    IonCard,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonItem,
    IonMenuButton, IonImg, IonText, IonSpinner, IonLoading
} from '@ionic/react';
import React, { useState,useEffect,useContext } from 'react';
import { pin, time, wifi, wine, warning, walk } from 'ionicons/icons';

import UsuarioContext from '../context/UsuarioContext';
import TurnosDescripcion from "./TurnosDescripcion"
import ImagenPerfil from "../images/logo2.jpg"
import ImagenTurno from "../images/turno.jpg"
import "../components/TurnosTab.css";


import './Tab2.css';

const TurnosTab: React.FC = () => {
  const [showAlert2, setShowAlert2] = useState(false);
  const [loading, setLoading] = useState(false)
  const handleLoading = (status: boolean) =>{
      setLoading(status);
  }

    // @ts-ignore
    // @ts-ignore
    return (
    <IonPage>
            <IonHeader>
                <IonToolbar className="tab">
                    <IonMenuButton className="tab" color="primary" slot="start" />
                    <IonTitle className="tab">Turnos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent style={{alignContent:'center'}} scrollY={false}>
                <IonCardHeader>
                    <IonImg src={ImagenTurno}/>
                </IonCardHeader>
                <IonCard style={{height:'auto',padding:'5px'}}>
                    <IonText  style={{alignContent:'center'}} >Acá podrás ver los turnos que la concesionaria reservó para vos</IonText>
                </IonCard>
                <IonContent>
                    <IonLoading
                        cssClass='my-custom-class'
                        isOpen={loading}
                        message={'Por favor espere...'}
                    />
                    <TurnosDescripcion loadingHandler={handleLoading}/>
                </IonContent>
            </IonContent>
  </IonPage>



);

}

export default TurnosTab;
