import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import Cryptocurrency from 'src/app/models/cryptocurrency.model';
export const cryptocurrencyListAdapter: EntityAdapter<
    Cryptocurrency
    > = createEntityAdapter<Cryptocurrency>({
        selectId: model => model.id,
    });

export interface State extends EntityState<Cryptocurrency> {
    isLoading?: boolean;
    error?: any;
    page: number;
    maxPages: number;
}

export const initialState: State = cryptocurrencyListAdapter.getInitialState(
    {
        isLoading: false,
        error: null,
        page: 1,
        maxPages: 5
    }
);
