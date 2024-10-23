import { Injectable } from '@angular/core';
import Product, { Colors, Status } from '../../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): Product[] {
    return [
      {
        id: 1,
        code: 'PRD456',
        name: 'Air Max Elite',
        title: 'High Performance Running Shoes',
        description:
          'Experience the ultimate comfort and performance with Air Max Elite shoes.',
        details: [
          'Chaussant standard.',
          'Fermeture à lacets.',
          'Tige en mesh.',
          'Doublure textile.',
          'Support Rods system.',
          'Semelle intermédiaire Dreamstrike+.',
          'Poids : 290 g',
          'Drop semelle intermédiaire : 8 mm (talon : 38 mm / avant-pied : 30 mm).',
          'Semelle extérieure Lighttraxion.',
          'Couleur du produit : Solar Red / Carbon / Pulse Lime.',
          'Code du produit : PRD456.',
          'Matière: Cuir.',
          'Poids: 0.5kg.',
          'Couleur: Rouge.',
        ],
        features: [
          'Technologie d’amorti avancée pour un confort durable.',
          'Soutien renforcé à la cheville pour des mouvements stables.',
          'Tissu respirant qui garde les pieds au sec pendant l’entraînement.',
          'Semelle résistante à l’usure pour une traction améliorée sur tout type de terrain.',
        ],
        price: 150,
        category: 'Running Shoes',
        variants: [
          {
            color: Colors.RED,
            sizeStock: [
              { size: '38', stock: 12 },
              { size: '39', stock: 10 },
              { size: '40', stock: 5 },
              { size: '41', stock: 0 },
              { size: '42', stock: 3 },
              { size: '43', stock: 7 },
            ],
          },
          {
            color: Colors.BLUE,
            sizeStock: [
              { size: '39', stock: 4 },
              { size: '40', stock: 0 },
              { size: '41', stock: 9 },
              { size: '42', stock: 5 },
              { size: '43', stock: 1 },
              { size: '44', stock: 1 },
            ],
          },
          {
            color: Colors.BLACK,
            sizeStock: [
              { size: '39', stock: 2 },
              { size: '40', stock: 6 },
              { size: '41', stock: 4 },
              { size: '42', stock: 8 },
              { size: '43', stock: 10 },
              { size: '44', stock: 12 },
              { size: '45', stock: 20 },
            ],
          },
        ],
        image: 'shoes1.png',
        status: Status.INSTOCK,
        discount: 10,
        createdAt: new Date('2023-05-01'),
        updatedAt: new Date('2023-09-15'),
      },
      {
        id: 2,
        code: 'PRD789',
        name: 'Galaxy Run',
        title: 'Lightweight Sports Shoes',
        description: 'Perfect for everyday wear and light sports activities.',
        details: [
          'Chaussant standard.',
          'Fermeture à lacets.',
          'Tige en mesh.',
          'Doublure textile.',
          'Semelle intermédiaire pour confort.',
          'Poids léger pour un usage quotidien.',
          'Couleur: Noir.',
          'Code du produit: PRD789.',
        ],
        features: [
          'Structure légère idéale pour les activités quotidiennes.',
          'Amorti réactif pour une meilleure absorption des chocs.',
          'Matériaux flexibles pour une grande liberté de mouvement.',
          'Semelle extérieure résistante conçue pour une utilisation prolongée.',
        ],
        price: 120,
        category: 'Sports Shoes',
        variants: [
          {
            color: Colors.BLACK,
            sizeStock: [
              { size: '39', stock: 6 },
              { size: '40', stock: 3 },
              { size: '41', stock: 0 },
              { size: '42', stock: 2 },
              { size: '43', stock: 1 },
            ],
          },
          {
            color: Colors.WHITE,
            sizeStock: [
              { size: '39', stock: 10 },
              { size: '40', stock: 8 },
              { size: '41', stock: 6 },
              { size: '42', stock: 5 },
              { size: '43', stock: 4 },
            ],
          },
          {
            color: Colors.ORANGE,
            sizeStock: [
              { size: '39', stock: 10 },
              { size: '40', stock: 8 },
              { size: '41', stock: 6 },
              { size: '42', stock: 5 },
              { size: '43', stock: 4 },
            ],
          },
        ],
        image: 'shoes2.png',
        status: Status.LOWSTOCK,
        discount: 5,
        createdAt: new Date('2023-06-10'),
        updatedAt: new Date('2023-10-01'),
      },
      {
        id: 3,
        code: 'PRD123',
        name: 'Speed Racer Pro',
        title: 'Premium Racing Shoes',
        description:
          'Engineered for speed and durability in competitive racing.',
        details: [
          'Chaussant standard.',
          'Fermeture à lacets.',
          'Conception aérodynamique.',
          'Support accru pour le pied.',
          'Poids : 250 g',
          'Semelle extérieure en caoutchouc pour traction.',
          'Couleur: Rouge et vert.',
          'Code du produit: PRD123.',
        ],
        features: [
          'Design aérodynamique pour maximiser la vitesse.',
          'Semelle ultra légère pour une sensation de rapidité.',
          'Amorti dynamique qui propulse chaque foulée.',
          'Conception ergonomique offrant un ajustement parfait pendant les courses intenses.',
        ],
        price: 200,
        category: 'Racing Shoes',
        variants: [
          {
            color: Colors.PINK,
            sizeStock: [
              { size: '39', stock: 7 },
              { size: '40', stock: 6 },
              { size: '41', stock: 8 },
              { size: '42', stock: 3 },
              { size: '43', stock: 9 },
            ],
          },
          {
            color: Colors.RED,
            sizeStock: [
              { size: '39', stock: 4 },
              { size: '40', stock: 0 },
              { size: '41', stock: 10 },
              { size: '42', stock: 5 },
              { size: '43', stock: 2 },
            ],
          },
          // {
          //   color: Colors.GREEN,
          //   sizeStock: [
          //     { size: '39', stock: 7 },
          //     { size: '40', stock: 6 },
          //     { size: '41', stock: 8 },
          //     { size: '42', stock: 3 },
          //     { size: '43', stock: 9 },
          //   ],
          // },
        ],
        image: 'shoes3.png',
        status: Status.INSTOCK,
        discount: 15,
        createdAt: new Date('2023-04-15'),
        updatedAt: new Date('2023-09-20'),
      },
      {
        id: 4,
        code: 'PRD101',
        name: 'Urban Explorer',
        title: 'Stylish Casual Sneakers',
        description: 'Blend fashion and comfort with these casual sneakers.',
        details: [
          'Chaussant standard.',
          'Fermeture à lacets.',
          'Semelle intérieure rembourrée.',
          'Tige en cuir synthétique.',
          'Poids : léger pour un confort optimal.',
          'Code du produit: PRD101.',
          'Couleur: Gris et noir.',
        ],
        features: [
          'Combinaison de style urbain et confort décontracté.',
          'Semelle intérieure coussinée pour un confort prolongé.',
          'Matériaux synthétiques offrant durabilité et résistance.',
          'Semelle extérieure offrant une adhérence idéale sur les surfaces urbaines.',
        ],
        price: 110,
        category: 'Casual Shoes',
        variants: [
          {
            color: Colors.WHITE,
            sizeStock: [
              { size: '39', stock: 8 },
              { size: '40', stock: 7 },
              { size: '41', stock: 6 },
              { size: '42', stock: 3 },
              { size: '43', stock: 2 },
            ],
          },
          {
            color: Colors.BLACK,
            sizeStock: [
              { size: '39', stock: 5 },
              { size: '40', stock: 3 },
              { size: '41', stock: 4 },
              { size: '42', stock: 7 },
              { size: '43', stock: 1 },
            ],
          },
        ],
        image: 'shoes4.png',
        status: Status.LOWSTOCK,
        createdAt: new Date('2023-03-01'),
        updatedAt: new Date('2023-09-25'),
      },
      {
        id: 5,
        code: 'PRD333',
        name: 'Mountain Hiker X',
        title: 'All-Terrain Hiking Shoes',
        description: 'Perfect for rugged terrains and outdoor adventures.',
        details: [
          'Chaussant standard.',
          'Fermeture à lacets.',
          "Résistant à l'eau.",
          'Semelles renforcées pour durabilité.',
          'Poids : idéal pour les randonnées.',
          'Code du produit: PRD333.',
          'Couleur: Vert et noir.',
        ],
        features: [
          'Semelle renforcée pour une adhérence optimale sur terrains escarpés.',
          'Conception imperméable pour affronter les conditions difficiles.',
          'Soutien accru de la voûte plantaire pour des randonnées longues distances.',
          'Matériaux résistants à l’abrasion pour une durabilité maximale.',
        ],
        price: 180,
        category: 'Hiking Shoes',
        variants: [
          {
            color: Colors.GREEN,
            sizeStock: [
              { size: '39', stock: 6 },
              { size: '40', stock: 0 },
              { size: '41', stock: 5 },
              { size: '42', stock: 7 },
              { size: '43', stock: 3 },
            ],
          },
          {
            color: Colors.BLACK,
            sizeStock: [
              { size: '39', stock: 9 },
              { size: '40', stock: 4 },
              { size: '41', stock: 6 },
              { size: '42', stock: 5 },
              { size: '43', stock: 1 },
            ],
          },
        ],
        image: 'shoes5.png',
        status: Status.INSTOCK,
        createdAt: new Date('2023-07-05'),
        updatedAt: new Date('2023-10-02'),
      },
      {
        id: 6,
        code: 'PRD777',
        name: 'Sprint Runner',
        title: 'Ultimate Speed Sneakers',
        description: 'Designed for sprinters who value speed and agility.',
        details: [
          'Chaussant standard.',
          'Fermeture à lacets.',
          'Conception légère.',
          'Semelle flexible pour un maximum de vitesse.',
          'Poids : 140 g (pointure 42).',
          'Code du produit: PRD777.',
          'Couleur: Jaune fluo.',
        ],
        features: [
          'Semelle conçue pour un rebond rapide et efficace.',
          'Technologie légère qui minimise la fatigue lors des sprints.',
          'Support ajusté pour une stabilité accrue à grande vitesse.',
          'Empeigne en maille respirante pour une aération optimale.',
        ],
        price: 160,
        category: 'Running Shoes',
        variants: [
          {
            color: Colors.WHITE,
            sizeStock: [
              { size: '39', stock: 3 },
              { size: '40', stock: 5 },
              { size: '41', stock: 8 },
              { size: '42', stock: 4 },
              { size: '43', stock: 2 },
            ],
          },
          {
            color: Colors.BLUE,
            sizeStock: [
              { size: '39', stock: 0 },
              { size: '40', stock: 7 },
              { size: '41', stock: 5 },
              { size: '42', stock: 6 },
              { size: '43', stock: 3 },
            ],
          },
        ],
        image: 'shoes1.png',
        status: Status.INSTOCK,
        createdAt: new Date('2023-08-01'),
        updatedAt: new Date('2023-09-15'),
      },
      {
        id: 7,
        code: 'PRD888',
        name: 'Flex Walkers',
        title: 'Comfortable Walking Shoes',
        description: 'Designed for daily comfort and support during walks.',
        details: [
          'Chaussant standard.',
          'Fermeture à lacets.',
          'Semelle intérieure rembourrée.',
          'Matériaux respirants.',
          'Poids léger pour le confort.',
          'Code du produit: PRD888.',
          'Couleur: Beige et marron.',
        ],
        features: [
          'Conception ergonomique pour un confort tout au long de la journée.',
          'Matériaux respirants qui gardent les pieds frais pendant les longues marches.',
          'Semelle flexible facilitant des mouvements naturels.',
          'Amorti supplémentaire pour un confort quotidien.',
        ],
        price: 90,
        category: 'Walking Shoes',
        variants: [
          {
            color: Colors.RED,
            sizeStock: [
              { size: '39', stock: 10 },
              { size: '40', stock: 6 },
              { size: '41', stock: 5 },
              { size: '42', stock: 3 },
              { size: '43', stock: 2 },
            ],
          },
          {
            color: Colors.BLUE,
            sizeStock: [
              { size: '39', stock: 4 },
              { size: '40', stock: 0 },
              { size: '41', stock: 8 },
              { size: '42', stock: 1 },
              { size: '43', stock: 5 },
            ],
          },
        ],
        image: 'shoes2.png',
        status: Status.INSTOCK,
        createdAt: new Date('2023-09-05'),
        updatedAt: new Date('2023-09-20'),
      },
      {
        id: 8,
        code: 'PRD999',
        name: 'Street Style',
        title: 'Trendy Urban Sneakers',
        description: 'Combine style and comfort with these trendy sneakers.',
        details: [
          'Chaussant standard.',
          'Fermeture à lacets.',
          'Design contemporain.',
          'Tige en toile et cuir.',
          'Code du produit: PRD999.',
          'Couleur: Noir et rouge.',
        ],
        features: [
          'Style contemporain avec une touche de modernité urbaine.',
          'Semelle antidérapante pour une meilleure adhérence dans les environnements urbains.',
          'Cuir et toile de qualité pour une durabilité prolongée.',
          'Conception légère et confortable pour une utilisation quotidienne.',
        ],
        price: 125,
        category: 'Casual Shoes',
        variants: [
          {
            color: Colors.RED,
            sizeStock: [
              { size: '39', stock: 5 },
              { size: '40', stock: 3 },
              { size: '41', stock: 0 },
              { size: '42', stock: 2 },
              { size: '43', stock: 6 },
            ],
          },
          {
            color: Colors.BLUE,
            sizeStock: [
              { size: '39', stock: 2 },
              { size: '40', stock: 8 },
              { size: '41', stock: 4 },
              { size: '42', stock: 5 },
              { size: '43', stock: 1 },
            ],
          },
        ],
        image: 'shoes3.png',
        status: Status.LOWSTOCK,
        createdAt: new Date('2023-09-10'),
        updatedAt: new Date('2023-09-25'),
      },
      {
        id: 9,
        code: 'PRD444',
        name: 'Eco Runner',
        title: 'Sustainable Running Shoes',
        description:
          'Crafted from recycled materials for eco-conscious runners.',
        details: [
          "Conception respectueuse de l'environnement.",
          'Fermeture à lacets.',
          'Tige en matériau recyclé.',
          'Semelle en caoutchouc recyclé.',
          'Poids léger pour le confort.',
          'Couleur: Bleu et vert.',
          'Code du produit: PRD444.',
        ],
        features: [
          'Matériaux écologiques fabriqués à partir de ressources recyclées.',
          'Conception légère pour un confort optimal lors de la course.',
          'Amorti durable qui réduit la fatigue sur longues distances.',
          'Semelle en caoutchouc recyclé offrant une excellente adhérence.',
        ],
        price: 130,
        category: 'Running Shoes',
        variants: [
          {
            color: Colors.GREEN,
            sizeStock: [
              { size: '39', stock: 5 },
              { size: '40', stock: 4 },
              { size: '41', stock: 2 },
              { size: '42', stock: 6 },
              { size: '43', stock: 1 },
              { size: '45', stock: 1 },
            ],
          },
          {
            color: Colors.WHITE,
            sizeStock: [
              { size: '39', stock: 9 },
              { size: '40', stock: 8 },
              { size: '41', stock: 7 },
              { size: '42', stock: 4 },
              { size: '43', stock: 2 },
            ],
          },
        ],
        image: 'shoes4.png',
        status: Status.INSTOCK,
        createdAt: new Date('2023-10-01'),
        updatedAt: new Date(),
      },
    ];
  }
}
