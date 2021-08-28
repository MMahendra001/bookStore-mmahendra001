import { v4 as uuidv4 } from 'uuid';
// This is just some sample data so you don't have to think of your own!
const sampleBooks = [
  {
    id: uuidv4(),
    title: 'The Innovators',
    price: 3000,
    image: '/images/book5.jpg',
    author: 'Walter Isaacson',
    category: 'Biography',
    ratings: 4.2,
    desc:
      'The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution is an overview of the history of computer science and the Digital Revolution.',
  },
  {
    id: uuidv4(),
    title: 'Automic Habits',
    price: 1500,
    image: '/images/book2.jpg',
    author: 'James Clear',
    category: 'Self help',
    ratings: 4,
    desc:
      'James Clear distils the most fundamental information about habit formation, so you can accomplish more by focusing on less.’',
  },
  {
    id: uuidv4(),
    title: 'Zero to One',
    price: 1200,
    image: '/images/book3.jpg',
    author: 'Peter Thielr',
    category: 'Entrepreneurship',
    ratings: 4.2,
    desc: 'Notes on Start Ups, or How to Build the Future.',
  },
  {
    id: uuidv4(),
    title: 'Steve Jobs',
    price: 2000,
    image: '/images/book4.jpg',
    author: 'Walter Isaacson',
    category: 'Biography',
    ratings: 4.5,
    desc:
      'Steve Jobs is the authorized self-titled biography of American business magnate and Apple Inc. founder Steve Jobs.',
  },
  {
    id: uuidv4(),
    title: 'Foundation',
    price: 3500,
    image: '/images/book9.jpg',
    author: 'Isaac Asimov',
    category: 'Science Fiction',
    ratings: 4.6,
    desc:
      'Foundation is a science fiction novel by American writer Isaac Asimov. It is the first published in his Foundation Trilogy.',
  },
  {
    id: uuidv4(),
    title: 'The Alchemist',
    price: 1724,
    image: '/images/book1.jpg',
    author: 'Paulo Coelho',
    category: 'Adventure',
    ratings: 3.9,
    desc:
      'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller',
  },
  {
    id: uuidv4(),
    title: 'Sherlock Holmes',
    price: 700,
    image: '/images/book6.jpg',
    author: 'Arthur Conan',
    category: 'Detective Fiction',
    ratings: 4,
    desc:
      'Traditionally, the canon of Sherlock Holmes consists of the 56 short stories and four novels written by Sir Arthur Conan Doyle.',
  },
  {
    id: uuidv4(),
    title: 'Clean Code',
    price: 900,
    image: '/images/book7.jpg',
    author: 'Robert Cecil Martin',
    category: 'Software Engineering',
    ratings: 4.4,
    desc:
      'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees.You’ll be reading code―lots of code.',
  },
  {
    id: uuidv4(),
    title: 'Twilight',
    price: 900,
    image: '/images/book8.jpg',
    author: 'Stephenie Meyer',
    category: 'Romance novel',
    ratings: 4.4,
    desc:
      'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees.You’ll be reading code―lots of code.',
  },
];
export default sampleBooks;
