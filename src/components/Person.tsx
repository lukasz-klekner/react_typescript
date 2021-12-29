export type Name = {
  first: string
  last: string
}

export type PersonProps = {
  name: Name
}

export const Person = ({ name }: PersonProps) => (
  <h2>
    My name is {name.first} {name.last}
  </h2>
)
