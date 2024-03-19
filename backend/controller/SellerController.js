import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get all sellers
export const getAllSellers = async () => {
  const sellers = await prisma.seller.findMany();
  return sellers;
};

// Get seller by ID
export const getSellerById = async (sellerId) => {
  const seller = await prisma.seller.findUnique({
    where: {
      id: sellerId,
    },
  });
  return seller;
};

// Create a new seller
export const createSeller = async (newSellerData) => {
  const seller = await prisma.seller.create({
    data: newSellerData,
  });
  
  return seller;
};

// Update seller by ID
export const updateSeller = async (sellerId, updatedSellerData) => {
  const seller = await prisma.seller.update({
    where: {
      id: sellerId,
    },
    data: updatedSellerData,
  });
  return seller;
};

// Delete seller by ID
export const deleteSeller = async (sellerId) => {
  const seller = await prisma.seller.delete({
    where: {
      id: sellerId,
    },
  });
  return seller;
};