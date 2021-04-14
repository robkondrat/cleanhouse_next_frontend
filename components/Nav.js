import { Navbar } from "react-bootstrap";
import Link from 'next/link';

export default function Nav() {
  return (
    <Navbar>
      <Link href="/rooms">Rooms</Link>
    </Navbar>
  )
}