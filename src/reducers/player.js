import * as PlayerActionTypes from '../actiontypes/player';

const initalState = [
  {
    name: "Arnór Ragnarsson",
    score: 22,
    id: 1,
  },
  {
    name: "Kalli Bjarni",
    score: 13,
    id: 2,
  },
  {
    name: "Beggi í Sóldögg",
    score: 6,
    id: 3,
  },
];

export default function Player(state=initalState, action) {
  switch(action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      return [
        ...state,
        {
          name: action.name,
          score: 0
        }
      ];

    case PlayerActionTypes.REMOVE_PLAYER:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
     return state.map((player, index) => {
       if(index === action.index) {
         return {
           ...player,
           score: player.score + action.score
         };
       }
       return player;
     });

    default:
      return state;
  }
}
