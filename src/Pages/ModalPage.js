import { useState } from 'react';
import Modal from '../Components/Modal';
import Button from '../Components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  }

  const actionBar = <Button onClick={handleClose} primary>I Accept</Button>

  const modal = 
  <Modal onClose={handleClose} actionBar={actionBar}> 
    <p>
      Here is an important agreement for you to accept...
    </p>
  </Modal> // this is so we get a little more space in our code and be more legible ...

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus leo, hendrerit et rutrum pretium, facilisis ut leo. Cras nec viverra elit. Suspendisse vel ipsum ultrices, dapibus nibh nec, feugiat erat. Suspendisse eget aliquet lacus, sed porta metus. Etiam iaculis eu enim id suscipit. Vivamus elementum lacinia velit, sit amet efficitur erat lacinia vel. Maecenas a nisl ut ipsum lobortis ullamcorper. Donec elit lacus, consectetur eget porta non, aliquam vel est. Cras sed eros odio. Sed augue tortor, hendrerit eget felis at, mattis placerat elit. Sed vitae velit mollis, aliquet augue nec, volutpat nulla. Donec quis blandit metus. Nulla hendrerit ex sed pellentesque suscipit. Sed tempus eleifend orci et hendrerit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus leo, hendrerit et rutrum pretium, facilisis ut leo. Cras nec viverra elit. Suspendisse vel ipsum ultrices, dapibus nibh nec, feugiat erat. Suspendisse eget aliquet lacus, sed porta metus. Etiam iaculis eu enim id suscipit. Vivamus elementum lacinia velit, sit amet efficitur erat lacinia vel. Maecenas a nisl ut ipsum lobortis ullamcorper. Donec elit lacus, consectetur eget porta non, aliquam vel est. Cras sed eros odio. Sed augue tortor, hendrerit eget felis at, mattis placerat elit. Sed vitae velit mollis, aliquet augue nec, volutpat nulla. Donec quis blandit metus. Nulla hendrerit ex sed pellentesque suscipit. Sed tempus eleifend orci et hendrerit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus leo, hendrerit et rutrum pretium, facilisis ut leo. Cras nec viverra elit. Suspendisse vel ipsum ultrices, dapibus nibh nec, feugiat erat. Suspendisse eget aliquet lacus, sed porta metus. Etiam iaculis eu enim id suscipit. Vivamus elementum lacinia velit, sit amet efficitur erat lacinia vel. Maecenas a nisl ut ipsum lobortis ullamcorper. Donec elit lacus, consectetur eget porta non, aliquam vel est. Cras sed eros odio. Sed augue tortor, hendrerit eget felis at, mattis placerat elit. Sed vitae velit mollis, aliquet augue nec, volutpat nulla. Donec quis blandit metus. Nulla hendrerit ex sed pellentesque suscipit. Sed tempus eleifend orci et hendrerit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus leo, hendrerit et rutrum pretium, facilisis ut leo. Cras nec viverra elit. Suspendisse vel ipsum ultrices, dapibus nibh nec, feugiat erat. Suspendisse eget aliquet lacus, sed porta metus. Etiam iaculis eu enim id suscipit. Vivamus elementum lacinia velit, sit amet efficitur erat lacinia vel. Maecenas a nisl ut ipsum lobortis ullamcorper. Donec elit lacus, consectetur eget porta non, aliquam vel est. Cras sed eros odio. Sed augue tortor, hendrerit eget felis at, mattis placerat elit. Sed vitae velit mollis, aliquet augue nec, volutpat nulla. Donec quis blandit metus. Nulla hendrerit ex sed pellentesque suscipit. Sed tempus eleifend orci et hendrerit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus leo, hendrerit et rutrum pretium, facilisis ut leo. Cras nec viverra elit. Suspendisse vel ipsum ultrices, dapibus nibh nec, feugiat erat. Suspendisse eget aliquet lacus, sed porta metus. Etiam iaculis eu enim id suscipit. Vivamus elementum lacinia velit, sit amet efficitur erat lacinia vel. Maecenas a nisl ut ipsum lobortis ullamcorper. Donec elit lacus, consectetur eget porta non, aliquam vel est. Cras sed eros odio. Sed augue tortor, hendrerit eget felis at, mattis placerat elit. Sed vitae velit mollis, aliquet augue nec, volutpat nulla. Donec quis blandit metus. Nulla hendrerit ex sed pellentesque suscipit. Sed tempus eleifend orci et hendrerit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus leo, hendrerit et rutrum pretium, facilisis ut leo. Cras nec viverra elit. Suspendisse vel ipsum ultrices, dapibus nibh nec, feugiat erat. Suspendisse eget aliquet lacus, sed porta metus. Etiam iaculis eu enim id suscipit. Vivamus elementum lacinia velit, sit amet efficitur erat lacinia vel. Maecenas a nisl ut ipsum lobortis ullamcorper. Donec elit lacus, consectetur eget porta non, aliquam vel est. Cras sed eros odio. Sed augue tortor, hendrerit eget felis at, mattis placerat elit. Sed vitae velit mollis, aliquet augue nec, volutpat nulla. Donec quis blandit metus. Nulla hendrerit ex sed pellentesque suscipit. Sed tempus eleifend orci et hendrerit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus leo, hendrerit et rutrum pretium, facilisis ut leo. Cras nec viverra elit. Suspendisse vel ipsum ultrices, dapibus nibh nec, feugiat erat. Suspendisse eget aliquet lacus, sed porta metus. Etiam iaculis eu enim id suscipit. Vivamus elementum lacinia velit, sit amet efficitur erat lacinia vel. Maecenas a nisl ut ipsum lobortis ullamcorper. Donec elit lacus, consectetur eget porta non, aliquam vel est. Cras sed eros odio. Sed augue tortor, hendrerit eget felis at, mattis placerat elit. Sed vitae velit mollis, aliquet augue nec, volutpat nulla. Donec quis blandit metus. Nulla hendrerit ex sed pellentesque suscipit. Sed tempus eleifend orci et hendrerit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus leo, hendrerit et rutrum pretium, facilisis ut leo. Cras nec viverra elit. Suspendisse vel ipsum ultrices, dapibus nibh nec, feugiat erat. Suspendisse eget aliquet lacus, sed porta metus. Etiam iaculis eu enim id suscipit. Vivamus elementum lacinia velit, sit amet efficitur erat lacinia vel. Maecenas a nisl ut ipsum lobortis ullamcorper. Donec elit lacus, consectetur eget porta non, aliquam vel est. Cras sed eros odio. Sed augue tortor, hendrerit eget felis at, mattis placerat elit. Sed vitae velit mollis, aliquet augue nec, volutpat nulla. Donec quis blandit metus. Nulla hendrerit ex sed pellentesque suscipit. Sed tempus eleifend orci et hendrerit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus leo, hendrerit et rutrum pretium, facilisis ut leo. Cras nec viverra elit. Suspendisse vel ipsum ultrices, dapibus nibh nec, feugiat erat. Suspendisse eget aliquet lacus, sed porta metus. Etiam iaculis eu enim id suscipit. Vivamus elementum lacinia velit, sit amet efficitur erat lacinia vel. Maecenas a nisl ut ipsum lobortis ullamcorper. Donec elit lacus, consectetur eget porta non, aliquam vel est. Cras sed eros odio. Sed augue tortor, hendrerit eget felis at, mattis placerat elit. Sed vitae velit mollis, aliquet augue nec, volutpat nulla. Donec quis blandit metus. Nulla hendrerit ex sed pellentesque suscipit. Sed tempus eleifend orci et hendrerit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus leo, hendrerit et rutrum pretium, facilisis ut leo. Cras nec viverra elit. Suspendisse vel ipsum ultrices, dapibus nibh nec, feugiat erat. Suspendisse eget aliquet lacus, sed porta metus. Etiam iaculis eu enim id suscipit. Vivamus elementum lacinia velit, sit amet efficitur erat lacinia vel. Maecenas a nisl ut ipsum lobortis ullamcorper. Donec elit lacus, consectetur eget porta non, aliquam vel est. Cras sed eros odio. Sed augue tortor, hendrerit eget felis at, mattis placerat elit. Sed vitae velit mollis, aliquet augue nec, volutpat nulla. Donec quis blandit metus. Nulla hendrerit ex sed pellentesque suscipit. Sed tempus eleifend orci et hendrerit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus leo, hendrerit et rutrum pretium, facilisis ut leo. Cras nec viverra elit. Suspendisse vel ipsum ultrices, dapibus nibh nec, feugiat erat. Suspendisse eget aliquet lacus, sed porta metus. Etiam iaculis eu enim id suscipit. Vivamus elementum lacinia velit, sit amet efficitur erat lacinia vel. Maecenas a nisl ut ipsum lobortis ullamcorper. Donec elit lacus, consectetur eget porta non, aliquam vel est. Cras sed eros odio. Sed augue tortor, hendrerit eget felis at, mattis placerat elit. Sed vitae velit mollis, aliquet augue nec, volutpat nulla. Donec quis blandit metus. Nulla hendrerit ex sed pellentesque suscipit. Sed tempus eleifend orci et hendrerit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus leo, hendrerit et rutrum pretium, facilisis ut leo. Cras nec viverra elit. Suspendisse vel ipsum ultrices, dapibus nibh nec, feugiat erat. Suspendisse eget aliquet lacus, sed porta metus. Etiam iaculis eu enim id suscipit. Vivamus elementum lacinia velit, sit amet efficitur erat lacinia vel. Maecenas a nisl ut ipsum lobortis ullamcorper. Donec elit lacus, consectetur eget porta non, aliquam vel est. Cras sed eros odio. Sed augue tortor, hendrerit eget felis at, mattis placerat elit. Sed vitae velit mollis, aliquet augue nec, volutpat nulla. Donec quis blandit metus. Nulla hendrerit ex sed pellentesque suscipit. Sed tempus eleifend orci et hendrerit.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus leo, hendrerit et rutrum pretium, facilisis ut leo. Cras nec viverra elit. Suspendisse vel ipsum ultrices, dapibus nibh nec, feugiat erat. Suspendisse eget aliquet lacus, sed porta metus. Etiam iaculis eu enim id suscipit. Vivamus elementum lacinia velit, sit amet efficitur erat lacinia vel. Maecenas a nisl ut ipsum lobortis ullamcorper. Donec elit lacus, consectetur eget porta non, aliquam vel est. Cras sed eros odio. Sed augue tortor, hendrerit eget felis at, mattis placerat elit. Sed vitae velit mollis, aliquet augue nec, volutpat nulla. Donec quis blandit metus. Nulla hendrerit ex sed pellentesque suscipit. Sed tempus eleifend orci et hendrerit.
      </p>

    </div>
  );
}

export default ModalPage;