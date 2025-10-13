

export default class DynamicStorage {

    /**
     * Get local storage data
     * @param {string} key 
     * @returns {object[] | null}
     */
    getData(key) {
        if (!key) {
            throw new Error('Key is null')
        }

        const data = localStorage.getItem(key)
        if (data) {
            return JSON.parse(data)
        }
        return null
    }

    /**
     * Delete data
     * @param {string} key 
     */
    deleteData(key) {
        if (!key) {
            throw new Error('Key is null')
        }

        localStorage.setItem(key, null)
    }

    /**
     * Add data
     * @param {object[]} data 
     * @param {string} key 
     */
    addData(data, key) {
        if (!data) {
            throw new Error('Data is null')
        }

        if (!key) {
            throw new Error('Key is null')
        }

        const dataStringify = JSON.stringify(data)
        localStorage.setItem(key, dataStringify)
    }
}