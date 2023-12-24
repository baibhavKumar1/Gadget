import { useState } from 'react';
import {Button, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react';
import { Addproduct } from '../../redux/ProductReducer/action';
 import { useDispatch,useSelector } from 'react-redux';

export const AddProduct = ({ onOpens, LetClose }) => {
   const dispatch=useDispatch();
  const token = JSON.parse(localStorage.getItem('token'))
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    desc: 'The titan mens timeless watch boasts a refined black dial with minimalist markers,paired harmoniously with a sleek metal strap. Its versatile design seamlessly blends classic and modern, ensuring a sophisticated statement for any occasion while embodying enduring elegance and precision',
    
    quantity: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = () => {
    console.log({...formData,token})
    dispatch(Addproduct({...formData,token}))
    setFormData({
        name: '',
        price: '',
        desc: '',
        quantity: '',
    })
    LetClose();
  };

  return (
    <Modal isOpen={onOpens} onClose={LetClose} size="sm" isCentered >
      <ModalOverlay />
      <ModalContent fontFamily={"poppins"} borderRadius={"15px"}>

        <ModalHeader border="none" fontWeight={"bold"} color="#2b3954"
          fontSize="25" className='text-center'>Add Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            marginBottom={4}
            alignItems={"center"} fontSize={"16px"} className='justify-center'
          />
          <Input
            name="price"
            placeholder="price"
            value={formData.price}
            onChange={handleChange}
            marginBottom={4}
            alignItems={"center"} fontSize={"16px"} className='justify-center'
          />
          <Input
            name="desc"
            type="email"
            placeholder="desc"
            value={formData.desc}
            onChange={handleChange}
            marginBottom={4}
            alignItems={"center"} fontSize={"16px"} className='justify-center'
          />
          <Input
            name="quantity"
            type="quantity"
            placeholder="quantity"
            value={formData.quantity}
            onChange={handleChange}
            marginBottom={4}
            alignItems={"center"} fontSize={"16px"} className='justify-center'
          />
          <Input
            name="image"
            type="text"
            placeholder="Add Image Link"
            value={formData.image}
            onChange={handleChange}
            marginBottom={4}
            alignItems={"center"} fontSize={"16px"} className='justify-center'
          />
        </ModalBody>

        <ModalFooter>

          <Button
            colorScheme="white"
            fontSize="16"
            w="100%"
            fontWeight="400"
            bg="#2b3954"
            _hover={{ bgColor: "#e89f22" }}
            letterSpacing={"1px"}
            onClick={handleSignup}

          >
            ADD PRODUCT
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};