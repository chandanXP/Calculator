import React , {Component} from 'react';
import './assets/StyleApp.css';


class App extends Component {

  state={
    count:'0'
  }

  Reset(){
    this.setState({
      count:'0'
    })
  }
   countOcurrences(str, value) {
    var regExp = new RegExp(value, "gi");
    return (str.match(regExp) || []).length;
  }

  addDot(){
    const {count}=this.state
    console.log(this.countOcurrences(count, '.'));
    if(this.countOcurrences(count, '.')>1)//index of . is NULL i.e, . is not present
    {
      this.setState({
        count:count+''
      })
      // console.log(count.indexOf("."));
      
    }
    else{
	    this.setState({
        count: count+'.'
        
      })
      console.log("double dots are present");
    }
  }

  Calculate(){
    const {count}=this.state
    this.setState({
      count:eval(count)
    })
  }

  changeValue(digit){//key valuesw
    	const {count}=this.state
	this.setState({
	count:count==='0'?String(digit):count+digit
	})
  }

render(){
    return (
    <div className='container'>
    <div className='row'>
      <input value={this.state.count}/>
    </div>
<div className='row'>
  <button onClick={()=> this.changeValue(1)}>1</button>
  <button onClick={()=> this.changeValue(2)}>2</button>
  <button onClick={()=> this.changeValue(3)}>3</button>
  <button onClick={()=> this.changeValue('+')}>+</button>
</div>
<div className='row'>
  <button onClick={()=> this.changeValue(4)}>4</button>
  <button onClick={()=> this.changeValue(5)}>5</button>
  <button onClick={()=> this.changeValue(6)}>6</button>
  <button onClick={()=> this.changeValue('-')}>-</button>
</div>
<div className='row'>
  <button onClick={()=> this.changeValue(7)}>7</button>
  <button onClick={()=> this.changeValue(8)}>8</button>
  <button onClick={()=> this.changeValue(9)}>9</button>
  <button onClick={()=> this.changeValue('*')}>*</button>
</div>
<div className='row'>
  <button onClick={()=> this.changeValue(0)}>0</button>
  <button onClick={()=> this.addDot()}>.</button>
  <button onClick={()=> this.Reset()}>C</button>
  <button onClick={()=> this.changeValue('/')}>/</button>
</div>
<div className='row'>
  <button className='calculate' onClick={()=>this.Calculate()}>=</button>
</div>
    </div>
  )
}
}

export default App;
