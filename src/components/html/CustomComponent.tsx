import React from 'react'
import { Greet } from '../Greet'

export const CustomComponent = ({
  name,
  countMessages,
  isLogged,
}: React.ComponentProps<typeof Greet>) => <div>{name}</div>
