import Image from 'react-bootstrap/Image';
import XpertLogo from './xpert_logo.png';
import './logo.css';

function Logo() {
  return (
    <div className='Logo'>
        <Image src={XpertLogo} width={190} height={80} rounded />
    </div>
  );
}

export default Logo;