const fs = require('fs').promises;
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.json');

class Store {
    constructor() {
        this.filePath = DATA_FILE;
    }

    async getData() {
        try {
            const data = await fs.readFile(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            if (error.code === 'ENOENT') {
                return [];
            }
            throw error;
        }
    }

    async writeData(data) {
        await fs.writeFile(this.filePath, JSON.stringify(data, null, 2));
    }

    async addItem(item) {
        const data = await this.getData();
        item.data = new Date().toISOString();
        data.push(item);
        await this.writeData(data);
        return item;
    }

    async getItems() {
        return await this.getData();
    }
}

module.exports = Store;