import React from "react"
import Card from "./card.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const SecondsCounter = ({seconds}) => {
    return (
		<div className="container-fluid d-flex justify-content-center bg-dark p-3" style={{height: "100vh",}}>
			<div className="d-flex flex-row justify-content-center align-items-center gap-3 ">
				<div className="card bg-black text-light">
					<div className="card-body">
						<FontAwesomeIcon icon={faClock} style={{color: "#ffffff",}} />
					</div>
				</div>
			
				<Card number={Math.floor(seconds % 1000000 / 100000)}/>
				<Card number={Math.floor(seconds % 100000 / 10000)}/>
				<Card number={Math.floor(seconds % 10000 / 1000)}/>
				<Card number={Math.floor(seconds % 1000 / 100)}/>
				<Card number={Math.floor(seconds % 100 / 10)}/>
				<Card number={seconds % 10}/>

			</div>
		</div>
    );
    
}

export default SecondsCounter;