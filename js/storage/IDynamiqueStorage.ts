

interface IDynamiqueStorage {

    getData<T>(key: string): T[] | null

    deleteData(key: string): void

    addData(data: any[], key: string): void
}