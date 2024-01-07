import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../Components/Button';

function ButtonPage() {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <div>
      <div>
        <Button
          secondary
          rounded
          className="mb-5"
          onClick={handleClick}
        >
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary >
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
