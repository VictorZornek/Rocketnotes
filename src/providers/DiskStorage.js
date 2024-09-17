const fs = require("fs");
const path = require("path");
const uploadConfig = require("../configs/upload");

class DiskStorage {
    async saveFile(file) {
        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER, file),        // manda a imagem para a pasta temporária
            path.resolve(uploadConfig.UPLOADS_FOLDER, file)     // manda para a pasta de uploads
        );

        return file;
    }

    async deleteFile(file) {
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);    // busca o arquivo a ser deletado na pasta de uploads

        try {
            await fs.promises.stat(filePath);
        } catch {
            return;
        }

        await fs.promises.unlink(filePath);   // deleta o arquivo
    }
}

module.exports = DiskStorage;