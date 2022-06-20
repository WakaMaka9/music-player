import { ipcMain, dialog } from "electron";
import { readdir } from "fs";
import util from 'util'
import mm from 'music-metadata'
import { mainWindow } from "./main";

ipcMain.on('hz', async (a) => {
    console.log('целкурион')
    try {
        const { filePaths } = await dialog.showOpenDialog({ properties: ['openDirectory'] })
        const targetDestination = filePaths[0] // 
        readdir(targetDestination, async function (err, files) {
            //handling error
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            } 
            const mp3Filtered = files.filter((track) => track.slice(-4) === '.mp3')
            const mp3Files = mp3Filtered.map((item) => targetDestination + '/' + item)
            console.log(mp3Files)
            const musicItems = []
            for (let filePath of mp3Files) {
                const metadata =  await mm.parseFile(filePath);
                musicItems.push({
                    url: filePath,
                    id: musicItems.length,
                    name : metadata.common.title || '',
                    artist: metadata.common.artist || '',
                })
            }
            mainWindow?.webContents.send('sendNewMusics',musicItems)
});
    } catch (e) {
        console.error(e)
    }
})