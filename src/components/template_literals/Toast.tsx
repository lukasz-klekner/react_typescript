type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPostion = 'top' | 'center' | 'right'

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPostion}`, 'center-center'>
    | 'center'
}

export const Toast = ({ position }: ToastProps) => (
  <div>Toast Notification Position - {position}</div>
)
