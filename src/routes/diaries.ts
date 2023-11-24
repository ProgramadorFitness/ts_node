import express from 'express';
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(diaryServices.getEntries())
})

router.post('/', (req, res) => {
    try {
        const {date, weather, visibility, comment} = req.body

        const newDiaryEntry = toNewDiaryEntry(req.body)

        const addedDiaryEntry = diaryServices.addDiary({
            date,
            weather,
            visibility,
            comment
    })

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