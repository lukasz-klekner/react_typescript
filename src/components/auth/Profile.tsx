export type ProfileProps = {
  name: string
}

export const Profile = ({ name }: ProfileProps) => (
  <div>Private profile component. Name is {name}</div>
)
