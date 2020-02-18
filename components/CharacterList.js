import Character from "./Character";

export default function Characterlist (props) {
    const data = [
        {
            "firstname" : "Okita",
            "lastname" : "Soji",
            "birthday" : 1900,
            "deathday" : 2000
        },
        {
            "firstname" : "Atalaire",
            "lastname" : "Soji",
            "birthday" : 1900,
            "deathday" : 2000
        },
        {
            "firstname" : "Okita",
            "lastname" : "Lomma",
            "birthday" : 1900,
            "deathday" : 2000
        },
        {
            "firstname" : "Okita",
            "lastname" : "Soji",
            "birthday" : 1900,
            "deathday" : 2000
        },
        {
            "firstname" : "Okita",
            "lastname" : "Soji",
            "birthday" : 1900,
            "deathday" : 2000
        },
        {
            "firstname" : "Okita",
            "lastname" : "Soji",
            "birthday" : 1900,
            "deathday" : 2000
        },
        {
            "firstname" : "Okita",
            "lastname" : "Soji",
            "birthday" : 1900,
            "deathday" : 2000
        },
        {
            "firstname" : "Okita",
            "lastname" : "Soji",
            "birthday" : 1900,
            "deathday" : 2000
        },
        {
            "firstname" : "Okita",
            "lastname" : "Soji",
            "birthday" : 1900,
            "lasthday" : 2000
        },
        {
            "firstname" : "Okita",
            "lastname" : "Soji",
            "birthday" : 1900,
            "deathday" : 2000
        }
    ];

    return (
        <div className="container">
            <h2>123 Characters</h2>
            <div className="character-list">
                <Character item={data[0]}/>
                <Character item={data[1]}/>
                <Character item={data[2]}/>
                <Character item={data[3]}/>
                <Character item={data[4]}/>
                <Character item={data[5]}/>
                <Character item={data[6]}/>
                <Character item={data[7]}/>
                <Character item={data[8]}/>
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

