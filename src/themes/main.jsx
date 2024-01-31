import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import '../App.css'

function Main() {

    return (
        <>
            
                <Box>
                    <Image src='https://img.freepik.com/free-vector/modern-flowing-blue-wave-banner-background_1035-19862.jpg' width={"500px"} height={'500px'} padding='10px'/>
                    
                    <Button colorScheme='teal' variant='outline' position='column' margin=' -400px 300px 200px -400px' height={'60px'} width={'300px'} >
                        Ver detalles
                    </Button>
                    <Button colorScheme='teal' variant='outline' position='column' margin=' -380px 300px 80px -600px' height={'60px'} width={'300px'} >
                        Ver video
                    </Button>
                    <h1 className='tituloMain'>DOMINA EL TERRENO</h1>
                </Box>
            

        </>
    )
}

export default Main