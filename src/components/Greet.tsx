type GreetProps = {
  name: string
}

export const Greet = ({ name }: GreetProps) => (
  <div>
    <h2>Welcome {name}!!! How are you today?</h2>
  </div>
)
