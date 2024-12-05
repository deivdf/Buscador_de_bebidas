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