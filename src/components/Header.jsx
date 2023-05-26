import styled from 'styled-components';
import { Auth } from './Auth';
export const Header = () => {
  return (
    <Container>
      <Auth />
    </Container>
  );
};
const Container = styled.div`
  height: 150px;
  width: 100%;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center ;
`;
