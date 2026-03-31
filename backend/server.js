const express = require('express');
const healthRouter = require('./routers/health_router');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Mount the health router under /api/health as expected by the CD pipeline
app.use('/api/health', healthRouter);

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
