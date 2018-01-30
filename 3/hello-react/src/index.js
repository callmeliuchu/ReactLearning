import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// class Title extends Component{
// 	handleClickOnTitle(word,e){
// 		console.log(this,word)
// 	}
// 	render(){
// 		return(
// 			<h1 onClick={this.handleClickOnTitle.bind(this,'hello')}>react book</h1>
// 		)
// 	}
// }



// class Header extends Component{
// 	renderGoodWord(goodWord,badWord){
// 		const isGoodWord = true
// 		return isGoodWord ? goodWord : badWord
// 	}
// 	render(){
// 		return (
// 		   <div>
// 		        <h1>
// 		        <Title />
// 		        </h1>
// 		        <h2>This is Header</h2>
// 		   </div>
// 		)
// 	}
// }


// class Main extends Component{
// 	render(){
// 		return(
// 		<div>
// 		    <h2>This is main content</h2>
// 		</div>
// 		)
// 	}
// }


// class Footer extends Component{
// 	render(){
// 		return(
// 		<div>
// 		    <h2>This is footer</h2>
// 		</div>
// 		)
// 	}
// }


// class Index extends Component{
// 	render(){
// 		return(
// 		   <div>
// 		     <Header />
// 		     <Main />
// 		     <Footer />
// 		   </div>
// 		)
// 	}
// }



// class House extends Component {
//   render(){
//   	return (
//   	 <div>
//   	     <h1>this is House</h1>
//   	     <Room />
//   	     <Bathroom />
//   	 </div>
//   	)
//   }
// }

// class Room extends Component {
//    render(){
//   	return (
//   	 <div>
//   	   <h1>this is Room</h1>
//   	   <Man />
//   	   <Dog />
//   	 </div>
//   	)
//   }
// }

// class Bathroom extends Component {
//   render(){
//   	return (
//   	 <div>this is Bathroom</div>
//   	)
//   }
// }

// class Man extends Component {
//   render(){
//   	return (
//   	 <div>this is Man</div>
//   	)
//   }
// }

// class Dog extends Component {
//     render(){
//   	return (
//   	 <div>this is Dog</div>
//   	)
//   }
// }

// class Dogg extends Component{
// 	bark(){
// 		alert('bark')
// 	}
// 	run(){
// 		alert('run')
// 	}
// 	render(){
// 		return (<div onClick={()=>{this.bark.bind(this);this.run.bind(this);}}>DOG</div>)
// 	}
// }


// class LikeButton extends Component{
// 	constructor(){
// 		super()
// 		this.state = {isLiked:false}
// 	}
// 	// setState(state){
// 	// 	alert(state.isLiked)
// 	// 	this.state = state
// 	// }
// 	handleClickOnLikeButton(){
// 		console.log(this.state.isLiked)
// 		this.setState({
// 		isLiked:!this.state.isLiked
// 		})
// 		console.log(this.state.isLiked)
// 	}
// 	render(){
// 		return (
// 		    <button onClick={this.handleClickOnLikeButton.bind(this)}>
// 		    {this.state.isLiked?'取消':'点赞'}
// 		    </button>
// 		)
// 	}
// }

// class LikeButton extends Component{
// 	constructor(){
// 		super()
// 		this.state = {isLiked:false}
// 	}
// 	handleClickOnLikeButton(){
// 		this.setState({
// 			isLiked:!this.state.isLiked
// 		})
// 	}
// 	render(){
// 		const likedText = this.props.likedText || 'cancel'
// 		const unlikedText = this.props.unlikedText || 'flatter'
// 		return (
// 		    <button onClick={this.handleClickOnLikeButton.bind(this)}>
// 		    {this.state.isLiked ? likedText:unlikedText}
// 		    </button>
// 		)
// 	}
// }

// class Index extends Component{
// 	render(){
// 		return(
// 		<div>
// 		  <LikeButton likedText='coment' unlikedText='not coment'></LikeButton>
// 		</div>
// 		)
// 	}
// }

// class LikeButton extends Component{
// 	constructor(){
// 		super()
// 		this.state = {isLiked:false}
// 	}
// 	handleClickOnLikeButton(){
// 		this.setState({
// 		  isLiked: !this.state.isLiked
// 		})
// 		if(this.props.onClick){
// 			this.props.onClick
// 		}
// 	}
// 	render(){
// 		const wordings = this.props.wordings || {
// 			likedText:'cancel',
// 			unlikedText:'coment'
// 		}
// 		return(
// 			<button onClick={this.handleClickOnLikeButton.bind(this)}>
// 			{this.isLiked ? wordings.likedText : wordings.unlikedText}
// 			</button>
// 		)
// 	}
// }

// class Index extends Component{
// 	render(){
// 		return(
// 		<div>
// 		   <LikeButton wordings={{likedText:'has commentd',unlikedText:'commentssss'}}
// 		   onClick={()=>console.log('Click')}
// 		   />
// 		</div>
// 		)
// 	}
// }


// class HelloWorld extends Component{
// 	constructor(){
// 		super()
// 	}
// 	SayHi(){
// 		alert('Hello World')
// 	}
// 	render(){
// 		return(
// 		<button onClick={this.SayHi.bind(this)}>this is a test</button>
// 		)
// 	}
// }

// const HelloWorld1 = (props) => {
// 	const sayHi = (event) => alert('Hello World')
// 	return (
// 	   <button onClick={sayHi}>Hello World</button>
// 	)
// }

// class Index extends Component{
// 	constructor(){
// 		super()
// 	}
// 	render(){
// 		return (
// 		   <div>
// 		   {
// 		   	[<span>hello js </span>,
// 		   	 <span>good </span>,
// 		   	 <span>ok </span>
// 		   	]
// 		   }
// 		   </div>
// 		)
// 	}
// }


const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female22222222222222' }
]

// class Index extends Component{
// 	render(){
// 		const userElements = []
// 		for(let user of users){
// 			userElements.push(
// 			<div>
// 			    <div>username:{user.username}</div>
//                 <div>age:{user.age}</div>
//                 <div>gender:{user.gender}</div>
// 			</div>
// 			)
// 		}
// 		return (
// 		<div>
// 		{userElements}
// 		</div>
// 		)
// 	}
// }

// class Index extends Component{
// 	render(){
// 		return (
// 			<div>
// 			{users.map((user)=>{
// 		    return (<div>
// 				    <div>name:{user.username}</div>
// 				    <div>age:{user.age}</div>
// 				      <div>gender:{user.gender}</div>
// 				  </div>)
			     
// 			})
// 			}
// 			</div>
// 		)
// 	}
// }

class User extends Component{
	render(){
		const {user} = this.props
		return (
			<div>
			  <div>name:{user.username}</div>
			  <div>age:{user.age}</div>
			  <div>gender:{user.gender}</div>
			</div>
		)
	}
}

class Index extends Component{
	render(){
		return(
			<div>
			{users.map((user)=><User user={user}/>)}
			</div>
		)
	}
}


ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
