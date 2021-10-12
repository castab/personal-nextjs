import { Typography, Grid } from '@material-ui/core'

export default function Jumbotron(props: {main: String, caption: String}) {
  return (
      <Grid 
        container
        alignItems="center"
        justifyContent="center"
        style={{
            padding: "60px 0px 60px 0px",
            backgroundColor: "#cfd8dc",
            fontFamily: "Roboto"
          }}
      >
        <Grid item xs={11} md={9} lg={7}>
          <Typography variant="h3" style={{width: "100%", color: "#263238"}}>
            {props.main}
          </Typography>
        </Grid>
        { props.caption && 
          props.caption != "" && 
        <Grid item xs={11} md={9} lg={7}>
          <Typography variant="h6" style={{width: "100%", color: "#263238"}}>
            {props.caption}
          </Typography>
        </Grid>
        }
      </Grid>
  )
}