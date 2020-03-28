import React from 'react';
import ReactDOM from 'react-dom';

import ExampleWork from './example-work';

const myWork = [
    {
        'title': "Work Example",
        'href': "https://example.com",
        'desc': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        'image': {
            'desc': "example screenshot of a project involving code",
            'src': "images/example1.png",
            'comment': ""
        }
    },
    {
        'title': "Portfolio Boilerplate",
        'href': "https://example.com",
        'desc': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        'image': {
            'desc': "A Serverless Portfolio",
            'src': "images/Portfolio.png",
            'comment': ""
        }
    },
    {
        'title': "Work Example",
        'href': "https://example.com",
        'desc': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        'image': {
            'desc': "example screenshot of a project involving cats",
            'src': "images/example3.png",
            'comment': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
                        https://www.flickr.com/photos/37287295@N00/2540855181`
        }
    }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));