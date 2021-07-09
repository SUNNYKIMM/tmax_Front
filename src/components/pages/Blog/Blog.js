import Title from "../../../components/elements/ui/Title";
import Bloglist from "../../elements/widgets/bloglist/Bloglist"

export default function Blog(){

    return(

        <section id="blog">
            <div className="container">
                <div className="title">
                    <Title title = "New arrivals"/>
                </div>
                <div className="subtitle" style={{fontSize:"10px"}}>
                    <h3>Discover the new official products of the French team!</h3>
                </div>
                <Bloglist/>
            </div>
        </section> 
    );
}
