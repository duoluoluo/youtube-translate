class Language {
    static LW = JSON.parse(`{
        "zh": 1,
        "ja": 1.2,
        "en": 2,
        "it": 3,
        "es": 3,
        "default": 2.5
    }`)
    static COUNTRIES = JSON.parse(`{
        "aa-ER": {
            "language_name": "Afar",
            "country_name": "Eritrea"
        },
        "af-NA": {
            "language_name": "Afrikaans",
            "country_name": "Namibia",
            "google": "af",
            "yt": "af"
        },
        "af-ZA": {
            "language_name": "Afrikaans",
            "country_name": "South Africa",
            "google": "af",
            "yt": "af"
        },
        "am-ET": {
            "language_name": "Amharic",
            "country_name": "Ethiopia",
            "google": "am",
            "yt": "am"
        },
        "ar-AE": {
            "language_name": "Arabic",
            "country_name": "United Arab Emirates",
            "google": "ar",
            "yt": "ar"
        },
        "ar-BH": {
            "language_name": "Arabic",
            "country_name": "Bahrain",
            "google": "ar",
            "yt": "ar"
        },
        "ar-DJ": {
            "language_name": "Arabic",
            "country_name": "Djibouti",
            "google": "ar",
            "yt": "ar"
        },
        "ar-DZ": {
            "language_name": "Arabic",
            "country_name": "Algeria",
            "google": "ar",
            "yt": "ar"
        },
        "ar-EG": {
            "language_name": "Arabic",
            "country_name": "Egypt",
            "google": "ar",
            "yt": "ar"
        },
        "ar-ER": {
            "language_name": "Arabic",
            "country_name": "Eritrea",
            "google": "ar",
            "yt": "ar"
        },
        "ar-IL": {
            "language_name": "Arabic",
            "country_name": "Israel",
            "google": "ar",
            "yt": "ar"
        },
        "ar-IQ": {
            "language_name": "Arabic",
            "country_name": "Iraq",
            "google": "ar",
            "yt": "ar"
        },
        "ar-JO": {
            "language_name": "Arabic",
            "country_name": "Jordan",
            "google": "ar",
            "yt": "ar"
        },
        "ar-KM": {
            "language_name": "Arabic",
            "country_name": "Comoros",
            "google": "ar",
            "yt": "ar"
        },
        "ar-KW": {
            "language_name": "Arabic",
            "country_name": "Kuwait",
            "google": "ar",
            "yt": "ar"
        },
        "ar-LB": {
            "language_name": "Arabic",
            "country_name": "Lebanon",
            "google": "ar",
            "yt": "ar"
        },
        "ar-LY": {
            "language_name": "Arabic",
            "country_name": "Libya",
            "google": "ar",
            "yt": "ar"
        },
        "ar-MA": {
            "language_name": "Arabic",
            "country_name": "Morocco",
            "google": "ar",
            "yt": "ar"
        },
        "ar-MR": {
            "language_name": "Arabic",
            "country_name": "Mauritania",
            "google": "ar",
            "yt": "ar"
        },
        "ar-OM": {
            "language_name": "Arabic",
            "country_name": "Oman",
            "google": "ar",
            "yt": "ar"
        },
        "ar-PS": {
            "language_name": "Arabic",
            "country_name": "Palestine",
            "google": "ar",
            "yt": "ar"
        },
        "ar-QA": {
            "language_name": "Arabic",
            "country_name": "Qatar",
            "google": "ar",
            "yt": "ar"
        },
        "ar-SA": {
            "language_name": "Arabic",
            "country_name": "Saudi Arabia",
            "google": "ar",
            "yt": "ar"
        },
        "ar-SD": {
            "language_name": "Arabic",
            "country_name": "Sudan",
            "google": "ar",
            "yt": "ar"
        },
        "ar-SO": {
            "language_name": "Arabic",
            "country_name": "Somalia",
            "google": "ar",
            "yt": "ar"
        },
        "ar-SY": {
            "language_name": "Arabic",
            "country_name": "Syria",
            "google": "ar",
            "yt": "ar"
        },
        "ar-TD": {
            "language_name": "Arabic",
            "country_name": "Chad",
            "google": "ar",
            "yt": "ar"
        },
        "ar-TN": {
            "language_name": "Arabic",
            "country_name": "Tunisia",
            "google": "ar",
            "yt": "ar"
        },
        "ar-YE": {
            "language_name": "Arabic",
            "country_name": "Yemen",
            "google": "ar",
            "yt": "ar"
        },
        "ay-BO": {
            "language_name": "Aymara",
            "country_name": "Bolivia",
            "google": "ay",
            "yt": "ay"
        },
        "az-AZ": {
            "language_name": "Azerbaijani",
            "country_name": "Azerbaijan",
            "google": "az",
            "yt": "az"
        },
        "be-BY": {
            "language_name": "Belarusian",
            "country_name": "Belarus",
            "google": "be",
            "yt": "be"
        },
        "bg-BG": {
            "language_name": "Bulgarian",
            "country_name": "Bulgaria",
            "google": "bg",
            "yt": "bg"
        },
        "bi-VU": {
            "language_name": "Bislama",
            "country_name": "Vanuatu"
        },
        "bn-BD": {
            "language_name": "Bengali",
            "country_name": "Bangladesh",
            "google": "bn",
            "yt": "bn"
        },
        "bs-BA": {
            "language_name": "Bosnian",
            "country_name": "Bosnia and Herzegovina",
            "google": "bs",
            "yt": "bs"
        },
        "bs-ME": {
            "language_name": "Bosnian",
            "country_name": "Montenegro",
            "google": "bs",
            "yt": "bs"
        },
        "byn-ER": {
            "language_name": "Bilen",
            "country_name": "Eritrea"
        },
        "ca-AD": {
            "language_name": "Catalan",
            "country_name": "Andorra",
            "google": "ca",
            "yt": "ca"
        },
        "ch-GU": {
            "language_name": "Chamorro",
            "country_name": "Guam"
        },
        "ch-MP": {
            "language_name": "Chamorro",
            "country_name": "Northern Mariana Islands"
        },
        "cs-CZ": {
            "language_name": "Czech",
            "country_name": "Czechia",
            "google": "cs",
            "yt": "cs"
        },
        "da-DK": {
            "language_name": "Danish",
            "country_name": "Denmark",
            "google": "da",
            "yt": "da"
        },
        "de-AT": {
            "language_name": "German",
            "country_name": "Austria",
            "google": "de",
            "yt": "de"
        },
        "de-BE": {
            "language_name": "German",
            "country_name": "Belgium",
            "google": "de",
            "yt": "de"
        },
        "de-CH": {
            "language_name": "German",
            "country_name": "Switzerland",
            "google": "de",
            "yt": "de"
        },
        "de-DE": {
            "language_name": "German",
            "country_name": "Germany",
            "google": "de",
            "yt": "de"
        },
        "de-LI": {
            "language_name": "German",
            "country_name": "Liechtenstein",
            "google": "de",
            "yt": "de"
        },
        "de-LU": {
            "language_name": "German",
            "country_name": "Luxembourg",
            "google": "de",
            "yt": "de"
        },
        "de-VA": {
            "language_name": "German",
            "country_name": "Vatican City",
            "google": "de",
            "yt": "de"
        },
        "dv-MV": {
            "language_name": "Divehi",
            "country_name": "Maldives",
            "google": "dv",
            "yt": "dv"
        },
        "dz-BT": {
            "language_name": "Dzongkha",
            "country_name": "Bhutan"
        },
        "el-CY": {
            "language_name": "Greek (modern)",
            "country_name": "Cyprus",
            "google": "el",
            "yt": "el"
        },
        "el-GR": {
            "language_name": "Greek (modern)",
            "country_name": "Greece",
            "google": "el",
            "yt": "el"
        },
        "en-AG": {
            "language_name": "English",
            "country_name": "Antigua and Barbuda",
            "google": "en",
            "yt": "en"
        },
        "en-AI": {
            "language_name": "English",
            "country_name": "Anguilla",
            "google": "en",
            "yt": "en"
        },
        "en-AQ": {
            "language_name": "English",
            "country_name": "Antarctica",
            "google": "en",
            "yt": "en"
        },
        "en-AS": {
            "language_name": "English",
            "country_name": "American Samoa",
            "google": "en",
            "yt": "en"
        },
        "en-AU": {
            "language_name": "English",
            "country_name": "Australia",
            "google": "en",
            "yt": "en"
        },
        "en-BB": {
            "language_name": "English",
            "country_name": "Barbados",
            "google": "en",
            "yt": "en"
        },
        "en-BM": {
            "language_name": "English",
            "country_name": "Bermuda",
            "google": "en",
            "yt": "en"
        },
        "en-BS": {
            "language_name": "English",
            "country_name": "Bahamas",
            "google": "en",
            "yt": "en"
        },
        "en-BW": {
            "language_name": "English",
            "country_name": "Botswana",
            "google": "en",
            "yt": "en"
        },
        "en-BZ": {
            "language_name": "English",
            "country_name": "Belize",
            "google": "en",
            "yt": "en"
        },
        "en-CA": {
            "language_name": "English",
            "country_name": "Canada",
            "google": "en",
            "yt": "en"
        },
        "en-CC": {
            "language_name": "English",
            "country_name": "Cocos (Keeling) Islands",
            "google": "en",
            "yt": "en"
        },
        "en-CK": {
            "language_name": "English",
            "country_name": "Cook Islands",
            "google": "en",
            "yt": "en"
        },
        "en-CM": {
            "language_name": "English",
            "country_name": "Cameroon",
            "google": "en",
            "yt": "en"
        },
        "en-CW": {
            "language_name": "English",
            "country_name": "Curacao",
            "google": "en",
            "yt": "en"
        },
        "en-CX": {
            "language_name": "English",
            "country_name": "Christmas Island",
            "google": "en",
            "yt": "en"
        },
        "en-DM": {
            "language_name": "English",
            "country_name": "Dominica",
            "google": "en",
            "yt": "en"
        },
        "en-ER": {
            "language_name": "English",
            "country_name": "Eritrea",
            "google": "en",
            "yt": "en"
        },
        "en-FJ": {
            "language_name": "English",
            "country_name": "Fiji",
            "google": "en",
            "yt": "en"
        },
        "en-FK": {
            "language_name": "English",
            "country_name": "Falkland Islands",
            "google": "en",
            "yt": "en"
        },
        "en-FM": {
            "language_name": "English",
            "country_name": "Federated States of Micronesia",
            "google": "en",
            "yt": "en"
        },
        "en-GB": {
            "language_name": "English",
            "country_name": "United Kingdom",
            "google": "en",
            "yt": "en"
        },
        "en-GD": {
            "language_name": "English",
            "country_name": "Grenada",
            "google": "en",
            "yt": "en"
        },
        "en-GG": {
            "language_name": "English",
            "country_name": "Guernsey",
            "google": "en",
            "yt": "en"
        },
        "en-GH": {
            "language_name": "English",
            "country_name": "Ghana",
            "google": "en",
            "yt": "en"
        },
        "en-GI": {
            "language_name": "English",
            "country_name": "Gibraltar",
            "google": "en",
            "yt": "en"
        },
        "en-GM": {
            "language_name": "English",
            "country_name": "Gambia",
            "google": "en",
            "yt": "en"
        },
        "en-GS": {
            "language_name": "English",
            "country_name": "South Georgia and South Sandwich Islands",
            "google": "en",
            "yt": "en"
        },
        "en-GU": {
            "language_name": "English",
            "country_name": "Guam",
            "google": "en",
            "yt": "en"
        },
        "en-GY": {
            "language_name": "English",
            "country_name": "Guyana",
            "google": "en",
            "yt": "en"
        },
        "en-HK": {
            "language_name": "English",
            "country_name": "Hong Kong",
            "google": "en",
            "yt": "en"
        },
        "en-HM": {
            "language_name": "English",
            "country_name": "Heard Island and McDonald Islands",
            "google": "en",
            "yt": "en"
        },
        "en-IE": {
            "language_name": "English",
            "country_name": "Ireland",
            "google": "en",
            "yt": "en"
        },
        "en-IM": {
            "language_name": "English",
            "country_name": "Isle of Man",
            "google": "en",
            "yt": "en"
        },
        "en-IN": {
            "language_name": "English",
            "country_name": "India",
            "google": "en",
            "yt": "en"
        },
        "en-IO": {
            "language_name": "English",
            "country_name": "British Indian Ocean Territory",
            "google": "en",
            "yt": "en"
        },
        "en-JE": {
            "language_name": "English",
            "country_name": "Jersey",
            "google": "en",
            "yt": "en"
        },
        "en-JM": {
            "language_name": "English",
            "country_name": "Jamaica",
            "google": "en",
            "yt": "en"
        },
        "en-KE": {
            "language_name": "English",
            "country_name": "Kenya",
            "google": "en",
            "yt": "en"
        },
        "en-KI": {
            "language_name": "English",
            "country_name": "Kiribati",
            "google": "en",
            "yt": "en"
        },
        "en-KN": {
            "language_name": "English",
            "country_name": "Saint Kitts and Nevis",
            "google": "en",
            "yt": "en"
        },
        "en-KY": {
            "language_name": "English",
            "country_name": "Cayman Islands",
            "google": "en",
            "yt": "en"
        },
        "en-LC": {
            "language_name": "English",
            "country_name": "Saint Lucia",
            "google": "en",
            "yt": "en"
        },
        "en-LR": {
            "language_name": "English",
            "country_name": "Liberia",
            "google": "en",
            "yt": "en"
        },
        "en-LS": {
            "language_name": "English",
            "country_name": "Lesotho",
            "google": "en",
            "yt": "en"
        },
        "en-MF": {
            "language_name": "English",
            "country_name": "Saint Martin",
            "google": "en",
            "yt": "en"
        },
        "en-MH": {
            "language_name": "English",
            "country_name": "Marshall Islands",
            "google": "en",
            "yt": "en"
        },
        "en-MP": {
            "language_name": "English",
            "country_name": "Northern Mariana Islands",
            "google": "en",
            "yt": "en"
        },
        "en-MS": {
            "language_name": "English",
            "country_name": "Montserrat",
            "google": "en",
            "yt": "en"
        },
        "en-MT": {
            "language_name": "English",
            "country_name": "Malta",
            "google": "en",
            "yt": "en"
        },
        "en-MU": {
            "language_name": "English",
            "country_name": "Mauritius",
            "google": "en",
            "yt": "en"
        },
        "en-MW": {
            "language_name": "English",
            "country_name": "Malawi",
            "google": "en",
            "yt": "en"
        },
        "en-NA": {
            "language_name": "English",
            "country_name": "Namibia",
            "google": "en",
            "yt": "en"
        },
        "en-NF": {
            "language_name": "English",
            "country_name": "Norfolk Island",
            "google": "en",
            "yt": "en"
        },
        "en-NG": {
            "language_name": "English",
            "country_name": "Nigeria",
            "google": "en",
            "yt": "en"
        },
        "en-NR": {
            "language_name": "English",
            "country_name": "Nauru",
            "google": "en",
            "yt": "en"
        },
        "en-NU": {
            "language_name": "English",
            "country_name": "Niue",
            "google": "en",
            "yt": "en"
        },
        "en-NZ": {
            "language_name": "English",
            "country_name": "New Zealand",
            "google": "en",
            "yt": "en"
        },
        "en-PG": {
            "language_name": "English",
            "country_name": "Papua New Guinea",
            "google": "en",
            "yt": "en"
        },
        "en-PH": {
            "language_name": "English",
            "country_name": "Philippines",
            "google": "en",
            "yt": "en"
        },
        "en-PK": {
            "language_name": "English",
            "country_name": "Pakistan",
            "google": "en",
            "yt": "en"
        },
        "en-PN": {
            "language_name": "English",
            "country_name": "Pitcairn Islands",
            "google": "en",
            "yt": "en"
        },
        "en-PR": {
            "language_name": "English",
            "country_name": "Puerto Rico",
            "google": "en",
            "yt": "en"
        },
        "en-PW": {
            "language_name": "English",
            "country_name": "Palau",
            "google": "en",
            "yt": "en"
        },
        "en-RW": {
            "language_name": "English",
            "country_name": "Rwanda",
            "google": "en",
            "yt": "en"
        },
        "en-SB": {
            "language_name": "English",
            "country_name": "Solomon Islands",
            "google": "en",
            "yt": "en"
        },
        "en-SC": {
            "language_name": "English",
            "country_name": "Seychelles",
            "google": "en",
            "yt": "en"
        },
        "en-SD": {
            "language_name": "English",
            "country_name": "Sudan",
            "google": "en",
            "yt": "en"
        },
        "en-SG": {
            "language_name": "English",
            "country_name": "Singapore",
            "google": "en",
            "yt": "en"
        },
        "en-SH": {
            "language_name": "English",
            "country_name": "Saint",
            "google": "en",
            "yt": "en"
        },
        "en-SL": {
            "language_name": "English",
            "country_name": "Sierra Leone",
            "google": "en",
            "yt": "en"
        },
        "en-SS": {
            "language_name": "English",
            "country_name": "South Sudan",
            "google": "en",
            "yt": "en"
        },
        "en-SX": {
            "language_name": "English",
            "country_name": "Sint Maarten",
            "google": "en",
            "yt": "en"
        },
        "en-SZ": {
            "language_name": "English",
            "country_name": "Eswatini",
            "google": "en",
            "yt": "en"
        },
        "en-TC": {
            "language_name": "English",
            "country_name": "Turks and Caicos Islands",
            "google": "en",
            "yt": "en"
        },
        "en-TK": {
            "language_name": "English",
            "country_name": "Tokelau",
            "google": "en",
            "yt": "en"
        },
        "en-TO": {
            "language_name": "English",
            "country_name": "Tonga",
            "google": "en",
            "yt": "en"
        },
        "en-TT": {
            "language_name": "English",
            "country_name": "Trinidad and Tobago",
            "google": "en",
            "yt": "en"
        },
        "en-TV": {
            "language_name": "English",
            "country_name": "Tuvalu",
            "google": "en",
            "yt": "en"
        },
        "en-TZ": {
            "language_name": "English",
            "country_name": "Tanzania",
            "google": "en",
            "yt": "en"
        },
        "en-UG": {
            "language_name": "English",
            "country_name": "Uganda",
            "google": "en",
            "yt": "en"
        },
        "en-UM": {
            "language_name": "English",
            "country_name": "United States Minor Outlying Islands",
            "google": "en",
            "yt": "en"
        },
        "en-US": {
            "language_name": "English",
            "country_name": "United States of America",
            "google": "en",
            "yt": "en"
        },
        "en-VC": {
            "language_name": "English",
            "country_name": "Saint Vincent and the Grenadines",
            "google": "en",
            "yt": "en"
        },
        "en-VG": {
            "language_name": "English",
            "country_name": "British Virgin Islands",
            "google": "en",
            "yt": "en"
        },
        "en-VI": {
            "language_name": "English",
            "country_name": "Virgin Islands",
            "google": "en",
            "yt": "en"
        },
        "en-VU": {
            "language_name": "English",
            "country_name": "Vanuatu",
            "google": "en",
            "yt": "en"
        },
        "en-WS": {
            "language_name": "English",
            "country_name": "Samoa",
            "google": "en",
            "yt": "en"
        },
        "en-ZA": {
            "language_name": "English",
            "country_name": "South Africa",
            "google": "en",
            "yt": "en"
        },
        "en-ZM": {
            "language_name": "English",
            "country_name": "Zambia",
            "google": "en",
            "yt": "en"
        },
        "en-ZW": {
            "language_name": "English",
            "country_name": "Zimbabwe",
            "google": "en",
            "yt": "en"
        },
        "ee-GH": {
            "language_name": "Geez",
            "country_name": "Ghana",
            "google": "ee",
            "yt": "ee"
        },
        "es-AR": {
            "language_name": "Spanish",
            "country_name": "Argentina",
            "google": "es",
            "yt": "es"
        },
        "es-BO": {
            "language_name": "Spanish",
            "country_name": "Bolivia",
            "google": "es",
            "yt": "es"
        },
        "es-BZ": {
            "language_name": "Spanish",
            "country_name": "Belize",
            "google": "es",
            "yt": "es"
        },
        "es-CL": {
            "language_name": "Spanish",
            "country_name": "Chile",
            "google": "es",
            "yt": "es"
        },
        "es-CO": {
            "language_name": "Spanish",
            "country_name": "Colombia",
            "google": "es",
            "yt": "es"
        },
        "es-CR": {
            "language_name": "Spanish",
            "country_name": "Costa Rica",
            "google": "es",
            "yt": "es"
        },
        "es-CU": {
            "language_name": "Spanish",
            "country_name": "Cuba",
            "google": "es",
            "yt": "es"
        },
        "es-DO": {
            "language_name": "Spanish",
            "country_name": "Dominican Republic",
            "google": "es",
            "yt": "es"
        },
        "es-EC": {
            "language_name": "Spanish",
            "country_name": "Ecuador",
            "google": "es",
            "yt": "es"
        },
        "es-EH": {
            "language_name": "Spanish",
            "country_name": "Western Sahara",
            "google": "es",
            "yt": "es"
        },
        "es-ES": {
            "language_name": "Spanish",
            "country_name": "Spain",
            "google": "es",
            "yt": "es"
        },
        "es-GQ": {
            "language_name": "Spanish",
            "country_name": "Equatorial Guinea",
            "google": "es",
            "yt": "es"
        },
        "es-GT": {
            "language_name": "Spanish",
            "country_name": "Guatemala",
            "google": "es",
            "yt": "es"
        },
        "es-GU": {
            "language_name": "Spanish",
            "country_name": "Guam",
            "google": "es",
            "yt": "es"
        },
        "es-HN": {
            "language_name": "Spanish",
            "country_name": "Honduras",
            "google": "es",
            "yt": "es"
        },
        "es-MX": {
            "language_name": "Spanish",
            "country_name": "Mexico",
            "google": "es",
            "yt": "es"
        },
        "es-NI": {
            "language_name": "Spanish",
            "country_name": "Nicaragua",
            "google": "es",
            "yt": "es"
        },
        "es-PA": {
            "language_name": "Spanish",
            "country_name": "Panama",
            "google": "es",
            "yt": "es"
        },
        "es-PE": {
            "language_name": "Spanish",
            "country_name": "Peru",
            "google": "es",
            "yt": "es"
        },
        "es-PR": {
            "language_name": "Spanish",
            "country_name": "Puerto Rico",
            "google": "es",
            "yt": "es"
        },
        "es-PY": {
            "language_name": "Spanish",
            "country_name": "Paraguay",
            "google": "es",
            "yt": "es"
        },
        "es-SV": {
            "language_name": "Spanish",
            "country_name": "El Salvador",
            "google": "es",
            "yt": "es"
        },
        "es-UY": {
            "language_name": "Spanish",
            "country_name": "Uruguay",
            "google": "es",
            "yt": "es"
        },
        "es-VE": {
            "language_name": "Spanish",
            "country_name": "Venezuela",
            "google": "es",
            "yt": "es"
        },
        "et-EE": {
            "language_name": "Estonian",
            "country_name": "Estonia",
            "google": "et",
            "yt": "et"
        },
        "fa-IR": {
            "language_name": "Persian (Farsi)",
            "country_name": "Iran",
            "google": "fa",
            "yt": "fa"
        },
        "fan-GQ": {
            "language_name": "Fang",
            "country_name": "Equatorial Guinea"
        },
        "ff-BF": {
            "language_name": "Fula",
            "country_name": "Burkina Faso"
        },
        "ff-GN": {
            "language_name": "Fula",
            "country_name": "Guinea"
        },
        "fi-FI": {
            "language_name": "Finnish",
            "country_name": "Finland",
            "google": "fi",
            "yt": "fi"
        },
        "fj-FJ": {
            "language_name": "Fijian",
            "country_name": "Fiji"
        },
        "fo-FO": {
            "language_name": "Faroese",
            "country_name": "Faroe Islands"
        },
        "fr-BE": {
            "language_name": "French",
            "country_name": "Belgium",
            "google": "fr",
            "yt": "fr"
        },
        "fr-BF": {
            "language_name": "French",
            "country_name": "Burkina Faso",
            "google": "fr",
            "yt": "fr"
        },
        "fr-BI": {
            "language_name": "French",
            "country_name": "Burundi",
            "google": "fr",
            "yt": "fr"
        },
        "fr-BJ": {
            "language_name": "French",
            "country_name": "Benin",
            "google": "fr",
            "yt": "fr"
        },
        "fr-BL": {
            "language_name": "French",
            "country_name": "Saint Barthelemy",
            "google": "fr",
            "yt": "fr"
        },
        "fr-CA": {
            "language_name": "French",
            "country_name": "Canada",
            "google": "fr",
            "yt": "fr"
        },
        "fr-CD": {
            "language_name": "French",
            "country_name": "Democratic Republic of the Congo",
            "google": "fr",
            "yt": "fr"
        },
        "fr-CF": {
            "language_name": "French",
            "country_name": "Central African Republic",
            "google": "fr",
            "yt": "fr"
        },
        "fr-CG": {
            "language_name": "French",
            "country_name": "Republic of the Congo",
            "google": "fr",
            "yt": "fr"
        },
        "fr-CH": {
            "language_name": "French",
            "country_name": "Switzerland",
            "google": "fr",
            "yt": "fr"
        },
        "fr-CI": {
            "language_name": "French",
            "country_name": "Ivory Coast",
            "google": "fr",
            "yt": "fr"
        },
        "fr-CM": {
            "language_name": "French",
            "country_name": "Cameroon",
            "google": "fr",
            "yt": "fr"
        },
        "fr-DJ": {
            "language_name": "French",
            "country_name": "Djibouti",
            "google": "fr",
            "yt": "fr"
        },
        "fr-FR": {
            "language_name": "French",
            "country_name": "France",
            "google": "fr",
            "yt": "fr"
        },
        "fr-GA": {
            "language_name": "French",
            "country_name": "Gabon",
            "google": "fr",
            "yt": "fr"
        },
        "fr-GF": {
            "language_name": "French",
            "country_name": "French Guiana",
            "google": "fr",
            "yt": "fr"
        },
        "fr-GG": {
            "language_name": "French",
            "country_name": "Guernsey",
            "google": "fr",
            "yt": "fr"
        },
        "fr-GN": {
            "language_name": "French",
            "country_name": "Guinea",
            "google": "fr",
            "yt": "fr"
        },
        "fr-GP": {
            "language_name": "French",
            "country_name": "Guadeloupe",
            "google": "fr",
            "yt": "fr"
        },
        "fr-GQ": {
            "language_name": "French",
            "country_name": "Equatorial Guinea",
            "google": "fr",
            "yt": "fr"
        },
        "fr-HT": {
            "language_name": "French",
            "country_name": "Haiti",
            "google": "fr",
            "yt": "fr"
        },
        "fr-JE": {
            "language_name": "French",
            "country_name": "Jersey",
            "google": "fr",
            "yt": "fr"
        },
        "fr-KM": {
            "language_name": "French",
            "country_name": "Comoros",
            "google": "fr",
            "yt": "fr"
        },
        "fr-LB": {
            "language_name": "French",
            "country_name": "Lebanon",
            "google": "fr",
            "yt": "fr"
        },
        "fr-LU": {
            "language_name": "French",
            "country_name": "Luxembourg",
            "google": "fr",
            "yt": "fr"
        },
        "fr-MC": {
            "language_name": "French",
            "country_name": "Principality of Monaco",
            "google": "fr",
            "yt": "fr"
        },
        "fr-MF": {
            "language_name": "French",
            "country_name": "Saint Martin",
            "google": "fr",
            "yt": "fr"
        },
        "fr-MG": {
            "language_name": "French",
            "country_name": "Madagascar",
            "google": "fr",
            "yt": "fr"
        },
        "fr-ML": {
            "language_name": "French",
            "country_name": "Mali",
            "google": "fr",
            "yt": "fr"
        },
        "fr-MQ": {
            "language_name": "French",
            "country_name": "Martinique",
            "google": "fr",
            "yt": "fr"
        },
        "fr-NC": {
            "language_name": "French",
            "country_name": "New Caledonia",
            "google": "fr",
            "yt": "fr"
        },
        "fr-NE": {
            "language_name": "French",
            "country_name": "Niger",
            "google": "fr",
            "yt": "fr"
        },
        "fr-PF": {
            "language_name": "French",
            "country_name": "French Polynesia",
            "google": "fr",
            "yt": "fr"
        },
        "fr-PM": {
            "language_name": "French",
            "country_name": "Saint Pierre and Miquelon",
            "google": "fr",
            "yt": "fr"
        },
        "fr-RE": {
            "language_name": "French",
            "country_name": "Reunion",
            "google": "fr",
            "yt": "fr"
        },
        "fr-RW": {
            "language_name": "French",
            "country_name": "Rwanda",
            "google": "fr",
            "yt": "fr"
        },
        "fr-SC": {
            "language_name": "French",
            "country_name": "Seychelles",
            "google": "fr",
            "yt": "fr"
        },
        "fr-SN": {
            "language_name": "French",
            "country_name": "Senegal",
            "google": "fr",
            "yt": "fr"
        },
        "fr-TD": {
            "language_name": "French",
            "country_name": "Chad",
            "google": "fr",
            "yt": "fr"
        },
        "fr-TF": {
            "language_name": "French",
            "country_name": "French Southern and Antarctic Lands",
            "google": "fr",
            "yt": "fr"
        },
        "fr-TG": {
            "language_name": "French",
            "country_name": "Togo",
            "google": "fr",
            "yt": "fr"
        },
        "fr-VA": {
            "language_name": "French",
            "country_name": "Vatican City",
            "google": "fr",
            "yt": "fr"
        },
        "fr-VU": {
            "language_name": "French",
            "country_name": "Vanuatu",
            "google": "fr",
            "yt": "fr"
        },
        "fr-WF": {
            "language_name": "French",
            "country_name": "Wallis and Futuna",
            "google": "fr",
            "yt": "fr"
        },
        "fr-YT": {
            "language_name": "French",
            "country_name": "Mayotte",
            "google": "fr",
            "yt": "fr"
        },
        "ga-IE": {
            "language_name": "Irish",
            "country_name": "Ireland",
            "google": "ga",
            "yt": "ga"
        },
        "gn-AR": {
            "language_name": "Guaraní",
            "country_name": "Argentina",
            "google": "gn",
            "yt": "gn"
        },
        "gn-PY": {
            "language_name": "Guaraní",
            "country_name": "Paraguay",
            "google": "gn",
            "yt": "gn"
        },
        "gv-IM": {
            "language_name": "Manx",
            "country_name": "Isle of Man"
        },
        "he-IL": {
            "language_name": "Hebrew (modern)",
            "country_name": "Israel"
        },
        "hi-IN": {
            "language_name": "Hindi",
            "country_name": "India",
            "google": "hi",
            "yt": "hi"
        },
        "hif-FJ": {
            "language_name": "Fiji",
            "country_name": "Fiji"
        },
        "hr-BA": {
            "language_name": "Croatian",
            "country_name": "Bosnia and Herzegovina",
            "google": "hr",
            "yt": "hr"
        },
        "hr-HR": {
            "language_name": "Croatian",
            "country_name": "Croatia",
            "google": "hr",
            "yt": "hr"
        },
        "hr-ME": {
            "language_name": "Croatian",
            "country_name": "Montenegro",
            "google": "hr",
            "yt": "hr"
        },
        "ht-HT": {
            "language_name": "Haitian",
            "country_name": "Haiti",
            "google": "ht",
            "yt": "ht"
        },
        "hu-HU": {
            "language_name": "Hungarian",
            "country_name": "Hungary",
            "google": "hu",
            "yt": "hu"
        },
        "hy-AM": {
            "language_name": "Armenian",
            "country_name": "Armenia",
            "google": "hy",
            "yt": "hy"
        },
        "hy-CY": {
            "language_name": "Armenian",
            "country_name": "Cyprus",
            "google": "hy",
            "yt": "hy"
        },
        "id-ID": {
            "language_name": "Indonesian",
            "country_name": "Indonesia",
            "google": "id",
            "yt": "id"
        },
        "is-IS": {
            "language_name": "Icelandic",
            "country_name": "Iceland",
            "google": "is",
            "yt": "is"
        },
        "it-CH": {
            "language_name": "Italian",
            "country_name": "Switzerland",
            "google": "it",
            "yt": "it"
        },
        "it-IT": {
            "language_name": "Italian",
            "country_name": "Italy",
            "google": "it",
            "yt": "it"
        },
        "it-SM": {
            "language_name": "Italian",
            "country_name": "San Marino",
            "google": "it",
            "yt": "it"
        },
        "it-VA": {
            "language_name": "Italian",
            "country_name": "Vatican City",
            "google": "it",
            "yt": "it"
        },
        "ja-JP": {
            "language_name": "Japanese",
            "country_name": "Japan",
            "google": "ja",
            "yt": "ja"
        },
        "ka-GE": {
            "language_name": "Georgian",
            "country_name": "Georgia",
            "google": "ka",
            "yt": "ka"
        },
        "kg-CD": {
            "language_name": "Kongo",
            "country_name": "Democratic Republic of the Congo"
        },
        "kk-KZ": {
            "language_name": "Kazakh",
            "country_name": "Kazakhstan",
            "google": "kk",
            "yt": "kk"
        },
        "kl-GL": {
            "language_name": "Greenlandic",
            "country_name": "Greenland"
        },
        "km-KH": {
            "language_name": "Khmer",
            "country_name": "Cambodia",
            "google": "km",
            "yt": "km"
        },
        "ko-KP": {
            "language_name": "Korean",
            "country_name": "North Korea",
            "google": "ko",
            "yt": "ko"
        },
        "ko-KR": {
            "language_name": "Korean",
            "country_name": "South Korea",
            "google": "ko",
            "yt": "ko"
        },
        "ku-IQ": {
            "language_name": "Kurdish",
            "country_name": "Iraq",
            "google": "ku",
            "yt": "ku"
        },
        "kun-ER": {
            "language_name": "Kunama",
            "country_name": "Eritrea"
        },
        "ky-KG": {
            "language_name": "Kyrgyz",
            "country_name": "Kyrgyzstan",
            "google": "ky",
            "yt": "ky"
        },
        "la-VA": {
            "language_name": "Latin",
            "country_name": "Vatican City",
            "google": "la",
            "yt": "la"
        },
        "lb-LU": {
            "language_name": "Luxembourgish",
            "country_name": "Luxembourg",
            "google": "lb",
            "yt": "lb"
        },
        "ln-CD": {
            "language_name": "Lingala",
            "country_name": "Democratic Republic of the Congo",
            "google": "ln",
            "yt": "ln"
        },
        "ln-CG": {
            "language_name": "Lingala",
            "country_name": "Republic of the Congo",
            "google": "ln",
            "yt": "ln"
        },
        "lo-LA": {
            "language_name": "Lao",
            "country_name": "Laos",
            "google": "lo",
            "yt": "lo"
        },
        "lt-LT": {
            "language_name": "Lithuanian",
            "country_name": "Lithuania",
            "google": "lt",
            "yt": "lt"
        },
        "lu-CD": {
            "language_name": "Luba-Katanga",
            "country_name": "Democratic Republic of the Congo"
        },
        "lv-LV": {
            "language_name": "Latvian",
            "country_name": "Latvia",
            "google": "lv",
            "yt": "lv"
        },
        "mg-MG": {
            "language_name": "Malagasy",
            "country_name": "Madagascar",
            "google": "mg",
            "yt": "mg"
        },
        "mh-MH": {
            "language_name": "Marshallese",
            "country_name": "Marshall Islands"
        },
        "mi-NZ": {
            "language_name": "Māori",
            "country_name": "New Zealand",
            "google": "mi",
            "yt": "mi"
        },
        "mk-MK": {
            "language_name": "Macedonian",
            "country_name": "North Macedonia",
            "google": "mk",
            "yt": "mk"
        },
        "mn-MN": {
            "language_name": "Mongolian",
            "country_name": "Mongolia",
            "google": "mn",
            "yt": "mn"
        },
        "ms-BN": {
            "language_name": "Malay",
            "country_name": "Brunei",
            "google": "ms",
            "yt": "ms"
        },
        "ms-MY": {
            "language_name": "Malay",
            "country_name": "Malaysia",
            "google": "ms",
            "yt": "ms"
        },
        "ms-SG": {
            "language_name": "Malay",
            "country_name": "Singapore",
            "google": "ms",
            "yt": "ms"
        },
        "mt-MT": {
            "language_name": "Maltese",
            "country_name": "Malta",
            "google": "mt",
            "yt": "mt"
        },
        "my-MM": {
            "language_name": "Burmese",
            "country_name": "Myanmar",
            "google": "my",
            "yt": "my"
        },
        "na-NR": {
            "language_name": "Nauruan",
            "country_name": "Nauru"
        },
        "nb-BV": {
            "language_name": "Norwegian Bokmål",
            "country_name": "Bouvet Island"
        },
        "nb-NO": {
            "language_name": "Norwegian Bokmål",
            "country_name": "Norway"
        },
        "nd-ZW": {
            "language_name": "Northern Ndebele",
            "country_name": "Zimbabwe"
        },
        "ne-NP": {
            "language_name": "Nepali",
            "country_name": "Nepal",
            "google": "ne",
            "yt": "ne"
        },
        "nl-AW": {
            "language_name": "Dutch",
            "country_name": "Aruba",
            "google": "nl",
            "yt": "nl"
        },
        "nl-BE": {
            "language_name": "Dutch",
            "country_name": "Belgium",
            "google": "nl",
            "yt": "nl"
        },
        "nl-BQ": {
            "language_name": "Dutch",
            "country_name": "Caribbean Netherlands",
            "google": "nl",
            "yt": "nl"
        },
        "nl-CW": {
            "language_name": "Dutch",
            "country_name": "Curacao",
            "google": "nl",
            "yt": "nl"
        },
        "nl-MF": {
            "language_name": "Dutch",
            "country_name": "Saint Martin",
            "google": "nl",
            "yt": "nl"
        },
        "nl-NL": {
            "language_name": "Dutch",
            "country_name": "Netherlands",
            "google": "nl",
            "yt": "nl"
        },
        "nl-SR": {
            "language_name": "Dutch",
            "country_name": "Suriname",
            "google": "nl",
            "yt": "nl"
        },
        "nl-SX": {
            "language_name": "Dutch",
            "country_name": "Sint Maarten",
            "google": "nl",
            "yt": "nl"
        },
        "nn-BV": {
            "language_name": "Norwegian Nynorsk",
            "country_name": "Bouvet Island"
        },
        "nn-NO": {
            "language_name": "Norwegian Nynorsk",
            "country_name": "Norway"
        },
        "no-BV": {
            "language_name": "Norwegian",
            "country_name": "Bouvet Island",
            "google": "no",
            "yt": "no"
        },
        "no-NO": {
            "language_name": "Norwegian",
            "country_name": "Norway",
            "google": "no",
            "yt": "no"
        },
        "no-SJ": {
            "language_name": "Norwegian",
            "country_name": "Svalbard",
            "google": "no",
            "yt": "no"
        },
        "nr-ZA": {
            "language_name": "Southern Ndebele",
            "country_name": "South Africa"
        },
        "nrb-ER": {
            "language_name": "Nara",
            "country_name": "Eritrea"
        },
        "ny-MW": {
            "language_name": "Chichewa",
            "country_name": "Malawi",
            "google": "ny",
            "yt": "ny"
        },
        "pa-AW": {
            "language_name": "(Eastern) Punjabi",
            "country_name": "Aruba",
            "google": "pa",
            "yt": "pa"
        },
        "pa-CW": {
            "language_name": "(Eastern) Punjabi",
            "country_name": "Curacao",
            "google": "pa",
            "yt": "pa"
        },
        "pl-PL": {
            "language_name": "Polish",
            "country_name": "Poland",
            "google": "pl",
            "yt": "pl"
        },
        "ps-AF": {
            "language_name": "Pashto",
            "country_name": "Afghanistan",
            "google": "ps",
            "yt": "ps"
        },
        "pt-AO": {
            "language_name": "Portuguese",
            "country_name": "Angola",
            "google": "pt",
            "yt": "pt"
        },
        "pt-BR": {
            "language_name": "Portuguese",
            "country_name": "Brazil",
            "google": "pt",
            "yt": "pt"
        },
        "pt-CV": {
            "language_name": "Portuguese",
            "country_name": "Cape Verde",
            "google": "pt",
            "yt": "pt"
        },
        "pt-GQ": {
            "language_name": "Portuguese",
            "country_name": "Equatorial Guinea",
            "google": "pt",
            "yt": "pt"
        },
        "pt-GW": {
            "language_name": "Portuguese",
            "country_name": "Guinea-Bissau",
            "google": "pt",
            "yt": "pt"
        },
        "pt-MO": {
            "language_name": "Portuguese",
            "country_name": "Macao",
            "google": "pt",
            "yt": "pt"
        },
        "pt-MZ": {
            "language_name": "Portuguese",
            "country_name": "Mozambique",
            "google": "pt",
            "yt": "pt"
        },
        "pt-PT": {
            "language_name": "Portuguese",
            "country_name": "Portugal",
            "google": "pt",
            "yt": "pt"
        },
        "pt-ST": {
            "language_name": "Portuguese",
            "country_name": "Sao Tome and Principe",
            "google": "pt",
            "yt": "pt"
        },
        "pt-TL": {
            "language_name": "Portuguese",
            "country_name": "East Timor",
            "google": "pt",
            "yt": "pt"
        },
        "qu-BO": {
            "language_name": "Quechua",
            "country_name": "Bolivia",
            "google": "qu",
            "yt": "qu"
        },
        "rar-CK": {
            "language_name": "Cook Islands",
            "country_name": "Cook Islands"
        },
        "rm-CH": {
            "language_name": "Romansh",
            "country_name": "Switzerland"
        },
        "rn-BI": {
            "language_name": "Kirundi",
            "country_name": "Burundi"
        },
        "ro-MD": {
            "language_name": "Romanian",
            "country_name": "Moldova",
            "google": "ro",
            "yt": "ro"
        },
        "ro-RO": {
            "language_name": "Romanian",
            "country_name": "Romania",
            "google": "ro",
            "yt": "ro"
        },
        "rtm-FJ": {
            "language_name": "Rotuman",
            "country_name": "Fiji"
        },
        "ru-AQ": {
            "language_name": "Russian",
            "country_name": "Antarctica",
            "google": "ru",
            "yt": "ru"
        },
        "ru-BY": {
            "language_name": "Russian",
            "country_name": "Belarus",
            "google": "ru",
            "yt": "ru"
        },
        "ru-KG": {
            "language_name": "Russian",
            "country_name": "Kyrgyzstan",
            "google": "ru",
            "yt": "ru"
        },
        "ru-KZ": {
            "language_name": "Russian",
            "country_name": "Kazakhstan",
            "google": "ru",
            "yt": "ru"
        },
        "ru-RU": {
            "language_name": "Russian",
            "country_name": "Russia",
            "google": "ru",
            "yt": "ru"
        },
        "ru-TJ": {
            "language_name": "Russian",
            "country_name": "Tajikistan",
            "google": "ru",
            "yt": "ru"
        },
        "ru-TM": {
            "language_name": "Russian",
            "country_name": "Turkmenistan",
            "google": "ru",
            "yt": "ru"
        },
        "ru-UZ": {
            "language_name": "Russian",
            "country_name": "Uzbekistan",
            "google": "ru",
            "yt": "ru"
        },
        "rw-RW": {
            "language_name": "Kinyarwanda",
            "country_name": "Rwanda",
            "google": "rw",
            "yt": "rw"
        },
        "sg-CF": {
            "language_name": "Sango",
            "country_name": "Central African Republic"
        },
        "si-LK": {
            "language_name": "Sinhalese",
            "country_name": "Sri Lanka",
            "google": "si",
            "yt": "si"
        },
        "sk-CZ": {
            "language_name": "Slovak",
            "country_name": "Czechia",
            "google": "sk",
            "yt": "sk"
        },
        "sk-SK": {
            "language_name": "Slovak",
            "country_name": "Slovakia",
            "google": "sk",
            "yt": "sk"
        },
        "sl-SI": {
            "language_name": "Slovene",
            "country_name": "Slovenia",
            "google": "sl",
            "yt": "sl"
        },
        "sm-AS": {
            "language_name": "Samoan",
            "country_name": "American Samoa",
            "google": "sm",
            "yt": "sm"
        },
        "sm-WS": {
            "language_name": "Samoan",
            "country_name": "Samoa",
            "google": "sm",
            "yt": "sm"
        },
        "sn-ZW": {
            "language_name": "Shona",
            "country_name": "Zimbabwe",
            "google": "sn",
            "yt": "sn"
        },
        "so-SO": {
            "language_name": "Somali",
            "country_name": "Somalia",
            "google": "so",
            "yt": "so"
        },
        "sq-AL": {
            "language_name": "Albanian",
            "country_name": "Albania",
            "google": "sq",
            "yt": "sq"
        },
        "sq-ME": {
            "language_name": "Albanian",
            "country_name": "Montenegro",
            "google": "sq",
            "yt": "sq"
        },
        "sq-XK": {
            "language_name": "Albanian",
            "country_name": "Kosovo",
            "google": "sq",
            "yt": "sq"
        },
        "sr-BA": {
            "language_name": "Serbian",
            "country_name": "Bosnia and Herzegovina",
            "google": "sr",
            "yt": "sr"
        },
        "sr-ME": {
            "language_name": "Serbian",
            "country_name": "Montenegro",
            "google": "sr",
            "yt": "sr"
        },
        "sr-RS": {
            "language_name": "Serbian",
            "country_name": "Serbia",
            "google": "sr",
            "yt": "sr"
        },
        "sr-XK": {
            "language_name": "Serbian",
            "country_name": "Kosovo",
            "google": "sr",
            "yt": "sr"
        },
        "ss-SZ": {
            "language_name": "Swati",
            "country_name": "Eswatini"
        },
        "ss-ZA": {
            "language_name": "Swati",
            "country_name": "South Africa"
        },
        "ssy-ER": {
            "language_name": "Saho",
            "country_name": "Eritrea"
        },
        "st-LS": {
            "language_name": "Southern Sotho",
            "country_name": "Lesotho",
            "google": "st",
            "yt": "st"
        },
        "st-ZA": {
            "language_name": "Southern Sotho",
            "country_name": "South Africa",
            "google": "st",
            "yt": "st"
        },
        "sv-AX": {
            "language_name": "Swedish",
            "country_name": "Åland Islands",
            "google": "sv",
            "yt": "sv"
        },
        "sv-FI": {
            "language_name": "Swedish",
            "country_name": "Finland",
            "google": "sv",
            "yt": "sv"
        },
        "sv-SE": {
            "language_name": "Swedish",
            "country_name": "Sweden",
            "google": "sv",
            "yt": "sv"
        },
        "sw-CD": {
            "language_name": "Swahili",
            "country_name": "Democratic Republic of the Congo",
            "google": "sw",
            "yt": "sw"
        },
        "sw-KE": {
            "language_name": "Swahili",
            "country_name": "Kenya",
            "google": "sw",
            "yt": "sw"
        },
        "sw-TZ": {
            "language_name": "Swahili",
            "country_name": "Tanzania",
            "google": "sw",
            "yt": "sw"
        },
        "sw-UG": {
            "language_name": "Swahili",
            "country_name": "Uganda",
            "google": "sw",
            "yt": "sw"
        },
        "ta-LK": {
            "language_name": "Tamil",
            "country_name": "Sri Lanka",
            "google": "ta",
            "yt": "ta"
        },
        "ta-SG": {
            "language_name": "Tamil",
            "country_name": "Singapore",
            "google": "ta",
            "yt": "ta"
        },
        "tg-TJ": {
            "language_name": "Tajik",
            "country_name": "Tajikistan",
            "google": "tg",
            "yt": "tg"
        },
        "th-TH": {
            "language_name": "Thai",
            "country_name": "Thailand",
            "google": "th",
            "yt": "th"
        },
        "ti-ER": {
            "language_name": "Tigrinya",
            "country_name": "Eritrea",
            "google": "ti",
            "yt": "ti"
        },
        "tig-ER": {
            "language_name": "Tigre",
            "country_name": "Eritrea"
        },
        "tk-AF": {
            "language_name": "Turkmen",
            "country_name": "Afghanistan",
            "google": "tk",
            "yt": "tk"
        },
        "tk-TM": {
            "language_name": "Turkmen",
            "country_name": "Turkmenistan",
            "google": "tk",
            "yt": "tk"
        },
        "tn-BW": {
            "language_name": "Tswana",
            "country_name": "Botswana"
        },
        "tn-ZA": {
            "language_name": "Tswana",
            "country_name": "South Africa"
        },
        "to-TO": {
            "language_name": "Tonga (Tonga Islands)",
            "country_name": "Tonga"
        },
        "tr-CY": {
            "language_name": "Turkish",
            "country_name": "Cyprus",
            "google": "tr",
            "yt": "tr"
        },
        "tr-TR": {
            "language_name": "Turkish",
            "country_name": "Turkey",
            "google": "tr",
            "yt": "tr"
        },
        "ts-ZA": {
            "language_name": "Tsonga",
            "country_name": "South Africa",
            "google": "ts",
            "yt": "ts"
        },
        "uk-UA": {
            "language_name": "Ukrainian",
            "country_name": "Ukraine",
            "google": "uk",
            "yt": "uk"
        },
        "ur-PK": {
            "language_name": "Urdu",
            "country_name": "Pakistan",
            "google": "ur",
            "yt": "ur"
        },
        "uz-AF": {
            "language_name": "Uzbek",
            "country_name": "Afghanistan",
            "google": "uz",
            "yt": "uz"
        },
        "uz-UZ": {
            "language_name": "Uzbek",
            "country_name": "Uzbekistan",
            "google": "uz",
            "yt": "uz"
        },
        "ve-ZA": {
            "language_name": "Venda",
            "country_name": "South Africa"
        },
        "vi-VN": {
            "language_name": "Vietnamese",
            "country_name": "Vietnam",
            "google": "vi",
            "yt": "vi"
        },
        "xh-ZA": {
            "language_name": "Xhosa",
            "country_name": "South Africa",
            "google": "xh",
            "yt": "xh"
        },
        "zh-CN": {
            "language_name": "Chinese",
            "country_name": "China",
            "google": "zh-CN",
            "yt": "zh-Hans"
        },
        "zh-HK": {
            "language_name": "Chinese",
            "country_name": "Hong Kong",
            "google": "zh-CN",
            "yt": "zh-Hans"
        },
        "zh-MO": {
            "language_name": "Chinese",
            "country_name": "Macao",
            "google": "zh-CN",
            "yt": "zh-Hans"
        },
        "zh-SG": {
            "language_name": "Chinese",
            "country_name": "Singapore",
            "google": "zh-CN",
            "yt": "zh-Hans"
        },
        "zh-TW": {
            "language_name": "Chinese",
            "country_name": "Taiwan",
            "google": "zh-TW",
            "yt": "zh-Hant"
        },
        "zu-ZA": {
            "language_name": "Zulu",
            "country_name": "South Africa",
            "google": "zu",
            "yt": "zu"
        },
        "ca-ES": {
            "language_name": "Catalan",
            "country_name": "Spain",
            "google": "ca",
            "yt": "ca"
        },
        "es-ES_tradnl": {
            "language_name": "Spanish",
            "country_name": "Spain",
            "google": "es",
            "yt": "es"
        },
        "tg-Cyrl-TJ": {
            "language_name": "Tajik (Cyrillic) ",
            "country_name": "Tajikistan",
            "google": "tg",
            "yt": "tg"
        },
        "az-Latn-AZ": {
            "language_name": "Azeri (Latin) ",
            "country_name": "Azerbaijan",
            "google": "az",
            "yt": "az"
        },
        "eu-ES": {
            "language_name": "Basque",
            "country_name": "Basque",
            "google": "eu",
            "yt": "eu"
        },
        "hsb-DE": {
            "language_name": "Upper Sorbian ",
            "country_name": "Germany"
        },
        "se-NO": {
            "language_name": "Sami (Northern) ",
            "country_name": "Norway"
        },
        "uz-Latn-UZ": {
            "language_name": "Uzbek (Latin) ",
            "country_name": "Uzbekistan",
            "google": "uz",
            "yt": "uz"
        },
        "tt-RU": {
            "language_name": "Tatar",
            "country_name": "Russia",
            "google": "tt",
            "yt": "tt"
        },
        "bn-IN": {
            "language_name": "Bangla",
            "country_name": "Bangladesh",
            "google": "bn",
            "yt": "bn"
        },
        "pa-IN": {
            "language_name": "Punjabi",
            "country_name": "India",
            "google": "pa",
            "yt": "pa"
        },
        "gu-IN": {
            "language_name": "Gujarati",
            "country_name": "India",
            "google": "gu",
            "yt": "gu"
        },
        "or-IN": {
            "language_name": "Oriya",
            "country_name": "India",
            "google": "or",
            "yt": "or"
        },
        "ta-IN": {
            "language_name": "Tamil",
            "country_name": "India",
            "google": "ta",
            "yt": "ta"
        },
        "te-IN": {
            "language_name": "Telugu",
            "country_name": "India",
            "google": "te",
            "yt": "te"
        },
        "kn-IN": {
            "language_name": "Kannada",
            "country_name": "India",
            "google": "kn",
            "yt": "kn"
        },
        "ml-IN": {
            "language_name": "Malayalam",
            "country_name": "India",
            "google": "ml",
            "yt": "ml"
        },
        "as-IN": {
            "language_name": "Assamese",
            "country_name": "India",
            "google": "as",
            "yt": "as"
        },
        "mr-IN": {
            "language_name": "Marathi",
            "country_name": "India",
            "google": "mr",
            "yt": "mr"
        },
        "sa-IN": {
            "language_name": "Sanskrit",
            "country_name": "India",
            "google": "sa",
            "yt": "sa"
        },
        "bo-CN": {
            "language_name": "Tibetan",
            "country_name": "China"
        },
        "cy-GB": {
            "language_name": "Welsh",
            "country_name": " United Kingdom",
            "google": "cy",
            "yt": "cy"
        },
        "gl-ES": {
            "language_name": "Galician",
            "country_name": "Spain",
            "google": "gl",
            "yt": "gl"
        },
        "kok-IN": {
            "language_name": "Konkani",
            "country_name": "India"
        },
        "sd-Deva-IN": {
            "language_name": "(reserved) ",
            "country_name": " (reserved)",
            "google": "sd",
            "yt": "sd"
        },
        "syr-SY": {
            "language_name": "Syriac",
            "country_name": "Syria"
        },
        "chr-Cher-US": {
            "language_name": "Cherokee",
            "country_name": "Cherokee"
        },
        "iu-Cans-CA": {
            "language_name": "Inuktitut (Canadian_Syllabics) ",
            "country_name": "Canada"
        },
        "fy-NL": {
            "language_name": "Frisian",
            "country_name": "Netherlands",
            "google": "fy",
            "yt": "fy"
        },
        "fil-PH": {
            "language_name": "Filipino",
            "country_name": "Philippines",
            "yt": "fil"
        },
        "ha-Latn-NG": {
            "language_name": "Hausa",
            "country_name": "Nigeria",
            "google": "ha",
            "yt": "ha"
        },
        "yo-NG": {
            "language_name": "Yoruba",
            "country_name": "Nigeria",
            "google": "yo",
            "yt": "yo"
        },
        "quz-BO": {
            "language_name": "Quechua",
            "country_name": "Bolivia"
        },
        "nso-ZA": {
            "language_name": "Sesotho sa Leboa ",
            "country_name": " South Africa",
            "google": "nso",
            "yt": "nso"
        },
        "ba-RU": {
            "language_name": "Bashkir",
            "country_name": "Russia"
        },
        "ig-NG": {
            "language_name": "Igbo",
            "country_name": "Nigeria",
            "google": "ig",
            "yt": "ig"
        },
        "ti-ET": {
            "language_name": "Tigrinya",
            "country_name": "Ethiopia",
            "google": "ti",
            "yt": "ti"
        },
        "haw-US": {
            "language_name": "Hawiian",
            "country_name": " United States",
            "google": "haw",
            "yt": "haw"
        },
        "ii-CN": {
            "language_name": "Yi",
            "country_name": "China"
        },
        "arn-CL": {
            "language_name": "Mapudungun",
            "country_name": "Chile"
        },
        "moh-CA": {
            "language_name": "Mohawk",
            "country_name": "Canada"
        },
        "br-FR": {
            "language_name": "Breton",
            "country_name": "France"
        },
        "ug-CN": {
            "language_name": "Uyghur",
            "country_name": "China",
            "google": "ug",
            "yt": "ug"
        },
        "oc-FR": {
            "language_name": "Occitan",
            "country_name": "France"
        },
        "co-FR": {
            "language_name": "Corsican",
            "country_name": "France",
            "google": "co",
            "yt": "co"
        },
        "gsw-FR": {
            "language_name": "Alsatian",
            "country_name": "France"
        },
        "sah-RU": {
            "language_name": "Sakha",
            "country_name": "Russia"
        },
        "quc-Latn-GT": {
            "language_name": "K'iche ",
            "country_name": "Guatemala"
        },
        "wo-SN": {
            "language_name": "Wolof",
            "country_name": "Senegal"
        },
        "prs-AF": {
            "language_name": "Dari",
            "country_name": "Afghanistan"
        },
        "gd-GB": {
            "language_name": "Scottish Gaelic ",
            "country_name": " United Kingdom",
            "google": "gd",
            "yt": "gd"
        },
        "ku-Arab-IQ": {
            "language_name": "Central Kurdish ",
            "country_name": "Iraq",
            "google": "ku",
            "yt": "ku"
        },
        "ca-ES-valencia": {
            "language_name": "Valencian",
            "country_name": "Valencia",
            "google": "ca",
            "yt": "ca"
        },
        "sr-Latn-CS": {
            "language_name": "Serbian (Latin) ",
            "country_name": " Serbia and Montenegro",
            "google": "sr",
            "yt": "sr"
        },
        "ur-IN": {
            "language_name": "Urdu",
            "country_name": "India",
            "google": "ur",
            "yt": "ur"
        },
        "az-Cyrl-AZ": {
            "language_name": "Azeri (Cyrillic) ",
            "country_name": "Azerbaijan",
            "google": "az",
            "yt": "az"
        },
        "dsb-DE": {
            "language_name": "Lower Sorbian ",
            "country_name": "Germany"
        },
        "se-SE": {
            "language_name": "Sami (Northern) ",
            "country_name": "Sweden"
        },
        "uz-Cyrl-UZ": {
            "language_name": "Uzbek (Cyrillic) ",
            "country_name": "Uzbekistan",
            "google": "uz",
            "yt": "uz"
        },
        "pa-Arab-PK": {
            "language_name": "Punjabi",
            "country_name": "Pakistan",
            "google": "pa",
            "yt": "pa"
        },
        "mn-Mong-CN": {
            "language_name": "Mongolian (Mong) ",
            "country_name": "Mongolia",
            "google": "mn",
            "yt": "mn"
        },
        "sd-Arab-PK": {
            "language_name": "Sindhi",
            "country_name": "Pakistan",
            "google": "sd",
            "yt": "sd"
        },
        "iu-Latn-CA": {
            "language_name": "Inuktitut (Latin) ",
            "country_name": "Canada"
        },
        "tzm-Latn-DZ": {
            "language_name": "Tamazight (Latin) ",
            "country_name": "Algeria"
        },
        "ff-Latn-SN": {
            "language_name": "Pular",
            "country_name": "Senegal"
        },
        "quz-EC": {
            "language_name": "Quechua",
            "country_name": "Ecuador"
        },
        "sr-Cyrl-CS": {
            "language_name": "Serbian (Cyrillic) ",
            "country_name": " Serbia and Montenegro",
            "google": "sr",
            "yt": "sr"
        },
        "se-FI": {
            "language_name": "Sami (Northern) ",
            "country_name": "Finland"
        },
        "quz-PE": {
            "language_name": "Quechua",
            "country_name": "Peru"
        },
        "smj-NO": {
            "language_name": "Sami (Lule) ",
            "country_name": "Norway"
        },
        "tzm-Tfng-MA": {
            "language_name": "Central Atlas Tamazight (Tifinagh) ",
            "country_name": "Morocco"
        },
        "bs-Latn-BA": {
            "language_name": "Bosnian (Latin) ",
            "country_name": " Bosnia and Herzegovina",
            "google": "bs",
            "yt": "bs"
        },
        "smj-SE": {
            "language_name": "Sami (Lule) ",
            "country_name": "Sweden"
        },
        "sr-Latn-BA": {
            "language_name": "Serbian (Latin) ",
            "country_name": " Bosnia and Herzegovina",
            "google": "sr",
            "yt": "sr"
        },
        "sma-NO": {
            "language_name": "Sami (Southern) ",
            "country_name": "Norway"
        },
        "sr-Cyrl-BA": {
            "language_name": "Serbian (Cyrillic) ",
            "country_name": " Bosnia and Herzegovina",
            "google": "sr",
            "yt": "sr"
        },
        "sma-SE": {
            "language_name": "Sami (Southern) ",
            "country_name": "Sweden"
        },
        "bs-Cyrl-BA": {
            "language_name": "Bosnian (Cyrillic) ",
            "country_name": " Bosnia and Herzegovina",
            "google": "bs",
            "yt": "bs"
        },
        "sms-FI": {
            "language_name": "Sami (Skolt) ",
            "country_name": "Finland"
        },
        "en-029": {
            "language_name": "English",
            "country_name": "Caribbean",
            "google": "en",
            "yt": "en"
        },
        "sr-Latn-RS": {
            "language_name": "Serbian (Latin) ",
            "country_name": "Serbia",
            "google": "sr",
            "yt": "sr"
        },
        "smn-FI": {
            "language_name": "Sami (Inari) ",
            "country_name": "Finland"
        },
        "sr-Cyrl-RS": {
            "language_name": "Serbian (Cyrillic) ",
            "country_name": "Serbia",
            "google": "sr",
            "yt": "sr"
        },
        "sr-Latn-ME": {
            "language_name": "Serbian (Latin) ",
            "country_name": "Montenegro",
            "google": "sr",
            "yt": "sr"
        },
        "sr-Cyrl-ME": {
            "language_name": "Serbian (Cyrillic) ",
            "country_name": "Montenegro",
            "google": "sr",
            "yt": "sr"
        },
        "en-MY": {
            "language_name": "English",
            "country_name": "Malaysia",
            "google": "en",
            "yt": "en"
        },
        "es-US": {
            "language_name": "Spanish",
            "country_name": " United States",
            "google": "es",
            "yt": "es"
        },
        "jv-ID": {
            "language_name": "Javanese",
            "country_name": "Indonesia",
            "yt": "jv"
        },
        "su-ID": {
            "language_name": "Sundanese",
            "country_name": "Indonesia",
            "google": "su",
            "yt": "su"
        },
        "ta-MY": {
            "language_name": "Tamil",
            "country_name": "Malaysia",
            "google": "ta",
            "yt": "ta"
        }
    }`)
}

var LZString=function(){var r=String.fromCharCode,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",e={};function t(r,o){if(!e[r]){e[r]={};for(var n=0;n<r.length;n++)e[r][r.charAt(n)]=n}return e[r][o]}var i={compressToBase64:function(r){if(null==r)return"";var n=i._compress(r,6,function(r){return o.charAt(r)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(n){return t(o,r.charAt(n))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(r){return null==r?"":""==r?null:i._decompress(r.length,16384,function(o){return r.charCodeAt(o)-32})},compressToUint8Array:function(r){for(var o=i.compress(r),n=new Uint8Array(2*o.length),e=0,t=o.length;e<t;e++){var s=o.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null==o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;e<t;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(r){return null==r?"":i._compress(r,6,function(r){return n.charAt(r)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(o){return t(n,r.charAt(o))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(r,o,n){if(null==r)return"";var e,t,i,s={},u={},a="",p="",c="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<r.length;i+=1)if(a=r.charAt(i),Object.prototype.hasOwnProperty.call(s,a)||(s[a]=f++,u[a]=!0),p=c+a,Object.prototype.hasOwnProperty.call(s,p))c=p;else{if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==o-1?(v=0,d.push(n(m)),m=0):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=c.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++),s[p]=f++,c=String(a)}if(""!==c){if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==o-1?(v=0,d.push(n(m)),m=0):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=c.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==o-1){d.push(n(m));break}v++}return d.join("")},decompress:function(r){return null==r?"":""==r?null:i._decompress(r.length,32768,function(o){return r.charCodeAt(o)})},_decompress:function(o,n,e){var t,i,s,u,a,p,c,l=[],f=4,h=4,d=3,m="",v=[],g={val:e(0),position:n,index:1};for(t=0;t<3;t+=1)l[t]=t;for(s=0,a=Math.pow(2,2),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;switch(s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;c=r(s);break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;c=r(s);break;case 2:return""}for(l[3]=c,i=c,v.push(c);;){if(g.index>o)return"";for(s=0,a=Math.pow(2,d),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;switch(c=s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;l[h++]=r(s),c=h-1,f--;break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;l[h++]=r(s),c=h-1,f--;break;case 2:return v.join("")}if(0==f&&(f=Math.pow(2,d),d++),l[c])m=l[c];else{if(c!==h)return null;m=i+i.charAt(0)}v.push(m),l[h++]=i+m.charAt(0),i=m,0==--f&&(f=Math.pow(2,d),d++)}}};return i}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module?module.exports=LZString:"undefined"!=typeof angular&&null!=angular&&angular.module("LZString",[]).factory("LZString",function(){return LZString});
class ReadItTTS_0Rj {
    static U = 'subtitleIndex';
    static H = 0xa;
    static R = 0x64;
    static V = 0xa;
    static m = 'timedtext';
    static B = '*://*.youtube.com';
    static u = '(?:https|http)://\\w*\\.youtube\\.com';
    static J = 'stats/watchtime?*';
    static L = 'watch';
    static x = 'cache';
    static z = /[؟؛.。;；:：…?!！？]+/gu;
    static Y = /[؟،؛\.。，,;；:：、…\?!！？「」『』・।|]+/gu;
    static j = /[【】\[\]\(\)（）\{\}“”"　…\-—<>]+/gu;
    static O = /\s+/gu;
    static c = /\d+[,，\.]\d+/u;
    static G = /<\s*(\d+)\s*-\s*(\d+)\s*>(.*?)(?=<[^>]*?>|$)/sg;
    static f = /<\s*\d+\s*-\s*\d+\s*>/g;
    static o = /(?:\(|\[|（|「|『).{1,20}(?:\)|\]|）|」|』)/g;
    static I = 'completed';
    static l = 'speech.platform.bing.com';
    static p = 0x5;
    static Q = 'adunit';
    static A = 'vs';
    static v = ['TTSD'];
    static n = 0.5;
    static K = 'fix_sub';
    static k = 0.5;
    static g = 0.06;
    static C = 'currentTime';
    static M = 'ci';
    static y = 'dvl';
    static DEBUG = {
        [ReadItTTS_0Rj.v[0x0]]: { 'default': false },
        'N': { 'default': true },
        'default': true
    };
    static TRACE = { 'default': false };
    static ERROR = { 'default': true };
    static b = 'user';
    static i = 'processSub';
    static T = false;
    static q = 0.8;
    static a = 0.65;
    static W = 0.3;
    static E = 'playbackRate';
    static P = 0x3;
    static Z = 0x1388;
    static S = 'pg';
    static t = 'TTSPlugin';
    static D = 'TTSPluginA';
    static s = 'urls';
    static URL = 'url';
    static X = 'sub_url';
    static h = 'api';
    static F = 'value';
    static d = 'st';
    static w = 'psd';
    static e = 'server';
    static d = 'st';
    static r = 'idx';
    static U0 = 'arr';
    static U1 = 'tc';
    static U2 = 'content';
    static U3 = 'https://www.readit.cloud';
    static U4 = 'll';
    static U5 = 'tcl';
    static U6 = 'len';
    static U7 = 'type';
    static U8 = 'client_id';
    static U9 = 'language';
    static UU = [
        'tlang',
        'lang'
    ];
    static UH = 'accountStatus';
    static UR = 'visitorId';
    static UV = 'usage';
    static Um = 'time';
    static UB = 'voice';
    static Uu = 'time1';
    static UJ = 'time2';
    static UL = 'day';
    static Ux = 'text_length';
    static Uz = 'ut';
    static UY = 'action';
    static Uj = 'extension_id';
    static UO = 'data';
    static Uc = 'TTSPlayingStatus';
    static UG = 'Updated';
    static Uf = 'TTSTranslation_page';
    static Uo = 'TTSTranslation_settings';
    static UI = 'TTSsu';
    static Ul = 'ReaditTTSt';
    static Up = 'videoId';
    static UQ = 'targetLang';
    static UA = 'sourceLang';
    static Uv = 'tab';
    static source = 'source';
    static Un = 'v';
    static UK = 'tlang';
    static Uk = 'lang';
    static Ug = 0x3;
    static UC = 'events';
    static UM = 'baseUrl';
    static Uy = 'stats/qoe?*';
    static UN = 'docid';
    static Ub = 'uid';
    static Ui = 'ad';
    static UT = 'main';
    static Uq = 'con';
    static Ua = 'detailpage';
    static UW = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
    static UE = 'get';
}
class ReadItTTS_0RO {
    constructor(Rj, RO = '', Rc = null) {
        this.UP = Rj;
        this.map = new Map();
        this.name = RO;
        this.UZ = Rc;
    }
    push(Rj, RO) {
        let Rc = Array.from(this.map.keys());
        if (Rc.length >= this.UP) {
            this.remove(Rc[0x0]);
        }
        this.map.set(Rj, RO);
    }
    get(Rj, RO = null) {
        let Rc = this.map.get(Rj);
        if (Rc == null) {
            Rc = RO;
        }
        return Rc;
    }
    getKey(Rj) {
        for (let RO of this.map.keys()) {
            if (this.map.get(RO) == Rj) {
                return RO;
            }
        }
        return null;
    }
    shift() {
        let Rj = null;
        let RO = this.map.keys().next().value;
        if (RO != null) {
            Rj = this.get(RO);
            this.remove(RO);
        }
        return Rj;
    }
    US() {
        return JSON.stringify(this.Ut());
    }
    Ut() {
        let Rj = {};
        for (let [Rc, RG] of this.map) {
            if (this.UZ != null) {
                Rj[Rc] = this.UZ.Ut(RG);
            } else {
                Rj[Rc] = RG;
            }
        }
        let RO = {
            'name': this.name,
            'UP': this.UP,
            'map': Rj
        };
        return RO;
    }
    update(Rj) {
        if (typeof Rj === 'string') {
            Rj = JSON.parse(Rj);
        }
        this.UP = Rj.UP;
        this.name = Rj.name;
        let RO = Object.keys(Rj.map);
        for (let Rc of RO) {
            if (this.UZ != null) {
                this.map.set(Rc, this.UZ.UD(Rj.map[Rc]));
            } else {
                this.map.set(Rc, Rj.map[Rc]);
            }
        }
    }
    static UD(Rj) {
        let RO = new ReadItTTS_0RO(Rj.UP, Rj.name);
        RO.update(Rj);
        return RO;
    }
    remove(Rj) {
        this.map.delete(Rj);
    }
    contains(Rj) {
        return this.map.has(Rj);
    }
    clear() {
        this.map.clear();
    }
    size() {
        return this.map.size;
    }
}
class ReadItTTS_0Rc {
    constructor(Rj, RO = '', Rc = 0x0, RG = null) {
        this.UP = Rj;
        this.Us = [];
        this.name = RO;
        this.UX = Rc;
        this.UZ = RG;
    }
    push(Rj) {
        if (this.Us.length >= this.UP) {
            this.Us.shift();
        }
        this.Us.push(Rj);
    }
    remove(Rj) {
        let RO = this.Us.indexOf(Rj);
        if (RO > -0x1) {
            this.Us.splice(RO, 0x1);
        }
    }
    US() {
        return JSON.stringify(this.Ut());
    }
    Ut() {
        let Rj = {
            'name': this.name,
            'UP': this.UP,
            'UX': this.UX,
            'Us': this.Us
        };
        return Rj;
    }
    update(Rj) {
        if (typeof Rj === 'string') {
            Rj = JSON.parse(Rj);
        }
        this.UP = Rj.UP;
        this.name = Rj.name;
        this.UX = Rj.UX;
        if (this.UZ != null) {
            this.Us = Rj.Us.map(RO => this.UZ.UD(RO));
        } else {
            this.Us = [...Rj.Us];
        }
    }
    static UD(Rj, RO = null) {
        let Rc = new ReadItTTS_0Rc(Rj.UP, Rj.name, Rj.UX, RO);
        Rc.update(Rj);
        return Rc;
    }
    clear(Rj = 0x1) {
        let RO = Math.round(Rj * this.Us.length);
        while (RO > 0x0 && this.Us.length > 0x0) {
            this.Us.shift();
            RO--;
        }
    }
    get(Rj) {
        if (Rj >= 0x0 && Rj < this.Us.length) {
            return this.Us[Rj];
        }
        return null;
    }
    indexOf(Rj) {
        return this.Us.indexOf(Rj);
    }
    filter(Rj) {
        let RO = [];
        for (let Rc of this.Us) {
            if (Rj(Rc)) {
                RO.push(Rc);
            }
        }
        return RO;
    }
    find(Rj) {
        for (let RO of this.Us) {
            if (Rj(RO)) {
                return RO;
            }
        }
        return null;
    }
    Uh() {
        let Rj = this.UX;
        if (this.Us.length > 0x0) {
            Rj = this.Us.reduce((RO, Rc) => RO + Rc, 0x0) / this.Us.length;
        }
        return Rj;
    }
    UF() {
        return this.Us.length >= this.UP;
    }
    size() {
        return this.Us.length;
    }
    shift() {
        return this.Us.shift();
    }
    pop() {
        return this.Us.pop();
    }
    Ud() {
        return this.Us.length == 0x0;
    }
}
class ReadItTTS_0RG {
    static Uw = false;
    static Ue(Rj, RO) {
        for (let Rc in RO) {
            if (ReadItTTS_0RG.Ur(Rj, Rc)) {
                return RO[Rc];
            }
        }
        return RO.default;
    }
    static H0() {
        let Rj = false;
        let RO = new Error().stack;
        RO = RO.split('\n');
        for (let Rc of RO) {
            let RG = Rc.match(/at (.+)\s\((.+):(\d+):(\d+)\)/);
            if (RG) {
                let Rf = RG[0x1];
                let Ro = Rf.split('.');
                if (Ro.length > 0x1) {
                    if (Rj) {
                        return Ro;
                    } else {
                        if (Ro[0x0] == ReadItTTS_0RG.name && [
                                this.error.name,
                                this.log.name,
                                this.trace.name
                            ]['includes'](Ro[0x1])) {
                            Rj = true;
                        }
                    }
                }
            }
        }
        return null;
    }
    static H1(Rj, RO = null, Rc = null, RG = 'json3') {
        const Rf = new URL(Rj);
        const Ro = Rf.searchParams;
        let RI = [
            'tlang',
            'lang',
            'fmt'
        ];
        if (RO != null) {
            Ro.set(RI[0x0], RO);
        } else {
            Ro.delete(RI[0x0]);
        }
        if (Rc != null) {
            Ro.set(RI[0x1], Rc);
        }
        Ro.set(RI[0x2], RG);
        return Rf.toString();
    }
    static H2(Rj, RO, Rc) {
        let RG = null;
        switch (Rc) {
        case 'DEBUG':
            if (Rj) {
                if (ReadItTTS_0Rj.DEBUG[Rj] != null) {
                    if (ReadItTTS_0Rj.DEBUG[Rj][RO] != null) {
                        RG = ReadItTTS_0Rj.DEBUG[Rj][RO];
                    } else if (ReadItTTS_0Rj.DEBUG[Rj]['default'] != null) {
                        RG = ReadItTTS_0Rj.DEBUG[Rj]['default'];
                    }
                }
            }
            if (RG == null) {
                RG = ReadItTTS_0Rj.DEBUG.default;
            }
            break;
        case 'ERROR':
            if (Rj) {
                if (ReadItTTS_0Rj.ERROR[Rj] != null) {
                    if (ReadItTTS_0Rj.ERROR[Rj][RO] != null) {
                        RG = ReadItTTS_0Rj.ERROR[Rj][RO];
                    } else if (ReadItTTS_0Rj.ERROR[Rj]['default'] != null) {
                        RG = ReadItTTS_0Rj.ERROR[Rj]['default'];
                    }
                }
            }
            if (RG == null) {
                RG = ReadItTTS_0Rj.ERROR.default;
            }
            break;
        case 'TRACE':
            if (Rj) {
                if (ReadItTTS_0Rj.TRACE[Rj] != null) {
                    if (ReadItTTS_0Rj.TRACE[Rj][RO] != null) {
                        RG = ReadItTTS_0Rj.TRACE[Rj][RO];
                    } else if (RG = ReadItTTS_0Rj.TRACE[Rj]['default'] != null) {
                        RG = ReadItTTS_0Rj.TRACE[Rj]['default'];
                    }
                }
            }
            if (RG == null) {
                RG = ReadItTTS_0Rj.TRACE.default;
            }
            break;
        }
        return RG;
    }
    static error(Rj) {
        const RO = ReadItTTS_0RG.H0();
        if (RO && ReadItTTS_0RG.H2(RO[0x0], RO[0x1], 'ERROR')) {
            console.error(this.getCurrentTime() + ' - [' + RO[0x0] + ', ' + RO[0x1] + '] ' + Rj);
        } else {
            console.error(Rj);
        }
    }
    static trace(Rj) {
        const RO = ReadItTTS_0RG.H0();
        if (RO && ReadItTTS_0RG.H2(RO[0x0], RO[0x1], 'TRACE')) {
            console.log(this.getCurrentTime() + ' - [' + RO[0x0] + ', ' + RO[0x1] + '] ' + Rj);
        }
    }
    static log(Rj, RO = null) {
        if (RO == null) {
            RO = ReadItTTS_0RG.H0();
        }
        if (RO && ReadItTTS_0RG.H2(RO[0x0], RO[0x1], 'DEBUG')) {
            console.log(this.getCurrentTime() + ' - [' + RO[0x0] + ', ' + RO[0x1] + '] ' + Rj);
        }
    }
    static assert(condition, Rj) {
        if (!condition) {
            throw new Error(Rj || 'Assertion failed');
        }
    }
    static H3(Rj) {
        return Rj.pendingUrl || Rj.url;
    }
    static H4(Rj, RO = null) {
        return new Promise((Rc, RG) => {
            chrome.storage.local.get([Rj], function (Rf) {
                let Ro = RO;
                if (Rf && Rf[Rj]) {
                    Ro = Rf[Rj];
                    if (RO !== null) {
                        if (Array.isArray(Rf[Rj])) {
                            Ro = [
                                ...RO,
                                ...Rf[Rj]
                            ];
                        } else if (typeof Rf[Rj] == 'object') {
                            Ro = {
                                ...RO,
                                ...Rf[Rj]
                            };
                        }
                    }
                }
                Rc(Ro);
            });
        });
    }
    static H5(Rj, RO) {
        return new Promise(async (Rc, RG) => {
            if (RO == null) {
                chrome.storage.local.remove([Rj], function () {
                    var Rf = chrome.runtime.lastError;
                    if (Rf) {
                    }
                    Rc();
                });
            } else {
                chrome.storage.local.set({ [Rj]: RO }, function () {
                    Rc();
                });
            }
        });
    }
    static H6(config) {
        let Rj = config.voice != null && config.voice.trim().length > 0x0 && config.language != null && config.language.trim().length > 0x0;
        return Rj;
    }
    static H7() {
        return {
            'pitch': [
                null,
                0x0,
                null
            ],
            'dvl': [
                null,
                '1.20-1.1',
                null
            ]
        };
    }
    static getLanguageName(language) {
        let Rj = 'language_name';
        for (let RO in Language.COUNTRIES) {
            if (ReadItTTS_0RG.Ur(RO, language)) {
                return Language.COUNTRIES[RO][Rj];
            }
        }
    }
    static H8() {
        let Rj = {
            'play_volume': 0x1,
            'pitch': 0x0,
            'voice': null,
            'language': ReadItTTS_0RG.getLanguage(navigator.language || navigator.userLanguage),
            'show_my_language_only': true,
            'scroll_before_reading_page': false,
            'show_tts_floating_icon': 'Normal',
            [ReadItTTS_0Rj.U5]: '3-15-60',
            'floating_icon_position': 0x96,
            'floating_icon_position_left': false,
            'scroll_to_highlighted_text': true,
            [ReadItTTS_0Rj.y]: '1.20-1.1',
            'dynamic_volume': true,
            'volume_rate': 0.13,
            'auto_play': false
        };
        return Rj;
    }
    static async H9() {
        let Rj = ReadItTTS_0RG.H8();
        let RO = await ReadItTTS_0RG.H4(ReadItTTS_0Rj.t, Rj);
        let Rc = await ReadItTTS_0RG.HU();
        RO[ReadItTTS_0Rj.U5] = Rc[ReadItTTS_0Rj.U5] != null ? Rc[ReadItTTS_0Rj.U5] : Rj[ReadItTTS_0Rj.U5];
        let RG = RO[ReadItTTS_0Rj.y];
        let Rf = Rc[ReadItTTS_0Rj.y];
        let Ro = Rf.findIndex(Rp => Rp == RG);
        Ro = Ro == -0x1 ? Rf.findIndex(Rp => Rp != null) : Ro;
        RO[ReadItTTS_0Rj.y] = Rf[Ro];
        let RI = Rc.pitch;
        let Rl = RI.findIndex(Rp => Rp == RO.pitch);
        Rl = Rl == -0x1 ? RI.findIndex(Rp => Rp != null) : Rl;
        RO.pitch = RI[Rl];
        return RO;
    }
    static HU() {
        let Rj = {
            'pitch': [
                null,
                0x0,
                null
            ],
            'dvl': [
                null,
                '1.20-1.1',
                null
            ]
        };
        return ReadItTTS_0RG.H4(ReadItTTS_0Rj.D, Rj);
    }
    static async HH(Rj) {
        if (Rj && Rj[ReadItTTS_0Rj.Ub] != null) {
            let RO = await ReadItTTS_0RG.HR();
            RO[ReadItTTS_0Rj.Ub] = Rj[ReadItTTS_0Rj.Ub];
            await ReadItTTS_0RG.H5(ReadItTTS_0Rj.b, RO);
        }
    }
    static async HV() {
        let Rj = await ReadItTTS_0RG.H4(ReadItTTS_0Rj.D, null);
        if (Rj != null) {
            return Rj;
        }
        return new Promise((RO, Rc) => {
            let RG = {};
            ReadItTTS_0RG.HR().then(Rf => {
                if (Rf != null && Rf[ReadItTTS_0Rj.Ub] != null) {
                    RG[ReadItTTS_0Rj.Ub] = Rf[ReadItTTS_0Rj.Ub];
                }
            }).finally(() => {
                RG[ReadItTTS_0Rj.Uj] = ReadItTTS_0RG.Hm();
                const Rf = {
                    'method': 'POST',
                    'headers': { 'Content-Type': 'application/json' },
                    'body': JSON.stringify(RG)
                };
                let Ro = ReadItTTS_0Rj.U3 + '/config/get';
                ReadItTTS_0RG.HB(Ro, Rf, 0x1, 0x1f40).then(async RI => {
                    if (RI.ok && RI.parsedData?.['data'] != null) {
                        await ReadItTTS_0RG.HH(RI.parsedData);
                        Rj = RI.parsedData.data;
                        await ReadItTTS_0RG.H5(ReadItTTS_0Rj.D, Rj);
                    }
                }).finally(async () => {
                    RO(Rj);
                });
            });
        });
    }
    static async Hu(Rj = {}, RO = true) {
        if (Rj) {
            let Rc = [
                'version',
                'settingChanged',
                'playStatus',
                'ttsChanged'
            ];
            if (Rj[Rc[0x1]] || RO) {
                await ReadItTTS_0RG.HJ(null);
                await ReadItTTS_0RG.H5(ReadItTTS_0Rj.D, null);
            }
            if (Rj[Rc[0x2]] || RO) {
                await ReadItTTS_0RG.H5(ReadItTTS_0Rj.Uc, null);
            }
            if (Rj[Rc[0x3]] || RO) {
                await ReadItTTS_0RG.H5(ReadItTTS_0Rj.A, null);
            }
            if (RO) {
                await ReadItTTS_0RG.H5(ReadItTTS_0Rj.UI, null);
                await ReadItTTS_0RG.H5(ReadItTTS_0Rj.Ul, null);
                await ReadItTTS_0RG.H5(ReadItTTS_0Rj.UV, null);
                await ReadItTTS_0RG.H5(ReadItTTS_0Rj.Uf, null);
                await ReadItTTS_0RG.H5(ReadItTTS_0Rj.Uo, null);
            }
        }
    }
    static async HJ(config) {
        await ReadItTTS_0RG.H5(ReadItTTS_0Rj.t, config);
    }
    static async HL(Rj, RO = '*', Rc = '*', config = null, RG = null, Rf = true, isSameLanguage = true) {
        RO = RO == null || RO.trim() == 0x0 ? null : RO;
        Rc = Rc == null || Rc.trim() == 0x0 ? null : Rc;
        if (RG == null) {
            RG = await ReadItTTS_0RG.H4(ReadItTTS_0Rj.Ul, []);
        }
        let Ro = RG.filter(RI => {
            let Rl = RI[ReadItTTS_0Rj.Up] === Rj;
            Rl &= RI[ReadItTTS_0Rj.UQ] === RO || RO == '*' || isSameLanguage && ReadItTTS_0RG.Ur(RI[ReadItTTS_0Rj.UQ], RO);
            Rl &= RI[ReadItTTS_0Rj.UA] === Rc || Rc == '*' || isSameLanguage && ReadItTTS_0RG.Ur(RI[ReadItTTS_0Rj.UA], Rc);
            Rl &= !Rf || RI[ReadItTTS_0Rj.w] === true || RI[ReadItTTS_0Rj.w] === 'true';
            Rl &= config == null || RI[ReadItTTS_0Rj.Uq] === JSON.stringify(config);
            return Rl;
        });
        return Ro;
    }
    static async Hx(Rj, RO, Rc, config = null, RG = null, Rf = false) {
        let Ro = await ReadItTTS_0RG.HL(Rj, RO, Rc, config, RG, Rf);
        return Ro.length > 0x0 ? Ro[0x0] : null;
    }
    static async HB(Rj, RO = null, Rc = 0x3, RG = 0xbb8, Rf = true) {
        let Ro = {
            'ok': false,
            'status': 0x0,
            'statusText': '',
            'response': null
        };
        while (Rc > 0x0) {
            let RI = null;
            try {
                const controller = new AbortController();
                RI = setTimeout(() => {
                    controller.abort();
                    RI = null;
                }, RG);
                let Rl = { 'signal': controller.signal };
                if (RO != null) {
                    Rl = {
                        ...Rl,
                        ...RO
                    };
                }
                let Rp = await fetch(Rj, Rl);
                clearTimeout(RI);
                Ro = { 'ok': Rp.ok };
                if (Ro.ok) {
                    RI = null;
                    try {
                        Ro.parsedData = Rf ? await Rp.json() : await Rp.text();
                    } catch (RQ) {
                        Ro.parsedData = null;
                    }
                    return Ro;
                } else {
                    if ([
                            0x198,
                            0x1f4,
                            0x1f6,
                            0x1f7,
                            0x1f8
                        ]['includes'](Rp.status)) {
                        throw new Error('Error in response.');
                    } else {
                        Ro.parsedData = null;
                        Ro.ok = true;
                        return Ro;
                    }
                }
            } catch (RA) {
                if (RA.name == 'AbortError') {
                    console.log('Timeout, retry...');
                    Ro.statusText = 'Timeout';
                } else {
                    Ro.statusText = RA.message ? RA.message : 'Unknown error';
                    console.log('Error fetching data, retry...');
                }
                if (RI != null) {
                    clearTimeout(RI);
                    RI = null;
                }
            } finally {
                Rc--;
            }
        }
        return Ro;
    }
    static HY(Rj) {
        let RO = new URL(Rj);
        return RO.hostname.includes('youtube.com');
    }
    static Hj(Rj, RO = false) {
        Rj.events = Rj?.['events']['filter'](Rc => Rc?.['segs'] && (RO || Boolean((' ' + Rc?.['segs']['map'](RG => RG.utf8).toString()).trim())));
    }
    static HO(Rj, RO = true) {
        let Rc = '';
        let RG = Rj.events;
        for (let Rf = 0x0; Rf < RG.length; Rf++) {
            const Ro = RG[Rf];
            let {
                segs: segs = [],
                tStartMs: tStartMs,
                dDurationMs: dDurationMs
            } = Ro;
            if (Rf < RG.length - 0x1) {
                const Rl = RG[Rf + 0x1];
                if (Rl.tStartMs < tStartMs + dDurationMs) {
                    dDurationMs = Rl.tStartMs - tStartMs;
                }
            }
            const RI = '<' + tStartMs + ' - ' + dDurationMs + '>';
            if (RO) {
                Rc += RI;
            } else {
                Rc += ' ';
            }
            segs.map(Rp => {
                Rc += Rp.utf8.toString();
            });
        }
        return Rc;
    }
    static Hc() {
        const Rj = new Date();
        const RO = Rj.getFullYear();
        const Rc = String(Rj.getMonth() + 0x1).padStart(0x2, '0');
        const RG = String(Rj.getDate()).padStart(0x2, '0');
        const Rf = RO + '-' + Rc + '-' + RG;
        return Rf;
    }
    static getCurrentTime() {
        const Rj = new Date();
        let RO = ReadItTTS_0RG.Hc();
        const Rc = String(Rj.getHours()).padStart(0x2, '0');
        const RG = String(Rj.getMinutes()).padStart(0x2, '0');
        const seconds = String(Rj.getSeconds()).padStart(0x2, '0');
        const miliSeconds = String(Rj.getMilliseconds()).padStart(0x3, '0');
        const Rf = RO + ': ' + Rc + ':' + RG + ':' + seconds + ':' + miliSeconds;
        return Rf;
    }
    static async HG(Rj, RO) {
        if (RO == null) {
            let Rl = new Error('qualityScore is null');
            Rl.reason = 'null';
            throw Rl;
        }
        const [Rc, RG, Rf] = ReadItTTS_0RG.Hf(Rj);
        let Ro = await ReadItTTS_0RG.H4(ReadItTTS_0Rj.Ul, []);
        let RI = await ReadItTTS_0RG.Hx(Rc, RG, Rf, null, Ro);
        RI[ReadItTTS_0Rj.Ho] = RO;
        await ReadItTTS_0RG.H5(ReadItTTS_0Rj.Ul, Ro);
    }
    static async HI(Rj = false) {
        let RO = ReadItTTS_0RG.H4(ReadItTTS_0Rj.U4, null);
        if (RO == null && Rj) {
            ReadItTTS_0RG.H5(ReadItTTS_0Rj.U4, {});
            return {};
        }
        return RO;
    }
    static async releaseLock() {
        let Rj = ReadItTTS_0RG.H4(ReadItTTS_0Rj.U4, null);
        if (Rj != null) {
            ReadItTTS_0RG.H5(ReadItTTS_0Rj.U4, null);
        }
    }
    static async Hl(Rj, content, RO = false, config = null, Rc = null) {
        if (content == null) {
            let RQ = new Error('content is null');
            RQ.reason = 'null';
            throw RQ;
        }
        const [RG, Rf, Ro] = ReadItTTS_0RG.Hf(Rj);
        let RI = await ReadItTTS_0RG.H4(ReadItTTS_0Rj.Ul, []);
        const Rl = await ReadItTTS_0RG.Hx(RG, Rf, Ro, config, RI, RO);
        if (Rl) {
            return;
        }
        RI.sort((RA, Rv) => {
            return RA.time - Rv.time;
        });
        if (RI.length > 0x14) {
            RI.splice(0x0, RI.length - 0x14);
        }
        const Rp = {
            [ReadItTTS_0Rj.URL]: Rj,
            [ReadItTTS_0Rj.Up]: RG,
            [ReadItTTS_0Rj.UA]: Ro,
            [ReadItTTS_0Rj.UQ]: Rf,
            [ReadItTTS_0Rj.U2]: content,
            [ReadItTTS_0Rj.w]: RO,
            [ReadItTTS_0Rj.Um]: Date.now(),
            [ReadItTTS_0Rj.Uq]: config == null ? null : JSON.stringify(config),
            [ReadItTTS_0Rj.Ho]: Rc
        };
        RI.push(Rp);
        await ReadItTTS_0RG.H5(ReadItTTS_0Rj.Ul, RI);
    }
    static Hp(content, targetLanguage) {
        if (ReadItTTS_0RG.HQ(targetLanguage)) {
            content = content.replaceAll('呃', '嗯');
        }
        if (ReadItTTS_0RG.HA(targetLanguage)) {
            content = content.replaceAll('\n', '');
        } else {
            content = content.replaceAll('\n', ' ');
        }
        content = content.replaceAll(/\s+/g, ' ');
        return content;
    }
    static Hv(Rj, RO, Rc) {
        let RG = 0x0;
        let Rf = 0x0;
        let Ro;
        while (RG < Rc) {
            Ro = Rj.indexOf(RO, Rf);
            if (Ro === -0x1) {
                break;
            }
            Rf = Ro + RO.length;
            RG++;
        }
        if (RG < Rc) {
            return -0x1;
        }
        return [
            Ro,
            RG
        ];
    }
    static getJsonByPath(Rj, RO) {
        const Rc = RO.split('.');
        let RG = Rj;
        for (const Rf of Rc) {
            if (RG[Rf]) {
                RG = RG[Rf];
            } else {
                return null;
            }
        }
        return RG;
    }
    static setJsonByPath(Rj, RO, Rc) {
        var RG = RO.split('.');
        var Rf = Rj;
        for (var Ro = 0x0; Ro < RG.length; Ro++) {
            if (Ro === RG.length - 0x1) {
                Rf[RG[Ro]] = Rc;
            } else if (!(RG[Ro] in Rf)) {
                Rf[RG[Ro]] = {};
            }
            Rf = Rf[RG[Ro]];
        }
    }
    static HR() {
        return ReadItTTS_0RG.H4(ReadItTTS_0Rj.b, {});
    }
    static getTTSLanguageItem(Rj, tts_user_language) {
        if (Rj in tts_user_language) {
            return tts_user_language[Rj];
        } else {
            for (const RO in tts_user_language) {
                if (ReadItTTS_0RG.Ur(Rj, RO)) {
                    return tts_user_language[RO];
                }
            }
        }
        return null;
    }
    static HA(Rj) {
        if (Rj) {
            const RO = [
                'ja',
                'zh',
                'th'
            ];
            const Rc = Rj.split('-')[0x0];
            return RO.includes(Rc.toLowerCase());
        }
        return false;
    }
    static HQ(Rj) {
        if (Rj) {
            Rj = Rj.split('-')[0x0];
        }
        return Rj === 'zh';
    }
    static Hn(Rj, RO) {
        return Rj && RO && Rj.toLocaleLowerCase() === RO.toLocaleLowerCase();
    }
    static HK(Rj) {
        return new Promise((RO, Rc) => {
            chrome.tabs.query({}, tabs => {
                let RG = [];
                for (const Rf of tabs) {
                    if (ReadItTTS_0RG.H3(Rf) == Rj) {
                        RG.push(Rf);
                    }
                }
                ;
                RO(RG);
            });
        });
    }
    static Hk(Rj) {
        return new Promise((RO, Rc) => {
            chrome.tabs.query({}, tabs => {
                let RG = null;
                for (const Rf of tabs) {
                    if (Rf.id == Rj) {
                        RG = Rf;
                        break;
                    }
                }
                ;
                RO(RG);
            });
        });
    }
    static Hg(Rj) {
        try {
            const RO = new URL(Rj);
            if (RO.protocol === 'chrome-extension:') {
                return true;
            }
        } catch (Rc) {
        }
        return false;
    }
    static HC() {
        return new Promise((Rj, RO) => {
            const Rc = [
                'active',
                'currentWindow'
            ];
            chrome.tabs.query({
                [Rc[0x0]]: true,
                [Rc[0x1]]: true
            }, tabs => {
                if (tabs.length > 0x0) {
                    Rj(tabs[0x0]);
                } else {
                    Rj(null);
                }
            });
        });
    }
    static Ur(Rj, RO) {
        if (Rj == null || RO == null) {
            return false;
        }
        Rj = ReadItTTS_0RG.getLanguage(Rj);
        RO = ReadItTTS_0RG.getLanguage(RO);
        return Rj === RO;
    }
    static getLanguage(Rj) {
        return Rj ? Rj.toLocaleLowerCase().split('-')[0x0] : null;
    }
    static containsSameL(languages, language) {
        for (const Rj of languages) {
            if (ReadItTTS_0RG.Ur(Rj, language)) {
                return true;
            }
        }
        return false;
    }
    static HM(Rj) {
        if (Rj) {
            Rj = Rj.toLowerCase();
            return Rj.indexOf('multilingual') >= 0x0 || Rj.indexOf('multi-lingual') >= 0x0 || Rj.indexOf('multilingual') >= 0x0;
        }
    }
    static Hf(Rj) {
        let RO = ['searchParams'];
        let Rc = new URL(Rj)[RO[0x0]];
        return [
            Rc.get('v'),
            Rc.get('tlang'),
            Rc.get('lang')
        ];
    }
    static async Hy(Rj = true) {
        const config = await ReadItTTS_0RG.H9(true);
        if (!config.voice || !config.language) {
            return null;
        }
        let userLanguage = ReadItTTS_0RG.HN();
        if (config.language) {
            userLanguage = config.language;
        }
        if (Rj) {
            let RO = ReadItTTS_0RG.getTTSLanguageItem(userLanguage, Language.COUNTRIES);
            const yt_language = RO ? RO.yt : null;
            return yt_language;
        } else {
            return userLanguage;
        }
    }
    static HN() {
        return navigator.language || navigator.userLanguage;
    }
    static Hb() {
        return navigator.languages;
    }
    static Hi(Rj) {
        const RO = /^(http|https):\/\//;
        const localHostPattern = /^(http|https):\/\/localhost/;
        const Rc = /^(http|https):\/\/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/;
        Rj = Rj.toLocaleLowerCase();
        return RO.test(Rj) && !Rc.test(Rj);
    }
    static containsOnlyWhitespace(Rj) {
        return !Rj || /^\s*$/['test'](Rj);
    }
    static HT(Rj) {
        if (!Array.isArray(Rj) || Rj.length === 0x0) {
            return null;
        }
        let RO = Rj[0x0];
        for (let Rc = 0x1; Rc < Rj.length; Rc++) {
            let RG = Rj[Rc];
            if (RG == null) {
                return null;
            }
            while (RO !== RG && !RO.contains(RG)) {
                RO = RO.parentNode;
                if (RO === null) {
                    return null;
                }
            }
        }
        return RO;
    }
    static Hq(Rj) {
        let RO = 0x0;
        if (Rj.length == 0x0)
            return RO;
        for (let Rc = 0x0; Rc < Rj.length; Rc++) {
            let RG = Rj.charCodeAt(Rc);
            RO = (RO << 0x5) - RO + RG;
            RO = RO & RO;
        }
        return RO;
    }
    static Hm() {
        let Rj = ['getManifest'];
        var manifestData = chrome.runtime[Rj[0x0]]();
        return manifestData.version;
    }
    static Ha(Rj, RO) {
        Rj = Rj.replace(ReadItTTS_0Rj.Y, RO);
        Rj = Rj.replace(ReadItTTS_0Rj.z, RO);
        Rj = Rj.replace(ReadItTTS_0Rj.j, RO);
        Rj = Rj.replace(/\s+/g, RO);
        Rj = Rj.trim();
        return Rj;
    }
}
class ReadItTTS_0Rf {
    constructor(Rj, RO, config, Rc) {
        this[ReadItTTS_0Rj.UY] = Rc;
        this[ReadItTTS_0Rj.URL] = Rj;
        this[ReadItTTS_0Rj.UB] = RO;
        this[ReadItTTS_0Rj.Uq] = config;
        this[ReadItTTS_0Rj.Ux] = 0x0;
        this[ReadItTTS_0Rj.I] = false;
        this[ReadItTTS_0Rj.Uu] = Date.now();
        this[ReadItTTS_0Rj.UJ] = Date.now();
    }
    HW() {
        return this[ReadItTTS_0Rj.URL];
    }
    HE() {
        return this[ReadItTTS_0Rj.UB];
    }
    HP() {
        return this[ReadItTTS_0Rj.Ux];
    }
    HZ() {
        return this[ReadItTTS_0Rj.URL] && this[ReadItTTS_0Rj.URL] !== '' && this[ReadItTTS_0Rj.UB] && this[ReadItTTS_0Rj.UB] !== '';
    }
    US() {
        return JSON.stringify(this.Ut());
    }
    static Ut(Rj, RO = true) {
        let Rc = {
            [ReadItTTS_0Rj.URL]: Rj[ReadItTTS_0Rj.URL],
            [ReadItTTS_0Rj.UB]: Rj[ReadItTTS_0Rj.UB],
            [ReadItTTS_0Rj.Uq]: Rj[ReadItTTS_0Rj.Uq],
            [ReadItTTS_0Rj.Ux]: Rj[ReadItTTS_0Rj.Ux],
            [ReadItTTS_0Rj.I]: Rj[ReadItTTS_0Rj.I],
            [ReadItTTS_0Rj.Uu]: Rj[ReadItTTS_0Rj.Uu],
            [ReadItTTS_0Rj.UJ]: Rj[ReadItTTS_0Rj.UJ],
            [ReadItTTS_0Rj.UY]: Rj[ReadItTTS_0Rj.UY]
        };
        if (RO) {
            Rc[ReadItTTS_0Rj.URL] = ReadItTTS_0RG.Hq(Rj[ReadItTTS_0Rj.URL]);
        }
        return Rc;
    }
    static UD(Rj) {
        if (typeof Rj === 'string') {
            Rj = JSON.parse(Rj);
        }
        let RO = new ReadItTTS_0Rf(Rj[ReadItTTS_0Rj.URL], Rj[ReadItTTS_0Rj.UB], Rj[ReadItTTS_0Rj.Uq], Rj[ReadItTTS_0Rj.UY]);
        RO[ReadItTTS_0Rj.Ux] = Rj[ReadItTTS_0Rj.Ux];
        RO[ReadItTTS_0Rj.I] = Rj[ReadItTTS_0Rj.I];
        RO[ReadItTTS_0Rj.Uu] = Rj[ReadItTTS_0Rj.Uu];
        RO[ReadItTTS_0Rj.UJ] = Rj[ReadItTTS_0Rj.UJ];
        RO[ReadItTTS_0Rj.UY] = Rj[ReadItTTS_0Rj.UY];
        return RO;
    }
    HS() {
        return this[ReadItTTS_0Rj.Ux] > 0x1f4;
    }
    Ht() {
        return this[ReadItTTS_0Rj.I];
    }
    complete() {
        this[ReadItTTS_0Rj.I] = true;
    }
    HD(Rj) {
        this[ReadItTTS_0Rj.Ux] += Rj;
        this[ReadItTTS_0Rj.UJ] = Date.now();
        if (this.HS()) {
            this[ReadItTTS_0Rj.I] = true;
        }
    }
    equals(Rj) {
        return this[ReadItTTS_0Rj.URL] == Rj[ReadItTTS_0Rj.URL] && this[ReadItTTS_0Rj.UB] == Rj[ReadItTTS_0Rj.UB] && this[ReadItTTS_0Rj.UY] == Rj[ReadItTTS_0Rj.UY];
    }
}
class ReadItTTS_0Ro {
    constructor(Rj) {
        this.Hs();
        this.HX = Rj;
        this.usages = [];
        setInterval(() => {
            this.Hh();
        }, 0x1388);
    }
    HF(Rj) {
        chrome.tabs.update(Rj.id, { 'active': true });
    }
    Hd(Rj, RO = null) {
        Rj.sender = 'backend';
        if (!RO) {
            return;
        }
        return new Promise(async (Rc, RG) => {
            let tabs = [];
            if (RO) {
                tabs.push(RO);
            }
            for (RO of tabs) {
                try {
                    chrome.tabs.sendMessage(RO.id, Rj, Rf => {
                        if (!chrome.runtime.lastError) {
                        } else {
                        }
                    });
                } catch (Rf) {
                }
            }
            Rc(true);
        });
    }
    Hw(Rj) {
        chrome.tabs.query({}, function (tabs) {
            tabs.forEach(function (RO) {
                chrome.tabs.sendMessage(RO.id, Rj, function (Rc) {
                });
            });
        });
    }
    He(Rj) {
        this.Hd({
            'action': 'youtube',
            'type': 'toggole_play'
        }, Rj);
    }
    stir(Rj) {
        this.Hd({
            'action': 'youtube',
            'type': 'stir'
        }, Rj);
    }
    ytbc(Rj, RO) {
        this.Hd({
            'action': 'youtube',
            'type': 'vc',
            'data': Rj
        }, RO);
    }
    Hr(Rj) {
        this.Hd({
            'action': 'page_loaded',
            'type': 'page_loaded'
        }, Rj);
    }
    async R0(Rj, RO) {
        const Rc = await this.Hd({ 'action': 'request_extract_tab_content' }, Rj);
        RO(Rc);
    }
    R1(Rj) {
        if (Rj.action == ReadItTTS_0Rj.x) {
            let RO = this.R2(Rj);
            if (RO) {
                RO.HD(Rj.HP());
            } else {
                this.usages.push(Rj);
            }
        } else {
            this.usages.forEach(Rc => {
                Rc.complete();
            });
            if (Rj.action != 'stop') {
                this.usages.push(Rj);
            }
        }
    }
    Hs() {
        chrome.runtime.onMessage.addListener(async (Rj, RO, Rc) => {
            let RG = [
                'settings',
                'openOptions'
            ];
            switch (Rj.action) {
            case RG[0x1]:
                let Rf = 'openOptionsPage';
                chrome.runtime[Rf]();
                break;
            case ReadItTTS_0Rj.UV:
                let Ro = ReadItTTS_0Rf.UD(Rj.data);
                this.R1(Ro);
                break;
            case ReadItTTS_0Rj.i:
                this.HX.R3(Rj[ReadItTTS_0Rj.UO], Rj[ReadItTTS_0Rj.X]);
                break;
            case RG[0x0]:
                switch (Rj.type) {
                case 'changed':
                    this.Hw(Rj);
                    break;
                case 'load':
                    ReadItTTS_0RG.HV();
                    break;
                }
                break;
            }
            Rc({ 'status': 'success' });
        });
    }
    R2(Rj) {
        this.usages.sort((RO, Rc) => -RO[ReadItTTS_0Rj.Uu] + Rc[ReadItTTS_0Rj.Uu]);
        for (let RO of this.usages) {
            if (RO.action == ReadItTTS_0Rj.x && RO.equals(Rj) && !RO.Ht()) {
                if (Rj[ReadItTTS_0Rj.Uu] - RO[ReadItTTS_0Rj.UJ] < 0x7d0) {
                    return RO;
                } else {
                    RO.complete();
                }
            }
        }
        return null;
    }
    async Hh() {
        if (!this.R4) {
            this.R4 = true;
            let Rj = [];
            for (let RO of this.usages) {
                let Rc = (Date.now() - RO[ReadItTTS_0Rj.UJ]) / 0x3e8;
                if (Rc > 0x78 || RO[ReadItTTS_0Rj.UY] != ReadItTTS_0Rj.x || RO.Ht()) {
                    Rj.push(RO);
                }
            }
            while (Rj.length > 0x0) {
                let RG = Rj.shift();
                this.usages.splice(this.usages.indexOf(RG), 0x1);
                let Rf = ReadItTTS_0Rf.Ut(RG);
                this.HX.R5(ReadItTTS_0Rj.UV, { 'data': Rf });
            }
            this.R4 = false;
        }
    }
}
class ReadItTTS_0RI {
    constructor() {
        this.R6 = new ReadItTTS_0Ro(this);
        this.R7 = new ReadItTTS_0Rc(0x14);
        this.R8 = new ReadItTTS_0Rc(0x14);
        this.R9 = false;
    }
    init() {
        this.RU();
    }
    RH(Rj) {
        return new RegExp('(?:https|http)\\:\\/\\/\\w*.youtube.com\\/watch\\?(v=' + Rj + '|.*?&v=' + Rj + ')', 'gi');
    }
    Hf(Rj) {
        return ReadItTTS_0RG.Hf(Rj);
    }
    RR(tabId) {
        chrome.tabs.reload(tabId, {}, function () {
            if (chrome.runtime.lastError) {
            }
        });
    }
    RV(Rj) {
        return new Promise((RO, Rc) => {
            ReadItTTS_0RG.HB(Rj).then(async RG => {
                if (!RG.ok) {
                    Rc('fetch failed');
                    return;
                }
                const [Rf, Ro, RI] = this.Hf(Rj);
                await ReadItTTS_0RG.Hl(Rj, RG.parsedData);
                RO({
                    'result': 'saved',
                    'info': {
                        [ReadItTTS_0Rj.Up]: Rf,
                        [ReadItTTS_0Rj.UQ]: Ro,
                        [ReadItTTS_0Rj.UA]: RI
                    }
                });
            }).catch(RG => {
                Rc(RG);
            });
        });
    }
    RH() {
        return /(?:https|http)\:\/\/\w*.youtube.com\/watch\?(v=([^&]*?)|.*?&v=([^&]*?))(&|$)/gi;
    }
    Rm(Rj = null) {
        const RO = this.RH();
        if (!Rj) {
            Rj = window.location.href;
        }
        const Rc = RO.exec(Rj);
        let RG;
        if (Rc) {
            RG = Rc[0x2] || Rc[0x3];
        }
        return RG;
    }
    RB(Rj, RO) {
        let Rc = this.Ru(Rj);
        if (!Rc) {
            Rc = {
                [ReadItTTS_0Rj.Up]: Rj,
                [ReadItTTS_0Rj.s]: []
            };
            this.R8.push(Rc);
        }
        if (!Rc[ReadItTTS_0Rj.s]['includes'](RO)) {
            Rc[ReadItTTS_0Rj.s]['push'](RO);
        }
    }
    RJ(Rj, RO, Rc) {
        return this.R7.find(RG => Date.now() - RG.time < 0x1b7740 && RG[ReadItTTS_0Rj.Up] === Rj && RG[ReadItTTS_0Rj.UQ] === RO && RG[ReadItTTS_0Rj.UA] === Rc);
    }
    RL(Rj, RO, Rc) {
        let RG = this.R7.find(Rf => Rf[ReadItTTS_0Rj.Up] === Rj && Rf[ReadItTTS_0Rj.UQ] === RO && Rf[ReadItTTS_0Rj.UA] === Rc);
        if (RG != null) {
            this.R7.remove(RG);
        }
    }
    async Rx(Rj) {
        this.Rz(Rj.url);
    }
    async Rz(Rj) {
        let RO = await ReadItTTS_0RG.HI();
        if (RO) {
            return;
        }
        const [Rc, RG, Rf] = this.Hf(Rj);
        if (Rc == null || Rf == null) {
            return;
        }
        if (this.RJ(Rc, RG, Rf)) {
            return;
        }
        if (await ReadItTTS_0RG.Hx(Rc, RG, Rf) != null) {
            return;
        }
        let localLang = await ReadItTTS_0RG.Hy();
        if (!localLang) {
            return;
        }
        if (ReadItTTS_0RG.Ur(localLang, Rf)) {
            localLang = null;
        }
        if (this.RJ(Rc, localLang, Rf)) {
            return;
        }
        let Ro = ReadItTTS_0RG.H1(Rj, localLang, Rf);
        let RI = {
            [ReadItTTS_0Rj.Up]: Rc,
            [ReadItTTS_0Rj.UQ]: localLang,
            [ReadItTTS_0Rj.UA]: Rf,
            [ReadItTTS_0Rj.URL]: Ro,
            'time': Date.now()
        };
        this.R7.push(RI);
        this.RB(Rc, Ro);
        this.RY(Rc);
    }
    Ru(Rj) {
        let RO = this.R8.find(Rc => Rc[ReadItTTS_0Rj.Up] === Rj);
        return RO;
    }
    RY() {
        if (!this.R9) {
            this.R9 = true;
            return new Promise(async Rj => {
                try {
                    while (this.R8.size() > 0x0) {
                        let RO = this.R8.shift();
                        let Rc = RO[ReadItTTS_0Rj.Up];
                        while (RO[[ReadItTTS_0Rj.s]]['length'] > 0x0) {
                            let RG = RO[[ReadItTTS_0Rj.s]]['shift']();
                            let [Rf, Ro, RI] = this.Hf(RG);
                            try {
                                if (await ReadItTTS_0RG.Hx(Rc, Ro, RI) != null) {
                                    return;
                                }
                                let Rl = Math.round((0.5 + Math.random() * 0.5) * 0x3e8);
                                await new Promise(Rp => setTimeout(Rp, Rl));
                                await this.RV(RG);
                            } catch (Rp) {
                            } finally {
                                this.RL(Rc, Ro, RI);
                            }
                        }
                    }
                } finally {
                    this.R9 = false;
                    Rj();
                }
            });
        }
    }
    R5(Rj, RO) {
        ReadItTTS_0RG.HR().then(Rc => {
            if (Rc != null && Rc[ReadItTTS_0Rj.Ub] != null) {
                RO[ReadItTTS_0Rj.Ub] = Rc[ReadItTTS_0Rj.Ub];
            }
        }).finally(() => {
            RO[ReadItTTS_0Rj.Uj] = ReadItTTS_0RG.Hm();
            const Rc = {
                'method': 'POST',
                'headers': { 'Content-Type': 'application/json' },
                'body': JSON.stringify(RO)
            };
            let RG = ReadItTTS_0Rj.U3;
            fetch(RG + '/' + Rj, Rc).then(async Rf => {
                if (Rf.ok) {
                    if (Rf.headers.get('Content-Type').includes('application/json')) {
                        let Ro = await Rf.json();
                        await this.HH(Ro);
                    }
                }
            }).finally(() => {
            });
        });
    }
    async HH(Rj) {
        if (Rj && Rj[ReadItTTS_0Rj.Ub] != null) {
            let RO = await ReadItTTS_0RG.HR();
            RO[ReadItTTS_0Rj.Ub] = Rj[ReadItTTS_0Rj.Ub];
            await ReadItTTS_0RG.H5(ReadItTTS_0Rj.b, RO);
        }
    }
    R3(Rj, RO) {
        return new Promise(async (Rc, RG) => {
            Rj[ReadItTTS_0Rj.URL] = ReadItTTS_0RG.Hq(Rj[ReadItTTS_0Rj.URL]);
            let bodyData = { [ReadItTTS_0Rj.UO]: LZString.compressToBase64(JSON.stringify(Rj)) };
            let Rf = await ReadItTTS_0RG.HR();
            if (Rf != null && Rf[ReadItTTS_0Rj.Ub] != null) {
                bodyData[ReadItTTS_0Rj.Ub] = Rf[ReadItTTS_0Rj.Ub];
            }
            bodyData[ReadItTTS_0Rj.Uj] = ReadItTTS_0RG.Hm();
            const Ro = {
                'method': 'POST',
                'headers': { 'Content-Type': 'application/json' },
                'body': JSON.stringify(bodyData)
            };
            let RI = ReadItTTS_0Rj.U3;
            let Rl = RI + '/api/subtitle/process';
            ReadItTTS_0RG.HB(Rl, Ro, 0x1, 0x2710).then(async Rp => {
                if (!Rp.ok) {
                    RG('fetch failed');
                    return;
                }
                await this.HH(Rp.parsedData);
                let RQ = LZString.decompressFromBase64(Rp.parsedData.data);
                let config = await ReadItTTS_0RG.H9(true);
                config = { [ReadItTTS_0Rj.U5]: config[ReadItTTS_0Rj.U5] };
                await ReadItTTS_0RG.Hl(RO, JSON.parse(RQ), true, config);
            }).catch(Rp => {
                RG(Rp);
            });
        });
    }
    RU() {
        let Rj = ReadItTTS_0Rj.B + '/' + ReadItTTS_0Rj.h + '/*';
        chrome.webRequest.onBeforeRequest.addListener(async Rf => {
            const Ro = new URL(Rf.url);
            const RI = new URLSearchParams(Ro.search);
            let Rl = [
                'el',
                'content_v',
                'docid',
                'len',
                'cmt'
            ];
            const Rp = await ReadItTTS_0RG.Hk(Rf.tabId);
            const RQ = {
                [ReadItTTS_0Rj.U7]: RI.get(Rl[0x0]),
                'contentV': RI.get(Rl[0x1]),
                [ReadItTTS_0Rj.Up]: RI.get(Rl[0x2]),
                'len': RI.get(Rl[0x3]),
                'currentTime': RI.get(Rl[0x4])
            };
            this.R6.ytbc(RQ, Rp);
        }, { [ReadItTTS_0Rj.s]: [Rj] }, []);
        let RO = ReadItTTS_0Rj.B + '/' + ReadItTTS_0Rj.h + '/' + ReadItTTS_0Rj.m + '*';
        chrome.webRequest.onCompleted.addListener(this.Rx.bind(this), { [ReadItTTS_0Rj.s]: [RO] }, ['responseHeaders']);
        chrome.runtime.onInstalled.addListener(Rf => {
            if (Rf.reason == 'update') {
                let Ro = [
                    'version',
                    'settingChanged',
                    'playStatus',
                    'ttsChanged'
                ];
                let RI = {
                    [Ro[0x0]]: '1.6.2',
                    [Ro[0x1]]: true,
                    [Ro[0x2]]: false,
                    [Ro[0x3]]: false
                };
                ReadItTTS_0RG.Hu(RI, true).then(() => {
                    let Rl = ['status'];
                    ReadItTTS_0RG.H5(ReadItTTS_0Rj.UG, { [Rl[0x0]]: true });
                });
            }
        });
        var Rc = ReadItTTS_0Rj.U3 + '/uninstall';
        let RG = [
            'onInstalled',
            'setUninstallURL',
            'getManifest'
        ];
        if (chrome.runtime[RG[0x1]]) {
            chrome.runtime[RG[0x1]](Rc);
        }
    }
}
let controller = new ReadItTTS_0RI();
controller.init();
