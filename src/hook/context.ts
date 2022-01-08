import { useContext } from 'react';
import { AxiosContext } from '../context/axios';

export const useAxiosContext = useContext(AxiosContext);
