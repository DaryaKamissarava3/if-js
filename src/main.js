function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator);

    return arrayOfStrings.join('.');
}

const date = '2020-11-26';
const secondDate = '2022-05-11';

const symbol = '-';

console.log(splitString(date, symbol));
console.log(splitString(secondDate, symbol));

const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];

function searchInformation(str) {

    const resultOfSearch = data.filter((element) => Object.values(element).includes(str));
    resultOfSearch.forEach((item) => console.log(item));
}

searchInformation('Berlin');
searchInformation('Rokoko Hotel');
