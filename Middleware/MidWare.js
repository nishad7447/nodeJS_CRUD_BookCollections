import Book from '../Model/BookSchema.js';

export const insertSomeBooks = async (req, res, next) => {
  try {
    // Check if data already exists in the database
    const count = await Book.countDocuments();
    if (count > 0) {
      console.log('Data already exists');
      next();
    } else {
      const books = [
        {
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          genre: 'Classic',
          description: 'A story of the Jazz Age and the American Dream.',
          publishedDate: '1925-04-10',
          price: 1099,
          imageUrl: 'https://example.com/book1.jpg',
          slug: 'the-great-gatsby', // Add slug for Book 1
        },
        {
          title: 'To Kill a Mockingbird',
          author: 'Harper Lee',
          genre: 'Classic',
          description: 'A novel about racial injustice and the loss of innocence.',
          publishedDate: '1960-07-11',
          price: 1299,
          imageUrl: 'https://example.com/book2.jpg',
          slug: 'to-kill-a-mockingbird', // Add slug for Book 2
        },
      ];
      

      // Seed the books into the database
      await Book.insertMany(books);
      console.log('Data seeded successfully');
      next();
    }
  } catch (error) {
    console.error('Error seeding data:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
