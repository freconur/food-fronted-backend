import { SET_RECIPES } from "./types"

const initialState = {
    recipes:[]
}



export const recipeRecuder = (state=initialState, action) => {
switch(action.type) {
    case SET_RECIPES:
        return 'hola'
}
}