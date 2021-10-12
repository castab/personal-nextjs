import { Typography, Card, CardMedia, CardContent } from '@material-ui/core'
import { useRouter } from 'next/router'

export default function ProjectCard(props: {
  main: String,
  caption: String,
  imagePath: String,
  routePath: String,
}) {
  const router = useRouter()
  return (
    <Card
     onClick={() => {router.push(`${props.routePath}`)}}
     style={{
       margin: "10px",
       color: "white",
       backgroundColor: "#455a64",
       cursor: "pointer"
      }}
    >
      <CardMedia
       component="img"
       image={`${props.imagePath}`}
       alt={`${props.main}`}
       height="240"
      />
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
        >
          {props.main}
        </Typography>
        <Typography
          variant="body2"
        >
          {props.caption}
        </Typography>
      </CardContent>
    </Card>
  )
}