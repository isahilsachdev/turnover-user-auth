export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Define the character set for the token
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      let token = '';

      // Generate 8 random characters
      for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters[randomIndex];
      }
      res.status(200).json({ token });
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: 'An error occurred while sending the OTP.' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
