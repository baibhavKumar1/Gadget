import Watch from '../components/watch';
import Shoes from '../components/shoes';
import Navbar from '../components/Navbar';
import { Tab, TabList, TabPanel, Tabs, TabPanels } from '@chakra-ui/react';
const ProductPage = () => {
  

  return (
    <>
    <Navbar/>
    <div style={{ margin: "20px", marginTop: "40px" }}>
      <h1 style={{ fontSize: "40px" }}>Store</h1>
      <Tabs variant='soft-rounded' colorScheme='pink' className='border-2 bg-white p-5 rounded-xl'>
        <TabList  className=''>
          <Tab style={{fontSize:"20px"}}>All</Tab>
          <Tab style={{fontSize:"20px"}}>Watch</Tab>
          <Tab style={{fontSize:"20px"}}>Shoes</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <div >
            <div ><Watch/></div>
            <div ><Shoes /></div>
          </div>  
          </TabPanel>
          <TabPanel>
            <div><Watch /></div>
          </TabPanel>
          <TabPanel>
            <div><Shoes /></div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
    </>
  );
};

export default ProductPage;
