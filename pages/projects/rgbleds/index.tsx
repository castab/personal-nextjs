import { Box, Card, CardContent, Container, Grid, Typography } from '@material-ui/core'
import Navbar from '../../../components/Navbar'
import Jumbotron from '../../../components/Jumbotron'

export default function FitnessTracker() {
  return (
    <>
      <Navbar />
      <Jumbotron 
        main="Addressable High-Power LEDs"
        caption="Scaling the addressability of LEDs over to their high-powered versions."
      />
      <Grid container spacing={2} style={{paddingTop: "15px"}}>
        <Grid item xs={6}>
            <Card style={{margin: "12px", color: "#eceff1", backgroundColor: "#455a64"}}>
              <CardContent>
                <Typography>
                  Some content
                </Typography>
              </CardContent>
            </Card>
        </Grid>
        <Grid item xs={6}>
        <Card>
            <CardContent>
              <Typography>
                Some other content
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}