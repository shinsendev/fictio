export default function Character(props) {
    return (
        <article>
            <p>{props.item.first_name}</p>
            <p>{props.item.last_name}</p>
            <p>{props.item.birth_year} - {props.item.death_year}</p>
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