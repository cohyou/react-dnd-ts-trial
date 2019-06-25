let observer: any = null
let uuids: string[] = []

function emitChange() {
    observer(uuids)
}

export function observe(o: any) {
    if (observer) {
        throw new Error('Multiple observers not implemented.')
    }

    observer = o
    emitChange()
}

export function pushUuid(datum_uuid: string) {
    uuids.push(datum_uuid)
    emitChange()
}