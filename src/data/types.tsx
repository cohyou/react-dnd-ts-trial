type Value = string | number
type PortType = 'frame'

class Port {
    name: string = ''
    portType: PortType = 'frame'
}

class Param {
    name: string = ''
    val: Value = ''
}

interface Runnable {
    id: string
    label: string
    i_ports: Port[]
    o_ports: Port[]
    params: Param[]
}

class Command {
    // Runnable実装
    id: string = ''
    label: string = ''
    iPorts: Port[] = []
    oPorts: Port[] = []
    params: Param[] = []
}

class Step {
    id: string
    runnable: Runnable
    
    constructor(id: string, runnable: Runnable) {
        this.id = id
        this.runnable = runnable
    }
}

class Flow {
    // Runnable実装
    id: string = ''
    label: string = ''
    i_ports: Port[] = []
    o_ports: Port[] = []
    params: Param[] = []
    
    // 独自
    substeps: Step[] = []
}

class Point {
    
}

// type Node = Step | Point