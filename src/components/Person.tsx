type PersonProps = {
  name: {
    first: string
    last: string
  }
}

export const Person = ({ name }: PersonProps) => (
  <h2>
    My name is {name.first} {name.last}
  </h2>
)
