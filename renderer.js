const information = document.getElementById('info')

information.innerHTML = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), Electron (v${versions.electron()}) and App Version (v${versions.appVersion})`


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