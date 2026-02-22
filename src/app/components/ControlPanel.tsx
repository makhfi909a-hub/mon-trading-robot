"use client";
import { useState } from 'react';

export default function ControlPanel() {
    const [status, setStatus] = useState("Idle");

    const sendCommand = async (action: string) => {
        setStatus(`Sending ${action}...`);
        try {
            const res = await fetch('/api/command', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action, symbol: 'XAUUSD', lot: 0.1, mode: 'MANUAL' })
            });
            if (res.ok) setStatus(`${action} Sent!`);
            else setStatus("Error");
        } catch (e) {
            setStatus("Error");
        }
    };

    return (
        <div className="bg-zinc-900 p-6 rounded-lg mb-8 border border-zinc-800">
            <div className="flex gap-4 mb-4">
                <button onClick={() => sendCommand('BUY')} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-bold transition-colors">BUY GOLD</button>
                <button onClick={() => sendCommand('SELL')} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold transition-colors">SELL GOLD</button>
            </div>
            <p className="text-zinc-400">Status: <span className="text-white font-mono">{status}</span></p>
        </div>
    );
}
