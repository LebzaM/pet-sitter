import express from 'express';
import { getOwnerById, createOwner, getAllOwners, updateOwner, deleteOwner } from '../controller/OwnerController.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const owners = await getAllOwners();
    res.json(owners);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.post('/id', async (req, res) => {
    const { name, email, password, phoneNumber, service, animalType, selectedDate, duration } = req.body;
    const newOwnerData = { name, email, password, phoneNumber, service, animalType, selectedDate, duration };
  
    try {
      const createdOwner = await createOwner(newOwnerData);
      res.status(201).json(createdOwner);
    } catch (error) {
      console.error('Error creating owner:', error);
      res.status(500).json({ error: 'Failed to create owner' });
    }
  });

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const owner = await getOwnerById(parseInt(id, 10));
    if (!owner) {
      return res.status(404).json({ error: 'Owner not found' });
    }
    res.json(owner);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, password, phoneNumber, service, animalType, selectedDate, duration,  } = req.body;
  const updatedOwnerData = { name, email, password, phoneNumber, service, animalType, selectedDate, duration,  };

  try {
    const updatedOwner = await updateOwner(parseInt(id, 10), updatedOwnerData);
    res.json(updatedOwner);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedOwner = await deleteOwner(parseInt(id, 10));
    res.json(deletedOwner);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;