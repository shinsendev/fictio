import Character from "./Character";

export default function Characterlist (props) {
    return (
        <div className="container">
            <h2>123 Characters</h2>

            <div className="character-list">
                {props.data.slice(0,9).map(character => (
                    <Character key = {character.uuid} item = {character} />
                ))}
            </div>

            <style jsx>{`
                .container {
                  padding: 3px 6px;
                }

                .character-list {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-column-gap: 3px;
                    grid-row-gap: 3px;
                }
                
            `}</style>
        </div>
    );
}

