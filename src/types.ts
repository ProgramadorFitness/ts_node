import { Weather, Visibility } from "./enums"


export interface DiaryEntry {
    id: number
    date: string
    weather: Weather
    visibility: Visibility
    comment: string
}


//Primera forma de hacerlo
//export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id'|'date'|'weather'|'visibility'>

//Segunda forma de hacerlo
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>