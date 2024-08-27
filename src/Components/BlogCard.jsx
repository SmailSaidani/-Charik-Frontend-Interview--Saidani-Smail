import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red, yellow } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import blogimg from "../assets/blog1.png"
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function BlogCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ borderRadius: "16px", backgroundColor: "#F6F5F3" }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: yellow[300] }} aria-label="recipe">
            <p style={{color:"#141414",marginTop:"35%"}}>L</p>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Lorem Ipsum"
        subheader="August 25, 2024"
      />
      <CardMedia
        component="img"
        height="194"
        image={blogimg}
        alt="blog"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
          scelerisque enim ligula venenatis dolor.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
            nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque
            enim ligula venenatis dolor.
          </Typography>
          <Typography paragraph>
            Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
            Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi,
            sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis
            imperdiet sed ornare turpis.
          </Typography>
          <Typography paragraph>
            Donec vitae dui eget tellus gravida venenatis. Integer fringilla
            congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
            Cras ac leo purus. Mauris quis diam velit.
          </Typography>
          <Typography>
            Vivamus suscipit tortor eget felis porttitor volutpat. Nulla
            porttitor accumsan tincidunt. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Donec velit
            neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
