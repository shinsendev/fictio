export default function Fiction (props) {
    return (
        <article className="container">
            <header>
                <h1>My fiction</h1>
                <p>created 11/à2/2020 by username</p>
            </header>

            <p>Fiction content : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
}