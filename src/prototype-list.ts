import { v4 as uuidv4 } from 'uuid';

export interface Developer {
  id: string;
  name: string;
}

export type DevList = Developer[]

export const feDevList = [
  {id: '1', name: 'Chiho Yoon'},
  {id: '2', name: 'John Kim'},
  {id: '3', name: 'Sally Lee'},
  {id: '4', name: 'David Park'},
  {id: '5', name: 'James Min'},
  {id: '6', name: 'Anna An'},
  {id: '7', name: 'Ethan Kim'},
]

export const beDevList = [
  {id: '8', name: 'Francis Kim'},
  {id: '9', name: 'Ted Yoo'},
  {id: '10', name: 'Shavkat'},
  {id: '11', name: 'Jaehyoung Lee'},
  {id: '12', name: 'Jack Min'},
  {id: '13', name: 'Paul'},
  {id: '14', name: 'YNC'},
]


export const feDevs = {
  id: uuidv4(),
  name: 'front-end',
  list: feDevList,
}

export const beDevs = {
  id: uuidv4(),
  name: 'back-end',
  list: feDevList,
}

export const devList = [feDevs, beDevs]
