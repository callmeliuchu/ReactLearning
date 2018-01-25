import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Title extends Component{
	render(){
		return(
			<h1>react book</h1>
		)
	}
}

class Header extends Component{
	renderGoodWord(goodWord,badWord){
		const isGoodWord = true
		return isGoodWord ? goodWord : badWord
	}
	render(){
		return (
		   <div>
		        <h1>
		        <Title />
		        </h1>
		        <h2>This is Header</h2>
		   </div>
		)
	}
}


class Main extends Component{
	render(){
		return(
		<div>
		    <h2>This is main content</h2>
		</div>
		)
	}
}


class Footer extends Component{
	render(){
		return(
		<div>
		    <h2>This is footer</h2>
		</div>
		)
	}
}


class Index extends Component{
	render(){
		return(
		   <div>
		     <Header />
		     <Main />
		     <Footer />
		   </div>
		)
	}
}



class House extends Component {
  render(){
  	return (
  	 <div>
  	     <h1>this is House</h1>
  	     <Room />
  	     <Bathroom />
  	 </div>
  	)
  }
}

class Room extends Component {
   render(){
  	return (
  	 <div>
  	   <h1>this is Room</h1>
  	   <Man />
  	   <Dog />
  	 </div>
  	)
  }
}

class Bathroom extends Component {
  render(){
  	return (
  	 <div>this is Bathroom</div>
  	)
  }
}

class Man extends Component {
  render(){
  	return (
  	 <div>this is Man</div>
  	)
  }
}

class Dog extends Component {
    render(){
  	return (
  	 <div>this is Dog</div>
  	)
  }
}

ReactDOM.render(<House />, document.getElementById('root'));
registerServiceWorker();
