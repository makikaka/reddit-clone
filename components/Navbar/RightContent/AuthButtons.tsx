import React from 'react';
import { Button, Flex, Image, Img } from "@chakra-ui/react";

type AuthButtonsProps = {
    
};

const AuthButtons = () => {
    
    return (
        <>
        <Button 
        variant='outline'
        height="28px"
        display={{base: "none", sm: "flex"}}
        width={{base: "70px", md: "110px"}}
        mr={2}
        >Log In</Button>
        <Button 
        variant='solid'
        height="28px"
        display={{base: "none", sm: "flex"}}
        width={{base: "70px", md: "110px"}}
        >Sign Up</Button>
        </>
    );
}
export default AuthButtons;