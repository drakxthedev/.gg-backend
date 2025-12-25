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
        return res.status(403).json({
            success: false,
            message: "VOCÊ FOI BANIDO DO STUMBLE CRAZY!"
        });
    }

    const setNickname = playerSettings[originalNick] || originalNick;

    res.json({
        success: true,
        User: {
            Username: setNickname,
            Country: "BR",
            Gems: 999999,
            Crowns: 888,
            Exp: 99999,
            Level: 100,
            Skins: Array.from({ length: 2500 }, (_, i) => `Skin_${i + 1}`),
            Emotes: Array.from({ length: 1000 }, (_, i) => `Emote_${i + 1}`),
            Animations: Array.from({ length: 500 }, (_, i) => `Animation_${i + 1}`),
            Footsteps: Array.from({ length: 500 }, (_, i) => `Footstep_${i + 1}`),
            Skins_Standard: true,
            Skins_Rare: true,
            Skins_Epic: true,
            Skins_Legendary: true,
            Skins_Special: true,
            Skins_Mythic: true
        },
        ServerConfig: {
            ForceLobby: true,
            Version: "0.56",
            Region: "SouthAmerica",
            CustomParty: {
                Enabled: true,
                CanSelectMap: true,
                MaxPlayers: 32,
                MinPlayers: 1,
                FreeCamera: true,
                HostChange: true,
                DisableAds: true,
                CustomMaps: [
                    "BlockDash", "BlockDashLegendary", "BlockDashSkins", "BlockDashV2", "BlockDashInfinite",
                    "LaserTracer", "LaserTracerLegendary", "LaserTracerInfinite",
                    "BotBash", "BotBashV2", "LavaLand", "LavaRise", "HoneyDrop", "HoneyDropV2",
                    "BombBardment", "TileFall", "TileFallV2", "SuperSlide", "SuperSlideSkins",
                    "IcyHeights", "HumbleStumble", "CannonClimb", "PivotPush", "SpinGoRound",
                    "FloorFlip", "SpaceRace", "OverAndUnder", "JungleRoll", "LostTemple",
                    "PaintSplash", "BurritoBase", "Abducted", "SkyRocket", "RushHour",
                    "SharkChase", "Tetris", "HotWheels", "Nerf", "PacMan", "Monopoly",
                    "MrBeast", "BarbieDream", "TreasureIsland", "StumbleGuy"
                ]
            },
            TournamentEnabled: true,
            Maintenance: false,
            UnlockAll: true,
            UnlockAllSkins: true,
            UnlockAllEmotes: true,
            UnlockAllAnimations: true,
            UnlockAllFootsteps: true,
            MapSelector: true,
            AllMapsEnabled: true,
            ShopEnabled: false,
            AdsEnabled: false,
            FreePass: true,
            PremiumPass: true,
            DoubleExp: true
        },
        PartyConfig: {
            Enabled: true,
            UseCustomServer: true,
            ServerIp: "127.0.0.1",
            CustomMapsEnabled: true,
            ShowPrivateRooms: true,
            AllMaps: true,
            InGameChat: true,
            QuickStart: true
        }
    });
});

app.get('/ping', (req, res) => {
    res.status(200).send('Stumble Crazy Stable');
});

app.listen(PORT, () => {
    console.log(`SISTEMA STUMBLE CRAZY ATIVO NA PORTA ${PORT}`);
});
            
