import React from 'react';
import { Flex, Image, Img } from "@chakra-ui/react";
import AuthButtons from './AuthButtons';

type RightContentProps = {
    // user:
};

const RightContent:React.FC<RightContentProps> = () => {
    
    return (
        <>
        <Flex justify="center" align="center"><AuthButtons></AuthButtons></Flex>
        
        </>
    );
}
export default RightContent;