import React, {useState,Fragment,useEffect} from 'react'
const Contador = () => {
    const [count, setCount] = useState(0);

    const add = ()=> setCount(count+1);

    useEffect(() => {
        document.title = ` ${count} times`;
        console.log('UseEffect');
    });




    return ( 
        <Fragment>
        <h3>Counter is {count}</h3>
        <button onClick={add}>Add</button>
        </Fragment>
     );
}
 
export default Contador;