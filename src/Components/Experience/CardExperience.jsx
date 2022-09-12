import './CardExperience.css';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CardExperience = ({dataExperience}) => {
  const {empresa, cargo, fecha_ini, fecha_end, ciudad, conocimientos, actividades, img} = dataExperience;
  return (
    <div className='box-container'>
      <Box width='300px'>
        <Card>
          <CardMedia
            component='img'
            height='140'
            image={img}
            alt='unsplash image'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {empresa}
            </Typography>
            <Typography variant='body1' color='text.secondary'>{cargo}</Typography>
            <Typography variant='body2' color='text.secondary'>{fecha_ini} to {fecha_end}</Typography>
            <Typography variant='body2' color='text.secondary'>City of the {ciudad} - Ecuador</Typography>
            <Typography gutterBottom variant='h5' component='div'>
              Task
            </Typography>
            <Typography variant='body2' color='text.secondary'>{actividades}
            </Typography>
            <Typography gutterBottom variant='h5' component='div'>
              Skills
            </Typography>
            <Typography variant='body2' color='text.secondary'>{conocimientos}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'><ThumbUpIcon/></Button>
            <Button size='small'><FavoriteIcon/></Button>
            <Button size='small'><GitHubIcon/></Button>
            <Button size='small'><FacebookIcon/></Button>
            <Button size='small'><ThumbDownAltIcon/></Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  )
};
export default CardExperience;