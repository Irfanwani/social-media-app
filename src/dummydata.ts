export default [
  {
    id: 1,
    name: 'Irfan wani',
    image:
      'https://media.gettyimages.com/id/487818021/photo/sunlight-shining-through-the-conifer-trees-in-stockhill-forest-near-wells-august-1-2013.jpg?s=612x612&w=0&k=20&c=B4bS7tfKoiSzHpqbFvp5-LFFC0TqwtfF7Vj3Dr3y91A=',
    post: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__480.jpg',
    description: 'Picture of Nature.',
    likecount: 0,
  },
  {
    id: 2,
    name: 'cristiano',
    image:
      'https://media.gettyimages.com/id/1235184166/photo/topshot-manchester-uniteds-portuguese-striker-cristiano-ronaldo-celebrates-after-scoring.jpg?s=612x612&w=0&k=20&c=-lAPrm6qwNxaZhXbTf-uI5tN7ZcQyMe9oxT8u6g4cvE=',
    post: 'https://media.gettyimages.com/id/962792890/photo/cristiano-ronaldo-of-real-madrid-lifts-the-uefa-champions-league-trophy-following-his-sides.jpg?s=612x612&w=0&k=20&c=PKU_YTjKNqtHebfmAaLnsQIe8heoIdFuG5vhBqHlwNk=',
    description: 'cristiano Ronaldo here',
    likecount: 0,
  },
  {
    id: 3,
    name: 'Khabib',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45up1avHmA6bpAfBqLkTAbukE7iIhONeWsg&usqp=CAU',
    post: 'https://media.gettyimages.com/id/1050069500/photo/ufc-lightweight-champion-khabib-nurmagomedov-poses-during-a-ceremonial-weigh-in-for-ufc-229.jpg?s=612x612&w=0&k=20&c=1Bve6l8TR9SNxeprPir2tp6svSQSxlSTf-z3PYgkmu0=',
    description: 'Khabib Nurmagomedov',
    likecount: 0,
  },
];

export type datatype = {
  id: number;
  name: string;
  image: string;
  post: string;
  description: string;
  likecount: number;
};
