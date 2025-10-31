export const programmingResources: Resource[] = [
  // Languages
  { id: '1', name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', category: 'Languages' },
  { id: '2', name: 'TypeScript', url: 'https://www.typescriptlang.org/docs/', category: 'Languages' },
  { id: '3', name: 'Python', url: 'https://docs.python.org/3/', category: 'Languages' },
  { id: '4', name: 'Java', url: 'https://docs.oracle.com/javase/8/docs/api/', category: 'Languages' },
  { id: '5', name: 'C++', url: 'https://isocpp.org/', category: 'Languages' },
  { id: '6', name: 'Go', url: 'https://golang.org/doc/', category: 'Languages' },
  { id: '7', name: 'Rust', url: 'https://doc.rust-lang.org/book/', category: 'Languages' },
  
  // Frameworks
  { id: '8', name: 'React', url: 'https://reactjs.org/docs/getting-started.html', category: 'Frameworks' },
  { id: '9', name: 'Next.js', url: 'https://nextjs.org/docs', category: 'Frameworks' },
  { id: '10', name: 'Vue.js', url: 'https://vuejs.org/guide/', category: 'Frameworks' },
  { id: '11', name: 'Angular', url: 'https://angular.io/docs', category: 'Frameworks' },
  { id: '12', name: 'Express.js', url: 'https://expressjs.com/', category: 'Frameworks' },
  { id: '13', name: 'Django', url: 'https://docs.djangoproject.com/', category: 'Frameworks' },
  
  // Tools
  { id: '14', name: 'Git', url: 'https://git-scm.com/doc', category: 'Tools' },
  { id: '15', name: 'Docker', url: 'https://docs.docker.com/', category: 'Tools' },
  { id: '16', name: 'VS Code', url: 'https://code.visualstudio.com/docs', category: 'Tools' },
  { id: '17', name: 'Webpack', url: 'https://webpack.js.org/concepts/', category: 'Tools' },
];

export const dsaProblems = [
  {
    id: '1',
    title: 'Two Sum',
    difficulty: 'Easy',
    leetcode: 'https://leetcode.com/problems/two-sum/',
    gfg: 'https://www.geeksforgeeks.org/given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x/',
    category: 'Arrays'
  },
  {
    id: '2',
    title: 'Reverse Linked List',
    difficulty: 'Easy',
    leetcode: 'https://leetcode.com/problems/reverse-linked-list/',
    gfg: 'https://www.geeksforgeeks.org/reverse-a-linked-list/',
    category: 'Linked List'
  },
  {
    id: '3',
    title: 'Binary Tree Inorder Traversal',
    difficulty: 'Easy',
    leetcode: 'https://leetcode.com/problems/binary-tree-inorder-traversal/',
    gfg: 'https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/',
    category: 'Trees'
  },
];

export const facts: FactCard[] = [
  {
    id: '1',
    title: 'JavaScript Fun Fact',
    description: 'JavaScript was created in just 10 days by Brendan Eich in 1995.',
    icon: '💡',
    language: 'JavaScript'
  },
  {
    id: '2',
    title: 'Python Philosophy',
    description: 'Python follows the Zen of Python, which includes "Beautiful is better than ugly."',
    icon: '🐍',
    language: 'Python'
  },
  {
    id: '3',
    title: 'TypeScript Growth',
    description: 'TypeScript usage grew by 78% in 2022 according to Stack Overflow survey.',
    icon: '🔷',
    language: 'TypeScript'
  },
  {
    id: '4',
    title: 'Rust Memory Safety',
    description: 'Rust guarantees memory safety without garbage collection using its ownership system.',
    icon: '🦀',
    language: 'Rust'
  },
  {
    id: '5',
    title: 'Go Concurrency',
    description: 'Go was designed with concurrency in mind, featuring goroutines and channels.',
    icon: '⚡',
    language: 'Go'
  },
];