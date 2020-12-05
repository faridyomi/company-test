import './eventItem.css';
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import LinesEllipsis from 'react-lines-ellipsis'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, } from '@fortawesome/free-regular-svg-icons';

function EventItem(props) {
    const value = props.value;
    return (
        <div>
            <div className="list-item">
                <div className="date-container contain">
                    <h1 className="event-date">
                        {value.date}
                    </h1>
                </div>
                <div className="event-contain">
                    <div className="top-block">
                        <div className="description-container contain">
                            <h3 className="event-title">
                                {value.title}
                            </h3>
                            <div className="separator" style={styles.separator}></div>

                            <LinesEllipsis
                                className="event-description decreaseText"
                                text={value.description}
                                maxLine='2'
                                ellipsis='...'
                                trimRight
                                basedOn='letters'
                            />
                        </div>
                        <div className="hours-container contain">
                            <div>
                                <h3 className="event-hours">
                                    {value.hours}
                                </h3>
                                <div className="separator" style={styles.separator}/>
                            </div>
                            <p className="event-address decreaseText">
                                {value.address}
                            </p>
                        </div>
                    </div>
                    <div className="seeMore-container">
                        <FontAwesomeIcon icon={faPlusSquare} color="#AD6C23" />
                        <div className="event-details" style={styles.eventDetails} >Event details</div>
                    </div>
                </div>
            </div>
            <div className="separator " style={styles.separator}/>
        </div>

    );
}

const styles = {
    separator: {
        height:"1px",
        width:"100%",
        backgroundColor:"#FFF",
        opacity:"0.5"
    },
    eventDetails:{
        color:"#AD6C23",
        marginLeft:"6px",
    }
};

export default EventItem;
