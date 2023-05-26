import {useState} from "react"
import {
  Button,
  Input,
  Flex,
  Container,
  SimpleGrid,
  Center,
  Grid,
  Box,
  Stack,
  Text,
  Heading, GridItem
} from "@chakra-ui/react"

function BMICalculator() {

  const [weight,setweight]=useState("")
  const [height,setheight]=useState("")
  const [value,setvalue]=useState(0)


  function handleClick(e){
    e.preventDefault()
    let bmi=((+weight)/((+height)*(+height)))*10000
    console.log(bmi)
    setvalue(bmi)
    setheight("")
    setweight("")
  }

  console.log(weight,height)

  return <Box>
    <Heading>BMI Calculator</Heading>
    <SimpleGrid className="bmi-form" columns={2} spacing={20}>
    <Input className="weight" placeholder='Enter your weights in kilograms' value={weight} onChange={(e)=>setweight(e.target.value)} />
    <Input className="height" placeholder='Enter your heights in centimeters' value={height} onChange={(e)=>setheight(e.target.value)} />
    </SimpleGrid>
    <Button bg="green" onClick={handleClick}>Calculate</Button>
    <Button bg="tomato">Reset</Button>

    <Grid templateColumns='repeat(2, 1fr)' gap={4}>
  <GridItem colSpan={2} h='10' area={"Your BMI:"} />
  <GridItem colStart={4} colEnd={6} h='10' bmi={value} />
</Grid>
  </Box>;
}

export default BMICalculator;
