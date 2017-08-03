let App = React.createClass({
    render: () => {
        return(
            <div>
                <h1>Hello World!</h1>
                <p>This is my simple ReactJS</p>
            </div>
        );
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('main')
);