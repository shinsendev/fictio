import $ from "jquery";
import React from 'react';
import Layout from '../../components/Layout';
import { uuid } from 'uuidv4';

class CreateFragment extends React.Component {

    okAction() {
        alert('Top!');
    }

    cancelAction() {
        alert('Oh non');
    }

    setTextAreaValue(value) {
        return value;
    }

    componentDidMount() {
        $(document.body).on('keydown', this.handleKeyDown);
        let input = document.getElementById('writerTextarea');

        input.style.height = window.innerHeight+'px';
        input.style.width = window.innerWidth+'px';
        console.log(input.offsetHeight);
        console.log(window.innerHeight);
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

    saveAction() {

        let title = (document.getElementById('writerTitle')).value;
        let content = (document.getElementById('writerTextarea')).value;

        const data = {
            "uuid": uuid(),
            "code": "2", //todo: generate code from API with uniqid()
            "title": title,
            "content": content
        };


        const response = fetch('http://127.0.0.1:8000/api/fragments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        // setTextAreaValue(content);

        alert(`Text has been saved with content "${content}"`);
    }


    render() {
        return (
            <Layout>
            <div className="App">
                <form action="#">
                    <input id='writerTitle' type="text" placeholder="Titre"/>
                    <br/>
                    <textarea id= 'writerTextarea' className="WriterTextarea" defaultValue={this.setTextAreaValue('Valeur par défaut')}/>
                    <button onClick={this.saveAction} className='saver'>Enregistrer</button>
                </form>
            </div>
            </Layout>
        );
    }
}

export default CreateFragment;
