import React from 'react';
import $ from "jquery";

export class Writer extends React.Component {

    okAction() {
        alert('Top!');
    }

    cancelAction() {
        alert('Oh non');
    }

    componentDidMount() {
        $(document.body).on('keydown', this.handleKeyDown);

        let input = document.getElementById('writerTextarea');
        input.style.height = window.innerHeight+'px';
        input.style.width = window.innerWidth+'px';
        console.log(input.offsetHeight);
        console.log(window.innerHeight);
    }

    saveAction() {
        const data = {
            "uuid": "57f107f2-a4cb-4b2d-862e-5c5fd8cf853e",
            "code": "1",
            "title": "Post test from Fictio",
            "content": "My first content with Fictio"
        };

        const response = fetch('http://127.0.0.1:8000/api/fragments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        console.log(response);

        // alert('Save text');
    }

    handleKeyDown(event) {
        if (event.keyCode == 13 && event.ctrlKey /*enter*/) {
            alert('Top!');
        }
        if (event.keyCode == 27 /*esc*/) {
            alert('Oh non');
        }
        if (event.keyCode == 83  && event.ctrlKey /* s */) {
            alert('Save');
        }
    }

    render() {
        return (
            <div className="App">
                <form action="#">
                    <textarea id= 'writerTextarea' className="WriterTextarea" defaultValue="Non mais c'est pas vrai?!"/>
                    <button onClick={this.saveAction} className='saver'>Enregistrer</button>
                </form>
            </div>
        );
    }
}