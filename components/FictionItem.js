const FictionItem = (props) => (
        <article className="container">
            <header>
                <h1>{props.title}</h1>
                <p>created {props.createdAt} by username</p>
            </header>

            <div>{props.content}</div>
            <style jsx>{`
                .container {
                  border: 1px solid grey;
                  padding: 3px 6px;
                  margin-bottom: 3px;
                  border-radius: 3px;
                }

                header {
                    display: flex;
                }
            `}</style>
        </article>
);

export default FictionItem;