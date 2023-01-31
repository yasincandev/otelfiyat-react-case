import { FC } from "react";
import Form from "../Form/Form";

import Navbar from "../Navbar/Navbar";

const Header: FC = () => {
  return (
    <div className='relative bg-gray-50  flex flex-col mb-10 '>
      <Navbar />
      <Form />
    </div>
  );
};

export default Header;
