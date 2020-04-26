import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getTransactions } from './api';

function App() {
    const [ jsonState, setJsonState ] = useState("")
    // make request here
    useEffect(() => {
        getTransactions().then(data => {
            if (data.status == 200) {
                console.log(data)
                const result = data.data.reduce((accum, transaction) => {
                    transaction.items.forEach(item => {
                        if (accum[item.id]) accum[item.id].push(transaction.id)
                        else {
                            accum[item.id] = [transaction.id]
                        }
                    })
                    return accum
                }, {})
                setJsonState(JSON.stringify(result))
            }
        }).catch(err => {
            console.log("bad", err)
        })
    }, [])

    return (
        <div className="App">
            { jsonState }
        </div>
    );
}

export default App;
