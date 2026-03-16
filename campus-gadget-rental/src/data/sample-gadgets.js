export const sampleGadgets = [
    {
        id: "1", name: 'MacBook Pro 14"', category: "Laptops",
        price_per_day: 800, deposit: 15000, condition: "Excellent", rating: 4.8, reviews: 24,
        images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80"],
        description: "M2 Pro chip, 16GB RAM, 512GB SSD. Perfect for heavy dev work or video editing.",
        owner: "Arjun R.", available: true,
        location: "JNTU College of Engineering, Kakinada", lat: 16.9891, lng: 82.2475,
    },
    {
        id: "2", name: "Canon EOS R50", category: "Cameras",
        price_per_day: 600, deposit: 10000, condition: "Good", rating: 4.6, reviews: 17,
        images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80"],
        description: "Mirrorless camera with 24.2MP sensor. Includes 18-45mm kit lens.",
        owner: "Priya S.", available: true,
        location: "Andhra University, Visakhapatnam", lat: 17.7231, lng: 83.3012,
    },
    {
        id: "3", name: 'iPad Pro 12.9"', category: "Tablets",
        price_per_day: 500, deposit: 8000, condition: "Excellent", rating: 4.9, reviews: 31,
        images: ["https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80"],
        description: "M2 chip with Apple Pencil 2nd gen included. Great for design and presentations.",
        owner: "Kavya M.", available: true,
        location: "SRM University, Amaravati", lat: 16.5062, lng: 80.6480,
    },
    {
        id: "4", name: "DJI Mini 3 Drone", category: "Drones",
        price_per_day: 1200, deposit: 20000, condition: "Good", rating: 4.7, reviews: 12,
        images: ["https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80"],
        description: "4K/60fps video, 38-min flight time. Includes 2 batteries and carrying case.",
        owner: "Sai T.", available: false,
        location: "VIT-AP University, Amaravati", lat: 16.4700, lng: 80.6200,
    },
    {
        id: "5", name: "Sony WH-1000XM5", category: "Audio",
        price_per_day: 250, deposit: 3500, condition: "Excellent", rating: 4.9, reviews: 45,
        images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"],
        description: "Industry-leading noise cancellation. 30-hour battery life.",
        owner: "Meghana R.", available: true,
        location: "RGUKT Nuzvid, Krishna District", lat: 16.7850, lng: 80.8450,
    },
    {
        id: "6", name: "Raspberry Pi 4 Kit", category: "Electronics",
        price_per_day: 150, deposit: 2500, condition: "Good", rating: 4.5, reviews: 8,
        images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"],
        description: "4GB RAM model with case, power supply, and 32GB SD card preloaded with Raspbian.",
        owner: "Charan L.", available: true,
        location: "NIT Warangal (AP Campus), Tirupati", lat: 13.6288, lng: 79.4192,
    },
    {
        id: "7", name: "Oculus Quest 2", category: "VR/AR",
        price_per_day: 700, deposit: 7000, condition: "Good", rating: 4.4, reviews: 19,
        images: ["https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&q=80"],
        description: "128GB storage. Includes controllers and charging dock.",
        owner: "Nithya P.", available: true,
        location: "Sri Venkateswara University, Tirupati", lat: 13.6340, lng: 79.4100,
    },
    {
        id: "8", name: "Portable Projector", category: "Electronics",
        price_per_day: 400, deposit: 5000, condition: "Excellent", rating: 4.3, reviews: 10,
        images: ["https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80"],
        description: "1080p, 300 ANSI lumens. Wireless screen mirroring. Great for movie nights.",
        owner: "Tarun W.", available: true,
        location: "GITAM University, Visakhapatnam", lat: 17.7340, lng: 83.3200,
    },
];

export const categories = ["All", "Laptops", "Cameras", "Tablets", "Drones", "Audio", "Electronics", "VR/AR"];

// Helper — format any number as Indian Rupees
export function inr(amount) {
    return "₹" + Number(amount).toLocaleString("en-IN");
}
