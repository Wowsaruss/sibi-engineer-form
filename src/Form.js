import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            Gender: '',
            NameSet: '',
            Title: '',
            GivenName: '',
            MiddleInitial: '',
            Surname: '',
            StreetAddress: '',
            City: '',
            State: '',
            StateFull: '',
            ZipCode: '',
            Country: '',
            CountryFull: '',
            EmailAddress: '',
            UserName: '',
            Password: '',
            BrowserUserAgent: '',
            TelephoneNumber: '',
            TelephoneCountryCode: '',
            MothersMaiden: '',
            Birthday: '',
            Age: '',
            CCType: '',
            CCNumber: '',
            CVV2: '',
            CCExpires: '',
            NationalID: '',
            UPS: '',
            WesternUnionMTCN: '',
            MoneyGramMTCN: '',
            Color: '',
            Occupation: '',
            Company: '',
            Vehicle: '',
            Domain: '',
            GUID: '',
            Latitude: '',
            Longitude: ''
        }
    }

    handleDataPost(post) {
        axios.post({

        })
        this.setState({
            Gender: '',
            NameSet: '',
            Title: '',
            GivenName: '',
            MiddleInitial: '',
            Surname: '',
            StreetAddress: '',
            City: '',
            State: '',
            StateFull: '',
            ZipCode: '',
            Country: '',
            CountryFull: '',
            EmailAddress: '',
            UserName: '',
            Password: '',
            BrowserUserAgent: '',
            TelephoneNumber: '',
            TelephoneCountryCode: '',
            MothersMaiden: '',
            Birthday: '',
            Age: '',
            CCType: '',
            CCNumber: '',
            CVV2: '',
            CCExpires: '',
            NationalID: '',
            UPS: '',
            WesternUnionMTCN: '',
            MoneyGramMTCN: '',
            Color: '',
            Occupation: '',
            Company: '',
            Vehicle: '',
            Domain: '',
            GUID: '',
            Latitude: '',
            Longitude: ''
        })
    }

    handleDataInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        console.log(this.state);
        return(
            <div>
                <div className='form-main-parent' >
                    <div className='input-columns-flex' >
                        <div className='input-main-parent' >
                            <input
                                placeholder='Gender'
                                name='Gender'
                                value={this.state.Gender}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='NameSet'
                                name='NameSet'
                                value={this.state.NameSet}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='Title'
                                name='Title'
                                value={this.state.Title}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='GivenName'
                                name='GivenName'
                                value={this.state.GivenName}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='MiddleInitial'
                                name='MiddleInitial'
                                value={this.state.MiddleInitial}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='Surname'
                                name='Surname'
                                value={this.state.Surname}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='StreetAddress'
                                name='StreetAddress'
                                value={this.state.StreetAddress}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='City'
                                name='City'
                                value={this.state.City}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='State'
                                name='State'
                                value={this.state.State}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='StateFull'
                                name='StateFull'
                                value={this.state.StateFull}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='ZipCode'
                                name='ZipCode'
                                value={this.state.ZipCode}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='Country'
                                name='Country'
                                value={this.state.Country}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='CountryFull'
                                name='CountryFull'
                                value={this.state.CountryFull}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='EmailAddress'
                                name='EmailAddress'
                                value={this.state.EmailAddress}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='UserName'
                                name='UserName'
                                value={this.state.UserName}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='Password'
                                name='Password'
                                value={this.state.Password}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='BrowserUserAgent'
                                name='BrowserUserAgent'
                                value={this.state.BrowserUserAgent}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='TelephoneNumber'
                                name='TelephoneNumber'
                                value={this.state.TelephoneNumber}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='TelephoneCountryCode'
                                name='TelephoneCountryCode'
                                value={this.state.TelephoneCountryCode}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                        </div>
                        <div className='input-main-parent' >
                            <input
                                placeholder='MothersMaiden'
                                name='MothersMaiden'
                                value={this.state.MothersMaiden}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='Birthday'
                                name='Birthday'
                                value={this.state.Birthday}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='Age'
                                name='Age'
                                value={this.state.Age}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='CCType'
                                name='CCType'
                                value={this.state.CCType}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='CCNumber'
                                name='CCNumber'
                                value={this.state.CCNumber}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='CVV2'
                                name='CVV2'
                                value={this.state.CVV2}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='CCExpires'
                                name='CCExpires'
                                value={this.state.CCExpires}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='NationalID'
                                name='NationalID'
                                value={this.state.NationalID}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='UPS'
                                name='UPS'
                                value={this.state.UPS}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='WesternUnionMTCN'
                                name='WesternUnionMTCN'
                                value={this.state.WesternUnionMTCN}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='MoneyGramMTCN'
                                name='MoneyGramMTCN'
                                value={this.state.MoneyGramMTCN}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='Color'
                                name='Color'
                                value={this.state.Color}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='Occupation'
                                name='Occupation'
                                value={this.state.Occupation}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='Company'
                                name='Company'
                                value={this.state.Company}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='Vehicle'
                                name='Vehicle'
                                value={this.state.Vehicle}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='Domain'
                                name='Domain'
                                value={this.state.Domain}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='GUID'
                                name='GUID'
                                value={this.state.GUID}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='Latitude'
                                name='Latitude'
                                value={this.state.Latitude}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                            <input
                                placeholder='Longitude'
                                name='Longitude'
                                value={this.state.Longitude}
                                onChange={(e) => this.handleDataInput(e)}
                            />
                        </div>
                    </div>
                    <div className='submit-main-parent' >
                        <div className='submit' >SUBMIT</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Form;