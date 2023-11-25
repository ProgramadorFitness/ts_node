import express from 'express';
import * as diaryServices from '../services/diaryServices';
import toNewDiaryEntry from '../utils';

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(diaryServices.getEntries())
})

router.post('/', (req, res) => {
    try {

        const newDiaryEntry = toNewDiaryEntry(req.body)

        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)

    
} catch (error) {
    res.status(400).send(error)
}

})

router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id)// tambien se puede hacer // const diary = diaryServices.findById(Number(req.params.id))
    return diary
    ? res.send(diary)
    : res.sendStatus(404)
})


export default router