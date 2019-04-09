import Cryptocurrency from 'src/app/models/cryptocurrency.model';

export interface State {
  cryptocurrency: Cryptocurrency | null;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  cryptocurrency: null,
  isLoading: false,
  error: null
};
