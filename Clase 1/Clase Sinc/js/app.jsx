const create = React.createElement;

const p = create(
    "p",
    { key: 1 },
    "Hola Mundo!"
);

ReactDOM.render(p, document.getElementById('root'));