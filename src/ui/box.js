import react from "react";
import PropTypes from "prop-types";
import "./box.css";

function Box({today, infected, cured, death}){
    console.log(today);
    return (
        <div class="covid_box">
            <div class="box_today">
                <div class="name_today">신규 확진자</div>
                <div class="covid_today">{today}</div>
            </div>
            <div class="box_infected">
                <div class="name_infected">총 확진자</div>
                <div class="covid_infected">{infected}</div>
            </div>
            <div class="box_cured">
                <div class="name_cured">총 완치자</div>
                <div class="covid_cured">{cured}</div>
            </div>

            <div class="box_death">
                <div class="name_death">총 사망자</div>
                <div class="covid_death">{death}</div>
            </div>
        </div>
        
    );
}

Box.propTypes = {
    today : PropTypes.number.isRequired,
    infected : PropTypes.number.isRequired,
    cured : PropTypes.number.isRequired,
    death : PropTypes.number.isRequired
    
}

export default Box;