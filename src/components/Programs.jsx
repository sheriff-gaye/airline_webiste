import { FaCrown } from "react-icons/fa"
import SectionHead from "./SectionHead";
import {programs} from "../data.js";
import Card from "../UI/card";
import { ImLocation } from "react-icons/im";


const Programs = () => {

    return (
        <section className="programs" id="explore">
            <div className="container programs_container">
                <SectionHead icon={<FaCrown />} title="Top Destinations" />
           

            <div className="programs_wrapper">
                {
                    programs.map(({ id, icon, title, info, path ,image}) => {
                        
                        return (
                            <Card className="programs_program" key={id}>
                            {/* <span>{icon}</span> */}
                            <img src={image} alt={title}/>
                            <h4><ImLocation style={{color:"red"}}/> {title}</h4>
                            <small>{info}</small>
                           
                            {/* <Link to={path} className="btn sm">Learn More  <AiFillCaretRight/></Link> */}
                            <h4>Price per season $300  </h4>
                            </Card>
                            
                        )
                         
                    })
                }

            </div>
            </div>

        </section>
    )
}

export default Programs;