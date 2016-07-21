'use strict';

var electron = require('electron');
var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;
var ipc = require('electron').ipcMain
var screen = electron.screen
var bounds = screen.getPrimaryDisplay().bounds
var width = 300
var height = 300
var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        frame: false,
        height: height,
        resizable: false,
        width: width,
        transparent: true,
        fullscreen: false,
        fullscreenable: false
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});

ipc.on('clicked-pos', function(evt,x,y) {
	mainWindow.setBounds({x:x-(width/2),y:y-(height/2),width:width, height:height},true)
})

ipc.on('console', function (evt, msg) {
	console.log(msg)
})
