import React from 'react'
import * as Storage from '../data/storage'

interface Sto {
    key: string
    val: string
}

function updateStorage() {
    let r = []
    for (var i = 0; i < localStorage.length; i++) {
        let name = localStorage.key(i)
        if (name) {
            let val = localStorage.getItem(name)
            if (val) {
                r.push({ key: name, val: val })
            }            
        }        
    }
    return r
}

function configStorage(storage: Sto[]) {
    let s: JSX.Element[] = []
    for (var i = 0; i < storage.length; i++) {
        s.push(<p key={storage[i].key}>{storage[i].key + ': ' + storage[i].val}</p>)
    }
    return s
}

export default function StorageView() {
    // Storage.initializeStorage()
    const [storage, setStorage] = React.useState<Sto[]>(updateStorage());
    window.addEventListener("storage", function (event) {
        console.log('STORAGE CHANGED', window.localStorage)
        setStorage(updateStorage())
    })
    
    return <div>
        StorageView
        <input id="key" type="text"></input>
        <input id="val" type="text"></input>
        <button onClick={ (e) => {
            let key = document.getElementById('key') as HTMLInputElement
            let val = document.getElementById('val') as HTMLInputElement
            if (key && val) {
                console.log(key.value, val.value)
                Storage.addDatum(key.value, val.value)
                setStorage(updateStorage())
            }
        } }>追加</button>
        <button onClick={ (e) => { Storage.clearDatum(); setStorage(updateStorage()); } }>削除</button>
        <ul>{ configStorage(storage) }</ul>
    </div>
}