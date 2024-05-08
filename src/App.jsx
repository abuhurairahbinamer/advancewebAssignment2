import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
const [obj,setobj]=useState({text:'', value:''})
const [arr,setarr]=useState([])
const [income,setincome]=useState(0)
const [expense,setexpense]=useState(0)
const [balance,setbalance]=useState(0)
// console.log(arr)
const call1=()=>{
  if(obj.text=='' || obj.value==''){
alert("please fill the entries")
return
  }



arr.push(obj)
setarr([...arr])
setobj({text:'', value:''})

// obj.text=''     if you do this arr will show values ''
// obj.value=''



// for income
let inc=0
for(let i=0; i<arr.length; i++){
  var node=arr[i]
  if(parseInt(node.value)>0){
  inc=inc+parseInt(node.value)
}
}
setincome(inc)


//for expnese


let inc1=0
for(let i=0; i<arr.length; i++){
 var node=arr[i]
  if(parseInt(node.value)<0){
  inc1=inc1+parseInt(node.value)
}
}
setexpense(inc1)

// for balance
var pol=0

for(let i=0; i<arr.length; i++){
var node=arr[i]
  pol=pol+parseInt(node.value)

}

setbalance(pol)




}
  return (
    <>
    <br /><br />
      <div className='a1'>
       <h1 className='a2'>Account Manager App</h1>
       <div><h1>Your Balance</h1></div>
       <div><h1>$<span>{balance}</span></h1></div>
       <br />
       <div className='a3 a2'>
 
<div>
  <h2>
  income
  </h2>
  <br />
  <span className='a5'>${income}</span>
</div>
       
 
<div>
  <h2>
  expense
  </h2>
  <br />
  <span className='a5'>${expense}</span>
</div>
   

       </div>

<div>
  <h1>History</h1>
  <hr />
  <br />
 {/* <div className='a11'>    for sample
  <div className='a10'><span className='a6'>text</span><span className='a7'>value</span></div> 
  <div className='a8'></div>
  </div> */}

  {arr.map((node,index)=>{
 
 const p=parseInt(node.value);
 if(p>0){
  return ( <div key={index} className='a11'>    {/* for sample */}
  <div className='a10'><span className='a6'>{node.text}</span><span className='a7'>${node.value}</span></div> 
  <div className='a8'></div>
  <br />
  </div>
)
 }


 else if(p<0){
  return ( <div className='a11' key={index}>    {/* for sample */}
  <div className='a10'><span className='a6'>{node.text}</span><span className='a7'>${node.value}</span></div> 
  <div className='a9'></div>
  <br />
  </div>
)
 }

  })}
</div>

<br />

<div>
  <h1>Add new transaction</h1>
  <hr />
<br />
  <h2>Text</h2>
  <input name="text" type="text" className='a12' value={obj.text}  onChange={(e)=>{setobj((pre)=>({...pre,[e.target.name]:e.target.value}))}} />
  <br /><br />
  <h2>Amount</h2>
  <h2>(Negative-expense,Positive-income)</h2>
  <input name='value' type="text" className='a12' value={obj.value} onChange={(e)=>{setobj((pre)=>({...pre,[e.target.name]:e.target.value}))}} />
</div>


<br />
<button onClick={()=>call1()} className='a13'>
  <h2>Add transaction</h2>
</button>

      </div>
      
    </>
  )
}

export default App
