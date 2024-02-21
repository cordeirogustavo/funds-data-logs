import { PageListComponent } from '@pages';
import { Route, Routes } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<PageListComponent />} />
    </Routes>
  );
}
