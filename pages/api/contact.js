export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      // Simulating saving the message (you can integrate with a database)
      console.log('Message received:', { name, email, message });
  
      // Respond with success
      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
  }
  