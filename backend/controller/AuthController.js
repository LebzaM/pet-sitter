import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await prisma.owner.findUnique({
        where: {
          email,
        },
      });
  
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1d', // 1 day expiration
      });
  
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };