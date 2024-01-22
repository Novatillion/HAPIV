const { app, BrowserWindow } = require('electron');


function createWindow() {
    // Create a new browser window
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        fullscreen: 'true',
        openDevTools: 'false',
    });

    // Load the HTML file
    mainWindow.loadFile('index.html');

    // Open the DevTools (optional)
    mainWindow.webContents.openDevTools();
}

// Create the Electron app and create the main window when it's ready
app.whenReady().then(createWindow);

// Quit the app when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Create a new window when the app is activated (e.g., clicking the Dock icon on macOS)
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});