import TextBox from "../../atoms/TextBox/TextBox";

const NarrativeVersionedMolecule = props =>  {

    return (
        <div className='element'>
            <h2>Narrative Version Molecule</h2>
            <TextBox content = {props.narrative.content} /> 

            <section>
                {props.narrative.fragments.map(fragment => 
                <article className='fragment'>
                    <TextBox content = {fragment.content} />  
                </article>
                )}
            </section>

        <style jsx>{`
            .element {
                background: white;
                color:black;
                height: 300px;
            }

            .fragment {
                margin-top:10px;
            }
        `}</style>
        </div>
    );

}

export default NarrativeVersionedMolecule;