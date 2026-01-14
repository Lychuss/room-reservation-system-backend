import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/auth/room-reservation-system', authRouter);

app.get("/health", (req, res) => {
  res.json({ status: "Server is running" });
});

app.listen(5000, () => {
    console.log('Server is listening in port 5000');
})