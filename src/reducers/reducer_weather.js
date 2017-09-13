import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action){
	switch(action.type) {
		case FETCH_WEATHER:
		/*Never want to mutate state, instead create new array and send*/
			return [ action.payload.data, ...state ]
	}
	return state;
}