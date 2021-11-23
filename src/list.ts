export interface DataElement {
  id: string;
  content: string;
}

export type List = DataElement[]

export const elements = [
  { id: '1', content: '호랑이'},
  { id: '2', content: '코끼리'},
  { id: '3', content: '조랑말'},
  { id: '4', content: '얼룩말'},
  { id: '5', content: '고양이'},
  { id: '6', content: '강아지'},
  { id: '7', content: '병아리'},
  { id: '8', content: '늑대'},
]