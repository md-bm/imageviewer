var app = require('app');  
var BrowserWindow = require('browser-window'); 
var mainWindow = null;

app.on('window-all-closed', function() {
    app.quit();
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        'width': 800,
        'height': 600,
        'min-width': 400,
        'min-height': 400,
        'auto-hide-menu-bar': true
    });

    mainWindow.loadUrl('file://' + __dirname + '/imageviewer.html');
  
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
