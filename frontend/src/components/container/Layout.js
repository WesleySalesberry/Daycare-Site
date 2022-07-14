import Container from 'react-bootstrap/Container';

import { BottomNav } from "../Navs/BottomNav"
import { Footer } from '../Navs/Footer';
import { TopNav } from "../Navs/TopNav"

export const Layout = ({children}) => {
  return (
    <Container fluid>
      <TopNav />
      <BottomNav />
      { children }
      <Footer />
    </Container>
  )
}