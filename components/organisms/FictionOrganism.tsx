//import FictionTemplate from '../templates/fiction-template';
// import IconTrash from '../atoms/IconTrash/IconTrash';

const FictionOrganism = props => {
    const lorem ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    return(
            <div className='element'>
                <aside>
                    <h2>{props.fictionsData.title} </h2>
                    <p>{lorem}</p> 
                    <button>Create Content</button>
                </aside>
                <section>
                {props.fictionsData.narratives.map((narrative)=> 
                    <article className='fragment' key = {narrative.uuid}  >
                        <p>{narrative.content}</p>
                        {/* <IconTrash /> */}
                    </article>
                )}  
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
                    }
                    .fragment {
                        margin-bottom:10px;
                        display:flex;
                        flex-direction:row;
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
                    button {
                        display:block;
                        margin:auto;
                        margin-top: 20px;
                        background: black;
                        color:white;
                        border:1px solid white;
                        border-radius: 5px;
                        text-align:center;
                        padding:10px 10px 10px 10px;
                        width:100%;
                    }
              
                    h2,p,a{
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