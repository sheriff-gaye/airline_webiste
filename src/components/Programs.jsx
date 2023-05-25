import { FaCrown } from "react-icons/fa"
import SectionHead from "./SectionHead";
import {programs} from "../data.js";
import Card from "../UI/card";
import { Link } from "react-router-dom";
import {AiFillCaretRight} from "react-icons/ai"



const Programs = () => {

    return (
        <section className="programs">
            <div className="container programs_container">
                <SectionHead icon={<FaCrown />} title="Programs" />
           

            <div className="programs_wrapper">
                {
                    programs.map(({ id, icon, title, info, path }) => {
                        
                        return (
                            <Card className="programs_program" key={id}>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                            <Link to={path} className="btn sm">Learn More  <AiFillCaretRight/></Link>
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