import * as types from './types';

export function addRecipe() {
    return {
        type: types.ADD_RECIPE,
    }
}

export function fetchRecipes(ingredients) {
    return (dispatch, getState) => {
        const items = [
            {
                id: 0,
                title: "Item 1",
                image: "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"
            },
            {
                id: 1,
                title: "Item 2",
                image: "https://s-media-cache-ak0.pinimg.com/originals/3d/19/e2/3d19e22f8fc92cdbd53337558220e262.jpg"
            },
            {
                id: 2,
                title: "Item 3",
                image: "https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/30423_pets-products_january-site-flip_3-cathealth_short-tile_592x304._CB286975940_.jpg"
            },
            {
                id: 3,
                title: "Item 4",
                image: "https://www.petfinder.com/wp-content/uploads/2013/09/cat-black-superstitious-fcs-cat-myths-162286659.jpg"
            }
        ];
        const results = [];
        items.forEach((item) => {
            if (item.title.includes(ingredients)){
                results[item.id] = item;
            }
        });
        dispatch(setSearchedRecipes({recipes: results}));
    }
}

export function setSearchedRecipes({recipes}) {
    return {
        type: types.SET_SEARCHED_RECIPES,
        recipes
    }
}