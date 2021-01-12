import React,{Component} from 'react';
import ReactDOM from 'react-dom';



class Calculator extends Component{
  state={
	a:"",
	b:"",
	operator:"",
	ans:"",
  };
  operandValue=(a)=>{
	let t1=parseInt(a);
	let t2=parseFloat(a);
	if(t1===t2){
		return t1;	
	}
	return t2;
  }
  performArithmetic=()=>{
		let curr=0;
		if(this.state.operator==="+"){
			curr=this.operandValue(this.state.a)+this.operandValue(this.state.b);
		}
		if(this.state.operator==="-"){
			curr=this.operandValue(this.state.a)-this.operandValue(this.state.b);
		}
		if(this.state.operator==="*"){
			curr=this.operandValue(this.state.a)*this.operandValue(this.state.b);
		}
		if(this.state.operator==="/"){
			curr=this.operandValue(this.state.a)/this.operandValue(this.state.b);
		}
		return curr;
  }
  buttonClick=e=>{
	let cl=e.target.className;
	if(cl==="equal-sign"){
		if(this.state.a==="" || this.state.b===""){
			alert("operands are not selected");
			return 1;
		}
		let curr=this.performArithmetic();
		this.setState({a:"",b:"",operator:"",ans:curr.toString()});
	}
	else if(cl==="ac"){
		this.setState({a:"",b:"",operator:"",ans:""});
	}
	else if(cl==="number"){
		let ac=this.state.a;
		let bc=this.state.b;
		let oc=this.state.operator;
		//let anc=this.state.ans;
		if(oc===""){
			let th=ac+e.target.value;
			this.setState({a:th,b:bc,operator:oc,ans:th+oc+bc});
		}
		else{
			let th=bc+e.target.value;
			this.setState({a:ac,b:th,operator:oc,ans:ac+oc+th});
		}
	}
  	else if(cl==="sign"){
		var anc=this.state.ans;
		let oc=this.state.operator;
		let ac=this.state.a;
		let bc=this.state.b;
		if(ac!=="" && bc!==""){
			anc=this.performArithmetic();
			ac="";
			bc="";
			oc="";
			
		}
		if(anc!=="" && ac===""){
			ac=anc;
			oc="";
			anc="";
		}
		oc=e.target.value;
		if(ac!==""){
			this.setState({a:ac,b:bc,operator:oc,ans:ac+oc+bc});
		}else{
			alert("please select operand");
		}
	}
	
  }
  render(){
    return (
      <div className="calculator card">
        <input type="text" value={this.state.ans} className="calculator-screen z-depth-1" defaultValue disabled />
        <div className="calculator-keys">
          <button type="button" className="sign" value="+" onClick={this.buttonClick}>+</button>
          <button type="button" className="sign" value="-" onClick={this.buttonClick}>-</button>
          <button type="button" className="sign" value="*" onClick={this.buttonClick}>×</button>
          <button type="button" className="sign" value="/" onClick={this.buttonClick}>÷</button>
          <button type="button" value={7} className="number" onClick={this.buttonClick}>7</button>
          <button type="button" value={8} className="number" onClick={this.buttonClick}>8</button>
          <button type="button" value={9} className="number" onClick={this.buttonClick}>9</button>
          <button type="button" value={4} className="number" onClick={this.buttonClick}>4</button>
          <button type="button" value={5} className="number" onClick={this.buttonClick}>5</button>
          <button type="button" value={6} className="number" onClick={this.buttonClick}>6</button>
          <button type="button" value={1} className="number" onClick={this.buttonClick}>1</button>
          <button type="button" value={2} className="number" onClick={this.buttonClick}>2</button>
          <button type="button" value={3} className="number" onClick={this.buttonClick}>3</button>
          <button type="button" value={0} className="number" onClick={this.buttonClick}>0</button>
          <button type="button" className="number" value="." onClick={this.buttonClick}>.</button>
          <button type="button" className="ac" value="all-clear" onClick={this.buttonClick}>AC</button>
          <button type="button" className="equal-sign" value="=" onClick={this.buttonClick}>=</button>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Calculator/>,document.getElementById("root"));
