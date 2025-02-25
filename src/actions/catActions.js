export const fetchCats = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS'})
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
    .then(response => {
      return response.json()
    }).then(response => {
      dispatch({
        type: 'ADD_CATS',
        cats: response.images
      })
    })
  }
}
