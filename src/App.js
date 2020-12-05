import logo from './logo.svg';
import './App.css';
import React from "react";
import EventItem from "./list-item"

function App() {
  return (
    <div className="App"  style={styles.app}>
      <div className="header" style={styles.header}>
          Events
      </div>
        <div>
            {eventsList.map((events) => (
                <EventItem key={events.id} value={events} />
            ))}
        </div>
    </div>
  );
}

const eventsList = [
    {
        id: 1,
        title: 'Sunder super club beach',
        description:"It's an events uqusshdc snv hqe dqnzvgezqzne qzvbezqnv nqszvgeygqze zqvygyqezq vsqzyvyhezq vhbveyz hbYQCVH<QD Bbchqc qhvvzgvzeg bhqc qhvgvagava ",
        date:"13th Nov",
        hours:"12:00 - 19:00",
        address:"London city"
    },
    {
        id: 1,
        title: 'Sunder super club',
        description:"It's an events",
        date:"13th Nov",
        hours:"12:00 - 19:00",
        address:"London city"
    },
]

const styles = {
    app: {
        backgroundColor:"#161616",
        color:"#FFF",
        height:"100%",
        width:"100%",
    },
    header:{
        paddingLeft:"20px",
        paddingRight:"20px",
        paddingTop:"12px",
        paddingBottom:"12px",
        color: "#161616",
        backgroundColor: "#FFF",
        width: "fit-content",
        alignSelf:"center",
    }
};

export default App;
