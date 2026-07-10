import { BrowserRouter } from 'react-router-dom';
import { BookingProvider } from '@/context/BookingContext';
import AppRoutes from '@/routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <AppRoutes />
      </BookingProvider>
    </BrowserRouter>
  );
}
