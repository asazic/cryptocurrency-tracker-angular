import Cryptocurrency from 'src/app/models/cryptocurrency.model';

export const dummyCurrency1: Cryptocurrency = {
    id: 1, name: 'Bitcoin', symbol: 'BTC', slug: 'bitcoin', cmc_rank: 1, circulating_supply: 16950100,
    total_supply: 16950100, max_supply: 21000000, last_updated: '2018-06-02T22:51:28.209Z',
    quote: {
        USD: {
            last_updated: '2018-12-22T06:08:23.000Z',
            market_cap: 67684268829.81413,
            percent_change_1h: 0.426252,
            percent_change_7d: 19.472,
            percent_change_24h: -4.10839,
            price: 3881.88864625,
            volume_24h: 6341959230.33247,
        },
        BTC: {
            price: 1,
            volume_24h: 772012,
            percent_change_1h: 0,
            percent_change_24h: 0,
            percent_change_7d: 0,
            market_cap: 17024600,
            last_updated: '2018-12-22T06:08:23.000Z'
        }
    }
};
export const dummyCurrency2: Cryptocurrency = {
    id: 2, name: 'XRP', symbol: 'XRP', slug: 'ripple', cmc_rank: 2, circulating_supply: 40794121066,
    total_supply: 99991738974, max_supply: 100000000000, last_updated: '2018-12-22T06:08:03.000Z',
    quote: {
        USD: {
            last_updated: '2018-12-22T06:08:03.000Z',
            market_cap: 14425211831.505043,
            percent_change_1h: 0.712268,
            percent_change_7d: 22.3608,
            percent_change_24h: -3.66051,
            price: 0.353610065729,
            volume_24h: 617573458.768739,
        },
        BTC: {
            price: 0.00009109227439344403,
            volume_24h: 159090.97736879447,
            percent_change_1h: 0.284,
            percent_change_24h: 2.3609,
            percent_change_7d: 0.4649,
            market_cap: 3716029.2697834475,
            last_updated: '2018-12-22T06:08:23.000Z'
        }
    }
};
