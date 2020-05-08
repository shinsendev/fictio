import IconTrash from "../../atoms/IconTrash/IconTrash";
import TextBox from "../../atoms/TextBox/TextBox";
import styles from './FictionOrganism.module.css';
import Link from 'next/link';

const FictionOrganism = props => {

    function getContent() {
        if (props.fiction.content.length) {
            return props.fiction.content;
        }
        else {
            return 'No description...';
        }
    }

    function getOrigins(narratives) {
        const content = [];

        narratives.map(narrative => {
            // we only keep the origins
            if (narrative.lvl === 0) {
                content.push(
                        <article className={styles.fragment} key = {narrative.uuid}  >
                            <Link href={'/origins/'+narrative.uuid}>
                                <p className={styles.link}>{narrative.content}</p>
                            </Link>
                            <div className={styles.deleteIcon}><IconTrash /></div>
                        </article>
                )
            }
        })

        return content;
    }

    return(
            <div className='element'>
                <aside>
                    <h2 className={styles.fictionTitle}>{props.fiction.title}</h2>
                    <div className={styles.fictionDescription}>{getContent()}</div>
                    <button className={styles.button}>Create a new text</button>
                </aside>
                <section>
                    <article className={styles.textBox}>
                        {getOrigins(props.fiction.fragments)}
                    </article>

                    <div className={styles.deleteFiction}>
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
                        font-family: Roboto;
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

                    h2 {
                        margin-top: 0px;
                        margin-bottom: 3px;
                    }

                    h2, p, a {
                        color:white;
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