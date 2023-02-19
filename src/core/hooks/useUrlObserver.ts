import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { changeActiveRoute } from '../redux/coreSlice';
import { useAppDispatch } from '../../config/redux/hooks';

export const useUrlObserver = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(changeActiveRoute(pathname));
  }, [pathname, dispatch]);
};
