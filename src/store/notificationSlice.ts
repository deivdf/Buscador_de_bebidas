import {StateCreator} from "zustand"
export type notificationType={
    text: string,
    error: boolean,
    show: boolean
}
//se crea un nuevo slice para las notificaciones de favoritos
export type NotificationSliceType = {
    notification: notificationType
}

export const createNotificationSlice : StateCreator<NotificationSliceType> = (set, get) => ({
    notification: {
        text: '',
        error: false,
        show: false
    }

})