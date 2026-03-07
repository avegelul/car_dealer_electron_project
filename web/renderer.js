const information = document.getElementById('info')
const pageTitle = document.getElementById('pageTitle')

const isElectron = typeof window.versions !== "undefined"

if (isElectron) {
    // information.innerHTML = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), Electron (v${versions.electron()}) and App Version (v${versions.appVersion})`

    const func = async () => {
        const appVersion = await window.versions.appVersion()

        information.innerHTML = `
        This app is using Chrome (v${versions.chrome()}), 
        Node.js (v${versions.node()}), 
        Electron (v${versions.electron()}) and 
        App Version (v${appVersion})
        `

        const response = await window.versions.ping()
        console.log(response)
    }

    func()
}

else {
    var ver = navigator.userAgent
    console.log(ver)
    information.innerHTML = `Running in browser! UserAgent: ${ver}`
}


var test = "daa"
pageTitle.innerHTML = `Hello from ${isElectron ? 'Electron' : 'web'} app!`