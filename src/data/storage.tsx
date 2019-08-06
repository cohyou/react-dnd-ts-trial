export function initializeStorage() {
    let storage = window.localStorage
    storage.clear()
}

export function getDatum(uuid: string) {
    let storage = window.localStorage
}

export function addDatum(key: string, val: string) {    
    let storage = window.localStorage
    storage.setItem(key, val)
}

export function clearDatum() {
    let storage = window.localStorage
    storage.clear()
}
