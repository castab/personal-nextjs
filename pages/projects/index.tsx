import { Box, Grid } from '@material-ui/core'
import Jumbotron from '../../components/Jumbotron'
import Navbar from '../../components/Navbar'
import ProjectCard from '../../components/ProjectCard'

export default function Projects() {
  return (
    <Box>
      <Navbar />
      <Jumbotron
       main="Current Projects"
       caption="My active interests and activities."
      />
      <Grid container
        style={{
          padding: "5px",
        }}
      >
        <Grid item xs={12} sm={6} lg={4}>
          <ProjectCard
          main="Addressable High-Power LEDs"
          caption="Scaling the addressability of LEDs to high-power packages."
          imagePath="./ledstrip.jpg"
          routePath="/projects/rgbleds"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <ProjectCard
          main="Addressable High-Power LEDs"
          caption="Scaling the addressability of LEDs to high-power packages."
          imagePath="./ledstrip.jpg"
          routePath="/projects/rgbleds"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <ProjectCard
          main="Addressable High-Power LEDs"
          caption="Scaling the addressability of LEDs to high-power packages."
          imagePath="./ledstrip.jpg"
          routePath="/projects/rgbleds"
          />
        </Grid>
      </Grid>
      <Jumbotron
       main="Past Projects"
       caption="A look at some of my older work."
      />
      <Grid container
        style={{
          padding: "5px",
        }}
      >
        <Grid item xs={12} sm={6} lg={4}>
          <ProjectCard
          main="Addressable High-Power LEDs"
          caption="Scaling the addressability of LEDs to high-power packages."
          imagePath="./ledstrip.jpg"
          routePath="/projects/rgbleds"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <ProjectCard
          main="Addressable High-Power LEDs"
          caption="Scaling the addressability of LEDs to high-power packages."
          imagePath="./ledstrip.jpg"
          routePath="/projects/rgbleds"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <ProjectCard
          main="Addressable High-Power LEDs"
          caption="Scaling the addressability of LEDs to high-power packages."
          imagePath="./ledstrip.jpg"
          routePath="/projects/rgbleds"
          />
        </Grid>
      </Grid>
    </Box>
  )
}