type ContainerProps = {
  styles: React.CSSProperties
}

export const Container = ({ styles }: ContainerProps) => (
  <div style={styles}>Text content goes here!</div>
)
