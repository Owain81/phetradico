import Image from 'next/image';
import logo from '../public/logo.jpg';


export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <Image src={logo} alt="Phetradico logo" height="80" width="150" />
        </div>
      </header>
    </>
  )
}
