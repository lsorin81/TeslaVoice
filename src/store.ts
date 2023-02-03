type VoiceCommand = {
  command: string;
  description: string;
};

export const voiceCommands: VoiceCommand[] = [
  {
    command: 'Museums',
    description:
      'Brings up a list of museums as possible navigation destinations…',
  },
  {
    command: 'Gas',
    description:
      'Brings up a list of gas stations as possible navigation destinations…',
  },
  {
    command: 'Food',
    description:
      'Brings up a list of restaurants as possible navigation destinations…',
  },
  {
    command: 'Bar',
    description:
      'Brings up a list of local bars as possible navigation destinations…',
  },
  {
    command: 'Enable Life Support',
    description: 'Turns climate control on',
  },
  {
    command: 'Search Google for X',
    description:
      'Opens browser, brings up www.google.com and searches whatever you say after "Search Google"…',
  },
  {command: ' I`m Hot', description: 'decrease temp by 3F…'},
];
