import { Container } from './styles';
import Logo from '../../assets/images/logo.svg';

export function Header(): JSX.Element {
  return (
    <Container>
      <img src={Logo} alt="Logo Star Wars" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Trilogia</a>
        </li>
      </ul>
    </Container>
  );
}
