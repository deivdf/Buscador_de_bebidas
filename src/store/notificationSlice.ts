import {StateCreator} from "zustand"
export type Notification={
    text: string,
    error: boolean,
    show: boolean
}
//se crea un nuevo slice para las notificaciones de favoritos
export type NotificationSliceType = {
    notification: Notification;
    showNotification: (payload: Pick<Notification, "text" | "error">) => void;
};

export const createNotificationSlice: StateCreator<NotificationSliceType> = (set) => ({
    notification: {
        text: "",
        error: false,
        show: false,
    },
    //se crea una funcion para mostrar la notificacion
    showNotification: (payload) => {
        set((state) => ({
            ...state, // Mantén el estado anterior
            notification: {
              text: payload.text,
              error: payload.error,
              show: true,
            },
          }));
    }

})