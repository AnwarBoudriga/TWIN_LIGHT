import logo1 from "./logo1.png";
import logo from "./logo.png";
import logo2 from "./logo2.png";
import search_icon from "./search_icon.png";
import nav_cart_icon from "./nav_cart_icon.png";
import menu_icon from "./menu_icon.png";
import profile_icon from "./profile_icon-removebg-preview.png";
import poster1 from "./poster1.png";
import poster2 from "./poster2.png";
import poster3 from "./poster3.png";
import poster1_sm from "./poster1_sm.png";
import poster2_sm from "./poster2_sm.png";
import poster3_sm from "./poster3_sm.png";
import Twin_light_Boutique from "./By Twin Light (1).png";
import Twin_light_Boutique_sm from "./Design sans titre (11).png";
import white_arrow_icon from "./white_arrow_icon.png";
import black_arrow_icon from "./black_arrow_icon-removebg-preview.png";
import femme from "./femme.jpg";
import homme from "./homme.jpg";
import garcon from "./garcon.jpg";
import fille from "./fille.jfif";
import robes from "./robes.jpg";
import femme_voilée from "./femme voilée.jfif";
import sports from "./sport.jpg";
import jean_Balloon1 from "./jean_Balloon1.webp";
import jean_Balloon2 from "./jean_Balloon2.webp";
import jean_Balloon3 from "./jean_Balloon3.webp";
import star_dull_icon from "./star_dull_icon-removebg-preview.png";
import star_icon from "./star_icon.png";
import cart_icon from "./cart_icon-removebg-preview.png";
import robe1 from "./robe1.jpg";
import robe2 from "./robe2.jpg";
import robe3 from './robe3.jpg';
import jacket1 from "./jacket1.webp";
import jacket2 from "./jacket2.webp";
import jacket3 from "./jacket3.webp";
import pontalon_fille1 from "./pentallon _ille.webp";
import pontalon_fille2 from "./pentallon_fille2.webp";
import tshirt_garcon1 from "./t-shirt_garcon1.jfif";
import tshirt_garcon2 from "./t-shirt_garcon2.jfif";
import bottom_banner_image from "./Couverture Facebook Collection Mode Été Photo Formes Organiques en Marron Rose Pastel Crème et Bleu (1).png";
import bottem_banner_image_sm from "./Design sans titre (10).png";
import delivery_truck_icon from './delivery_truck_icon-removebg-preview.png';
import leaf_icon from './leaf_icon-removebg-preview.png';
import coin_icon from './coin_icon-removebg-preview.png';
import trust_icon from './trust_icon-removebg-preview.png';
import refresh_icon from './refresh_icon-removebg-preview.png';
import arrow_right_icon_colored from './arrow_right_icon_colored-removebg-preview.png';
import remove_icon from './remove_icon-removebg-preview.png';
import add_adresse_image from './Adresse_Boutique_Post_Instagram_Minimaliste_Marron__1_-removebg-preview.png'
import add_icon from './add_icon-removebg-preview.png';
import product_list_icon from './product_list_icon-removebg-preview.png';
import order_icon from './order_icon-removebg-preview.png'
import upload_area from './upload_area-removebg-preview.png'
import box_icon from './box_icon-removebg-preview.png';
export const assets = {
    logo1,
    add_icon,
    box_icon,
    upload_area,
    product_list_icon,
    order_icon,
    logo,
    logo2,
    search_icon,
    nav_cart_icon,
    menu_icon,
    profile_icon,
    poster1,
    poster2,
    poster3,
    poster1_sm,
    poster2_sm,
    poster3_sm,
    Twin_light_Boutique,
    Twin_light_Boutique_sm,
    white_arrow_icon,
    black_arrow_icon,
    femme,
    homme,
    garcon,
    fille,
    robes,
    femme_voilée,
    sports,
    jean_Balloon1,
    jean_Balloon2,
    jean_Balloon3,
    star_dull_icon,
    star_icon,
    cart_icon,
    robe1,
    robe2,
    robe3,
    jacket1,
    jacket2,
    jacket3,
    pontalon_fille1,
    pontalon_fille2,
    tshirt_garcon1,
    tshirt_garcon2,
    bottom_banner_image,
    bottem_banner_image_sm,
    delivery_truck_icon,
    leaf_icon,
    coin_icon,
    trust_icon,
    refresh_icon,
    arrow_right_icon_colored,
    remove_icon,
    add_adresse_image
}

export const categories= [
    {
        text:"Homme",
        path: "Homme",
        image: homme,
        bgColor: "#332415",
    },
    {
        text:"Femme",
        path: "Femme",
        image: femme,
        bgColor: "#503623",
    },
    {
        text:"Femme Voilée",
        path: "Femme_Voilée",
        image: femme_voilée,
        bgColor: "#6d4a32",
    },
    {
        text:"Fille",
        path: "Fille",
        image: fille,
        bgColor: "#8a6145",
    },
    {
        text:"Garçon",
        path: "Garçon",
        image: garcon,
        bgColor: "#a87c5b",
    },
    {
        text:"Sports",
        path: "Sports",
        image: sports,
        bgColor: "#c49c7c",
    },
    {
        text:"Robes",
        path: "Robes",
        image: robes,
        bgColor: "#d7bca3",
    }
];
export const features = [
    {
        icon: delivery_truck_icon,
        title : "Fasted Delivery",
        description: "Clothes delivered in under 24 hours."
    },
    {
        icon: leaf_icon,
        title : "Best Clothes",
        description: "Best clothes with finest fabrics."
    },
    {
        icon: coin_icon,
        title : "Affordable Prices",
        description: "High quality clothing at unbeatable prices."
    },
    {
        icon: trust_icon,
        title : "Trusted by Thousands",
        description: "Loved by 10,000+ happy customers."
    }

];
export const dummyProducts = [
    {
        _id: "gd46g23h",
        name: "jean Balloon",
        category: "Femme",
        price: 35.99 ,
        offerPrice: 20 ,
        image:[jean_Balloon1, jean_Balloon2, jean_Balloon3],
        description: [
            "jean Balloon ",
            "taille basse bleu"
        ],
        createdAt: "2025-04-07T07:17:46.018Z",
        updatedAt: "2025-04-07T07:18:13.103Z",
        inStock: true,
    },
    {
        _id: "gd46g24h",
        name: "ROBE BLEU MARINE ",
        category: "Robes",
        price: 29.74 ,
        offerPrice: 20 ,
        image:[robe1, robe2, robe3],
        description: [
            "Col à revers ",
            "Manches longues",
            "Epaules à froufrou ornées de perles",
            "Poignets resserrés élastiques",
            "Patte boutonnée partielle",
            "Ceinture à nouer avec passants pour ceinture pour souligner la taille",
            "Longueur : longue",
            "Disponible en rose et noir"
        ],
        createdAt: "2025-04-08T07:17:46.019Z",
        updatedAt: "2025-04-08T07:18:13.104Z",
        inStock: true,
    },
    {
        _id: "gd46g25h",
        name: "Ciré capuche avec poches",
        category: "Homme",
        price: 35.99 ,
        offerPrice: 20 ,
        image:[jacket1, jacket2, jacket3],
        description: [
            "Coupe-vent à manches longues ",
            "capuche réglable",
            "fermeture Eclaire et boutons",
            "quatre poches à robat avec fermeture",
            "bas réglable et poignets avec broches"
        ],
        createdAt: "2025-04-08T07:17:46.020Z",
        updatedAt: "2025-04-08T07:18:13.105Z",
        inStock: true,
    },
    {
        _id: "gd46g26h",
        name: "PANTALON",
        category: "Fille",
        price: 10 ,
        offerPrice: 7 ,
        image:[pontalon_fille1, pontalon_fille1],
        description: [
            "Jean skinny pour bébé fille.",
            "aille haute pour une touche tendance.",
            "Braguette zippée montée d'un bouton et passants pour ceinture.",
            "Cinq poches pour un espace de rangement pratique.",
            "Tissu extensible pour une liberté de mouvement optimale."
        ],
        createdAt: "2025-04-08T07:17:46.021Z",
        updatedAt: "2025-04-08T07:18:13.106Z",
        inStock: true,
    },
    {
        _id: "gd46g27h",
        name: "T SHIRT",
        category: "Garçon",
        price: 30 ,
        offerPrice: 25 ,
        image:[tshirt_garcon1, tshirt_garcon2],
        description: [
            "Col rond ",
            "Manches longues",
            "Imprimé au-devant",
            "Couleurs disponibles : Blanc, noir",
            "Tailles disponibles : 6 ans, 8 ans, 10 ans, 12 ans, 14 ans"
        ],
        createdAt: "2025-04-08T07:17:46.022Z",
        updatedAt: "2025-04-08T07:18:13.107Z",
        inStock: true,
    }
];

export const footerLinks = [
    {
        title: "Quick Links",
        links:[
            {text: "Home", url:"#"},
            {text: "Best Sellers", url:"#"},
            {text: "Offers & Deals", url:"#"},
            {text: "Contact Us", url:"#"},
            {text: "FAQs", url:"#"}
        ]
    },
    {
        title: "Need help?",
        links:[
            {text: "Delivery Information", url:"#"},
            {text: "Return & Refund Policy", url:"#"},
            {text: "Payment Methods", url:"#"},
            {text: "TRack your Order", url:"#"},
            {text: "Contact us", url:"#"}
        ]
    },
    {
        title: "Follow us",
        links:[
            {text: "Instagram", url:"#"},
            {text: "Twitter", url:"#"},
            {text: "Facebook", url:"#"},
            {text: "YouTube", url:"#"}
        ]
    }
]

export const dummyAddress = [
    {
        street: "Street 123",
        city: "Main City",
        state: "New State",
        country: "IN"
    }
]

export const dummyOrders =[
    {
        _id : "hjjkc4525255525255",
        userId: "74565sgfddcqj89652",
        items: [
            {
                product: dummyProducts[3],
                quantity: 2,
                _id : "gd46g26h",
            },
        ],
        paymentType: "Online",
        amount: 89,
        address : dummyAddress[0],
        status : "Order Placed",
        isPaid: true,
        createdAt: "2025-04-21T07:19:23.018Z",
        updatedAt: "2025-04-21T07:20:20.108Z"
    },
    {
        _id : "456366554122sdfcdf",
        userId: "74565sgfddcqj89752",
        items: [
            {
                product: dummyProducts[2],
                quantity: 3,
                _id : "gd46g25h",
            },
            {
                product: dummyProducts[0],
                quantity: 1,
                _id : "gd46g23h",
            }
        ],
        paymentType: "COD",
        amount: 81.2,
        address : dummyAddress[0],
        status : "Order Placed",
        isPaid: false,
        createdAt: "2025-04-21T07:19:23.068Z",
        updatedAt: "2025-04-21T07:20:20.068Z",
    },
]