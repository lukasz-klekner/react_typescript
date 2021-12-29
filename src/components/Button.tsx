import React from 'react'

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = ({ handleClick }: ButtonProps) => (
  <button onClick={(event) => handleClick(event, 1)}>Click me!</button>
)
