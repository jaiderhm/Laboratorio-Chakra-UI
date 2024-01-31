import { ChakraProvider } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Main from './main'


function Header() {

    return (
        <>
            <ChakraProvider>
                <Box>
                <h1 className='tituloHeader' >DOMINA EL TERRENO</h1>
                    <Image src='https://img.freepik.com/free-vector/modern-flowing-blue-wave-banner-background_1035-19862.jpg' width={"2000px"} />
                    <Button colorScheme='teal' variant='outline' position='column' margin='-300px -20px 200px 50px' >
                        Ver detalles
                    </Button>
                    <Button colorScheme='teal' variant='outline' position='column' margin='-300px -60px 200px 30px' >
                        Ver video
                    </Button>
                </Box>
                
                <Main/>
            </ChakraProvider>
        </>
    )
}

export default Header