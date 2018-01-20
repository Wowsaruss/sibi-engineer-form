module.exports = {
    submit_data: (req, res) => {
        const db = req.app.get('db');
        
        let { Gender, NameSet, Title, GivenName, MiddleInitial, Surname, StreetAddress, City, State, StateFull, ZipCode, Country, CountryFull, EmailAddress, UserName, Password, BrowserUserAgent, TelephoneNumber, TelephoneCountryCode, MothersMaiden, Birthday, Age, CCType, CCNumber, CVV2, CCExpires, NationalID, UPS, WesternUnionMTCN, MoneyGramMTCN, Color, Occupation, Company, Vehicle, Domain, GUID, Latitude, Longitude } = req.body;

        req.app.get('db').data_submit([ Gender, NameSet, Title, GivenName, MiddleInitial, Surname, StreetAddress, City, State, StateFull, ZipCode, Country, CountryFull, EmailAddress, UserName, Password, BrowserUserAgent, TelephoneNumber, TelephoneCountryCode, MothersMaiden, Birthday, Age, CCType, CCNumber, CVV2, CCExpires, NationalID, UPS, WesternUnionMTCN, MoneyGramMTCN, Color, Occupation, Company, Vehicle, Domain, GUID, Latitude, Longitude ]).then(profile => {
            res.status(200).send(profile)
        }).catch((err) => {console.log(err)})
    }
}