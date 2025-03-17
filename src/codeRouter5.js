import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { fetchEmployees } from './common/redux/employeesSlice';
import MainLayout from './layouts/MainLayout';
import EmployeesList from './features/EmployeesList';
import EmployeeInfo from './features/EmployeeInfo';
import Error from './features/Error';
import type { AppDispatch } from './common/redux/store';
import type { SnackbarState } from './common/types';

import './index.scss';

type SnackbarProps = {
  setSnackbar: React.Dispatch<React.SetStateAction<SnackbarState>>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        {({ setSnackbar }: SnackbarProps) => <EmployeesList setSnackbar={setSnackbar} />}
      </MainLayout>
    ),
  },
  {
    path: 'employee/:employeeId',
    element: (
      <MainLayout>
        {({ setSnackbar }: SnackbarProps) => <EmployeeInfo setSnackbar={setSnackbar} />}
      </MainLayout>
    ),
  },
  {
    path: '*',
    element: <Error type="general" />,
  },
]);

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return (
    <div className="page">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;