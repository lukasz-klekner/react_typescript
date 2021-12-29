type PersonListProps = {
  names: {
    first: string
    last: string
  }[]
}

export const PersonList = ({ names }: PersonListProps) => (
  <h2>
    {names.map((name) => (
      <h5>
        {name.first} {name.last}
      </h5>
    ))}
  </h2>
)
