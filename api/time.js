export default function handler(req, res) {
    const now = new Date().toLocaleString("ko-KR", {
        timeZone: "Asia/Seoul",
    });
    res.status(200).json({ time: now });
}