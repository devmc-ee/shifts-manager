import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { changeActiveRoute } from '../../core/redux/coreSlice';
import { useAppDispatch } from '../redux/hooks';

export const useUrlObserver = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(changeActiveRoute(pathname));
  }, [pathname, dispatch]);
};
