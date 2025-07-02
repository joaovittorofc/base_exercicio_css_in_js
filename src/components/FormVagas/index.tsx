import styled from 'styled-components'
import { FormEvent, useState } from 'react'

type Props = {
  aoPesquisar: (termo: string) => void
}

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

const Campo = styled.input`
  paddi
