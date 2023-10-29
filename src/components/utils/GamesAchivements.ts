type ComponentsGames = {
    nameGame: string;
    imageGame: string;
    totalXpEarned: string;
    totalAchivements: string;
    percentage: string;
    description: string;
}

export const games:Array<ComponentsGames> = [

    {
        nameGame: 'Elden Ring',
        imageGame: 'https://i.ytimg.com/vi/E3Huy2cdih0/maxresdefault.jpg',
        totalXpEarned: '1000/1000',
        totalAchivements: '93/93',
        percentage: '100%',
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
        imageGame: 'https://www.adrenaline.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=1200&height=750&format=webp&quality=60&imagick=uploads.adrenaline.com.br/2023/05/atomic-heart.jpg',
        totalXpEarned: '850/1000',
        totalAchivements: '83/100',
        percentage: '85%',
        description: `Welcome to a perfect, amazing and utopian world! In it, humans live in harmony with 
        their loyal and zealous robots.
        Well, at least it was like that. With the imminent launch of the newest robot control system, 
        only a tragic accident or a global conspiracy could destabilize everything...`
    },
    {
        nameGame: 'Diablo IV',
        imageGame: 'https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/blt6d7b0fd8453e72b9/646e720a71d9db111a265e8c/d4-open-graph_001.jpg',
        totalXpEarned: '340/1000',
        totalAchivements: '110/240',
        percentage: '34%',
        description: `Sanctuary, a land once ravaged by war between the High Heavens and Burning Hells, 
        has fallen once more into darkness. Lilith, daughter of Mephisto, Lord of Hatred, has been 
        summoned by dark ritual after eons in exile. Now, hatred threatens to consume Sanctuary as evil 
        spreads and a new wave of cultists and worshippers arise to embrace Lilith’s coming. Only a brave 
        few dare to face this threat…`
    }
]