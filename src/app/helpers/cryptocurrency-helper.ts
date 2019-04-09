import Cryptocurrency, { FiatProperties } from 'src/app/models/cryptocurrency.model';

export class CryptocurrencyHelper {
    public static getFiatProperties(item: Cryptocurrency, fiat: string): FiatProperties {
        if (!item || !item.quote) {
            return new FiatProperties();
        }
        if (item.quote.hasOwnProperty(fiat)) {
            return item.quote[fiat];
        }
        return new FiatProperties();
    }
}
