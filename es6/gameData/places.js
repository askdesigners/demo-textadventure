export const dimensions = [4, 4];

export const definitions = [
  {
    position: 'a1',
    name: 'A darkened Room',
    descriptiveName: '',
    level: 0,
    blockedTo: ['w', 'n']
  },
  {
    position: 'a2',
    name: '',
    descriptiveName: '',
    level: 0,
    blockedTo: ['e', 's']
  },
  {
    position: 'a3',
    name: '',
    descriptiveName: '',
    level: 0,
    blockedTo: ['w']
  },
  {
    position: 'a4',
    name: '',
    descriptiveName: '',
    level: 0,
    blockedTo: ['n', 'e']
  },
  {
    position: 'b1',
    name: '',
    descriptiveName: '',
    level: 0,
    blockedTo: ['w', 's'],
    onEnter: (place) => {
      console.log('Im fuggin in here!');
    }
  },
  {
    position: 'b2',
    name: '',
    descriptiveName: '',
    level: 0,
    blockedTo: ['n', 'e'],
    canEnter: (place) => {
      return true;
    }
  },
  {
    position: 'b3',
    name: '',
    descriptiveName: '',
    level: 0,
    blockedTo: ['w', 'e']
  },
  {
    position: 'b4',
    name: '',
    descriptiveName: '',
    level: 0,
    blockedTo: ['w', 's', 'e']
  },
  {
    position: 'c1',
    name: '',
    descriptiveName: '',
    level: 0,
    blockedTo: ['w', 'n', 'e']
  },
  {
    position: 'c2',
    name: '',
    descriptiveName: '',
    level: 0,
    blockedTo: ['w', 's']
  },
  {
    position: 'c3',
    name: '',
    descriptiveName: '',
    level: 0,
    blockedTo: ['s']
  },
  {
    position: 'c4',
    name: '',
    descriptiveName: '',
    level: 0,
    blockedTo: ['n', 'e']
  },
  {
    position: 'd1',
    name: '',
    descriptiveName: '',
    level: 0,
    blockedTo: ['w', 's']
  },
  {
    position: 'd2',
    name: '',
    descriptiveName: '',
    level: 0,
    blockedTo: ['s', 'n']
  },
  {
    position: 'd3',
    name: '',
    descriptiveName: '',
    level: 0,
    blockedTo: ['s', 'n']
  },
  {
    position: 'd4',
    name: '',
    descriptiveName: '',
    level: 0,
    blockedTo: ['s', 'e']
  }
];