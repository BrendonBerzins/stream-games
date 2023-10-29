type GamesPlayed = {
    nameGame: string;
    imageGame: string;
    bgGame: string;
    totalXpEarned: string;
    totalAchivements: string;
    percentage: string;
    hoursPlayed: number;
    description: string;
}

export const games:Array<GamesPlayed> = [
    {
        nameGame: 'Elden Ring',
        imageGame: 'https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/06/Elden-Ring-cover.png',
        bgGame: 'https://assetsio.reedpopcdn.com/elden-ring-malenia-1.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp',
        totalXpEarned: '1000/1000',
        totalAchivements: '93/93',
        percentage: '100%',
        hoursPlayed: 534,
        description: `In the Lands Between, ruled by Queen Marika the Eternal, the Elden Ring, the source of 
        the Erdtree, has been destroyed.
        Marika's demigod children claimed the fragments of the Elden Ring, known as the Great Runes, 
        and the insane corruption stemming from this incredible newfound force sparked a war: The Shattering. 
        A war that meant the end of Greater Will.            
        And now power will be given to the Tarnished, who were rejected and exiled from the Lands Between.            
        With the dead still living and a grace long lost, follow the path to the Lands Between, across the 
        misty sea, to reach the Elden Ring.`
    },
    {
        nameGame: 'Atomic Heart',
        imageGame: 'https://sm.ign.com/ign_br/game/a/atomic-hea/atomic-heart_8z9d.jpg',
        bgGame: 'https://assetsio.reedpopcdn.com/atomic-heart-screen-6.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp',
        totalXpEarned: '850/1000',
        totalAchivements: '83/100',
        percentage: '85%',
        hoursPlayed: 150,
        description: `Welcome to a perfect, amazing and utopian world! In it, humans live in harmony with 
        their loyal and zealous robots.
        Well, at least it was like that. With the imminent launch of the newest robot control system, 
        only a tragic accident or a global conspiracy could destabilize everything...`
    },
    {
        nameGame: 'Diablo IV',
        imageGame: 'https://sm.ign.com/ign_br/game/d/diablo-iv/diablo-iv_dbgj.jpg',
        bgGame: 'https://image.api.playstation.com/vulcan/ap/rnd/202212/0522/Dzry5RAwU9HsJGXZ3PUSYgCa.jpg',
        totalXpEarned: '340/1000',
        totalAchivements: '110/240',
        percentage: '34%',
        hoursPlayed: 14,
        description: `Sanctuary, a land once ravaged by war between the High Heavens and Burning Hells, 
        has fallen once more into darkness. Lilith, daughter of Mephisto, Lord of Hatred, has been 
        summoned by dark ritual after eons in exile. Now, hatred threatens to consume Sanctuary as evil 
        spreads and a new wave of cultists and worshippers arise to embrace Lilith’s coming. Only a brave 
        few dare to face this threat…`
    }
]