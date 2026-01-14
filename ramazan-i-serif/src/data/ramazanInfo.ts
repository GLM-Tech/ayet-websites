export interface RamazanInfoItem {
    id: number;
    icon: string;
    title: string;
    description: string;
}

export const ramazanInfo: RamazanInfoItem[] = [
    {
        id: 1,
        icon: "🌙",
        title: "Oruç (Savm)",
        description: "Ramazan orucu, İslam'ın beş şartından biridir. İmsak vaktinden iftar vaktine kadar yeme, içme ve diğer orucu bozan şeylerden uzak durmaktır."
    },
    {
        id: 2,
        icon: "📖",
        title: "Kur'an Ayı",
        description: "Kur'an-ı Kerim, Ramazan ayında Kadir Gecesi'nde indirilmeye başlanmıştır. Bu ayda Kur'an okumak çok faziletlidir."
    },
    {
        id: 3,
        icon: "🌅",
        title: "Sahur",
        description: "İmsak vaktinden önce yenilen son öğündür. Hz. Peygamber sahur yemeğinin bereketli olduğunu söylemiş ve sahura kalkmayı tavsiye etmiştir."
    },
    {
        id: 4,
        icon: "🌆",
        title: "İftar",
        description: "Güneşin batmasıyla birlikte orucun açıldığı vakittir. İftarı acele etmek ve hurma ya da su ile açmak sünnettir."
    },
    {
        id: 5,
        icon: "🕌",
        title: "Teravih Namazı",
        description: "Ramazan gecelerinde yatsı namazından sonra kılınan nafile namazdır. 20 rekat olarak cemaatle kılınması sünnettir."
    },
    {
        id: 6,
        icon: "✨",
        title: "Kadir Gecesi",
        description: "Ramazan'ın son on gününde aranması gereken, bin aydan hayırlı olan mübarek gecedir. Bu gece Kur'an indirilmiştir."
    },
    {
        id: 7,
        icon: "🤲",
        title: "İtikaf",
        description: "Ramazan'ın son on gününde camide ibadet amacıyla kalma geleneğidir. Hz. Peygamber her Ramazan itikafa girerdi."
    },
    {
        id: 8,
        icon: "💝",
        title: "Sadaka ve Zekat",
        description: "Ramazan ayı hayır ve hasenat için en bereketli aydır. Zekat ve fitre bu ayda verilmesi tercih edilen mali ibadetlerdir."
    },
    {
        id: 9,
        icon: "🎉",
        title: "Ramazan Bayramı",
        description: "Ramazan orucunun tamamlanmasından sonra üç gün süren bayramdır. Bayram namazı kılınır, akraba ve komşular ziyaret edilir."
    }
];
