const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const playerSettings = {
    "PlayerOriginal123": "NickSetado_CRAZY",
    "SteveGamer": "REI_DO_PULO",
    "boooorges157": "<color=red>drakx<sup><#FDD700>[DEV]"
};

const bannedPlayers = [
    "HackerInsuportavel",
    "ToxicPlayer10"
];

app.get('/api/player/login', (req, res) => {
    const originalNick = req.query.name || "Guest";

    if (bannedPlayers.includes(originalNick)) {
        console.log(`[BAN] Bloqueado: ${originalNick}`);
        return res.status(403).json({
            success: false,
            error: "Banned",
            message: "VOCÊ FOI BANIDO DO STUMBLE CRAZY!"
        });
    }

    const setNickname = playerSettings[originalNick] || originalNick;
    console.log(`[LOGIN] Original: ${originalNick} | Setado: ${setNickname}`);

    res.json({
        success: true,
        User: {
            Username: setNickname,
            Country: "BR",
            Emotes: Array.from({ length: 30 }, (_, i) => `emote_${i + 1}`),
            Skins: Array.from({ length: 50 }, (_, i) => `skin_${i + 1}`),
            Gems: 999999,
            Crowns: 888
        },
        ServerConfig: {
            ForceLobby: true,
            Version: "0.56",
            Region: "SouthAmerica"
        }
    });
});

app.get('/ping', (req, res) => {
    res.status(200).send('Stumble Crazy Stable');
});

app.listen(PORT, () => {
    console.log(`SISTEMA STUMBLE CRAZY ATIVO NA PORTA ${PORT}`);
});
