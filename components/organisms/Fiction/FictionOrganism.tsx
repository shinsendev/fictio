import IconTrash from "../../atoms/IconTrash/IconTrash";
import TextBox from "../../atoms/TextBox/TextBox";
import styles from './FictionOrganism.module.css';

const FictionOrganism = props => {

    function getContent() {
        if (props.fiction.content) {
            return props.fiction.content;
        }
        else {
            return 'Write a description';
        }
    }

    function getOrigins(narratives) {
        const content = [];

        narratives.map(narrative => {
            // we only keep the origins
            if (narrative.lvl === 0) {
                content.push(
                    <article className={styles.fragment} key = {narrative.uuid}  >
                        <p>{narrative.content}</p>
                        <IconTrash />
                    </article>
                )
            }
        })

        return content;
    }

    return(
            <div className='element'>
                <aside>
                    <h2 className={styles.fictionTitle}>{props.fiction.title} </h2>
                    <TextBox content={getContent} />
                    <button className={styles.button}>Create Content</button>
                </aside>
                <section>
                    {getOrigins(props.fiction.narratives)}
                <div className="deleteFiction">
                    <a href="#">Delete Fiction</a>
                </div>      
                </section>
            
                <style jsx>{`
                    .element {
                        width:70%;
                        margin:auto;
                        display:flex;
                        flex-direction:row;
                        min-height: 800px;
                    }
                    
                    aside{
                        margin: 50px 20px 0px 20px;
                        width : 30%;
                    }
                    
                    section {
                        margin: 50px 20px 0px 20px;
                        width : 70%;
                        s
                    }

                    h2, p, a {
                        color:white;
                    }

                    .deleteFiction{
                       text-align:center;
                    }
                    
                    p{
                        background-color:#262626;
                        border-radius:5px;
                        padding:10px;
                        width:100%
                    }
                `}</style>
            </div>
    );
}
export default FictionOrganism;