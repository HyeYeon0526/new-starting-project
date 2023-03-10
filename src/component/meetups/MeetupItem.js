import classes from './MeetupItem.module.css'
import Card from '../ui/Card';

function MeetupItem(props) {
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.img} alt={props.title} />
                </div>
                <div>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.action}>
                    <button>To Favorite</button>
                </div>                
            </Card>
        </li>
    );
}

export default MeetupItem;