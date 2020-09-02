import { RECEIVE_QUESTIONS, ADD_ANSWER } from '../actions/questions';


export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS : 
            return {
                ...state,
                ...action.questions
            }

        case ADD_ANSWER :

        const {authedUser, qid, answer} = action
        const votes = state[qid][answer]
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: votes.concat(authedUser)
                    }
                }
            }
        
        default : 
            return state
    }
}