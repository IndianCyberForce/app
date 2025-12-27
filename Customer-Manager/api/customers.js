const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
    const filePath = path.join(process.cwd(), 'data', 'hulululululu.json');
    
    // READ JSON
    if (req.method === 'GET') {
        const data = fs.readFileSync(filePath, 'utf8');
        return res.status(200).json(JSON.parse(data));
    }

    // UPDATE/STORE JSON
    if (req.method === 'POST') {
        const newData = req.body; // Expects full array from frontend
        fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
        return res.status(200).json({ message: "Saved Successfully" });
    }
}
