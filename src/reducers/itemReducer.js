const initialState = {
  item: [
    {
      id: 1,
      name: 'Item 1',
      image: 'https://media.pitchfork.com/photos/592991df5e6ef9596931eba6/1:1/w_300/65d9c64d.jpg',
      price: 1000,
      qty: 0
    },
    {
      id: 2,
      name: 'Item 2',
      image: 'https://images.sk-static.com/images/media/profile_images/artists/68043/huge_avatar',
      price: 2000,
      qty: 0
    },
    {
      id: 3,
      name: 'Item 3',
      image: 'https://lh3.googleusercontent.com/2ePl2GsM3lbOA1SdcLavHcncq2m5RSHNk_eoZJtWejrAJ-J__WGoBShppb6stsMFlRQ=w300',
      price: 3000,
      qty: 0
    }
  ]
}

const reducer = (state = initialState, action) => {
  return state
}

export default reducer