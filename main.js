const DATA = [
      {
        judul: "React Tutorial - The Net Ninja",
        deskripsi: "Hey all, welcome to your very first React tutorial for beginners! In this series I'll show you why React is such and awesome framework for creating front-end web applications, as well as how to set it up with Webpack and create a to-do list from scratch!...",
        image: "https://i.ytimg.com/vi/yZ0f1Apb5CU/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=yZ0f1Apb5CU&list=PL4cUxeGkcC9i0_2FF-WhtRIfIJ1lXlTZR",
        type: "Video"
      },
      {
        judul: "Node JS Tutorial for Beginners - The Net Ninja",
        deskripsi: "Yo ninjas, in this Node JS tutorial series for beginners, we'll be walking step by step through what Node JS is, and how it all works. We'll also be creating a Node JS application from scratch using express, and hook it up to MongoDB...",
        image: "https://i.ytimg.com/vi/w-7RQ46RgxU/maxresdefault.jpg",
        url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp",
        type: "Video"
      },
      {
        judul: "Vue JS 2 Tutorial - The Net Ninja",
        deskripsi: "Hey gang and welcome to your first Vue.js tutorial. In this video I'll introduce you to Vue js and show you how to get started by using a CDN to install it locally...",
        image: "https://i.ytimg.com/vi/5LYrN_cAJoA/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=5LYrN_cAJoA&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa",
        type: "Video"
      },
      {
        judul: "jQuery Tutorial for Beginners - The Net Ninja",
        deskripsi: "Yo ninjas, welcome to your very first jQuery for beginners tutorial! This is quite possible going to be the best jQuery tutorial series in the WORLD :). Ok maybe not, but I hope it will still be pretty amazing. ...",
        image: "https://i.ytimg.com/vi/jVe1GBCqFIE/maxresdefault.jpg",
        url: "https://www.youtube.com/watch?v=jVe1GBCqFIE&list=PL4cUxeGkcC9hNUJ0j6ccnOAcJIPoTRpO4",
        type: "Video"
      },
      {
        judul: "Express, Passport and JSON Web Token (jwt) Authentication for Beginners",
        deskripsi: "This post is going to be about creating an authentication with JSON Web Tokens for your project, presumably an API that’s going to be used by Angular, Vue.js or similar frontend frameworks. We’re going to send the jwt with every request...",
        image: "https://jonathanmh.com/wp-content/uploads/2016/10/express-passport-json-web-token-1024x344.png",
        url: "https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/",
        type: "Artikel"
      },
      {
        judul: "Bagaimana Javascript Menghandle Proses Asynchronous - Callback, Promise, Coroutine, dan Async/Await",
        deskripsi: "Javascript adalah bahasa pemrograman yang synchronous by default. Walaupun begitu, pada Javascript Server Side (NodeJS) terdapat beberapa operasi yang asynchronous. Berikut pembahasan tentang bagaimana cara Javascript menghandle ke-asynchronous-annya tersebut...",
        image: "https://cdn-images-1.medium.com/max/2000/1*IjI_Z1-Xa2ydx5cgBtTjaw.jpeg",
        url: "https://medium.com/koding-kala-weekend/bagaimana-javascript-menghandle-proses-asynchronous-callback-promise-coroutine-dan-async-await-928326575289",
        type: "Artikel"
      },
    ];

const Styles = {
  nav: {
    "margin-top": "10px",
    "background-color": "#E2E2E2"
  }
};

//============= HEADER COMPONENT
const Header = React.createClass({
  render: function() {
    let date = new Date();
    return (
      <div>
        <nav
          className="navbar navbar-light"
          style={Styles.nav}
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img 
                    src={"https://www.gitbook.com/cover/book/mongkuen/react.jpg?build=1470682429235"}
                    alt="ReactJs"
                    width={"22"} height={"25"}
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
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a>Time</a>
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
                <img src={img} height={"70%"} width={"95%"} onClick={this.onClicked} />
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

//===============================================
const HomeComponent = React.createClass({
  render: function() {
    return (
      <div>
        <hr/>
        <h1>Refrensi Belajar</h1>
        <p>Beberapa refrensi belajar yang bagus menurut saya. Terdapat beberapa video dan artikel menarik terkait web development.</p>
        <br/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

//===============================================
const CardComponent = React.createClass({
  getInitialState: function(){
    return {
      listArtikel: DATA
    }
  },
  render: function() {
    let list = this.state.listArtikel;
    return <div>
          {list.map((val, i) =>
            <CardList
              key={i}
              image={val.image}
              deskripsi={val.deskripsi}
              url={val.url}
              judul={val.judul}
              type={val.type}
            />
          )}
        </div>;
  }
});

//===============================================
const CardList = React.createClass({
  render: function() {
    return(
      <div>
        <div className="col-xs-18 col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={this.props.image} width="70%" height="50%" alt="" />
              <div className="caption">
                <h4>{this.props.judul}</h4>
                <p>{this.props.deskripsi}</p>
                <p>
                  <a href={this.props.url} className="btn btn-info btn-xs" role="button" target="_blank" >Read More</a>
                </p>
                <p>
                  <span style={{"color":"green", "font-size":"16"}}>{this.props.type}</span>
                </p>
            </div>
          </div>
        </div>
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
        <HomeComponent>
          <CardComponent/>
        </HomeComponent>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById("main"));
