//=========================== DEPENDENCIES
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
        deskripsi: "Javascript adalah bahasa pemrograman yang synchronous by default. Walaupun begitu, pada Javascript Server Side (NodeJS) terdapat beberapa operasi yang asynchronous...",
        image: "https://cdn-images-1.medium.com/max/2000/1*IjI_Z1-Xa2ydx5cgBtTjaw.jpeg",
        url: "https://medium.com/koding-kala-weekend/bagaimana-javascript-menghandle-proses-asynchronous-callback-promise-coroutine-dan-async-await-928326575289",
        type: "Artikel"
      },
      {
        judul: "New Laravel & NodeJS Project: Shopping Cart - Academind",
        deskripsi: "A little announcement, I'll soon start a new project, where I will build a shopping cart (dummy online shop + user management + shopping cart + checkout) with two different languages/ frameworks: Laravel and NodeJS/ ExpressJS....",
        image: "https://i.ytimg.com/vi/BTkvRL80t6Y/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=56TizEw2LgI&list=PL55RiY5tL51qUXDyBqx0mKVOhLNFwwxvH",
        type: "Video"
      },
      {
        judul: "React CRUD Tutorial – JavaScript Programming – Step By Step Guide!",
        deskripsi: "Previously, we learned our jQuery AJAX CRUD tutorial. Today we will learn how to create or insert, read, update, and delete database records with React.....",
        image: "https://i1.wp.com/www.codeofaninja.com/wp-content/uploads/2016/07/react-crud-tutorial-step-by-step-guide.jpg?w=780&ssl=1",
        url: "https://www.codeofaninja.com/2016/07/react-crud-tutorial.html",
        type: "Artikel"
      },
      {
        judul: "Creating a Single-Page App in React using React Router",
        deskripsi: "Now that you've familiarized yourself with the basics of how to work with React, let's kick things up a few notches. What we are going to do is use React to build a simple single-page app (also referred to as SPA by the cool kids...",
        image: "https://www.kirupa.com/react/images/single_page_model_144.png",
        url: "https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm",
        type: "Artikel"
      },
    ];

const STYLES = {
  nav: {
    "margin-top": "10px",
    "background-color": "#E2E2E2"
  },
  thumbnail: {
    "align-image": "center"
  }
};

const Router = ReactRouter.Router,
  Route = ReactRouter.Route,
  Link = ReactRouter.Link,
  IndexRoute = ReactRouter.IndexRoute,
  hashHistory = ReactRouter.hashHistory;

//====================================================================================================

//============= HEADER COMPONENT
const Header = React.createClass({
  getInitialState: function(){
    return{
      today: new Date()
    }
  },

  componentDidMount: function() {
    setInterval(this.updateTime, 500);
  },

  updateTime: function() {
    this.setState({ today: new Date() });
  },

  render: function() {
    return (
      <div>
        <nav
          className="navbar navbar-light"
          style={STYLES.nav}
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img 
                    src={"http://maxehnert.com/app/images/react.svg"}
                    alt="ReactJs"
                    width={"22"} height={"25"}
                />
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                 {/* <a href="#">Home</a> */}
                  <Link to='/' activeClassName="active"> Home </Link>
              </li>
              <li>
                 {/* <a href="#">About</a>  */}
                 <Link to='/about' activeClassName="active"> About </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a>{this.state.today.toDateString()} | {this.state.today.toLocaleTimeString()} </a>
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
    
    componentDidMount: function(){
      setInterval(this.updateUrl, 10 * 1000);
    },

    updateUrl: function() {
      let n = this.state.urlOn;
        if( n == 0 || n == 1){
            n += 1;
            this.setState({ urlOn: n  });    
        } else {
            this.setState({ urlOn: 0 });   
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
            <img src={this.props.image} width="80%" height="50%" style={STYLES.thumbnail} />
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

//================FOOTER
const Footer = React.createClass({
  render: function() {
    return (
    <div>
        <footer className="navbar-default navbar-fixed-bottom">
          <div className="container-fluid">
            <center><span>&copy;2017</span></center>
          </div>
        </footer>
    </div>
    );
  }
});

//============ CONTENT COMPONENT
const Home = React.createClass({
  render: function() {
    return (
      <div>
        <Header /> 
        <Slider />
        <HomeComponent>
          <CardComponent />
        </HomeComponent>
        <Footer />
      </div>
    );
  }
});

const About = React.createClass({
  render: function() {
    return(
      <div>
        <Header/>
        <h1>About</h1>
        <p>Hanya untuk belejar menggunakan ReactJS dengan CDN.</p>
        <Footer />
      </div>
    );
  }
})

//=============== ROUTE COMPONENT
const Routes = () =>
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
      <Route path="/about" component={About} />
  </Router>;

ReactDOM.render(
  <Routes/>
  , document.getElementById("main"));
