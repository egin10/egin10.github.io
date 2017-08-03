//============= HEADER COMPONENT
const Header = React.createClass({
  render: function() {
    return (
      <div>
        <nav
          className="navbar navbar-light"
          style={{ "margin-top": "10px", "background-color": "#e3f2fd" }}
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img 
                    src={"https://www.gitbook.com/cover/book/mongkuen/react.jpg?build=1470682429235"}
                    alt="ReactJs"
                    width={"20"} height={"25"}
                />
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
});

//============ CONTENT COMPONENT
const Slider = React.createClass({
    getInitialState: function() {
        return {
            url: [
                'http://wallpapercave.com/wp/odw55VD.png',
                'https://facebook.github.io/react/img/logo_og.png',
                'http://simpledesktops.com/download/?desktop=5953'
            ],
            urlOn: 0
        }
    },
    render: function() {
        let on = this.state.urlOn;
        let img = this.state.url[on];
        return(
            <center>
                <img src={img} height={"60%"} width={"90%"} onClick={this.onClicked} />
            </center>
        );
    },
    onClicked: function() {
        let n = this.state.urlOn;
        if( n == 0 || n == 1){
            n += 1;
            this.setState({ urlOn: n  });    
        } else {
            this.setState({ urlOn: 0 });   
        }
    }
});

const HomeComponent = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
});

//============ RENDERING COMPONENT TO VIEW
const App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Slider/>
        <HomeComponent />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById("main"));
