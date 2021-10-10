import { Box, Container } from '@material-ui/core'
import Navbar from '../../../components/Navbar'
import Jumbotron from '../../../components/Jumbotron'

export default function FitnessTracker() {
  return (
    <>
      <Navbar />
      <Jumbotron 
        main="Fitness Tracker"
        caption="Keep track of workouts using NextJS, Springboot, and MongoDB."
      />
    </>
  )
}