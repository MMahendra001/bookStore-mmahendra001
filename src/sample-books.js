import { v4 as uuidv4 } from 'uuid';
// This is just some sample data so you don't have to think of your own!
const sampleBooks = [
  {
    id: uuidv4(),
    title: 'The Innovators',
    author: 'Walter Isaacson',
    category: 'Biography',
    ratings: 4.2,
    price: 3000,
    desc:
      'The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution is an overview of the history of computer science and the Digital Revolution.',
    image: '/images/book5.jpg',
  },
  {
    id: uuidv4(),
    title: 'Automic Habits',
    author: 'James Clear',
    category: 'Self help',
    ratings: 4,
    price: 1500,
    desc:
      'James Clear distils the most fundamental information about habit formation, so you can accomplish more by focusing on less.’',
    image: '/images/book2.jpg',
  },
  {
    id: uuidv4(),
    title: 'Zero to One',
    author: 'Peter Thielr',
    category: 'Entrepreneurship',
    ratings: 4.2,
    price: 1200,
    desc: 'Notes on Start Ups, or How to Build the Future.',
    image: '/images/book3.jpg',
  },
  {
    id: uuidv4(),
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    category: 'Biography',
    ratings: 4.5,
    price: 2000,
    desc:
      'Steve Jobs is the authorized self-titled biography of American business magnate and Apple Inc. founder Steve Jobs.',
    image: '/images/book4.jpg',
  },
  {
    id: uuidv4(),
    title: 'Foundation',
    author: 'Isaac Asimov',
    category: 'Science Fiction',
    ratings: 4.6,
    price: 3500,
    desc:
      'Foundation is a science fiction novel by American writer Isaac Asimov. It is the first published in his Foundation Trilogy.',
    image: '/images/book9.jpg',
  },
  {
    id: uuidv4(),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Adventure',
    ratings: 3.9,
    price: 1724,
    desc:
      'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller',
    image: '/images/book1.jpg',
  },
  {
    id: uuidv4(),
    title: 'Sherlock Holmes',
    author: 'Arthur Conan',
    category: 'Detective Fiction',
    ratings: 4,
    price: 700,
    desc:
      'Traditionally, the canon of Sherlock Holmes consists of the 56 short stories and four novels written by Sir Arthur Conan Doyle.',
    image: '/images/book6.jpg',
  },
  {
    id: uuidv4(),
    title: 'Clean Code',
    author: 'Robert Cecil Martin',
    category: 'Software Engineering',
    ratings: 4.4,
    price: 900,
    desc:
      'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees.You’ll be reading code―lots of code.',
    image: '/images/book7.jpg',
  },
  {
    id: uuidv4(),
    title: 'Twilight',
    author: 'Stephenie Meyer',
    category: 'Romance novel',
    ratings: 4.4,
    price: 900,
    desc:
      'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees.You’ll be reading code―lots of code.',
    image: '/images/book8.jpg',
  },
];
export default sampleBooks;
