export type ToastType = 'success' | 'error' | 'info' | 'warning';

export type ToastAction = {
    label: string
    onClick: () => void
}

export type ToastOptions = {
    title?: string
    duration?: number
    action?: ToastAction
}

export type Toast = ToastOptions & {
    id: number
    message: string
    type: ToastType
    removing?: boolean
}