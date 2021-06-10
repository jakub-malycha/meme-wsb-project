const initialState = {
  memes: [
    {
      title: "Mem 1",
      upvotes: 6,
      downvotes: 0,
      img: "https://pbs.twimg.com/media/DtfLYF3XcAERkRB.jpg",
      id: 1,
    },
    {
      title: "Mem 2",
      upvotes: 1,
      downvotes: 8,
      img: "https://i.pinimg.com/originals/b4/00/bb/b400bba24a3ac713c5611facf4376d7e.jpg",
      id: 2,
    },
    {
      title: "Mem 3",
      upvotes: 5,
      downvotes: 23,
      img: "https://i1.wp.com/www.divjot.co/wp-content/uploads/2018/11/1.jpg?resize=600%2C413",
      id: 3,
    },
    {
      title: "Mem 4",
      upvotes: 31,
      downvotes: 12,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMoip-UsqU2kynAUWpgA7_Eta3sU63yzeNMA&usqp=CAU",
      id: 4,
    },
    {
      title: "Mem 5",
      upvotes: 11,
      downvotes: 12,
      img: "https://i1.kwejk.pl/k/obrazki/2021/06/qd4oPbiZzXoZ29GN.jpg",
      id: 5,
    },
    {
      title: "Mem 6",
      upvotes: 6,
      downvotes: 8,
      img: "https://i1.kwejk.pl/k/obrazki/2021/06/cBqp9S5COMu3IruO.jpg",
      id: 6,
    },
    {
      title: "Mem 7",
      upvotes: 21,
      downvotes: 9,
      img: "https://i1.kwejk.pl/k/obrazki/2021/06/lyCrOE66NKAREbno.jpg",
      id: 7,
    },
    {
      title: "Mem 8",
      upvotes: 54,
      downvotes: 23,
      img: "https://i1.kwejk.pl/k/obrazki/2021/01/ip0gbo6rFW68RMJB.jpg",
      id: 8,
    },
    {
      title: "Mem 9",
      upvotes: 31,
      downvotes: 22,
      img: "https://i1.kwejk.pl/k/obrazki/2021/05/0m5F7PFBURHISgXd.jpg",
      id: 9,
    },
    {
      title: "Mem 10",
      upvotes: 11,
      downvotes: 12,
      img: "https://i1.kwejk.pl/k/obrazki/2021/06/ILbYbFpg6QKW1z6Y.jpg",
      id: 10,
    },
  ],
};

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE": {
      return { ...state, memes: action.payload };
    }
    case "UPVOTE": {
      const newMemeList = [...state.memes];
      newMemeList[action.payload].upvotes += 1;
      return { ...state, memes: newMemeList };
    }
    case "DOWNVOTE": {
      const newMemeList = [...state.memes];
      newMemeList[action.payload].downvotes += 1;
      return { ...state, memes: newMemeList };
    }
    default:
      return { ...state };
  }
}

export default globalReducer;
