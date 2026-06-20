export const initialState = {
  bookings: []
};

export const bookingReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        bookings: [...state.bookings, action.payload]
      };

    case "DELETE":
      return {
        bookings: state.bookings.filter(
          booking => booking.id !== action.payload
        )
      };

    default:
    return state;
  }
};