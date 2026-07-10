import { createContext, useCallback, useMemo, useState } from 'react';

export const BookingContext = createContext(null);

let tokenCounter = 100;

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([]);

  const addBooking = useCallback((details) => {
    tokenCounter += 1;
    const booking = {
      id: `${Date.now()}`,
      token: tokenCounter,
      createdAt: new Date().toISOString(),
      ...details,
    };
    setBookings((prev) => [booking, ...prev]);
    return booking;
  }, []);

  const value = useMemo(() => ({ bookings, addBooking }), [bookings, addBooking]);

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}
