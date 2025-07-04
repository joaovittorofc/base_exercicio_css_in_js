import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`;

export default function Cabecalho() {
  return (
    <HeaderWrapper>
      <h1>EBAC Jobs</h1>
    </HeaderWrapper>
  );
}
