
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { enseignant } from '../models/enseignant';

const enseignants: enseignant[] = [
  {
    id: 1,
    username: 'ens1',
    password: bcrypt.hashSync('mdp123', 10),
  }
];

export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  const enseignant = enseignants.find(ens => ens.username === username);
  if (!enseignant) {
    res.status(400).json({ message: 'Nom d\'utilisateur ou mot de passe invalide' });
    return;
  }

  const isMatch = await bcrypt.compare(password, enseignant.password);
  if (!isMatch) {
    res.status(400).json({ message: 'Nom d\'utilisateur ou mot de passe invalide' });
    return;
  }

  const token = jwt.sign({ id: enseignant.id }, 'your_jwt_secret', { expiresIn: '1h' });
  res.json({ token });
};