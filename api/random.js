export default function handler(req, res) {
    const num = Math.floor(Math.random() * 100);
    res.status(200).json({ random: num });
}