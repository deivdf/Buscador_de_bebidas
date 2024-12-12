import {StateCreator} from "zustand"
import { favoriteSlicetype } from "./favoriteSlice";
export type Notification={
    text: string,
    error: boolean,
    show: boolean
}
//se crea un nuevo slice para las notificaciones de favoritos
export type NotificationSliceType = {
    notification: Notification;
    showNotification: (payload: Pick<Notification, "text" | "error">) => void;
    hideNotification: () => void;
};
//NotificationSliceType y favoriteSlicetype para el caso de multiples slices asi se les hace saber que ya los tenemos a las funciones
// esto nos permite ejecutar notification slice desde cualquier componente que lo necesite y este vinculado a estos slices
// en este caso en esta funcion solo se esta usando favoriteSliceType pero se puede usar mas de uno para hacer el llamado en otrso slice que lo necesiten
export const createNotificationSlice: StateCreator<NotificationSliceType & favoriteSlicetype, [], [],NotificationSliceType > = (set, get) => ({
    notification: {
        text: "",
        error: false,
        show: false,
    },
    //se crea una funcion para mostrar la notificacion
    showNotification: (payload) => {
        set({
            notification: {
              text: payload.text,
              error: payload.error,
              show: true,
            },
          });
        setTimeout((
            // con get mandamos a llamar funciones dentro de nuestro slice
            get().hideNotification
        ),3000);
    },
    hideNotification: () => {
        set({
            notification: {
                text: "",
                error: false,
                show: false,
            },
        })
    },

})