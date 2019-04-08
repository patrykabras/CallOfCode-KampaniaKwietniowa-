const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
let win;

function createWindow() {

    win = new BrowserWindow({ width: 800, height: 600 })

    //load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file',
        slashes: true
    }));

    //open devtools
    win.webContents.openDevTools();

    //on close
    win.on('close', () => {
        win = null;
    });
}

//run create window function
app.on('ready', createWindow);

//Quit when all window are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})