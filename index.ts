import express from 'express';
import bodyParser from 'body-parser';
import enseignantRoutes from './routes/enseignantRoutes';
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use('/enseignant', enseignantRoutes); 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
