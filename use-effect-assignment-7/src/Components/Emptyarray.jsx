import { useState, useEffect } from "react";

const Emptyarray = () => {
    const [name, setName] = useState('Haider Kamran');

    useEffect(() => {

        setTimeout(() => {
            setName('Haider Khan!');
        }, 1000);
    }, []);

    return (
        <div>
            <h5 style={{color: "blue"}}>This name changing example is useEffect with Empty Dependency, it will run only one time!</h5>
            <p>{name}</p>
        </div>
    );
}

export default Emptyarray;
