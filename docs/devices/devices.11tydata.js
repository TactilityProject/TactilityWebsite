// Applies to every device page in this folder
export default {
  layout: "device",
  tags: "device",
  eleventyComputed: {
    description: (data) =>
      data.description || `Tactility on the ${data.title}: supported features, known issues and links.`,
  },
};
