fetch("http://localhost:5000/csv")
.then(async response => {
    // let dec = new TextDecoder()
    console.log('res fetch')

    // // 全バイト数を先に取得
    // const total = Number.parseInt(response.headers.get("Content-Length"));

    // // 受信したバイト数
    // let loaded = 0;

    // const reader = response.body.getReader();
    // while (true) {
    //     const {done, value} = await reader.read();
    //     if (done) {
    //     break;
    //     }
    //     // 読んだデータはバイナリデータ（Uint8Array）で与えられる
    //     loaded += value.length;
    //     console.log(`${loaded} / ${total}`);
    // }            

    // 結果を数えるための変数
    let count = 0;

    // response.body にレスポンス本文のストリーム（ReadableStream）が入っている
    // ストリームのReaderを作成
    const reader = response.body.getReader()
    while (true) {

        // ストリームからデータを読む
        const {done, value} = await reader.read();

        console.log('value.length', value.length)

        if (done) {
            // doneがtrueならストリームのデータを全部読み終わった
            break;
        }

        // 読んだデータはバイナリデータ（Uint8Array）で与えられる
        let buf = new Uint8Array(4096)
        let idx = 0

        let currentRow = null

        for (const char of value) {
            switch (char) {
                // カンマ
                case 0x2C:
                    if (currentRow === null) {                                    
                        currentRow = table.insertRow(-1)
                    }

                    if (!headerOn) {
                        let th = document.createElement('th')
                        let text = (new TextDecoder).decode(buf)
                        console.log(text)
                        th.innerText = text
                        currentRow.appendChild(th)                                
                        headerOn = true
                    } else {
                        let td = currentRow.insertCell(-1)
                        td.innerText = (new TextDecoder).decode(buf)
                    }
                    buf = new Uint8Array(4096)
                    idx = 0
                    break
                case 0x0A:
                    buf = new Uint8Array(4096)
                    idx = 0
                    currentRow = null
                    break
                default:
                    buf[idx] = char
                    break
            }        
            idx++
        }
    }
});
