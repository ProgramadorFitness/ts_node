import { NewDiaryEntry } from "./types";

const parseComment = (CommentFromRequest: any): string => {
    if(typeof CommentFromRequest !== 'string'){
        throw new Error('Incorrect or missing comment')
    }
    return CommentFromRequest
}

const isString = (string: string): boolean=> {
    return typeof string === 'string' 

}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        // ...
    }

    return newEntry
}

export default toNewDiaryEntry