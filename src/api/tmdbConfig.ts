const tmdbConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "ab8a60c60fd1813653b3b7c93ca1d177",
  originalImage: (imagePath: string | null) =>
    `https://image.tmdb.org/t/p/original/${imagePath}`,
  w500Image: (imagePath: string | null) =>
    `https://image.tmdb.org/t/p/w500/${imagePath}`,
};

export default tmdbConfig;
