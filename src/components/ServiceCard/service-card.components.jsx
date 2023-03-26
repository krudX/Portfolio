import { Fragment } from "react";
import '../ServiceCard/service-card.styles.scss';

const ServiceCard = (props) => {
    return (
        <Fragment>
            <div className="service-card">
                <div className="service-icon"><img src={props.icon} alt={props.title} /></div>
                <div className="service-title">{props.title}</div>
                <div className="service-description">{props.description}</div>
            </div>
        </Fragment>
    )
}

export default ServiceCard