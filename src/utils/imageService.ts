
// API for getting random fantasy character images
const UNSPLASH_API = "https://source.unsplash.com/featured/300x300/?fantasy,tiefling,demon,devil,character";
const FANTASY_IMAGES = [
  "/tiefling1.jpg",
  "/tiefling2.jpg",
  "/tiefling3.jpg",
  "/tiefling4.jpg",
  "/tiefling5.jpg",
];

// Get a random image from the API or local fallback
export const getRandomImage = async (): Promise<string> => {
  try {
    // Try to fetch from Unsplash
    const response = await fetch(UNSPLASH_API);
    if (response.ok) {
      return response.url;
    }
    // If fetch fails, use local image
    return getLocalImage();
  } catch (error) {
    // If fetch fails, use local image
    return getLocalImage();
  }
};

// Get a random local image as fallback
const getLocalImage = (): string => {
  const randomIndex = Math.floor(Math.random() * FANTASY_IMAGES.length);
  return FANTASY_IMAGES[randomIndex];
};

// Get a specific number of random images
export const getMultipleRandomImages = async (count: number): Promise<string[]> => {
  const images: string[] = [];
  
  for (let i = 0; i < count; i++) {
    // Add a slight delay between requests to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
    const image = await getRandomImage();
    images.push(image);
  }
  
  return images;
};
