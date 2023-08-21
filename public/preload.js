const { contextBridge, ipcRenderer } = require('electron');
/*
    The ContextBridge makes it so we can 'expose' certain modules of the electron package without compromising security.
    In this case we are exposing a very specific use of the ipcRenderer (Check closeApp and minimizeApp)
    By doing this, no component should have to include the ipcRenderer method in it therefore limiting the amount of range it has.

    ContextBridge possesses two parameters, the first one is the exposed name in our browserWindow
    and the second one is an object containing all methods associated with the 'api Key' 

    example: exposedInMainWorld('login', {
        signIn: async () => { ipcRender... signs the user in returning a promise etc.}
    })

    in that case the signIn method can be accessed in the browserWindow AKA Renderer by using:
    window.[API Key].[Name of Method]...


    Note: IPC stands for (Inter Process Communication)

    Important Research in the Electron DOC, broswerWindow, Rederer Process, ipcMain, ipcRenderer 
*/

contextBridge.exposeInMainWorld('appSettings', {
    // Sends a string message to the main process closing the app.
    closeApp: () => {
        ipcRenderer.send('app', 'close');
    },

    // Sends a string message to the main process minimizing the app.
    minimizeApp: () => {
        ipcRenderer.send('app', 'minimize');
    }
})

contextBridge.exposeInMainWorld('env', {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
})