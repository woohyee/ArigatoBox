'use client';
import { useState, useEffect } from 'react';

type MenuItem = {
  number?: string;
  name: string;
  description?: string;
  price: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const menu: MenuSection[] = [
  {
    title: 'APPETIZERS',
    items: [
      { name: 'Miso Soup', price: '$2.00' },
      { name: 'Rice', price: '$2.00' },
      { name: 'Wonton Soup', description: 'Dumpling 4pcs', price: '$6.00' },
      { name: 'Green Salad', price: '$7.00' },
      { name: 'Edamame', price: 'SMALL $4.00 LARGE $6.00' },
      {
        name: 'Takoyaki',
        description: 'Baked Octopus Ball (6pcs)',
        price: '$8.00',
      },
      { name: 'Okonomiyaki', description: 'Japanese Pancake', price: '$10.00' },
      { name: 'Tempura', price: 'SMALL $6.00 LARGE $10.00' },
    ],
  },
  {
    title: 'PARTY TRAYS',
    items: [
      {
        number: 'A1',
        name: 'Sushi & Roll Tray (48pcs)',
        description:
          'Assorted Sushi 16pcs & Roll 32pcs (Dynamite, California, Spicy Crab)',
        price: '$40.00',
      },
      {
        number: 'A2',
        name: 'Sushi & Roll Tray (52pcs)',
        description:
          'Assorted Sushi 20pcs & Roll 32pcs (Dynamite, California, Alaska)',
        price: '$45.00',
      },
      {
        number: 'A3',
        name: 'Sushi & Roll Tray (80pcs)',
        description:
          'Assorted Sushi 30pcs & Roll 50pcs (Dynamite, California, Alaska, Spicy Crab, Arigato, Yam)',
        price: '$75.00',
      },
      {
        number: 'A4',
        name: 'Sushi & Roll Tray (90pcs)',
        description:
          'Assorted Sushi 40pcs & Roll 50pcs (Dynamite, California, Alaska, Spicy Crab, Salmon, Yam)',
        price: '$80.00',
      },
      {
        number: 'A7',
        name: 'Roll Tray (60pcs)',
        description:
          'California, Alaska, Crab, Spicy Crab, Salmon, Arigato, Cucumber, Yam',
        price: '$55.00',
      },
      {
        number: 'A9',
        name: 'Sushi, Sashimi & Roll Tray (51pcs)',
        description:
          'Assorted Sushi 12pcs, Assorted Sashimi 15pcs & Roll 24pcs (California, Alaska, Spicy Crab)',
        price: '$65.00',
      },
      {
        number: 'A10',
        name: 'Sushi, Sashimi & Roll Tray (84pcs)',
        description:
          'Assorted Sushi 20pcs, Assorted Sashimi 20pcs & Roll 44pcs (Dynamite, California, Alaska, Spicy Crab, Arigato)',
        price: '$85.00',
      },
    ],
  },
  {
    title: 'BENTO BOXES',
    items: [
      {
        number: 'B1',
        name: 'BBQ Eel Bento',
        description: 'BBQ Eel, Sushi, Rice, Tempura & California Roll',
        price: '$15.00',
      },
      {
        number: 'B2',
        name: 'Sushi Bento',
        description: 'Sashimi, Sushi, Tempura & California Roll',
        price: '$18.00',
      },
      {
        number: 'B3',
        name: 'Chicken Teriyaki & Sushi Bento',
        description: 'Chicken Teriyaki, Sushi, Rice, Tempura & California Roll',
        price: '$14.00',
      },
      {
        number: 'B4',
        name: 'Veggie Bento',
        description:
          'Fried Tofu, Rice, Veggie Mandoo, Yam Tempura, Kappa Roll & Salad',
        price: '$14.00',
      },
      {
        number: 'B5',
        name: 'Bulgogi & Sushi Bento',
        description: 'Beef Bulgogi, Sushi, Rice & Tempura',
        price: '$16.00',
      },
      {
        number: 'B6',
        name: 'Chicken Teriyaki & Sashimi Bento',
        description:
          'Chicken Teriyaki, Sashimi, Rice, Yaki Mandoo & California Roll',
        price: '$18.00',
      },
      {
        number: 'B7',
        name: 'Salmon Teriyaki Bento',
        description:
          'Salmon Teriyaki, Rice, Yaki Mandoo, California Roll & Salad',
        price: '$16.00',
      },
      {
        number: 'B8',
        name: 'Tempura Bento',
        description: 'Tempura, Yaki Mandoo, Kappa Roll & California Roll',
        price: '$15.00',
      },
      {
        number: 'B9',
        name: 'Fish Katsu Bento',
        description: 'Fish Katsu, Yaki Mandoo, California Roll & Salad',
        price: '$15.00',
      },
      {
        number: 'B10',
        name: 'Beef Tariyaki Bento',
        description: 'Beef Teriyaki, Sushi, Rice, Tempura & California Roll',
        price: '$16.00',
      },
      {
        number: 'B11',
        name: 'Donkatsu Bento',
        description:
          'Chicken Donkatsu, Rice, Yaki Mandoo, California Roll & Salad',
        price: '$14.00',
      },
      {
        number: 'B12',
        name: 'Spicy Pork Bento',
        description: 'Spicy Pork, Rice, Yaki Mandoo, California Roll & Salad',
        price: '$14.00',
      },
      {
        number: 'B13',
        name: 'Bulgogi & Roll Bento',
        description: 'Beef Bulgogi, Rice, Yaki Mandoo, California Roll & Salad',
        price: '$15.00',
      },
      {
        number: 'B14',
        name: 'Chicken Teriyaki & Salad Bento',
        description:
          'Chicken Teriyaki, Rice, Yaki Mandoo, California Roll & Salad',
        price: '$14.00',
      },
      {
        number: 'B15',
        name: 'Galbi Bento',
        description: 'Galbi BBQ, Rice, Yaki Mandoo, California Roll & Salad',
        price: '$17.00',
      },
    ],
  },
  {
    title: 'SUSHI & SASHIMI',
    items: [
      { number: '#1', name: 'Salmon Sushi (11pcs)', price: '$17.00' },
      { number: '#2', name: 'Assorted Sushi (11pcs)', price: '$14.00' },
      { number: '#3', name: 'Assorted Sushi (15pcs)', price: '$19.00' },
      { number: '#5', name: 'Sushi & Roll (13pcs)', price: '$14.00' },
      { number: '#6', name: 'Sushi & Roll (19pcs)', price: '$17.00' },
      { number: '#7', name: 'Salmon Sashimi (11pcs)', price: '$22.00' },
      { number: '#8', name: 'Assorted Sashimi (11pcs)', price: '$22.00' },
      { number: '#10', name: 'Sashimi & Roll (20pcs)', price: '$19.00' },
      { number: '#12', name: 'Sushi, Sashimi & Roll (20pcs)', price: '$23.00' },
      { number: '#13', name: 'Sushi & Sashimi (16pcs)', price: '$23.00' },
    ],
  },
  {
    title: 'SPECIAL ROLLS (14PCS)',
    items: [
      {
        number: '#14',
        name: 'Dynamite Roll',
        description: 'Shrimp Tempura, Crab Meat, Avocado & Cucumber',
        price: '$12.00',
      },
      {
        number: '#15',
        name: 'Spider Roll',
        description:
          'Deep Fried Soft Shell Crab, Crab Meat, Avocado & Cucumber',
        price: '$14.00',
      },
      {
        number: '#16',
        name: 'Green Dragon Roll',
        description: 'Dynamite Roll Topped with Avocado',
        price: '$14.00',
      },
      {
        number: '#17',
        name: 'Red Dragon Roll',
        description: 'Dynamite Roll Topped with Salmon',
        price: '$14.00',
      },
      {
        number: '#18',
        name: 'Philadelphia Roll',
        description:
          'Cream Cheese, Smoked Salmon, Crab Meat, Avocado, Cucumber',
        price: '$14.00',
      },
      {
        number: '#19',
        name: 'Black Dragon Roll',
        description: 'Dynamite Roll Topped with BBQ Eel & Avocado',
        price: '$15.00',
      },
      {
        number: '#20',
        name: 'Spicy Salmon DD Roll',
        description: 'Spicy Salmon Roll Topped with Salmon',
        price: '$14.00',
      },
      {
        number: '#21',
        name: 'Spicy Green Dragon Roll',
        description: 'Spicy Salmon Roll Topped with Avocado',
        price: '$14.00',
      },
      {
        number: '#22',
        name: 'Spicy Philadelphia Roll',
        description:
          'Spicy Salmon, Cream Cheese & Avocado Roll Topped with Smoked Salmon',
        price: '$15.00',
      },
      {
        number: '#24',
        name: 'Spicy Tuna Salmon Dragon Roll',
        description: 'Spicy Tuna Roll Topped with Tuna & Salmon',
        price: '$15.00',
      },
      {
        number: '#25',
        name: 'Spicy Tuna DD Roll',
        description: 'Spicy Tuna Roll Topped with Tuna',
        price: '$15.00',
      },
      {
        number: '#26',
        name: 'Kamikaze Roll',
        description: 'Dynamite Roll Topped with Spicy Salmon',
        price: '$14.00',
      },
    ],
  },
  {
    title: 'VEGETABLE ROLLS',
    items: [
      {
        number: '#27',
        name: 'Yam Dynamite Roll (13pcs)',
        description: 'Yam Tempura, Avocado & Cucumber',
        price: '$11.00',
      },
      {
        number: '#28',
        name: 'Yam Green Dragon Roll (13pcs)',
        description: 'Yam Dynamite Roll Topped with Avocado',
        price: '$12.00',
      },
      {
        number: '#29',
        name: 'Kappa Roll (6pcs)',
        description: 'Cucumber',
        price: '$5.00',
      },
      {
        number: '#30',
        name: 'Avocado Roll (6pcs)',
        description: 'Avocado',
        price: '$6.00',
      },
      {
        number: '#32',
        name: 'Arigato Roll (6pcs)',
        description: 'Avocado & Cucumber',
        price: '$6.00',
      },
    ],
  },
  {
    title: 'ROLLS',
    items: [
      {
        number: '#34',
        name: 'California Roll',
        description: 'Crab Meat, Avocado & Cucumber',
        price: '$6.00',
      },
      { number: '#35', name: 'Salmon Roll', price: '$6.50' },
      { number: '#36', name: 'Spicy Salmon Roll', price: '$6.50' },
      { number: '#37', name: 'Crab Roll', price: '$6.00' },
      { number: '#38', name: 'Spicy Crab Roll', price: '$5.50' },
      {
        number: '#39',
        name: 'Alaska Roll',
        description: 'Salmon & Avocado',
        price: '$6.50',
      },
      { number: '#40', name: 'Tuna Roll', price: '$7.00' },
      { number: '#41', name: 'Spicy Tuna Roll', price: '$6.50' },
      { number: '#42', name: 'BBQ Eel Roll', price: '$7.00' },
    ],
  },
  {
    title: 'DISHES',
    items: [
      {
        number: '#43',
        name: 'Chicken Teriyaki',
        description: 'Includes Rice',
        price: '$10.00',
      },
      {
        number: '#44',
        name: 'Beef Teriyaki',
        description: 'Includes Rice',
        price: '$13.00',
      },
      {
        number: '#45',
        name: 'Bulgogi Shabu Shabu',
        description:
          'Marinated Beef, Korean Glass Noodle, Vegetables in Soup & Rice',
        price: '$13.00',
      },
      {
        number: '#46',
        name: 'Galbi BBQ',
        description: 'Marinated Beef Ribs & Rice',
        price: '$18.00',
      },
      {
        number: '#47',
        name: 'Tonkatsu',
        description: 'Breaded Chicken & Rice',
        price: '$12.00',
      },
      {
        number: '#48',
        name: 'Bulgogi Sizzling',
        description: 'Sliced Beef Marinated in Korean Special Sauce & Rice',
        price: '$16.00',
      },
      {
        number: '#49',
        name: 'Spicy Pork Sizzling',
        description: 'Pork, Vegetables in Special Spicy Sauce & Rice',
        price: '$13.00',
      },
      {
        number: '#50',
        name: 'Bibimbap',
        description: 'Seasonal Vegetables, Beef & Egg on Rice with Spicy Sauce',
        price: '$13.50',
      },
      {
        number: '#51',
        name: 'Bibimbap & Galibi BBQ',
        description: 'Bibimbap & Marinated Beef Ribs',
        price: '$16.50',
      },
      {
        number: '#52',
        name: 'Yaki Mandoo (6pcs)',
        description: 'Beef Deep Fried Dumplings',
        price: '$7.00',
      },
      {
        number: '#53',
        name: 'Soon Tofu Soup',
        description:
          'Soft Tofu, Vegetables, Egg in Spicy Soup & Rice. Choice of Seafood or Meat',
        price: '$13.00',
      },
      {
        number: '#54',
        name: 'PorkBone Soup',
        description:
          'Pork Spine, Vegetables, Potatoes in Spicy Korean Soup & Rice',
        price: '$13.00',
      },
    ],
  },
  {
    title: 'NOODLES',
    items: [
      {
        number: '#56',
        name: 'U-Dong',
        description: 'Thick Noodles in Soup',
        price: '$8.00',
      },
      {
        number: '#57',
        name: 'Tempura U-Dong',
        description: 'U-Dong with Assorted Tempura',
        price: '$12.50',
      },
      { number: '#58', name: 'Seafood U-Dong', price: '$12.00' },
      { number: '#59', name: 'Beef U-Dong', price: '$12.50' },
      { number: '#60', name: 'Katsu U-Dong', price: '$12.00' },
      {
        number: '#61',
        name: 'Chicken Yaki U-Dong',
        description: 'Stir Fried Noodle with Chicken & Vegetables',
        price: '$12.00',
      },
      {
        number: '#62',
        name: 'Beef Yaki U-Dong',
        description: 'Stir Fried Noodle with Beef & Vegetables',
        price: '$14.00',
      },
    ],
  },
];

export default function ResponsiveMenu() {
  return (
    <div className="max-w-4xl mx-auto">
      {menu.map((section, index) => (
        <div key={section.title} className="mb-4">
          <h2 className="text-2xl font-bold mb-3 text-yellow-400">
            {section.title}
          </h2>
          {section.items.map((item) => (
            <div key={item.name} className="mb-2">
              <div className="flex justify-between">
                <h3 className="text-base font-semibold">
                  {section.title === 'APPETIZERS' ? (
                    item.name
                  ) : (
                    <>
                      <span className="text-orange-400">{item.number}</span>.{' '}
                      {item.name}
                    </>
                  )}
                </h3>
                <span className="text-base">{item.price}</span>
              </div>
              {item.description && (
                <p className="text-sm text-gray-400">{item.description}</p>
              )}
            </div>
          ))}
          <p className="text-yellow-400 mt-4 mb-1 text-center text-[10px]">
            If you have any food allergies, please inform our staff.
          </p>
          {index < menu.length - 1 && <hr className="border-gray-600 mt-2" />}
        </div>
      ))}
    </div>
  );
}
