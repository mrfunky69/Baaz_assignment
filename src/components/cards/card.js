import React from "react";
import "./cardcss.css"
import data from "./card_data.js"

function Card(){

    return (
        <div className="card grid grid--auto-fit">
            {
                data.map(item => {
                    return (
                        
                        <div className={"card-item grid__item" + (item.id%2 ? "" : "upside")} >
                            <div className="card-item-image">
                                <img src={item.image} alt=""/>
                            </div>
                            <div className="card-item-text">
                                <h4>{item.title}</h4>
                            </div>
                            <div className="card-item-cost card-item-text">
                                <p>{item.cost}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
    );
}


export default Card;