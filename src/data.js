import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const books = [
    {
        id: 1,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/41eD2PjsHgL._AC_SX184_.jpg',
        title: 'Ghost Hunter',
        author: 'Abhirup Dhar',
        incart: false,
        price: 2.60,
        info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi vitae ipsam quae id ad aliquam. Magni quod ad quidem hic, tempore, mollitia ducimus illo laborum, sunt nisi culpa odio nihil animi exercitationem deserunt!`,
        category: 'horror',
    },
    {
        id: 20,
        img: 'https://m.media-amazon.com/images/I/81YucA3YgRL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Night of the Living Dummy',
        author: 'Gooesbumps',
        incart: false,
        price: 10.00,
        info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi vitae ipsam quae id ad aliquam. Magni quod ad quidem hic, tempore, mollitia ducimus illo laborum, sunt nisi culpa odio nihil animi exercitationem deserunt!`,
        category: 'horror'
    },
    {
        id: 2,
        img: 'https://m.media-amazon.com/images/I/71e9MY-XE9L._AC_UY327_FMwebp_QL65_.jpg',
        title: 'The Blue Umbrella',
        author: 'Ruskin Bond',
        incart: false,
        price: 10,
        info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi vitae ipsam quae id ad aliquam. Magni quod ad quidem hic, tempore, mollitia ducimus illo laborum, sunt nisi culpa odio nihil animi exercitationem deserunt!`,
        category: 'thriller',
    },
    {
        id: 21,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/5141XhLj9ZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
        title: 'Charlie and the Chocolate Factory',
        author: 'Roald Dhal',
        incart: false,
        price: 170,
        info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi vitae ipsam quae id ad aliquam. Magni quod ad quidem hic, tempore, mollitia ducimus illo laborum, sunt nisi culpa odio nihil animi exercitationem deserunt!`,
        category: 'kids',
    },
    {
        id: 3,
        img: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'The Japanese secret to a long and happy life',
        author: 'Héctor García',
        incart: false,
        price: 23,
        info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi vitae ipsam quae id ad aliquam. Magni quod ad quidem hic, tempore, mollitia ducimus illo laborum, sunt nisi culpa odio nihil animi exercitationem deserunt!`,
        category: 'horror',
    },
    {
        id: 22,
        img: 'https://m.media-amazon.com/images/I/81m1s4wIPML._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Harry potter and the philosophers stone',
        author: 'harry potter',
        incart: false,
        price: 7,
        info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi vitae ipsam quae id ad aliquam. Magni quod ad quidem hic, tempore, mollitia ducimus illo laborum, sunt nisi culpa odio nihil animi exercitationem deserunt!`,
        category: 'kids',
    },

    {
        id: 4,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/41eD2PjsHgL._AC_SX184_.jpg',
        title: 'Ghost Hunter Gaurav Tiwari',
        author: 'Abhirup Dhar',
        incart: false,
        price: 5,
        info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi vitae ipsam quae id ad aliquam. Magni quod ad quidem hic, tempore, mollitia ducimus illo laborum, sunt nisi culpa odio nihil animi exercitationem deserunt!`,
        category: 'thriller',
    },
    {
        id: 5,
        img: 'https://m.media-amazon.com/images/I/71e9MY-XE9L._AC_UY327_FMwebp_QL65_.jpg',
        title: 'The Blue Umbrella',
        author: 'Ruskin Bond',
        incart: false,
        price: 2,
        info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi vitae ipsam quae id ad aliquam. Magni quod ad quidem hic, tempore, mollitia ducimus illo laborum, sunt nisi culpa odio nihil animi exercitationem deserunt!`,
        category: 'comedy',
    },
    {
        id: 6,
        img: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'The Japanese secret to a long and happy life',
        author: 'Héctor García',
        incart: false,
        price: 15,
        info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi vitae ipsam quae id ad aliquam. Magni quod ad quidem hic, tempore, mollitia ducimus illo laborum, sunt nisi culpa odio nihil animi exercitationem deserunt!`,
        category: 'thriller',
    },
    {
        id: 7,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/41eD2PjsHgL._AC_SX184_.jpg',
        title: 'Ghost Hunter Gaurav Tiwari',
        author: 'Abhirup Dhar',
        incart: false,
        price: 10,
        info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi vitae ipsam quae id ad aliquam. Magni quod ad quidem hic, tempore, mollitia ducimus illo laborum, sunt nisi culpa odio nihil animi exercitationem deserunt!`,
        category: 'comedy',
    },
    {
        id: 8,
        img: 'https://m.media-amazon.com/images/I/71e9MY-XE9L._AC_UY327_FMwebp_QL65_.jpg',
        title: 'The Blue Umbrella',
        author: 'Ruskin Bond',
        incart: false,
        price: 110,
        info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi vitae ipsam quae id ad aliquam. Magni quod ad quidem hic, tempore, mollitia ducimus illo laborum, sunt nisi culpa odio nihil animi exercitationem deserunt!`,
        category: 'horror',
    },
    {
        id: 9,
        img: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'The Japanese secret to a long and happy life',
        author: 'Héctor García',
        incart: false,
        price: 170,
        info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi vitae ipsam quae id ad aliquam. Magni quod ad quidem hic, tempore, mollitia ducimus illo laborum, sunt nisi culpa odio nihil animi exercitationem deserunt!`,
        category: 'comedy',
    },
];

export const links = [
    {
        id: 10,
        url: '/',
        text: 'home',
    },
    {
        id: 11,
        url: '/about',
        text: 'about',
    },
    {
        id: 12,
        url: '/books',
        text: 'Books',
    },
];
// export const social = [
//     {
//         id: 13,
//         url: 'https://www.twitter.com',
//         icon: <FaFacebook />,
//     },
//     {
//         id: 14,
//         url: 'https://www.twitter.com',
//         icon: <FaTwitter />,
//     },
//     {
//         id: 15,
//         url: 'https://www.twitter.com',
//         icon: <FaLinkedin />,
//     },
//     {
//         id: 16,
//         url: 'https://www.twitter.com',
//         icon: <FaBehance />,
//     },
// ];

export const featured = [
    {
        id: 17,
        img: 'https://m.media-amazon.com/images/I/81YucA3YgRL._AC_UY327_FMwebp_QL65_.jpg',
        name: 'Night of the Living Dummy',
        title: 'Gooesbumps'
    },
    {
        id: 18,
        img: 'https://images-eu.ssl-images-amazon.com/images/I/5141XhLj9ZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
        name: 'Charlie and the Chocolate Factory',
        title: 'Roald Dhal'
    },
    {
        id: 19,
        img: 'https://m.media-amazon.com/images/I/81m1s4wIPML._AC_UY327_FMwebp_QL65_.jpg',
        name: 'Harry potter and the philosophers stone',
        title: 'harry potter',
    }
]
