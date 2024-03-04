import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const StyledLogo = styled.h1`
font-size: 40px;
margin: 20px auto;
`
function Login() {
  return (
    <LoginLayout>
      <StyledLogo>Hotsys</StyledLogo>
      <h3>Example account: email = bale@example.com && pass: bale123456</h3>
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}


export default Login