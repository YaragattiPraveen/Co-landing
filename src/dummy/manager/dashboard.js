const activeLoggers = [
  {
    id: '1',
    name: 'TAG 83D5',
    points: 1.2,
    time: '3 minutes ago',
    up: -3.2,
    down: -11.2,
    equal: -10.9,
  },
  {
    id: '2',
    name: 'TAG 33G8',
    points: 1.3,
    time: '4 hours ago',
    up: -3.2,
    down: -11.2,
    equal: -10.9,
  },
  {
    id: '3',
    name: 'TAG 95G4',
    points: 2.4,
    time: 'Yesterday - 18:40:01',
    up: -3.2,
    down: -11.2,
    equal: -10.9,
  },
  {
    id: '4',
    name: 'VT 9c23',
    points: -10.9,
    time: '02.04.22 - 18:40:01',
    up: -3.2,
    down: -11.2,
    equal: -10.9,
  },
  {
    id: '5',
    name: 'VT 9c23',
    points: 1.2,
    time: '3 minutes ago',
    up: -3.2,
    down: -11.2,
    equal: -10.9,
  },
]

const activeAlerts = [
  {
    id: '1',
    mission: 'TAG 83D5',
    problem: 'Accident',
  },
  {
    id: '2',
    mission: 'TAG 33G8',
    problem: 'Punctured',
  },
  {
    id: '3',
    mission: 'TAG 95G4',
    problem: 'Break down',
  },
  {
    id: '4',
    mission: 'VT 9c23',
    problem: 'Accident',
  },
  {
    id: '5',
    mission: 'TAG 3TG3',
    problem: 'Break down',
  },
]

export {
  activeAlerts,
  activeLoggers,
}