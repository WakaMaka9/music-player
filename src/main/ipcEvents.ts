import { ipcMain, dialog } from "electron";
import { readdir } from "fs";
import mm from 'music-metadata'
import { mainWindow } from "./main";

ipcMain.on('hz', async (a) => {
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
                    artist: metadata.common.artist || 'Не известен',
                    name : metadata.common.title || 'Без названия',
                })
            }
            mainWindow?.webContents.send('sendNewMusics',musicItems)
});
    } catch (e) {
        console.error(e)
    }
})