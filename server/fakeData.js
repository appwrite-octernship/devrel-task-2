const fs = require('fs');
const todoList = [];

// Title generator function
function generateTitle() {
  const titles = ['Buy groceries', 
  'Clean the house', 
  'Pay bills', 
  'Call a friend', 'Go for a run', 'Write a blog post', 
  'Fix the car', 'Read a book', 'Learn a new skill', 'Watch a movie',
    'Play sports',
    'Go to the gym',
    'Go to the beach',
    'Go to the park',
    'Go to the mall',
    'Go to the zoo',
    'Go to the museum',
    'Go to the library',
    'Call a friend',
    'Go to the movies',
    'Go to the concert',
    'Go to the opera',
    'Go to the theater',
    'Go to the circus',
    'Go to the amusement park',
    'Go to the fair',
    'Feed the dog',
    'Feed the cat',
    'Feed the fish',
    'Feed the bird',
    'Feed the hamster',
    'Feed the rabbit',
    'Feed the guinea pig',
    'Feed the turtle',
    'Feed the snake',
    'Feed the lizard',
    'Feed the frog',
    'Feed the mouse',
    'Solve a puzzle',
    'Play a game',
    'Play a board game',
    'Play a card game',
    'Play a video game',
    'Play a computer game',
    'Play a mobile game',
    'Play a console game',
];
  return titles[Math.floor(Math.random() * titles.length)];
}

// Description generator function
function generateDescription() {
  const descriptions = ['Get milk, bread, and eggs from the store', 
  'Vacuum the living room and scrub the kitchen floor', 
  'Pay rent, electricity, and internet bills', 
  'Catch up with an old friend over the phone', 'Run 5k in under 30 minutes', 
  'Write about your favorite hobby or interest', 
  'Change the oil, replace the brake pads', 
  'Read a novel or a non-fiction book', 
  'Learn how to play guitar or code in JavaScript', 
  'Watch an action, comedy, or drama movie',
  'Play soccer, basketball, or tennis',
  'Do 20 push-ups, 20 sit-ups, and 20 squats',
  'Go swimming, surfing, or boating',
  'Go for a walk, a picnic, or a hike',
  'Go shopping, window shopping, or people watching', 
  'Go to the zoo and see the animals',
  'Go to the museum and see the art',
  'Go to the library and read a book',
  'Call a friend and catch up',
  'Go to the movies and watch a movie',
  'Go to the concert and listen to music',
  'Learn to play an instrument',
  'Go to the opera and watch a performance',
  'Go to the theater and watch a play',
  'Go to the circus and watch the performers',
  'Go to the amusement park and ride the rides',
  'Go to the fair and play the games',
  'Feed the dog and give him a treat',
  'Feed the cat and give her a treat',
  'Feed the fish and give him a treat',
  'Feed the bird and give him a treat',
  'Feed the hamster and give him a treat',
];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

for (let i = 0; i < 1000; i++) {
  const todo = {
    id: `${i + 1}`,
    title: generateTitle(),
    description: generateDescription(),
  };
  todoList.push(todo);
}

fs.writeFile('todoList.json', JSON.stringify(todoList), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
