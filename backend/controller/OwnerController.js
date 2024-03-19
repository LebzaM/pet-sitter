import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import jwt from "jsonwebtoken";
 export const getAllOwners = async () => {
    const owners = await prisma.owner.findMany();
    return owners;
  };
  
  // Get owner by ID
  export const getOwnerById = async (ownerId) => {
    const owner = await prisma.owner.findUnique({
      where: {
        id: ownerId,
      },
    });
    return owner;
  };
  
  // Create a new owner
  export const createOwner = async (newOwnerData) => {
  try {
    const owner = await prisma.owner.create({
      data: newOwnerData,
    });
    
    return owner;
  } catch (error) {
    console.error('Error creating owner:', error);
    throw new Error('Failed to create owner');
  }
};
  
  // Update owner by ID
  export const updateOwner = async (ownerId, updatedOwnerData) => {
    const owner = await prisma.owner.update({
      where: {
        id: ownerId,
      },
      data: updatedOwnerData,
    });
    return owner;
  };
  
  // Delete owner by ID
  export const deleteOwner = async (ownerId) => {
    const owner = await prisma.owner.delete({
      where: {
        id: ownerId,
      },
    });
    return owner;
  };
  
  