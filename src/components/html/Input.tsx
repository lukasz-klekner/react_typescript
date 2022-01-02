import React from 'react'

type InputProps = {
  props: React.ComponentProps<'input'>
}

export const CustomInput = (props: InputProps) => (
  <input type='text' {...props} />
)
