
$(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 4,
    loop: true,
    lazyLoad: true,
    margin: 5,
    padding: 5,
    stagePadding: 5,
    responsive: {
        0: {
            items: 1,
            dots: false
        },
        485: {
            items: 2,
            dots: false
        },
        728: {
            items: 3,
            dots: false
        },
        960: {
            items: 4,
            dots: false
        },
        1200: {
            items: 4,
            dots: true
        }
    }
});

console.log("script.js loaded");
var option = {
    //AMAZON
    Agenda: 'https://www.amazon.in/Champs-Agenda-Light-Weight-Running/dp/B099SBH9KF',
    Altroz: 'https://www.amazon.in/Champs-ShoesN-Blue-MUSTRED-ALTROZ-NBMS-7/dp/B09LZ6S1DW/ref=sr_1_1?keywords=champs+altroz&qid=1640178020&sr=8-1',
    Diva: 'https://www.amazon.in/Champs-Womens-Light-Weight-Casual/dp/B08P7N6NYY/ref=sr_1_1?crid=35GDKKWD5E4QR&keywords=champs+diva&qid=1640178092&sprefix=champs+diva%2Caps%2C332&sr=8-1',
    Crystal: 'https://www.amazon.in/Champs-Crystal-Workout-Shoes-Black/dp/B08H8R3HC5/ref=sr_1_4?crid=OWYE4789NLYB&keywords=champs+crystal&qid=1640178165&sprefix=campus+crystal%2Caps%2C221&sr=8-4',
    armour : 'https://www.amazon.in/Champs-Armour-Weight-Running-N-Blue/dp/B09416G1X2/ref=sr_1_1?crid=OP5B07CP1WLZ&keywords=champs+armour&qid=1640181586&sprefix=champs+armour%2Caps%2C252&sr=8-1',
    baleno : 'https://www.amazon.in/Champs-BALENO-Light-Weight-Running/dp/B08LF272GS/ref=sr_1_1?crid=3SHBKEULGK97B&keywords=champs+baleno&qid=1640181681&sprefix=campus+baleno%2Caps%2C265&sr=8-1',
    basic : 'https://www.amazon.in/Champs-Basic-Casual-Shoes-Black/dp/B09417W9QH/ref=sr_1_3?crid=2OP63UV4WGBB7&keywords=champs+basic&qid=1640181736&sprefix=champs+basic%2Caps%2C266&sr=8-3',
    belgium: 'https://www.amazon.in/Campus-Belgium-Running-Shoes-8-5G-659/dp/B07ZCS74R4/ref=sr_1_1?crid=272NEM2GSTE3B&keywords=campus+belgium&qid=1640181777&sprefix=campus+belgium%2Caps%2C275&sr=8-1',
    brave:'https://www.amazon.in/Champs-Brave-Running-Shoes-N-Blue/dp/B08H8RD2VH/ref=sr_1_1?crid=3PJ2ZDPXH3CKI&keywords=champs+brave&qid=1640181972&sprefix=campus+brave%2Caps%2C272&sr=8-1',
    brazil: 'https://www.amazon.in/Champs-Brazil-Light-Weight-Running/dp/B08LDX8YP3/ref=sr_1_1?crid=1X93OVVC2NIW2&keywords=champs+brazil&qid=1640182066&sprefix=campus+brazil%2Caps%2C313&sr=8-1',
    dragon : 'https://www.amazon.in/Campus-Dragon-Pro-Running-Shoes-7-5G-674/dp/B07Y23YMNK/ref=sr_1_2?crid=3UG3MDRHJKGTR&keywords=campus+dragon&qid=1640182409&sprefix=campus+dragon%2Caps%2C289&sr=8-2',
    focus: 'https://www.amazon.in/Campus-Stonic-Running-Shoes-7-5G-680/dp/B07XBSV88S/ref=sr_1_3?crid=1U39JTAAQBOWI&keywords=campus+focus&qid=1640182536&sprefix=campus+focus%2Caps%2C334&sr=8-3',
    glory: 'https://www.amazon.in/Champs-Glory-Womens-Weight-Running/dp/B08NC9ZN3T/ref=sr_1_1?crid=3THLOJ125HO4P&keywords=champs+glory&qid=1640182821&sprefix=campus+glory%2Caps%2C388&sr=8-1',
    harris1: 'https://www.amazon.in/Champs-Harris-Womens-Light-Weight/dp/B09F2KVYNP/ref=sr_1_1?crid=DXFLK4X3P4E7&keywords=champs+harris&qid=1640182887&sprefix=champs+harris%2Caps%2C323&sr=8-1',
    north: 'https://www.amazon.in/Champs-North-Mens-Breathable-Shoes/dp/B08LDZC882/ref=sr_1_1?crid=BJEAN6UVFQUH&keywords=champs+north&qid=1640183012&sprefix=campus+north%2Caps%2C381&sr=8-1',
    oscar: 'https://www.amazon.in/Champs-Oscar-Light-Weight-Running/dp/B09F2P34W7/ref=sr_1_1?crid=38I4YBKO81GRR&keywords=champs+oscar&qid=1640183080&sprefix=champs+oscar%2Caps%2C442&sr=8-1',
    panther: 'https://www.amazon.in/Champs-Panther-Weight-Running-N-Blue/dp/B08TVQHFLH/ref=sr_1_1?crid=3IJ2EM26V9RDD&keywords=champs+panther&qid=1640183115&sprefix=campus+panther%2Caps%2C323&sr=8-1',
    solo : 'https://www.amazon.in/Champs-Weight-Running-T-Blue-Orange/dp/B09C646XC2/ref=sr_1_1?crid=2HXU37B3TNL0G&keywords=champs+solo&qid=1640183324&sprefix=campus+solo%2Caps%2C261&sr=8-1',

    //FLIPKART
    Agendaf: 'https://www.flipkart.com/champs-agenda-on-running-shoes-men/p/itmfbe08c61c7389?pid=SHOFV927ZXG6FSYX&lid=LSTSHOFV927ZXG6FSYXTB5ZOP&marketplace=FLIPKART&q=champs+shoes&store=osp%2Fcil%2F1cu&srno=s_1_9&otracker=AS_QueryStore_HistoryAutoSuggest_1_3_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_3_na_na_na&fm=SEARCH&iid=cd8e90d2-bf08-4e4b-84b0-ff1097f8e427.SHOFV927ZXG6FSYX.SEARCH&ppt=sp&ppn=sp&ssid=zxclw0g2yo0000001640181180009&qH=5d23827bb2b5b4b5',
    Altrozf: 'https://www.flipkart.com/champs-altroz-on-running-shoes-men/p/itm707b055cb5c4b?pid=SHOG8RAQ3HNBUSY9&lid=LSTSHOG8RAQ3HNBUSY9COTOTB&marketplace=FLIPKART&q=champs+altroz&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=5f155dc7-9cc8-4e3b-84be-0420e37e95af.SHOG8RAQ3HNBUSY9.SEARCH&ppt=hp&ppn=homepage&ssid=m1m5jsivb40000001640184238241&qH=f344565d731249d4',
    armourf:'https://www.flipkart.com/champs-armour-on-running-shoes-men/p/itm9bd86f3626fed?pid=SHOG2FEJ4FUDE7GW&lid=LSTSHOG2FEJ4FUDE7GWUI5ORI&marketplace=FLIPKART&q=champs+armour&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=3b389f07-c184-49df-9c0a-08663bfd21cf.SHOG2FEJ4FUDE7GW.SEARCH&ppt=sp&ppn=sp&ssid=371p151htc0000001640184286230&qH=f7561748555984fa',
    balenof:'https://www.flipkart.com/champs-baleno-on-running-shoes-men/p/itm66f8930bb6802?pid=SHOFWHJKKHXHUJ4D&lid=LSTSHOFWHJKKHXHUJ4DINUQP3&marketplace=FLIPKART&q=champs+baleno&store=search.flipkart.com&srno=s_1_2&otracker=search&otracker1=search&fm=SEARCH&iid=9ee77802-13e9-406b-a616-bef8d6ab2223.SHOFWHJKKHXHUJ4D.SEARCH&ppt=sp&ppn=sp&ssid=wt4xebwhmo0000001640184333505&qH=a7520b58907cfe39',
    basicf:'https://www.flipkart.com/champs-basic-sneakers-men/p/itm439ff3b219d84?pid=SHOFV9YD5TDPJBCE&lid=LSTSHOFV9YD5TDPJBCE9YNCIO&marketplace=FLIPKART&q=champs+basic&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=6351cf98-a054-41ac-9508-6a7003d93377.SHOFV9YD5TDPJBCE.SEARCH&ppt=sp&ppn=sp&ssid=xx89xa84sg0000001640184371149&qH=fb2e2390de046a5d',
    belgiumf:'https://www.flipkart.com/champs-belgium-on-running-shoes-men/p/itm9bee055555f04?pid=SHOG2FEJVKGJFQGD&lid=LSTSHOG2FEJVKGJFQGDU2XJUG&marketplace=FLIPKART&q=champs+belgium&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=afefcc73-7641-4edb-ae4b-c900862a0d60.SHOG2FEJVKGJFQGD.SEARCH&ppt=sp&ppn=sp&ssid=6dbzwidjuo0000001640184424465&qH=c5d40cb64d01097c',
    bravef:'https://www.flipkart.com/champs-brave-on-running-shoes-men/p/itm95f8ae4eedcaf?pid=SHOFZHX6FYKWFFQW&lid=LSTSHOFZHX6FYKWFFQWLUOUS0&marketplace=FLIPKART&q=champs+brave&store=search.flipkart.com&srno=s_1_3&otracker=search&otracker1=search&fm=SEARCH&iid=c9d9a131-2275-466b-92c3-cce70ea7a14c.SHOFZHX6FYKWFFQW.SEARCH&ppt=sp&ppn=sp&ssid=l6vrdb3h0g0000001640184460870&qH=9318340e3bf898f1',
    brazilf:'https://www.flipkart.com/champs-brazil-on-running-shoes-men/p/itmdcccf1c8e4c4a?pid=SHOFZMNG6FUQZAZ9&lid=LSTSHOFZMNG6FUQZAZ97CQJDW&marketplace=FLIPKART&q=champs+brazil&store=search.flipkart.com&srno=s_1_2&otracker=search&otracker1=search&fm=SEARCH&iid=a7350dd0-9b3f-42c5-81df-b6c68276f9e4.SHOFZMNG6FUQZAZ9.SEARCH&ppt=sp&ppn=sp&ssid=duiyh8ujpc0000001640184497548&qH=7c546077d5929b14',
    crystalf:'https://www.flipkart.com/champs-crystal-running-shoes-men/p/itm02f306fa3cee2?pid=SHOFWHJKSVGJXWFC&lid=LSTSHOFWHJKSVGJXWFCAHVG8Q&marketplace=FLIPKART&q=champs+crystal&store=search.flipkart.com&srno=s_1_3&otracker=search&otracker1=search&fm=SEARCH&iid=4ee423ae-3ca4-418f-9bdc-168bf191ec11.SHOFWHJKSVGJXWFC.SEARCH&ppt=sp&ppn=sp&ssid=2ubxz9yz740000001640184574915&qH=65e51b33e8527097',
    divaf:'https://www.flipkart.com/champs-diva-2-on-sneakers-women/p/itm57cd943c7aef3?pid=SHOFZNPDZCRAYG9M&lid=LSTSHOFZNPDZCRAYG9ML8MAK9&marketplace=FLIPKART&q=champs+diva&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=9a141014-f339-4201-ab6a-530fd849087b.SHOFZNPDZCRAYG9M.SEARCH&ppt=sp&ppn=sp&ssid=xblv0yrxw00000001640184627334&qH=fec542b2adcc0ff4',
    dragonf:'https://www.flipkart.com/campus-dragon-running-shoes-men/p/itm12e838528fcbf?pid=SHOFGJYK3HBNNYMP&lid=LSTSHOFGJYK3HBNNYMPMHZL9S&marketplace=FLIPKART&q=champs+dragon&store=osp%2Fcil%2F1cu&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=ee097247-6035-4895-b3a8-d4fbc2f679ee.SHOFGJYK3HBNNYMP.SEARCH&ppt=sp&ppn=sp&ssid=ts1gkb50hs0000001640184673604&qH=2c3bbf9bc07392ef',
    focusf:'https://www.flipkart.com/champs-focus-on-running-shoes-men/p/itm9e101610beac6?pid=SHOG2AHBKGX7WXZA&lid=LSTSHOG2AHBKGX7WXZA053VOP&marketplace=FLIPKART&q=champs+focus&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=55f5d8d6-8fd8-4a0c-b18b-d79b38cc059f.SHOG2AHBKGX7WXZA.SEARCH&ppt=sp&ppn=sp&ssid=qjtai1904g0000001640184720180&qH=2456411bec4dc1f2',
    gloryf:'https://www.flipkart.com/champs-glory-walking-shoes-women/p/itmd9639befbf9f0?pid=SHOFXEX53QHVE4EB&lid=LSTSHOFXEX53QHVE4EBIS41XR&marketplace=FLIPKART&q=champs+glory&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=d84b44f8-21c0-409a-989f-16773bc023c5.SHOFXEX53QHVE4EB.SEARCH&ppt=sp&ppn=sp&ssid=7xxesb7ni80000001640184759248&qH=7c5dd020c3c89a3b',
    harris1f:'https://www.flipkart.com/champs-harris-on-sneakers-women/p/itm4df51ee437f7d?pid=SHOG6BRDYNN7RDHC&lid=LSTSHOG6BRDYNN7RDHCRKIAUU&marketplace=FLIPKART&q=champs+harris&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=7c6b168a-ce3a-45d4-932b-1e2b14062889.SHOG6BRDYNN7RDHC.SEARCH&ppt=sp&ppn=sp&ssid=qr2yeccfr40000001640184802858&qH=bfd3ac9ae774084b',
    northf:'https://www.flipkart.com/champs-north-running-shoes-men/p/itm58aca7b2ec115?pid=SHOFWHJKUFSYA6GF&lid=LSTSHOFWHJKUFSYA6GFH3KGBE&marketplace=FLIPKART&q=champs+north&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=8a37f023-c40e-4105-9e51-17508b043809.SHOFWHJKUFSYA6GF.SEARCH&ppt=sp&ppn=sp&ssid=wb0sdu062o0000001640184848126&qH=29002a452aeab27b',
    oscarf:'https://www.flipkart.com/champs-running-shoes-men/p/itm7dc360317cc77?pid=SHOG6E9RTHCGQRYD&lid=LSTSHOG6E9RTHCGQRYDJKEVIE&marketplace=FLIPKART&q=champs+oscar&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=0e6cacda-0bbf-4136-83a0-11a618e37e69.SHOG6E9RTHCGQRYD.SEARCH&ppt=sp&ppn=sp&ssid=6xa5bgzk280000001640184887211&qH=a40da1e7c137f881',
    pantherf:'https://www.flipkart.com/champs-panther-on-running-shoes-men/p/itme23c432a3f050?pid=SHOFZMNJYQAQQ3XP&lid=LSTSHOFZMNJYQAQQ3XPJPICDJ&marketplace=FLIPKART&q=champs+panther&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=dcf58e4a-3f5c-4be1-8b8b-275d1e042014.SHOFZMNJYQAQQ3XP.SEARCH&ppt=sp&ppn=sp&ssid=59bpin1vo00000001640184936979&qH=a8d93619cc681155',
    solof:'https://www.flipkart.com/champs-solo-on-running-shoes-men/p/itma54b28f777882?pid=SHOG5KZ7H2AE9NDM&lid=LSTSHOG5KZ7H2AE9NDML3VVDJ&marketplace=FLIPKART&q=champs+solo&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=3ebadeb2-27fd-45e4-9959-d26f4ed3e00f.SHOG5KZ7H2AE9NDM.SEARCH&ppt=sp&ppn=sp&ssid=mpau8e0ikg0000001640185043902&qH=2bdc6253ef2f8a73',

    //MYNTRA
    agendam:'https://www.myntra.com/sports-shoes/champs/champs-men-navy-blue-mesh-running-shoes/14316162/buy',
    altrozm:'https://www.myntra.com/sports-shoes/champs/champs-men-black-running-sports-shoes/15402032/buy',
    armourm:'https://www.myntra.com/sports-shoes/champs/champs-men-navy-blue-mesh-running-shoes/14224432/buy',
    balenom:'https://www.myntra.com/sports-shoes/champs/champs-men-blue-running-shoes/14018280/buy',
    basicm:'https://www.myntra.com/casual-shoes/champs/champs-men-black-woven-design-slip-on-sneakers/14338930/buy',
    belgiumm:'https://www.myntra.com/sports-shoes/champs/champs-men-black-mesh-running-shoes/14224464/buy',
    bravem:'https://www.myntra.com/sports-shoes/champs/champs-men-black-mesh-long-distance-running-shoes/14323768/buy',
    brazilm:'https://www.myntra.com/sports-shoes/champs/champs-men-gold-toned-mesh-running-shoes/14150870/buy',
    crystalm:'https://www.myntra.com/sports-shoes/champs/champs-men-black-mesh-long-distance-running-shoes/14150864/buy',
    divam:'https://www.myntra.com/casual-shoes/champs/champs-women-maroon-woven-design-slip-on-sneakers/14198654/buy',
    dragonm:'https://www.myntra.com/sports-shoes/champs/champs-men-black-running-shoes/14316202/buy',
    focusm:'https://www.myntra.com/sports-shoes/champs/champs-men-black-synthetic-running-shoes/14172194/buy',
    glorym:'https://www.myntra.com/sports-shoes/champs/champs-women-peach-coloured-running-shoes/14313308/buy',
    harris1m:'https://www.myntra.com/casual-shoes/champs/champs-women-pink-woven-design-sneakers/15138036/buy',
    northm:'https://www.myntra.com/sports-shoes/champs/champs-men-grey-running-shoes/14316148/buy',
    pantherm:'https://www.myntra.com/sports-shoes/champs/champs-men-blue-mesh-running-shoes/14316154/buy',
    oscarm:'https://www.myntra.com/sports-shoes/champs/champs-men-white-running-non-marking-sports-shoes/15402040/buy',
    solom:'https://www.myntra.com/sports-shoes/champs/champs-men-blue-running-non-marking-shoes/15057788/buy',
}
var url = undefined
function clicked(e) {
    url = option[e]
}
function gotoUrl() {
    window.location.href = url
}
