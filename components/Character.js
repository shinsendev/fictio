export default function Character(props) {
    return (
        <article>
            <p>{props.item.firstname}</p>
            <p>{props.item.lastname}</p>
            <p>{props.item.birthday} - {props.item.deathday}</p>
            <span className="delete action">x</span>
            <style jsx>{`
                article {
                  border: 1px solid grey;
                  border-radius: 3px;
                  position: relative;
                }
                
                p {
                  text-align: center;
                }

            `}</style>
        </article>
    );
}