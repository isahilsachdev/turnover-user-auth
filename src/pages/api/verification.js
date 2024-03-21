export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Generate a random 8-digit OTP
      const otp = Math.floor(10000000 + Math.random() * 90000000);
      res.status(200).json({ otp });
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: 'An error occurred while sending the OTP.' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
