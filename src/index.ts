import express from 'express'
import diaryrouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 8000

app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!')
    res.send('pong')
})

app.use('/api/diaries', diaryrouter)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})