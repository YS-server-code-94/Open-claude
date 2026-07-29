import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000
const JWT_SECRET = process.env.SERVER_JWT_SECRET || 'change_this_secret'

// Admin login endpoint
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body
  const envUser = process.env.YS_UR
  const envPass = process.env.YS_PD
  if (!envUser || !envPass) return res.status(500).json({ error: 'Admin not configured' })
  if (username === envUser && password === envPass) {
    const token = jwt.sign({ user: username, role: 'admin' }, JWT_SECRET, { expiresIn: '8h' })
    return res.json({ ok:true, token })
  }
  return res.status(401).json({ ok:false, error:'Invalid credentials' })
})

app.get('/health', (req,res) => res.json({ ok:true, ts: Date.now() }))

app.listen(PORT, ()=> console.log(`API server running on ${PORT}`))
