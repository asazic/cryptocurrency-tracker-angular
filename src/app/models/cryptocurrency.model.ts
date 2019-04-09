export default class Cryptocurrency {
    public id: number;
    public name: string;
    public symbol: string;
    public slug: string;
    public circulating_supply: number;
    public total_supply: number;
    public max_supply: number;
    public cmc_rank: number;
    public quote: any;
    public last_updated: string;
}

export class FiatProperties {
    price: number;
    volume_24h: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    market_cap: number;
    last_updated: number;
}
