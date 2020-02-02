import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {

        alignContent:"center",
        marginTop:"5%",
        marginStart:"10%",
        marginEnd:"10%",
        marginBottom:"5%",
        maxWidth: "100%"
    },
    cardme:{
        backgroundColor:"blue",
    },
});

export default function ImgMediaCard({category,title,description,price}) {


    const classes = useStyles();
    return (
        <div>
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.cardme}
                    component="img"

                    height="140"

                   // image="/static/images/cards/contemplative-reptile.jpg"
                    title={category}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={()=>{
                    alert(""+price+" Rs");
                   // console.log(price);

                }}>
                    Show Price
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
        </div>
    );
}