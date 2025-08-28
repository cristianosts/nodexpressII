import express from 'express';
import { MainRoute } from './routes'

const app = express()

app.use(express.json())

app.use('/api/v1', MainRoute)

let port = 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})