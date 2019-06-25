self.addEventListener('message', (message) => {
    console.log(message.data);
    if (message.data === 'start') {
        fetch("http://localhost:5000/csv")
        .then(async response => {
            console.log('とおた')

            const reader = response.body.getReader()
            while (true) {
                const {done, value} = await reader.read();

                console.log('value.length', value.length)
        
                if (done) {
                    // doneがtrueならストリームのデータを全部読み終わった
                    break;
                }
                
                let buf = new Uint8Array(4096)
                let idx = 0        

                for (const char of value) {
                    switch (char) {
                        // カンマ
                        case 0x2C:
                            self.postMessage((new TextDecoder).decode(buf))
                            buf = new Uint8Array(4096)
                            idx = 0
                            break
                        case 0x0A:
                            self.postMessage('\r')
                            buf = new Uint8Array(4096)
                            idx = 0
                            break
                        default:
                            buf[idx] = char
                            idx++
                            break
                    }                            
                }        
            }
        });
    }
});