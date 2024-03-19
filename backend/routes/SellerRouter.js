import express from 'express';
import {
  getAllSellers,
  getSellerById,
  createSeller,
  updateSeller,
  deleteSeller,
} from '../controller/SellerController.js';

const router = express.Router();

// Get all sellers
router.get('/sellers', async (req, res) => {
  try {
    const sellers = await getAllSellers();
    res.json(sellers);
  } catch (error) {
    console.error('Error getting sellers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new seller
router.post('/sellers', async (req, res) => {
  const { name, companyName, city, phoneNumber, companyWebsite, companySize, email, experience, price } = req.body;
  const newSellerData = { name, companyName, city, phoneNumber, companyWebsite, companySize, email, experience, price };

  try {
    const createdSeller = await createSeller(newSellerData);
    res.status(201).json(createdSeller);
  } catch (error) {
    console.error('Error creating seller:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get seller by ID
router.get('/sellers/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const seller = await getSellerById(id);
    if (!seller) {
      return res.status(404).json({ error: 'Seller not found' });
    }
    res.json(seller);
  } catch (error) {
    console.error('Error getting seller:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update seller by ID
router.patch('/sellers/:id', async (req, res) => {
  const { id } = req.params;
  const { name, companyName, city, phoneNumber, companyWebsite, companySize, password } = req.body;
  const updatedSellerData = { name, companyName, city, phoneNumber, companyWebsite, companySize, password };

  try {
    const updatedSeller = await updateSeller(id, updatedSellerData);
    res.json(updatedSeller);
  } catch (error) {
    console.error('Error updating seller:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete seller by ID
router.delete('/sellers/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSeller = await deleteSeller(id);
    res.json(deletedSeller);
  } catch (error) {
    console.error('Error deleting seller:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;