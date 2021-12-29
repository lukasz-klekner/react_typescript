type GreetProps = {
  name: string
  countMessages: number
  isLogged: boolean
}

export const Greet = ({ name, countMessages, isLogged }: GreetProps) => (
  <div>
    {isLogged ? (
      <h2>
        Welcome {name}!!! How are you today? You have {countMessages} to read!
      </h2>
    ) : null}
  </div>
)
