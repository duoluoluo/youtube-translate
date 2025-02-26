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

class ReadItTTS_0Wm {
    static a = 'subtitleIndex';
    static n = 0xa;
    static A = 0x64;
    static V = 0xa;
    static k = 'timedtext';
    static L = '*://*.youtube.com';
    static b = '(?:https|http)://\\w*\\.youtube\\.com';
    static W = 'stats/watchtime?*';
    static U = 'watch';
    static y = 'cache';
    static G = /[؟؛.。;；:：…?!！？]+/gu;
    static J = /[؟،؛\.。，,;；:：、…\?!！？「」『』・।|]+/gu;
    static T = /[【】\[\]\(\)（）\{\}“”"　…\-—<>]+/gu;
    static q = /\s+/gu;
    static R = /\d+[,，\.]\d+/u;
    static H = /<\s*(\d+)\s*-\s*(\d+)\s*>(.*?)(?=<[^>]*?>|$)/sg;
    static d = /<\s*\d+\s*-\s*\d+\s*>/g;
    static w = /(?:\(|\[|（|「|『).{1,20}(?:\)|\]|）|」|』)/g;
    static B = 'completed';
    static u = 'speech.platform.bing.com';
    static E = 0x5;
    static F = 'adunit';
    static C = 'vs';
    static Y = ['TTSD'];
    static z = 0.5;
    static l = 'fix_sub';
    static h = 0.5;
    static o = 0.06;
    static s = 'currentTime';
    static i = 'ci';
    static S = 'dvl';
    static DEBUG = {
        [ReadItTTS_0Wm.Y[0x0]]: { 'default': false },
        'K': { 'default': true },
        'default': true
    };
    static TRACE = { 'default': false };
    static ERROR = { 'default': true };
    static P = 'user';
    static I = 'processSub';
    static t = false;
    static c = 0.8;
    static v = 0.65;
    static N = 0.3;
    static D = 'playbackRate';
    static m = 0x3;
    static r = 0x1388;
    static p = 'pg';
    static M = 'TTSPlugin';
    static X = 'TTSPluginA';
    static x = 'urls';
    static URL = 'url';
    static f = 'sub_url';
    static e = 'api';
    static Z = 'value';
    static Q = 'st';
    static g = 'psd';
    static j = 'server';
    static Q = 'st';
    static O = 'idx';
    static a0 = 'arr';
    static a1 = 'tc';
    static a2 = 'content';
    static a3 = 'https://www.readit.cloud';
    static a4 = 'll';
    static a5 = 'tcl';
    static a6 = 'len';
    static a7 = 'type';
    static a8 = 'client_id';
    static a9 = 'language';
    static aa = [
        'tlang',
        'lang'
    ];
    static an = 'accountStatus';
    static aA = 'visitorId';
    static aV = 'usage';
    static ak = 'time';
    static aL = 'voice';
    static ab = 'time1';
    static aW = 'time2';
    static aU = 'day';
    static ay = 'text_length';
    static aG = 'ut';
    static aJ = 'action';
    static aT = 'extension_id';
    static aq = 'data';
    static aR = 'TTSPlayingStatus';
    static aH = 'Updated';
    static ad = 'TTSTranslation_page';
    static aw = 'TTSTranslation_settings';
    static aB = 'TTSsu';
    static au = 'ReaditTTSt';
    static aE = 'videoId';
    static aF = 'targetLang';
    static aC = 'sourceLang';
    static aY = 'tab';
    static source = 'source';
    static az = 'v';
    static al = 'tlang';
    static ah = 'lang';
    static ao = 0x3;
    static as = 'events';
    static ai = 'baseUrl';
    static aS = 'stats/qoe?*';
    static aK = 'docid';
    static aP = 'uid';
    static aI = 'ad';
    static at = 'main';
    static ac = 'con';
    static av = 'detailpage';
    static aN = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
    static GET = 'get';
}
class ReadItTTS_0Wr {
    constructor(Wm, Wr = '', Wp = null) {
        this.aD = Wm;
        this.map = new Map();
        this.name = Wr;
        this.am = Wp;
    }
    push(Wm, Wr) {
        let Wp = Array.from(this.map.keys());
        if (Wp.length >= this.aD) {
            this.remove(Wp[0x0]);
        }
        this.map.set(Wm, Wr);
    }
    get(Wm, Wr = null) {
        let Wp = this.map.get(Wm);
        if (Wp == null) {
            Wp = Wr;
        }
        return Wp;
    }
    getKey(Wm) {
        for (let Wr of this.map.keys()) {
            if (this.map.get(Wr) == Wm) {
                return Wr;
            }
        }
        return null;
    }
    shift() {
        let Wm = null;
        let Wr = this.map.keys().next().value;
        if (Wr != null) {
            Wm = this.get(Wr);
            this.remove(Wr);
        }
        return Wm;
    }
    ar() {
        return JSON.stringify(this.ap());
    }
    ap() {
        let Wm = {};
        for (let [Wp, WM] of this.map) {
            if (this.am != null) {
                Wm[Wp] = this.am.ap(WM);
            } else {
                Wm[Wp] = WM;
            }
        }
        let Wr = {
            'name': this.name,
            'aD': this.aD,
            'map': Wm
        };
        return Wr;
    }
    update(Wm) {
        if (typeof Wm === 'string') {
            Wm = JSON.parse(Wm);
        }
        this.aD = Wm.aD;
        this.name = Wm.name;
        let Wr = Object.keys(Wm.map);
        for (let Wp of Wr) {
            if (this.am != null) {
                this.map.set(Wp, this.am.aM(Wm.map[Wp]));
            } else {
                this.map.set(Wp, Wm.map[Wp]);
            }
        }
    }
    static aM(Wm) {
        let Wr = new ReadItTTS_0Wr(Wm.aD, Wm.name);
        Wr.update(Wm);
        return Wr;
    }
    remove(Wm) {
        this.map.delete(Wm);
    }
    contains(Wm) {
        return this.map.has(Wm);
    }
    clear() {
        this.map.clear();
    }
    size() {
        return this.map.size;
    }
}
class ReadItTTS_0Wp {
    constructor(Wm, Wr = '', Wp = 0x0, WM = null) {
        this.aD = Wm;
        this.aX = [];
        this.name = Wr;
        this.ax = Wp;
        this.am = WM;
    }
    push(Wm) {
        if (this.aX.length >= this.aD) {
            this.aX.shift();
        }
        this.aX.push(Wm);
    }
    remove(Wm) {
        let Wr = this.aX.indexOf(Wm);
        if (Wr > -0x1) {
            this.aX.splice(Wr, 0x1);
        }
    }
    ar() {
        return JSON.stringify(this.ap());
    }
    ap() {
        let Wm = {
            'name': this.name,
            'aD': this.aD,
            'ax': this.ax,
            'aX': this.aX
        };
        return Wm;
    }
    update(Wm) {
        if (typeof Wm === 'string') {
            Wm = JSON.parse(Wm);
        }
        this.aD = Wm.aD;
        this.name = Wm.name;
        this.ax = Wm.ax;
        if (this.am != null) {
            this.aX = Wm.aX.map(Wr => this.am.aM(Wr));
        } else {
            this.aX = [...Wm.aX];
        }
    }
    static aM(Wm, Wr = null) {
        let Wp = new ReadItTTS_0Wp(Wm.aD, Wm.name, Wm.ax, Wr);
        Wp.update(Wm);
        return Wp;
    }
    clear(Wm = 0x1) {
        let Wr = Math.round(Wm * this.aX.length);
        while (Wr > 0x0 && this.aX.length > 0x0) {
            this.aX.shift();
            Wr--;
        }
    }
    get(Wm) {
        if (Wm >= 0x0 && Wm < this.aX.length) {
            return this.aX[Wm];
        }
        return null;
    }
    indexOf(Wm) {
        return this.aX.indexOf(Wm);
    }
    filter(Wm) {
        let Wr = [];
        for (let Wp of this.aX) {
            if (Wm(Wp)) {
                Wr.push(Wp);
            }
        }
        return Wr;
    }
    find(Wm) {
        for (let Wr of this.aX) {
            if (Wm(Wr)) {
                return Wr;
            }
        }
        return null;
    }
    af() {
        let Wm = this.ax;
        if (this.aX.length > 0x0) {
            Wm = this.aX.reduce((Wr, Wp) => Wr + Wp, 0x0) / this.aX.length;
        }
        return Wm;
    }
    ae() {
        return this.aX.length >= this.aD;
    }
    size() {
        return this.aX.length;
    }
    shift() {
        return this.aX.shift();
    }
    pop() {
        return this.aX.pop();
    }
    aZ() {
        return this.aX.length == 0x0;
    }
}
class ReadItTTS_0WM {
    static aQ = false;
    static ag(Wm, Wr) {
        for (let Wp in Wr) {
            if (ReadItTTS_0WM.aj(Wm, Wp)) {
                return Wr[Wp];
            }
        }
        return Wr.default;
    }
    static aO() {
        let Wm = false;
        let Wr = new Error().stack;
        Wr = Wr.split('\n');
        for (let Wp of Wr) {
            let WM = Wp.match(/at (.+)\s\((.+):(\d+):(\d+)\)/);
            if (WM) {
                let WX = WM[0x1];
                let Wx = WX.split('.');
                if (Wx.length > 0x1) {
                    if (Wm) {
                        return Wx;
                    } else {
                        if (Wx[0x0] == ReadItTTS_0WM.name && [
                                this.error.name,
                                this.log.name,
                                this.trace.name
                            ]['includes'](Wx[0x1])) {
                            Wm = true;
                        }
                    }
                }
            }
        }
        return null;
    }
    static n0(Wm, Wr = null, Wp = null, WM = 'json3') {
        const WX = new URL(Wm);
        const Wx = WX.searchParams;
        let Wf = [
            'tlang',
            'lang',
            'fmt'
        ];
        if (Wr != null) {
            Wx.set(Wf[0x0], Wr);
        } else {
            Wx.delete(Wf[0x0]);
        }
        if (Wp != null) {
            Wx.set(Wf[0x1], Wp);
        }
        Wx.set(Wf[0x2], WM);
        return WX.toString();
    }
    static n1(Wm, Wr, Wp) {
        let WM = null;
        switch (Wp) {
        case 'DEBUG':
            if (Wm) {
                if (ReadItTTS_0Wm.DEBUG[Wm] != null) {
                    if (ReadItTTS_0Wm.DEBUG[Wm][Wr] != null) {
                        WM = ReadItTTS_0Wm.DEBUG[Wm][Wr];
                    } else if (ReadItTTS_0Wm.DEBUG[Wm]['default'] != null) {
                        WM = ReadItTTS_0Wm.DEBUG[Wm]['default'];
                    }
                }
            }
            if (WM == null) {
                WM = ReadItTTS_0Wm.DEBUG.default;
            }
            break;
        case 'ERROR':
            if (Wm) {
                if (ReadItTTS_0Wm.ERROR[Wm] != null) {
                    if (ReadItTTS_0Wm.ERROR[Wm][Wr] != null) {
                        WM = ReadItTTS_0Wm.ERROR[Wm][Wr];
                    } else if (ReadItTTS_0Wm.ERROR[Wm]['default'] != null) {
                        WM = ReadItTTS_0Wm.ERROR[Wm]['default'];
                    }
                }
            }
            if (WM == null) {
                WM = ReadItTTS_0Wm.ERROR.default;
            }
            break;
        case 'TRACE':
            if (Wm) {
                if (ReadItTTS_0Wm.TRACE[Wm] != null) {
                    if (ReadItTTS_0Wm.TRACE[Wm][Wr] != null) {
                        WM = ReadItTTS_0Wm.TRACE[Wm][Wr];
                    } else if (WM = ReadItTTS_0Wm.TRACE[Wm]['default'] != null) {
                        WM = ReadItTTS_0Wm.TRACE[Wm]['default'];
                    }
                }
            }
            if (WM == null) {
                WM = ReadItTTS_0Wm.TRACE.default;
            }
            break;
        }
        return WM;
    }
    static error(Wm) {
        const Wr = ReadItTTS_0WM.aO();
        if (Wr && ReadItTTS_0WM.n1(Wr[0x0], Wr[0x1], 'ERROR')) {
            console.error(this.getCurrentTime() + ' - [' + Wr[0x0] + ', ' + Wr[0x1] + '] ' + Wm);
        } else {
            console.error(Wm);
        }
    }
    static trace(Wm) {
        const Wr = ReadItTTS_0WM.aO();
        if (Wr && ReadItTTS_0WM.n1(Wr[0x0], Wr[0x1], 'TRACE')) {
            console.log(this.getCurrentTime() + ' - [' + Wr[0x0] + ', ' + Wr[0x1] + '] ' + Wm);
        }
    }
    static log(Wm, Wr = null) {
        if (Wr == null) {
            Wr = ReadItTTS_0WM.aO();
        }
        if (Wr && ReadItTTS_0WM.n1(Wr[0x0], Wr[0x1], 'DEBUG')) {
            console.log(this.getCurrentTime() + ' - [' + Wr[0x0] + ', ' + Wr[0x1] + '] ' + Wm);
        }
    }
    static assert(condition, Wm) {
        if (!condition) {
            throw new Error(Wm || 'Assertion failed');
        }
    }
    static n2(Wm) {
        return Wm.pendingUrl || Wm.url;
    }
    static n3(Wm, Wr = null) {
        return new Promise((Wp, WM) => {
            chrome.storage.local.get([Wm], function (WX) {
                let Wx = Wr;
                if (WX && WX[Wm]) {
                    Wx = WX[Wm];
                    if (Wr !== null) {
                        if (Array.isArray(WX[Wm])) {
                            Wx = [
                                ...Wr,
                                ...WX[Wm]
                            ];
                        } else if (typeof WX[Wm] == 'object') {
                            Wx = {
                                ...Wr,
                                ...WX[Wm]
                            };
                        }
                    }
                }
                Wp(Wx);
            });
        });
    }
    static n4(Wm, Wr) {
        return new Promise(async (Wp, WM) => {
            if (Wr == null) {
                chrome.storage.local.remove([Wm], function () {
                    var WX = chrome.runtime.lastError;
                    if (WX) {
                    }
                    Wp();
                });
            } else {
                chrome.storage.local.set({ [Wm]: Wr }, function () {
                    Wp();
                });
            }
        });
    }
    static n5(config) {
        let Wm = config.voice != null && config.voice.trim().length > 0x0 && config.language != null && config.language.trim().length > 0x0;
        return Wm;
    }
    static n6() {
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
        let Wm = 'language_name';
        for (let Wr in Language.COUNTRIES) {
            if (ReadItTTS_0WM.aj(Wr, language)) {
                return Language.COUNTRIES[Wr][Wm];
            }
        }
    }
    static n7() {
        let Wm = {
            'play_volume': 0x1,
            'pitch': 0x0,
            'voice': null,
            'language': ReadItTTS_0WM.getLanguage(navigator.language || navigator.userLanguage),
            'show_my_language_only': true,
            'scroll_before_reading_page': false,
            'show_tts_floating_icon': 'Normal',
            [ReadItTTS_0Wm.a5]: '3-15-60',
            'floating_icon_position': 0x96,
            'floating_icon_position_left': false,
            'scroll_to_highlighted_text': true,
            [ReadItTTS_0Wm.S]: '1.20-1.1',
            'dynamic_volume': true,
            'volume_rate': 0.13,
            'auto_play': false
        };
        return Wm;
    }
    static async n8() {
        let Wm = ReadItTTS_0WM.n7();
        let Wr = await ReadItTTS_0WM.n3(ReadItTTS_0Wm.M, Wm);
        let Wp = await ReadItTTS_0WM.n9();
        Wr[ReadItTTS_0Wm.a5] = Wp[ReadItTTS_0Wm.a5] != null ? Wp[ReadItTTS_0Wm.a5] : Wm[ReadItTTS_0Wm.a5];
        let WM = Wr[ReadItTTS_0Wm.S];
        let WX = Wp[ReadItTTS_0Wm.S];
        let Wx = WX.findIndex(WZ => WZ == WM);
        Wx = Wx == -0x1 ? WX.findIndex(WZ => WZ != null) : Wx;
        Wr[ReadItTTS_0Wm.S] = WX[Wx];
        let Wf = Wp.pitch;
        let We = Wf.findIndex(WZ => WZ == Wr.pitch);
        We = We == -0x1 ? Wf.findIndex(WZ => WZ != null) : We;
        Wr.pitch = Wf[We];
        return Wr;
    }
    static n9() {
        let Wm = {
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
        return ReadItTTS_0WM.n3(ReadItTTS_0Wm.X, Wm);
    }
    static async na(Wm) {
        if (Wm && Wm[ReadItTTS_0Wm.aP] != null) {
            let Wr = await ReadItTTS_0WM.nn();
            Wr[ReadItTTS_0Wm.aP] = Wm[ReadItTTS_0Wm.aP];
            await ReadItTTS_0WM.n4(ReadItTTS_0Wm.P, Wr);
        }
    }
    static async nA() {
        let Wm = await ReadItTTS_0WM.n3(ReadItTTS_0Wm.X, null);
        if (Wm != null) {
            return Wm;
        }
        return new Promise((Wr, Wp) => {
            let WM = {};
            ReadItTTS_0WM.nn().then(WX => {
                if (WX != null && WX[ReadItTTS_0Wm.aP] != null) {
                    WM[ReadItTTS_0Wm.aP] = WX[ReadItTTS_0Wm.aP];
                }
            }).finally(() => {
                WM[ReadItTTS_0Wm.aT] = ReadItTTS_0WM.nV();
                const WX = {
                    'method': 'POST',
                    'headers': { 'Content-Type': 'application/json' },
                    'body': JSON.stringify(WM)
                };
                let Wx = ReadItTTS_0Wm.a3 + '/config/get';
                ReadItTTS_0WM.nk(Wx, WX, 0x1, 0x1f40).then(async Wf => {
                    if (Wf.ok && Wf.parsedData?.['data'] != null) {
                        await ReadItTTS_0WM.na(Wf.parsedData);
                        Wm = Wf.parsedData.data;
                        await ReadItTTS_0WM.n4(ReadItTTS_0Wm.X, Wm);
                    }
                }).finally(async () => {
                    Wr(Wm);
                });
            });
        });
    }
    static async nL(Wm = {}, Wr = true) {
        if (Wm) {
            let Wp = [
                'version',
                'settingChanged',
                'playStatus',
                'ttsChanged'
            ];
            if (Wm[Wp[0x1]] || Wr) {
                await ReadItTTS_0WM.nb(null);
                await ReadItTTS_0WM.n4(ReadItTTS_0Wm.X, null);
            }
            if (Wm[Wp[0x2]] || Wr) {
                await ReadItTTS_0WM.n4(ReadItTTS_0Wm.aR, null);
            }
            if (Wm[Wp[0x3]] || Wr) {
                await ReadItTTS_0WM.n4(ReadItTTS_0Wm.C, null);
            }
            if (Wr) {
                await ReadItTTS_0WM.n4(ReadItTTS_0Wm.aB, null);
                await ReadItTTS_0WM.n4(ReadItTTS_0Wm.au, null);
                await ReadItTTS_0WM.n4(ReadItTTS_0Wm.aV, null);
                await ReadItTTS_0WM.n4(ReadItTTS_0Wm.ad, null);
                await ReadItTTS_0WM.n4(ReadItTTS_0Wm.aw, null);
            }
        }
    }
    static async nb(config) {
        await ReadItTTS_0WM.n4(ReadItTTS_0Wm.M, config);
    }
    static async nW(Wm, Wr = '*', Wp = '*', config = null, WM = null, WX = true, isSameLanguage = true) {
        Wr = Wr == null || Wr.trim() == 0x0 ? null : Wr;
        Wp = Wp == null || Wp.trim() == 0x0 ? null : Wp;
        if (WM == null) {
            WM = await ReadItTTS_0WM.n3(ReadItTTS_0Wm.au, []);
        }
        let Wx = WM.filter(Wf => {
            let We = Wf[ReadItTTS_0Wm.aE] === Wm;
            We &= Wf[ReadItTTS_0Wm.aF] === Wr || Wr == '*' || isSameLanguage && ReadItTTS_0WM.aj(Wf[ReadItTTS_0Wm.aF], Wr);
            We &= Wf[ReadItTTS_0Wm.aC] === Wp || Wp == '*' || isSameLanguage && ReadItTTS_0WM.aj(Wf[ReadItTTS_0Wm.aC], Wp);
            We &= !WX || Wf[ReadItTTS_0Wm.g] === true || Wf[ReadItTTS_0Wm.g] === 'true';
            We &= config == null || Wf[ReadItTTS_0Wm.ac] === JSON.stringify(config);
            return We;
        });
        return Wx;
    }
    static async nU(Wm, Wr, Wp, config = null, WM = null, WX = false) {
        let Wx = await ReadItTTS_0WM.nW(Wm, Wr, Wp, config, WM, WX);
        return Wx.length > 0x0 ? Wx[0x0] : null;
    }
    static async nk(Wm, Wr = null, Wp = 0x3, WM = 0xbb8, WX = true) {
        let Wx = {
            'ok': false,
            'status': 0x0,
            'statusText': '',
            'response': null
        };
        while (Wp > 0x0) {
            let Wf = null;
            try {
                const controller = new AbortController();
                Wf = setTimeout(() => {
                    controller.abort();
                    Wf = null;
                }, WM);
                let We = { 'signal': controller.signal };
                if (Wr != null) {
                    We = {
                        ...We,
                        ...Wr
                    };
                }
                let WZ = await fetch(Wm, We);
                clearTimeout(Wf);
                Wx = { 'ok': WZ.ok };
                if (Wx.ok) {
                    Wf = null;
                    try {
                        Wx.parsedData = WX ? await WZ.json() : await WZ.text();
                    } catch (WQ) {
                        Wx.parsedData = null;
                    }
                    return Wx;
                } else {
                    if ([
                            0x198,
                            0x1f4,
                            0x1f6,
                            0x1f7,
                            0x1f8
                        ]['includes'](WZ.status)) {
                        throw new Error('Error in response.');
                    } else {
                        Wx.parsedData = null;
                        Wx.ok = true;
                        return Wx;
                    }
                }
            } catch (Wg) {
                if (Wg.name == 'AbortError') {
                    console.log('Timeout, retry...');
                    Wx.statusText = 'Timeout';
                } else {
                    Wx.statusText = Wg.message ? Wg.message : 'Unknown error';
                    console.log('Error fetching data, retry...');
                }
                if (Wf != null) {
                    clearTimeout(Wf);
                    Wf = null;
                }
            } finally {
                Wp--;
            }
        }
        return Wx;
    }
    static ny(Wm) {
        let Wr = new URL(Wm);
        return Wr.hostname.includes('youtube.com');
    }
    static nG(Wm, Wr = false) {
        Wm.events = Wm?.['events']['filter'](Wp => Wp?.['segs'] && (Wr || Boolean((' ' + Wp?.['segs']['map'](WM => WM.utf8).toString()).trim())));
    }
    static nJ(Wm, Wr = true) {
        let Wp = '';
        let WM = Wm.events;
        for (let WX = 0x0; WX < WM.length; WX++) {
            const Wx = WM[WX];
            let {
                segs: segs = [],
                tStartMs: tStartMs,
                dDurationMs: dDurationMs
            } = Wx;
            if (WX < WM.length - 0x1) {
                const We = WM[WX + 0x1];
                if (We.tStartMs < tStartMs + dDurationMs) {
                    dDurationMs = We.tStartMs - tStartMs;
                }
            }
            const Wf = '<' + tStartMs + ' - ' + dDurationMs + '>';
            if (Wr) {
                Wp += Wf;
            } else {
                Wp += ' ';
            }
            segs.map(WZ => {
                Wp += WZ.utf8.toString();
            });
        }
        return Wp;
    }
    static nT() {
        const Wm = new Date();
        const Wr = Wm.getFullYear();
        const Wp = String(Wm.getMonth() + 0x1).padStart(0x2, '0');
        const WM = String(Wm.getDate()).padStart(0x2, '0');
        const WX = Wr + '-' + Wp + '-' + WM;
        return WX;
    }
    static getCurrentTime() {
        const Wm = new Date();
        let Wr = ReadItTTS_0WM.nT();
        const Wp = String(Wm.getHours()).padStart(0x2, '0');
        const WM = String(Wm.getMinutes()).padStart(0x2, '0');
        const seconds = String(Wm.getSeconds()).padStart(0x2, '0');
        const miliSeconds = String(Wm.getMilliseconds()).padStart(0x3, '0');
        const WX = Wr + ': ' + Wp + ':' + WM + ':' + seconds + ':' + miliSeconds;
        return WX;
    }
    static async nq(Wm, Wr) {
        if (Wr == null) {
            let We = new Error('qualityScore is null');
            We.reason = 'null';
            throw We;
        }
        const [Wp, WM, WX] = ReadItTTS_0WM.nR(Wm);
        let Wx = await ReadItTTS_0WM.n3(ReadItTTS_0Wm.au, []);
        let Wf = await ReadItTTS_0WM.nU(Wp, WM, WX, null, Wx);
        Wf[ReadItTTS_0Wm.nH] = Wr;
        await ReadItTTS_0WM.n4(ReadItTTS_0Wm.au, Wx);
    }
    static async nd(Wm = false) {
        let Wr = ReadItTTS_0WM.n3(ReadItTTS_0Wm.a4, null);
        if (Wr == null && Wm) {
            ReadItTTS_0WM.n4(ReadItTTS_0Wm.a4, {});
            return {};
        }
        return Wr;
    }
    static async releaseLock() {
        let Wm = ReadItTTS_0WM.n3(ReadItTTS_0Wm.a4, null);
        if (Wm != null) {
            ReadItTTS_0WM.n4(ReadItTTS_0Wm.a4, null);
        }
    }
    static async nw(Wm, content, Wr = false, config = null, Wp = null) {
        if (content == null) {
            let WQ = new Error('content is null');
            WQ.reason = 'null';
            throw WQ;
        }
        const [WM, WX, Wx] = ReadItTTS_0WM.nR(Wm);
        let Wf = await ReadItTTS_0WM.n3(ReadItTTS_0Wm.au, []);
        const We = await ReadItTTS_0WM.nU(WM, WX, Wx, config, Wf, Wr);
        if (We) {
            return;
        }
        Wf.sort((Wg, Wj) => {
            return Wg.time - Wj.time;
        });
        if (Wf.length > 0x14) {
            Wf.splice(0x0, Wf.length - 0x14);
        }
        const WZ = {
            [ReadItTTS_0Wm.URL]: Wm,
            [ReadItTTS_0Wm.aE]: WM,
            [ReadItTTS_0Wm.aC]: Wx,
            [ReadItTTS_0Wm.aF]: WX,
            [ReadItTTS_0Wm.a2]: content,
            [ReadItTTS_0Wm.g]: Wr,
            [ReadItTTS_0Wm.ak]: Date.now(),
            [ReadItTTS_0Wm.ac]: config == null ? null : JSON.stringify(config),
            [ReadItTTS_0Wm.nH]: Wp
        };
        Wf.push(WZ);
        await ReadItTTS_0WM.n4(ReadItTTS_0Wm.au, Wf);
    }
    static nB(content, targetLanguage) {
        if (ReadItTTS_0WM.nu(targetLanguage)) {
            content = content.replaceAll('呃', '嗯');
        }
        if (ReadItTTS_0WM.nE(targetLanguage)) {
            content = content.replaceAll('\n', '');
        } else {
            content = content.replaceAll('\n', ' ');
        }
        content = content.replaceAll(/\s+/g, ' ');
        return content;
    }
    static nF(Wm, Wr, Wp) {
        let WM = 0x0;
        let WX = 0x0;
        let Wx;
        while (WM < Wp) {
            Wx = Wm.indexOf(Wr, WX);
            if (Wx === -0x1) {
                break;
            }
            WX = Wx + Wr.length;
            WM++;
        }
        if (WM < Wp) {
            return -0x1;
        }
        return [
            Wx,
            WM
        ];
    }
    static getJsonByPath(Wm, Wr) {
        const Wp = Wr.split('.');
        let WM = Wm;
        for (const WX of Wp) {
            if (WM[WX]) {
                WM = WM[WX];
            } else {
                return null;
            }
        }
        return WM;
    }
    static setJsonByPath(Wm, Wr, Wp) {
        var WM = Wr.split('.');
        var WX = Wm;
        for (var Wx = 0x0; Wx < WM.length; Wx++) {
            if (Wx === WM.length - 0x1) {
                WX[WM[Wx]] = Wp;
            } else if (!(WM[Wx] in WX)) {
                WX[WM[Wx]] = {};
            }
            WX = WX[WM[Wx]];
        }
    }
    static nn() {
        return ReadItTTS_0WM.n3(ReadItTTS_0Wm.P, {});
    }
    static getTTSLanguageItem(Wm, tts_user_language) {
        if (Wm in tts_user_language) {
            return tts_user_language[Wm];
        } else {
            for (const Wr in tts_user_language) {
                if (ReadItTTS_0WM.aj(Wm, Wr)) {
                    return tts_user_language[Wr];
                }
            }
        }
        return null;
    }
    static nE(Wm) {
        if (Wm) {
            const Wr = [
                'ja',
                'zh',
                'th'
            ];
            const Wp = Wm.split('-')[0x0];
            return Wr.includes(Wp.toLowerCase());
        }
        return false;
    }
    static nu(Wm) {
        if (Wm) {
            Wm = Wm.split('-')[0x0];
        }
        return Wm === 'zh';
    }
    static nC(Wm, Wr) {
        return Wm && Wr && Wm.toLocaleLowerCase() === Wr.toLocaleLowerCase();
    }
    static nY(Wm) {
        return new Promise((Wr, Wp) => {
            chrome.tabs.query({}, tabs => {
                let WM = [];
                for (const WX of tabs) {
                    if (ReadItTTS_0WM.n2(WX) == Wm) {
                        WM.push(WX);
                    }
                }
                ;
                Wr(WM);
            });
        });
    }
    static nz(Wm) {
        return new Promise((Wr, Wp) => {
            chrome.tabs.query({}, tabs => {
                let WM = null;
                for (const WX of tabs) {
                    if (WX.id == Wm) {
                        WM = WX;
                        break;
                    }
                }
                ;
                Wr(WM);
            });
        });
    }
    static nl(Wm) {
        try {
            const Wr = new URL(Wm);
            if (Wr.protocol === 'chrome-extension:') {
                return true;
            }
        } catch (Wp) {
        }
        return false;
    }
    static nh() {
        return new Promise((Wm, Wr) => {
            const Wp = [
                'active',
                'currentWindow'
            ];
            chrome.tabs.query({
                [Wp[0x0]]: true,
                [Wp[0x1]]: true
            }, tabs => {
                if (tabs.length > 0x0) {
                    Wm(tabs[0x0]);
                } else {
                    Wm(null);
                }
            });
        });
    }
    static aj(Wm, Wr) {
        if (Wm == null || Wr == null) {
            return false;
        }
        Wm = ReadItTTS_0WM.getLanguage(Wm);
        Wr = ReadItTTS_0WM.getLanguage(Wr);
        return Wm === Wr;
    }
    static getLanguage(Wm) {
        return Wm ? Wm.toLocaleLowerCase().split('-')[0x0] : null;
    }
    static containsSameL(languages, language) {
        for (const Wm of languages) {
            if (ReadItTTS_0WM.aj(Wm, language)) {
                return true;
            }
        }
        return false;
    }
    static no(Wm) {
        if (Wm) {
            Wm = Wm.toLowerCase();
            return Wm.indexOf('multilingual') >= 0x0 || Wm.indexOf('multi-lingual') >= 0x0 || Wm.indexOf('multilingual') >= 0x0;
        }
    }
    static nR(Wm) {
        let Wr = ['searchParams'];
        let Wp = new URL(Wm)[Wr[0x0]];
        return [
            Wp.get('v'),
            Wp.get('tlang'),
            Wp.get('lang')
        ];
    }
    static async ns(Wm = true) {
        const config = await ReadItTTS_0WM.n8(true);
        if (!config.voice || !config.language) {
            return null;
        }
        let userLanguage = ReadItTTS_0WM.ni();
        if (config.language) {
            userLanguage = config.language;
        }
        if (Wm) {
            let Wr = ReadItTTS_0WM.getTTSLanguageItem(userLanguage, Language.COUNTRIES);
            const yt_language = Wr ? Wr.yt : null;
            return yt_language;
        } else {
            return userLanguage;
        }
    }
    static ni() {
        return navigator.language || navigator.userLanguage;
    }
    static nS() {
        return navigator.languages;
    }
    static nK(Wm) {
        const Wr = /^(http|https):\/\//;
        const localHostPattern = /^(http|https):\/\/localhost/;
        const Wp = /^(http|https):\/\/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/;
        Wm = Wm.toLocaleLowerCase();
        return Wr.test(Wm) && !Wp.test(Wm);
    }
    static containsOnlyWhitespace(Wm) {
        return !Wm || /^\s*$/['test'](Wm);
    }
    static nP(Wm) {
        if (!Array.isArray(Wm) || Wm.length === 0x0) {
            return null;
        }
        let Wr = Wm[0x0];
        for (let Wp = 0x1; Wp < Wm.length; Wp++) {
            let WM = Wm[Wp];
            if (WM == null) {
                return null;
            }
            while (Wr !== WM && !Wr.contains(WM)) {
                Wr = Wr.parentNode;
                if (Wr === null) {
                    return null;
                }
            }
        }
        return Wr;
    }
    static nI(Wm) {
        let Wr = 0x0;
        if (Wm.length == 0x0)
            return Wr;
        for (let Wp = 0x0; Wp < Wm.length; Wp++) {
            let WM = Wm.charCodeAt(Wp);
            Wr = (Wr << 0x5) - Wr + WM;
            Wr = Wr & Wr;
        }
        return Wr;
    }
    static nV() {
        let Wm = ['getManifest'];
        var manifestData = chrome.runtime[Wm[0x0]]();
        return manifestData.version;
    }
    static nt(Wm, Wr) {
        Wm = Wm.replace(ReadItTTS_0Wm.J, Wr);
        Wm = Wm.replace(ReadItTTS_0Wm.G, Wr);
        Wm = Wm.replace(ReadItTTS_0Wm.T, Wr);
        Wm = Wm.replace(/\s+/g, Wr);
        Wm = Wm.trim();
        return Wm;
    }
}
const ReadItI18nData = {};
class ReadItTTS_0WX {
    static nc = 'tts-data-i18n';
    constructor(tts_user_language, Wm) {
        this.translations = null;
        this.language = 'en';
        this.targetLanguage = ReadItTTS_0WM.ni();
        this.nv = {};
        this.tts_user_language = tts_user_language;
        this.nN = Wm;
        this.storageKey = Wm ? ReadItTTS_0Wm.ad : ReadItTTS_0Wm.aw;
    }
    async reset() {
        await ReadItTTS_0WM.n4(ReadItTTS_0Wm.ad, null);
        await ReadItTTS_0WM.n4(ReadItTTS_0Wm.aw, null);
    }
    async translateDocument(Wm) {
        try {
            let Wr = Array.from(Wm.querySelectorAll('[' + ReadItTTS_0WX.nc + ']'));
            let Wp = Wr.filter(WX => {
                return WX.nodeName && WX.nodeName.toLowerCase() != 'optgroup';
            });
            let WM = Wr.filter(WX => WX.nodeName && WX.nodeName.toLowerCase() == 'optgroup');
            this.translateElements(Wp);
            this.transVoices(WM);
        } catch (WX) {
            console.error(WX);
        }
    }
    transVoices(Wm) {
        if (Wm && Wm.length > 0x0) {
            let Wr = chrome.i18n.getMessage('voices');
            let Wp = /<\s*(\d+)\s*-\s*(\w+)\s*>([^<]+?)(?=<|$)/gs;
            let WM;
            while ((WM = Wp.exec(Wr)) != null) {
                let WX = parseInt(WM[0x1]);
                let language_code = WM[0x2]['trim']();
                let Wx = WM[0x3]['trim']();
                let Wf = Wm.find(We => We.getAttribute('value') == language_code);
                if (Wf) {
                    this.translateElement(Wf, Wx);
                }
            }
        }
    }
    translateElements(Wm) {
        try {
            for (let Wr of Wm) {
                this.translateElement(Wr);
            }
        } catch (Wp) {
            console.error(Wp);
        }
    }
    translateElement(Wm, Wr = null) {
        let i18nAttr = Wm.getAttribute(ReadItTTS_0WX.nc);
        let Wp = [i18nAttr];
        if (i18nAttr.includes('[')) {
            Wp = JSON.parse(i18nAttr);
        }
        for (let WM of Wp) {
            let WX = null;
            let Wx;
            if (WM.includes('->')) {
                [Wx, WX] = WM.split('->');
            } else {
                Wx = WM;
            }
            let i18nValue = Wr == null ? chrome.i18n.getMessage(Wx) : Wr;
            if (i18nValue) {
                if (WX) {
                    Wm.setAttribute(WX, i18nValue);
                } else {
                    this.nD(Wm, i18nValue);
                }
            }
        }
    }
    nD(Wm, Wr) {
        if (Wr != null) {
            for (let Wp = 0x0; Wp < Wm.childNodes.length; Wp++) {
                const WM = Wm.childNodes[Wp];
                if (WM.nodeType == Node.TEXT_NODE && WM.textContent.trim().length > 0x0) {
                    WM.textContent = Wr;
                    break;
                }
            }
        }
    }
}
class ReadItTTS_0Wx {
    constructor() {
        this.nm = 0x0;
        this.nr = 0x5;
    }
    async on_translation_response(Wm, Wr, Wp, WM) {
        let WX;
        const {
            np: Wx,
            nM: Wf,
            nX: We
        } = this.nx(Wm, Wr);
        const translation = {
            'nf': Wp,
            'np': Wx,
            'nM': Wf,
            'ne': Wr,
            'nZ': WM
        };
        if (Wx) {
            WX = We;
        } else {
            WX = '';
        }
        translation.translation = WX;
        return translation;
    }
    nQ(Wm) {
        return Wm.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    ng(Wm, {
        nM: Wr,
        nf: Wp
    }) {
        const WM = 'sl=' + Wr + '&tl=' + Wp + '&q=' + encodeURIComponent(Wm.trim());
        const urls = [
            'https://clients5.google.com/translate_a/single?dj=1&dt=t&dt=sp&dt=ld&dt=bd&client=dict-chrome-ex&' + WM,
            'https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&dt=bd&dj=1&source=input&' + WM
        ];
        return urls;
    }
    translationIsTheSameAsInput(sentences, Wm) {
        return sentences[0x0]['trans']['match'](new RegExp(this.nQ(Wm.trim()), 'i'));
    }
    nx(Wm, Wr) {
        let Wp, WM, WX;
        if (!Wm.nj && !Wm.sentences || !Wm.nj && this.translationIsTheSameAsInput(Wm.sentences, Wr)) {
            WM = false;
        } else {
            WM = true;
            Wp = [];
            if (Wm.nj) {
                Wm.nj.forEach(function (Wx) {
                    const translationItem = {
                        'nO': Wx.nO,
                        'A0': Wx.A1.map(Wf => {
                            if (Wf.A2) {
                                if (Wf.A2.match(/'$/)) {
                                    return '' + Wf.A2 + Wf.ne;
                                } else {
                                    return Wf.A2 + ' ' + Wf.ne;
                                }
                            }
                            return Wf.ne;
                        })
                    };
                    Wp.push(translationItem);
                });
            } else {
                Wm.sentences.forEach(function (Wx) {
                    Wp.push(Wx.trans);
                });
                Wp = Wp.join(' ');
            }
            WX = Wm.src;
        }
        return {
            'np': WM,
            'nM': WX,
            'nX': Wp
        };
    }
    A3(Wm) {
        return 'Too many requests - translation is temporary disabled. Will retry in ' + formatDistanceToNow(Wm) + '.';
    }
    async translateInner(Wm, Wr, Wp, WM, WX) {
        const urls = this.ng(Wm, {
            'nM': Wr,
            'nf': Wp
        });
        const Wx = async () => {
            let We = await ReadItTTS_0WM.nk(urls[0x0], null, 0x5, 0x1388);
            if (We.ok) {
                const WZ = await We.parsedData;
                return await WM.bind(this)(WZ, Wm, Wp, WX);
            } else {
                console.error(We);
                if (We.status == 0x1ad) {
                    return {
                        'message': this.A3(blockExpiresAt),
                        'error': true
                    };
                }
            }
        };
        let Wf = await ReadItTTS_0WM.nk(urls[0x1], null, 0x5, 0x1388);
        if (Wf.ok) {
            let We = await Wf.parsedData;
            if (We.sentences) {
                return await WM.bind(this)(We, Wm, Wp, WX);
            } else {
                return await Wx();
            }
        } else {
            console.error(Wf);
            return await Wx();
        }
    }
    async translate(Wm, Wr, Wp, WM = false) {
        const WX = await this.translateInner(Wm, Wr, Wp, this.on_translation_response, WM);
        return WX;
    }
}
class ReadItTTS_0Wf {
    A4() {
    }
    A5(Wm, Wr, Wp) {
    }
    A6(Wm, Wr, Wp) {
    }
    A7() {
    }
}
class ReadItTTS_0We {
    constructor(Wm, Wr) {
        this.A8 = Wm;
        this.A9 = Wr;
        this.Aa = null;
        this.A8.addEventListener('loadedmetadata', function () {
            this.A4();
        }['bind'](this));
        this.A8.onended = () => {
            try {
                if (this.An && this.A9.AA) {
                    const textData = this.An.AV();
                    this.A6(textData);
                    this.A8.currentTime = 0x0;
                    URL.revokeObjectURL(this.A8.src);
                    this.An.Ak();
                }
            } finally {
                this.AL(false);
            }
        };
        this.A8.onerror = Wp => {
            try {
                if (this.An) {
                    switch (Wp.target.error.code) {
                    case Wp.target.error.MEDIA_ERR_ABORTED:
                        break;
                    case Wp.target.error.MEDIA_ERR_NETWORK:
                        break;
                    case Wp.target.error.MEDIA_ERR_DECODE:
                        break;
                    case Wp.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                        break;
                    default:
                        break;
                    }
                    this.Ab++;
                    if (this.Ab > 0x3) {
                        this.A8.currentTime = 0x0;
                        URL.revokeObjectURL(this.A8.src);
                        this.AW = this.AU = 0x0;
                        this.A9.Ay();
                        this.Ab = 0x0;
                    }
                }
            } finally {
                this.AL(false);
            }
        };
    }
    init() {
        this.AG = this.A9.config[ReadItTTS_0Wm.a5]['split']('-')[0x0];
        this.s = parseFloat(this.A9.config.dvl.split('-')[0x1]);
        this.AJ = this.AT = 0x1;
        this.AL(false);
        this.Aq = 0x0;
        this.AR = 0x0;
        this.AH = new ReadItTTS_0Wp(0x3, 0x1, 0x1);
        this.Ad = new ReadItTTS_0Wp(0x2, 0x2, 0x1);
        this.Ab = 0x0;
        this.Aw();
        this.AB = [];
        this.Au = 0x0;
        this.AE = 0x0;
        this.AF = false;
        this.AC = false;
        this.AY = null;
        this.Az = null;
        this.Al = false;
    }
    Ah(Wm) {
        if (Wm != this.AT && Wm - parseFloat(Wm.toFixed(0x3)) == 0x0) {
            this.AT = Wm;
        }
    }
    Aw() {
        this.AU = 0x0;
        this.AW = 0x0;
    }
    AL(Wm) {
        this.AA = Wm;
    }
    Ao() {
        return this.s;
    }
    As(Wm) {
        if (this.A8 && this.A8[ReadItTTS_0Wm.D] !== Wm) {
            this.A8[ReadItTTS_0Wm.D] = Wm * this.AT;
        }
    }
    Ai(Wm) {
        this.s = Wm;
        this.As(Wm);
    }
    AS() {
        return this.A8.volume;
    }
    AK(Wm) {
        this.A8.volume = parseFloat(Wm);
    }
    reset() {
        if (!this.Al) {
            this.stop();
            if (this.An) {
                this.An.reset();
                this.An = null;
            }
            this.init();
        }
    }
    hasData() {
        return this.An !== null;
    }
    AP() {
        this.AB = [];
        this.A8.src = chrome.runtime.getURL('sound/note.mp3');
        this.A8.play();
    }
    AI(Wm) {
        if (!Wm) {
        }
        this.An = Wm;
        this.An.addDataStatusMonitor(this);
    }
    At(Wm) {
        this.AB = this.AB.filter(Wr => Wr !== Wm);
    }
    Ac(Wm) {
        if (!this.AB.includes(Wm)) {
            this.AB.push(Wm);
        }
    }
    Av() {
        if (this.An) {
            this.An.AN();
        }
    }
    AD(Wm = null) {
        if (this.An) {
            Wm = Wm || this.A9.Am();
            if (Wm) {
                let Wr = Wm.currentTime * 0x3e8;
                const [Wp, WM] = this.An.Ar(Wr);
                this.Ap(Wp);
            }
        }
    }
    addDataStatusMonitor(Wm) {
        if (this.An) {
            this.An.addDataStatusMonitor(Wm);
        }
    }
    start() {
        if (this.An) {
            if (this.A9.status == FloatingIconController.AM) {
                this.A9.AX(FloatingIconController.Ax);
            }
            this.addDataStatusMonitor(this.A9);
            this.Ac(this.A9);
            this.Av();
            if (!this.Az) {
                this.Az = setInterval(this.Af.bind(this), 0x32);
            }
        }
    }
    Ae() {
        if (this.Az) {
            clearInterval(this.Az);
            this.Az = null;
        }
    }
    pause() {
        this.Ae();
        this.AL(false);
        this.A8.pause();
        this.AZ = false;
        this.A9.AX(FloatingIconController.AQ);
    }
    Ag() {
        this.stop();
        if (this.An) {
            this.An.Ag();
        }
    }
    stop() {
        this.Ae();
        this.AL(false);
        this.A8.pause();
        this.Aw();
        this.AZ = false;
    }
    Aj() {
        return this.A8.currentTime < this.A8.duration;
    }
    AO(Wm, Wr = false) {
        const [Wp, WM] = this.An.Ar(Wm);
        if (WM) {
            this.stop();
            URL.revokeObjectURL(this.A8.src);
            this.A8.currentTime = 0x0;
            this.start();
        }
        if (Wp > 0x0) {
            this.Ap(Wp);
        }
        return WM;
    }
    V0() {
        return this.AU > 0x0 || this.AW > 0x0 || this.AZ;
    }
    forward(Wm) {
        this.AU = Wm;
        this.AW = 0x0;
        if (this.AA && this.A8) {
            this.V1();
        }
    }
    Ap(Wm) {
        this.AW = Wm;
        this.AU = 0x0;
        if (this.AA && this.A8) {
            this.V1();
        }
    }
    V1() {
        if (this.AW > 0x0) {
            let Wm = this.A8.duration;
            this.AU = Math.round(Wm * this.AW);
            this.AW = 0x0;
        }
        if (this.AU > 0x0) {
            const Wr = this.A8.duration;
            const Wp = this.A8.currentTime;
            const WM = Wr - Wp;
            const WX = Math.round(Math.min(this.AU, WM));
            this.A8.currentTime += WX;
            this.AU -= WX;
        } else {
            this.Aw();
        }
    }
    V2(Wm) {
    }
    async V3(Wm, Wr, Wp) {
        if (this.A9.AA) {
            if (this.A9.status == FloatingIconController.Ax) {
                if (this.An && (this.An.V4() || this.An.V5() >= this.AG)) {
                    this.A9.AX(FloatingIconController.V6);
                    this.start();
                }
            }
        }
    }
    A4() {
        if (!this.A9.AA) {
            return;
        }
        if (!this.AZ) {
            this.AZ = true;
            return new Promise(Wm => {
                if (this.An) {
                    this.V1();
                    let Wr = this.An.AV();
                    if (this.A9.V7()) {
                        let [Wp, WM] = this.V8(Wr);
                        this.V9(Wp, WM);
                    } else {
                        this.Ai(parseFloat(this.A9.config.dvl.split('-')[0x1]));
                    }
                    for (const WX of this.AB) {
                        WX.A4();
                    }
                }
                Wm();
            }).catch(Wm => {
            }).finally(() => {
                this.AZ = false;
            });
        }
    }
    Va() {
        let Wm = parseFloat(this.A9.config.dvl.split('-')[0x0]);
        let Wr = Wm / 1.15;
        let ytMin = ReadItTTS_0Wm.v * Wr;
        return [
            ytMin,
            Wm
        ];
    }
    V8(Wm) {
        let Wr = (this.A8.duration * 0x3e8 + 0x64) / Wm.Vn.VA();
        let Wp = Math.max(Wr, ReadItTTS_0Wm.c);
        let [WM, WX] = this.Va();
        Wp = Math.min(Wp, WX);
        return [
            Wp,
            Wr
        ];
    }
    V9(Wm, Wr) {
        this.Ad.push(Wr);
        this.AH.push(Wm);
        let Wp = this.Ad.af();
        let WM = this.AH.af();
        let [WX, Wx] = this.Va();
        if (WM >= Wr) {
        } else {
            if (WM / Wp < ReadItTTS_0Wm.v) {
                WM = Math.min(WM, Wx + 0.06);
            } else {
                let Wf = Wx / 1.15;
                let We = [
                    0.9 * Wf,
                    0x1 * Wf,
                    1.1 * Wf
                ];
                let WZ = WM;
                for (const WQ of We) {
                    if (WM < WQ) {
                        if (Wp >= WQ) {
                            WM = WQ;
                            WZ = WM;
                        } else if (WM < Wp) {
                            WM = Wp;
                            break;
                        }
                    }
                }
                this.AH.pop();
                this.AH.push(WZ);
                if (WM < 0x1 && WM / Wp < 0x1) {
                    WM = Wp;
                    this.AH.pop();
                    this.AH.push(WM);
                }
            }
        }
        this.Ai(WM);
    }
    A5(textData) {
        if (!this.A9.AA) {
            return;
        }
        return new Promise(Wm => {
            if (this.An) {
                for (const Wr of this.AB) {
                    Wr.A5(textData.text, textData.index, this.An.VV);
                }
                ;
            }
            Wm();
        });
    }
    A6(textData) {
        if (!this.A9.AA) {
            return;
        }
        return new Promise(Wm => {
            if (this.An) {
                for (const Wr of this.AB) {
                    Wr.A6(textData.text, textData.index + 0x1, this.An.length());
                }
                ;
            }
            Wm();
        });
    }
    async A7() {
        if (!this.Al) {
            try {
                this.Al = true;
                this.stop();
                for (const Wm of this.AB) {
                    await Wm.A7();
                }
                ;
                this.reset();
            } finally {
                this.Al = false;
            }
        }
    }
    Vk(Wm) {
        let Wr = (this.An.VL() + Wm) / 0x3e8;
        return Wr;
    }
    Vb(Wm) {
        this.AE = Wm;
    }
    VW() {
        let Wm = this.A8.duration - this.A8.currentTime;
        return Wm;
    }
    async Af() {
        if (this.A9.AA & !this.AA) {
            this.AL(true);
            if (!this.An.VU()) {
                await this.A7();
                this.AL(false);
                return;
            }
            let Wm = this.An.Vy();
            if (Wm.VG()) {
                if (this.AE > 0x0) {
                    if (this.status != FloatingIconController.Ax) {
                        if (this.Aq > 0x0) {
                            this.VJ();
                        } else {
                            if (this.Au == 0x0) {
                                this.Au = Date.now();
                            }
                            if (this.AE <= Date.now() - this.Au) {
                                this.Vb(0x0);
                                this.Au = 0x0;
                            } else {
                                let Wr = this.AE - (Date.now() - this.Au);
                                if (Wr >= 0x5dc && Date.now() - this.Au > 0x1f4) {
                                    this.A9.VT();
                                }
                                this.AL(false);
                                return;
                            }
                        }
                    } else {
                        this.AL(false);
                        return;
                    }
                }
            }
            if (Wm.Vq()) {
                if (this.status != FloatingIconController.Ax) {
                    if (this.Aq > 0x0) {
                        this.VJ(Wm);
                        this.An.Ak();
                        Wm = this.An.Vy();
                    } else {
                        if (!Wm.VR()) {
                            this.Vb(Math.max(0x0, this.AE - Wm.VH() - 0x1f4));
                            this.An.Ak();
                            Wm = this.An.Vy();
                            if (this.AE > 0x0) {
                                this.AL(false);
                                return;
                            }
                        } else {
                            let Wp = Wm.VH() - Wm.Vd();
                            if (Wp > 0x5dc && Wm.Vd() > 0x1f4) {
                                this.A9.VT();
                            }
                            this.AL(false);
                            return;
                        }
                    }
                } else {
                    this.AL(false);
                    return;
                }
            }
            if (Wm && Wm.VG()) {
                if (this.A9.V7()) {
                    let WM = this.An.VL() / 0x3e8;
                    if (this.Aa && WM - this.Aa.currentTime > 0x1) {
                        this.Aw();
                        this.AL(false);
                        return;
                    }
                }
                if (!this.An.Vw(Wm.VB)) {
                    this.A9.AX(FloatingIconController.Ax);
                    this.Ae();
                    this.An.Vu(this.An.VE);
                    await this.A9.VF.stop();
                    this.Av();
                    this.AL(false);
                } else {
                    try {
                        if (this.A9.AA) {
                            this.A5(Wm);
                            this.A8.src = URL.createObjectURL(Wm.VB);
                            this.As(0x1);
                            this.A8.volume = this.A9.config.play_volume;
                            this.A8.play();
                            this.A9.AX(FloatingIconController.VC);
                        }
                    } catch (WX) {
                        this.AL(false);
                    }
                }
            } else {
                this.AL(false);
            }
        }
    }
    VJ(currentData = null) {
        if (currentData) {
            if (currentData.Vq()) {
                currentData.done();
            }
        }
        if (this.AE > 0x0) {
            this.Vb(0x0);
            this.Au = 0x0;
        }
    }
    VY() {
        if (this.AY) {
            clearTimeout(this.AY);
        }
        this.AF = false;
    }
    Vz() {
        let Wm = false;
        if (this.Aq > 0x0) {
            Wm = this.AR < this.Aq;
        } else {
            Wm = this.Aq < this.AR;
        }
        return Wm;
    }
    Vq() {
        const Wm = this.An.AV();
        return this.AE > 0x0 || Wm.Vq();
    }
    Vl(Wm, ytt) {
        if (Wm.status == 'forward' || Wm.status == 'backward') {
            this.AF = true;
            try {
                this.AO(ytt * 0x3e8);
                this.VJ();
                this.Aq = 0x0;
                this.Ad.clear();
                this.AH.clear();
                this.Vh(0x7d0);
            } catch (Wr) {
                this.VY();
            }
        }
    }
    async Vo(Wm) {
        if (this.A9.AA && !this.Vs && this.An && !this.Al) {
            try {
                this.Vs = true;
                this.Aa = Wm;
                if (Wm.status == 'ended') {
                    await this.A7();
                    return;
                }
                const Wr = this.An.AV();
                if (!Wr) {
                    return;
                }
                if (Wm.type == ReadItTTS_0Wm.aI || Wm.type == ReadItTTS_0Wm.F) {
                    this.Aq = this.AR = 0x0;
                }
                let Wp = this.Vi();
                let WM = this.Vk(Wp);
                const ytt = Wm.currentTime;
                if (this.VS != null) {
                    this.Vl(this.VS, ytt);
                    this.VS = null;
                }
                if (Wm.paused) {
                    if (this.A9.status != FloatingIconController.Ax) {
                        this.Vl(Wm, ytt);
                        this.A9.VT();
                        this.pause();
                    }
                    return;
                } else if (this.A9.status == FloatingIconController.AQ) {
                    this.AD(Wm);
                    this.start();
                    this.A9.VK();
                }
                if (!Wm.type) {
                    return;
                }
                this.Aq = ytt - WM;
                let WX = this.A9.VP()[ReadItTTS_0Wm.D];
                if (WX != this.AT && WX - parseFloat(WX.toFixed(0x3)) == 0x0) {
                    this.Ah(WX);
                    this.As(this.Ao() - 0.000001);
                }
                try {
                    let [Wx, Wf] = this.Va();
                    if (!this.Vq() && this.Ad.af() > this.Ao()) {
                        this.AJ = this.Ao() / this.Ad.af();
                        this.AJ = Math.max(this.AJ, Wx);
                        let We = parseFloat(this.AJ.toFixed(0x3)) * this.AT + 0.000001;
                        this.A9.VI(We);
                    } else {
                        this.A9.VI(this.AT);
                    }
                } catch (WZ) {
                }
                if (Wm.status == 'forward' || Wm.status == 'backward') {
                    this.Vl(Wm, ytt);
                } else {
                    if (this.Aq > 0x1) {
                        this.VJ(Wr);
                    }
                    if (this.Aq >= 0x3) {
                        if (!this.V0()) {
                            if (!this.AF) {
                                this.AF = true;
                                try {
                                    this.AO(ytt * 0x3e8);
                                    this.Aq = 0x0;
                                    this.AH.clear(0.3);
                                    this.Vh(0x7d0);
                                } catch (WQ) {
                                    this.VY();
                                }
                            }
                        } else {
                        }
                    }
                    if (this.Aq < -0x1) {
                        if (Wr.VG()) {
                            if (!this.AF) {
                                this.AF = true;
                                try {
                                    this.Vb(Math.abs(this.Aq) * 0x3e8);
                                    this.Vh(0x44c);
                                } catch (Wg) {
                                    this.VY();
                                }
                            }
                        }
                    }
                    ;
                }
            } catch (Wj) {
            } finally {
                this.Vs = false;
                this.AR = this.Aq;
            }
        } else {
            if (Wm.status == 'forward' || Wm.status == 'backward') {
                this.VS = Wm;
            }
        }
    }
    Vh(Wm = 0x3e8) {
        this.AY = setTimeout(() => {
            this.AF = false;
        }, parseInt(Wm));
    }
    Vt(Wm = 0x3e8) {
        this.Vc = setTimeout(() => {
            this.Vv = false;
        }, parseInt(Wm));
    }
    VN() {
        if (this.Vc) {
            clearTimeout(this.Vc);
            this.Vc = null;
        }
    }
    Vi() {
        let timeOffset;
        let Wm = this.An.AV();
        if (Wm.VG()) {
            timeOffset = this.A8.currentTime * 0x3e8 / this.A8.playbackRate;
        } else {
            timeOffset = Wm.Vd();
        }
        return timeOffset;
    }
}
class ReadItTTS_0WZ {
}
class ReadItTTS_0WQ {
}
class ReadItTTS_0Wg {
    constructor() {
        this.VD = false;
        this.Vm = false;
    }
    Vr(Wm, Wr, Wp) {
        const WM = Wm[Wp]['toLowerCase']();
        const WX = Wr[Wp]['toLowerCase']();
        if (WM < WX)
            return -0x1;
        if (WM > WX)
            return 0x1;
        return 0x0;
    }
    Vp(Wm) {
        for (var Wr = 0x0; Wr < Wm.length; Wr++) {
            if (Wm.charCodeAt(Wr) > 0x7f) {
                return true;
            }
        }
        return false;
    }
    VM(Wm) {
        if (typeof Wm === 'string') {
            var Wr = new TextEncoder();
            var Wp = Wr.encode(Wm);
            Wm = new TextDecoder('utf-8').decode(Wp);
        } else if (!this.Vp(Wm)) {
            throw new TypeError('text must be a string or a Buffer');
        }
        return Wm;
    }
    VX(Wm, Wr) {
        if (Wr !== '%' && Wr !== 'Hz' || !Wr) {
            throw new Error('Unsupported suffix: ' + Wr);
        }
        let Wp = '';
        let WM = String(Wm).trim();
        if (WM.endsWith(Wr)) {
            WM = WM.slice(0x0, WM.indexOf(Wr));
            Wm = Number(WM);
        } else {
            Wm = Number(WM);
        }
        if (isNaN(Wm)) {
            throw new Error('Invalid parameter: ' + WM + ', suffix ' + Wr);
        }
        if (Wm >= 0x0) {
            Wp = '+' + Wm + Wr;
        } else {
            Wp = '' + Wm + Wr;
        }
        return Wp;
    }
    Vx() {
        let Wm = 'https://';
        Wm += ReadItTTS_0Wm.u;
        Wm += '/consumer/speech/synthesize/readaloud/voices/list';
        return Wm;
    }
    async Vf(Wm) {
        const Wr = new Headers({
            'Ve': 'speech.platform.bing.com',
            'VZ': '" Not;A Brand";v="99", "Microsoft Edge";v="91", "Chromium";v="91"',
            'VQ': '?0',
            'Vg': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36 Edg/91.0.864.41',
            'Accept': '*/*',
            'Vj': 'none',
            'VO': 'cors',
            'k0': 'empty',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9'
        });
        const Wp = {
            'method': 'GET',
            'headers': Wr,
            'mode': 'cors',
            'cache': 'default'
        };
        const WM = await fetch(this.Vx() + '?trustedclienttoken=' + ReadItTTS_0Wm.aN, Wp);
        if (!WM.ok) {
            throw new Error('Failed to fetch voice list');
        }
        let WX = await WM.json();
        WX = WX.sort((Wf, We) => this.Vr(Wf, We, 'ShortName'));
        const Wx = [];
        for (const [Wf, We] of WX.entries()) {
            let WZ = {};
            for (const WQ in We) {
                if (WQ in [
                        'SuggestedCodec',
                        'FriendlyName',
                        'Status',
                        'VoiceTag',
                        'Name'
                    ])
                    continue;
                let Wg = WQ != 'ShortName' ? WQ : 'Name';
                if ([
                        'Name',
                        'Gender',
                        'Locale'
                    ]['includes'](Wg))
                    WZ[Wg] = We[WQ];
                if ('Name' in WZ && 'Gender' in WZ && 'Locale' in WZ) {
                    Wx.push(WZ);
                    WZ = {};
                }
            }
        }
        return Wx;
    }
    k1(Wm, Wr, Wp) {
        if (typeof Wr !== 'string') {
            throw new TypeError(Wm + ' must be a string');
        }
        if (!Wp.test(Wr)) {
            throw new Error('Invalid ' + Wm + ' "' + Wr + '".');
        }
        return Wr;
    }
    k2() {
        let Wm = 'wss://';
        Wm += ReadItTTS_0Wm.u;
        Wm += '/consumer/speech/synthesize/readaloud/edge/v1';
        return Wm;
    }
    k3(Wm) {
        if (typeof Wm === 'string') {
        } else if (this.Vp(Wm)) {
            Wm = Wm.toString('utf-8');
        } else {
            throw new TypeError('string must be a string or a Buffer');
        }
        const Wr = Wm.split('');
        for (let Wp = 0x0; Wp < Wr.length; Wp++) {
            const WM = Wr[Wp]['charCodeAt'](0x0);
            if (0x0 <= WM && WM <= 0x8 || 0xb <= WM && WM <= 0xc || 0xe <= WM && WM <= 0x1f) {
                Wr[Wp] = ' ';
            }
        }
        return Wr.join('');
    }
    k4(Wm) {
        if (typeof Wm === 'string') {
            Wm = this.VM(Wm);
        }
        const Wr = {};
        if (typeof Wm !== 'string') {
            console.log('None string?');
        }
        const Wp = Wm.indexOf('\r\n\r\n');
        if (Wp === -0x1) {
            throw new Error('Invalid data format: missing header/body separator');
        }
        const WM = Wm.slice(0x0, Wp).toString('utf-8').split('\r\n');
        for (const Wx of WM) {
            const [Wf, We] = Wx.split(':', 0x2);
            Wr[Wf.trim()] = We.trim();
        }
        const WX = Wm.slice(Wp + 0x4);
        return [
            Wr,
            WX
        ];
    }
    *['k5'](Wm, byteLength) {
        Wm = this.VM(Wm);
        if (byteLength <= 0x0) {
            throw new ValueError('byteLength must be greater than 0');
        }
        while (Wm.length > byteLength) {
            let Wp = Wm.lastIndexOf(' ', byteLength);
            Wp = Wp !== -0x1 ? Wp : byteLength;
            while (Wm.slice(0x0, Wp).includes('&')) {
                const WX = Wm.lastIndexOf('&', Wp);
                if (Wm.slice(WX, Wp).includes(';')) {
                    break;
                }
                Wp = WX - 0x1;
                if (Wp < 0x0) {
                    throw new ValueError('Maximum byte length is too small or invalid text');
                }
                if (Wp === 0x0) {
                    break;
                }
            }
            const WM = Wm.slice(0x0, Wp).toString('utf-8').trim();
            if (WM) {
                yield WM;
            }
            if (Wp === 0x0) {
                Wp = 0x1;
            }
            Wm = Wm.slice(Wp);
        }
        const Wr = this.VM(Wm).trim();
        if (Wr) {
            yield Wr;
        }
    }
    k6(Wm, Wr, Wp, WM, WX) {
        if (typeof Wm === 'string') {
            if (typeof Wm === 'string') {
                var Wx = new TextEncoder();
                var Wf = Wx.encode(Wm);
                Wm = new TextDecoder('utf-8').decode(Wf);
            } else if (!this.Vp(Wm)) {
                throw new TypeError('text must be a string or a Buffer');
            }
        } else if (this.Vp(Wm)) {
            Wm = this.VM(Wm);
        } else {
            throw new TypeError('text must be a string or a Buffer');
        }
        const We = '<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">' + ('<voice name="' + Wr + '"><prosody pitch="' + WX + '" rate="' + Wp + '" volume="' + WM + '">') + (Wm + '</prosody></voice></speak>');
        return We;
    }
    k7(Wm, Wr, Wp, WM) {
        const WX = Math.pow(0x2, 0x10);
        const Wx = this.ssmlHeadersPlusData(this.k8(), this.k9(), this.k6('', Wm, Wr, Wp, WM)).length + 0x32;
        return WX - Wx;
    }
    k9() {
        const Wm = new Date();
        const Wr = Wm.toUTCString();
        const timezoneOffsetMinutes = -Wm.getTimezoneOffset();
        const timezoneOffsetHours = Math.floor(timezoneOffsetMinutes / 0x3c);
        const timezoneOffsetMinutesFormatted = Math.abs(timezoneOffsetMinutes % 0x3c).toString().padStart(0x2, '0');
        const Wp = timezoneOffsetHours >= 0x0 ? '+' : '-';
        const timezoneOffsetHoursFormatted = Math.abs(timezoneOffsetHours).toString().padStart(0x2, '0');
        const WM = 'GMT' + Wp + timezoneOffsetHoursFormatted + timezoneOffsetMinutesFormatted;
        const WX = Wr + ' (' + WM + ')';
        return WX;
    }
    ssmlHeadersPlusData(Wm, Wr, Wp) {
        const headersAndData = 'X-RequestId:' + Wm + '\r\n' + 'Content-Type:application/ssml+xml\r\n' + ('X-Timestamp:' + Wr + 'Z\r\n') + 'Path:ssml\r\n\r\n' + ('' + Wp);
        return headersAndData;
    }
    k8() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'['replace'](/[xy]/g, function (Wm) {
            var Wr = Math.random() * 0x10 | 0x0, Wp = Wm == 'x' ? Wr : Wr & 0x3 | 0x8;
            return Wp.toString(0x10);
        });
    }
    ka(Wm) {
        let Wr = [
            '&',
            '<',
            '>',
            '"',
            String.fromCharCode(0x27)
        ];
        var Wp = {
            [Wr[0x0]]: '&amp;',
            [Wr[0x1]]: '&lt;',
            [Wr[0x2]]: '&gt;',
            [Wr[0x3]]: '&quot;',
            [Wr[0x4]]: '&#39;'
        };
        return Wm.replace(/[&<>"']/g, function (WM) {
            return Wp[WM];
        });
    }
    async stop() {
        try {
            if (this.kn != null) {
                this.Vm = true;
                this.kn.close();
                await this.kA();
            }
        } catch (Wm) {
        }
    }
    async kA() {
        let Wm = 0x5;
        if (this.kn) {
            while (this.kn.readyState !== WebSocket.CLOSED && Wm > 0x0) {
                Wm--;
                await new Promise(Wr => setTimeout(Wr, 0x3e8));
            }
            if (Wm > 0x0) {
                let Wr = 0x1;
            }
        }
    }
    async kV(Wm, Wr, Wp, WM, WX, Wx = ReadItTTS_0Wm.r) {
        return new Promise(async (Wf, We) => {
            this.Vm = false;
            let WZ = this;
            function WQ() {
                if (WZ.kk) {
                    clearTimeout(WZ.kk);
                }
            }
            try {
                this.results = [];
                function Wg() {
                    WQ();
                    try {
                        if (WZ.kn)
                            WZ.kn.close();
                    } catch (U5) {
                    }
                    We(new Error('WebSocket timed out'));
                }
                function Wj() {
                    WZ.kk = setTimeout(Wg, WZ.timeoutSeconds);
                }
                ;
                if (typeof Wm !== 'string') {
                    new TypeError('text must be a string');
                }
                this.text = Wm;
                Wp = this.VX(Wp, '%');
                WM = this.VX(WM, '%');
                WX = this.VX(WX, 'Hz');
                if (typeof Wr !== 'string') {
                    throw new TypeError('voice must be a string');
                }
                this.voice = Wr;
                const WO = Wr.match(/^([a-z]{2,})-([A-Z]{2,})-(.+Neural)$/);
                if (WO !== null) {
                    const U5 = WO[0x1];
                    let U6 = WO[0x2];
                    let U7 = WO[0x3];
                    const U8 = U7.indexOf('-');
                    if (U8 !== -0x1) {
                        U6 += '-' + U7.substring(0x0, U8);
                        U7 = U7.substring(U8 + 0x1);
                    }
                    this.voice = 'Microsoft Server Speech Text to Speech Voice (' + U5 + '-' + U6 + ', ' + U7 + ')';
                }
                this.voice = this.k1('voice', this.voice, /^Microsoft Server Speech Text to Speech Voice \(.+,.+\)$/);
                this.rate = this.k1('rate', Wp, /^[+-]\d+%$/);
                this.volume = this.k1('volume', WM, /^[+-]\d+%$/);
                this.pitch = this.k1('pitch', WX, /^[+-]\d+Hz$/);
                if (typeof Wx !== 'number' || !Number.isInteger(Wx)) {
                    throw new TypeError('receiveTimeout must be an integer');
                }
                this.timeoutSeconds = Wx;
                this.kL = false;
                async function U0(U9) {
                    const Ua = 'X-Timestamp:' + U9.k9() + '\r\n' + 'Content-Type:application/json; charset=utf-8\r\n' + 'Path:speech.config\r\n\r\n' + '{"context":{"synthesis":{"audio":{"metadataoptions":{' + '"sentenceBoundaryEnabled":false,"wordBoundaryEnabled":true},' + '"outputFormat":"audio-24khz-48kbitrate-mono-mp3"' + '}}}}\r\n';
                    U9.kn.send(Ua);
                }
                async function U1(U9) {
                    const Ua = U3.next().value;
                    if (Ua === undefined) {
                        return false;
                    }
                    Wj();
                    U9.kn.send(U9.ssmlHeadersPlusData(U9.k8(), U9.k9(), U9.k6(Ua, U9.voice, U9.rate, U9.volume, U9.pitch)));
                    return true;
                }
                function U2(U9) {
                    const metaData = JSON.parse(U9).Metadata;
                    for (const Ua of metaData) {
                        const metaType = Ua.Type;
                        if (metaType === 'WordBoundary') {
                            const currentOffset = Ua.Data.Offset + U4;
                            const currentDuration = Ua.Data.Duration;
                            return {
                                'type': metaType,
                                'offset': currentOffset,
                                'duration': currentDuration,
                                'text': Ua.Data.text.Text
                            };
                        }
                        if (['SessionEnd']['includes'](metaType)) {
                            continue;
                        }
                        throw new Error('Unknown metadata type: ' + metaType);
                    }
                    throw new Error('No WordBoundary metadata found');
                }
                const U3 = this.k5(this.ka(this.k3(WZ.text)), this.k7(WZ.voice, WZ.rate, WZ.volume, WZ.pitch));
                let lastDurationOffset = 0x0;
                let U4 = 0x0;
                Wj();
                this.kn = new WebSocket(this.k2() + '?TrustedClientToken=' + ReadItTTS_0Wm.aN + '&ConnectionId=' + this.k8());
                this.kn.addEventListener('open', async U9 => {
                    WQ();
                    let Ua = 0x5;
                    while (this.kn.readyState !== WebSocket.OPEN && Ua > 0x0) {
                        await new Promise(Un => setTimeout(Un, 0x3e8));
                        Ua--;
                    }
                    if (this.kn.readyState !== WebSocket.OPEN) {
                        try {
                            if (this.kn)
                                this.kn.close();
                        } catch (Un) {
                        }
                        We(error);
                        return;
                    }
                    try {
                        await U0(WZ);
                        await U1(WZ);
                    } catch (UA) {
                        try {
                            if (this.kn)
                                this.kn.close();
                        } catch (UV) {
                        }
                        We(UA);
                    }
                });
                this.kn.addEventListener('message', async U9 => {
                    try {
                        const Ua = U9;
                        WQ();
                        if (Ua.data instanceof Blob) {
                            if (Ua.data.size < 0x2) {
                                throw new Error('We received a binary message, but it is missing the header length.');
                            }
                            Ua.data.arrayBuffer().then(Un => {
                                let UA = new DataView(Un);
                                const UV = UA.getUint16(0x0);
                                if (Ua.data.size < UV + 0x2) {
                                    throw new Error('We received a binary message, but it is missing the audio data.');
                                }
                                const audioData = Ua.data.slice(UV + 0x2);
                                this.results.push(audioData);
                                WZ.kL = true;
                            });
                        } else {
                            const [Un, UA] = this.k4(Ua.data);
                            const UV = Un.Path;
                            if (UV === 'audio.metadata') {
                                const parsedMetadata = U2(UA);
                                lastDurationOffset = parsedMetadata.offset + parsedMetadata.duration;
                            } else if (UV === 'turn.end') {
                                U4 = lastDurationOffset + 0x8583b0;
                                const Uk = await U1(WZ);
                                if (!Uk && WZ.kn) {
                                    WZ.kn.close();
                                }
                            } else if ([
                                    'response',
                                    'turn.start'
                                ]['includes'](UV)) {
                            } else {
                                throw new Error('The response from the service is not recognized.\n' + Ua.data);
                            }
                        }
                    } catch (UL) {
                        try {
                            if (this.kn)
                                this.kn.close();
                        } catch (Ub) {
                        }
                        We(UL);
                    }
                });
                this.kn.addEventListener('close', async U9 => {
                    WQ();
                    if (!this.Vm) {
                        if (!this.kL) {
                            We(new Error('No audio was received. Please verify that your parameters are correct.'));
                        } else {
                            this.kb(this.results).then(Ua => {
                                Wf(Ua);
                            }).catch(Ua => {
                                We(Ua);
                            });
                        }
                    } else {
                        Wf(null);
                    }
                });
                this.kn.addEventListener('error', U9 => {
                    if (!this.Vm) {
                        We(new Error(U9));
                    } else {
                        Wf(null);
                    }
                });
            } catch (U9) {
                WQ();
                try {
                    if (this.kn)
                        this.kn.close();
                } catch (Ua) {
                }
                We(U9);
            } finally {
            }
        });
    }
    async kb(Wm) {
        if (!Wm || Wm.length === 0x0) {
            return null;
        }
        let Wr = [];
        for (let WX = 0x0; WX < Wm.length; WX++) {
            let Wx = Wm[WX];
            try {
                let Wf = await Wx.arrayBuffer();
                Wr.push(Wf);
            } catch (We) {
                console.error(We);
                return null;
            }
        }
        let Wp = Wr.reduce((WZ, WQ) => WZ + WQ.byteLength, 0x0);
        let concatenatedBuffer = new Uint8Array(Wp);
        let WM = 0x0;
        Wr.forEach(WZ => {
            concatenatedBuffer.set(new Uint8Array(WZ), WM);
            WM += WZ.byteLength;
        });
        return new Blob([concatenatedBuffer]);
    }
}
class ReadItTTS_0Wj {
    constructor(Wm) {
        this.kW();
        this.A9 = Wm;
    }
    sendMessageToBackend(Wm) {
        return new Promise((Wr, Wp) => {
            chrome.runtime.sendMessage(Wm, WM => {
                Wr(WM);
            });
        });
    }
    kU() {
        this.A9.kU();
    }
    V3(Wm, Wr) {
        this.A9.V3(Wm, Wr);
    }
    A5(Wm, Wr, Wp) {
        this.A9.A5(Wm, Wr, Wp);
    }
    A6(Wm, Wr, Wp) {
        this.A9.A6(Wm, Wr, Wp);
    }
    completed() {
        this.A9.A7();
    }
    nA() {
        return this.sendMessageToBackend({
            'action': 'settings',
            'type': 'load'
        });
    }
    ky(Wm) {
        this.sendMessageToBackend({
            [ReadItTTS_0Wm.aJ]: ReadItTTS_0Wm.aV,
            [ReadItTTS_0Wm.aq]: Wm
        });
    }
    kG(Wm, Wr, Wp) {
        let WM = {
            'action': ReadItTTS_0Wm.I,
            [ReadItTTS_0Wm.f]: Wm[ReadItTTS_0Wm.URL],
            'data': {
                [ReadItTTS_0Wm.URL]: Wr,
                [ReadItTTS_0Wm.a2]: Wm[ReadItTTS_0Wm.a2],
                [ReadItTTS_0Wm.aE]: Wm[ReadItTTS_0Wm.aE],
                [ReadItTTS_0Wm.aF]: Wm[ReadItTTS_0Wm.aF],
                [ReadItTTS_0Wm.aC]: Wm[ReadItTTS_0Wm.aC],
                [ReadItTTS_0Wm.S]: Wp
            }
        };
        this.sendMessageToBackend(WM);
    }
    configHasChanged(Wm) {
        this.sendMessageToBackend({
            'action': 'settings',
            'type': 'changed',
            'data': Wm
        });
    }
    kW() {
        chrome.runtime.onMessage.addListener((Wm, Wr, Wp) => {
            switch (Wm.action) {
            case 'status':
                Wp({ 'data': this.A9.kJ() });
                return;
            case 'youtube':
                switch (Wm.type) {
                case 'stir':
                    this.A9.stir(true);
                    break;
                case 'toggole_play':
                    this.A9.kT(false);
                    break;
                case 'vc':
                    this.A9.kq(Wm.data);
                    break;
                }
                break;
            case 'settings':
                this.A9.kR(Wm.data);
                break;
            case 'page_loaded':
                this.A9.kH();
                break;
            case 'page_control':
                switch (Wm.type) {
                case 'switch_play_stop':
                    this.A9.kT(false);
                    break;
                case 'settings':
                    this.A9.kd();
                    break;
                case 'voice_list':
                    this.A9.kw();
                    break;
                case 'volume':
                    this.A9.kB(Wm.data);
                    break;
                }
                break;
            }
            Wp({ 'status': 'success' });
        });
    }
}
class ReadItTTS_0WO {
    static ku = 'text';
    static kE = 'pause';
    constructor(Wm, Wr, Wp, WM = ReadItTTS_0WO.ku) {
        this.text = Wm;
        this.index = Wr;
        this.type = WM;
        this.lang = Wp;
    }
    Vq() {
        return this.type === ReadItTTS_0WO.kE;
    }
    VG() {
        return this.type === ReadItTTS_0WO.ku;
    }
    kF() {
        if (isUsingBlank(this.lang)) {
            return this.kC();
        } else if (this.VG()) {
            return this.text.split(/\s+/g).length;
        }
        return 0x0;
    }
    kC() {
        if (this.VG()) {
            return this.text.length;
        }
        return 0x0;
    }
}
class ReadItTTS_0U0 extends ReadItTTS_0WO {
    constructor(Wm, Wr) {
        super(null, Wm, null, ReadItTTS_0WO.kE);
        this.AE = Wr;
        this.Au = 0x0;
    }
    VR() {
        if (this.Au == 0x0) {
            this.Au = Date.now();
        } else if (this.AE <= Date.now() - this.Au) {
            this.Au = 0x0;
            return false;
        }
        return true;
    }
    done() {
        this.Au = Date.now() - this.AE;
    }
    forward(Wm) {
    }
    Vd() {
        if (this.Au > 0x0) {
            return Date.now() - this.Au;
        } else {
            return 0x0;
        }
    }
    VH() {
        return this.AE;
    }
}
class ReadItTTS_0U1 extends ReadItTTS_0WO {
    constructor(Wm, Wr, Wp, WM) {
        super(Wm, Wr, Wp);
        this.Vn = WM;
    }
}
class ReadItTTS_0U2 extends ReadItTTS_0U0 {
    constructor(Wm, Wr, Wp) {
        super(Wm, Wp);
        this.Vn = Wr;
    }
}
/*
 * Copyright (c) 2010 Arc90 Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * This code is heavily based on Arc90's readability.js (1.7.1) script
 * available at: http://code.google.com/p/arc90labs-readability
 */

/**
 * Public constructor.
 * @param {HTMLDocument} doc     The document to parse.
 * @param {Object}       options The options object.
 */
function Readability(doc, options) {
    
    if (options && options.documentElement) {
      doc = options;
      options = arguments[2];
    } else if (!doc || !doc.documentElement) {
      throw new Error("First argument to Readability constructor should be a document object.");
    }
    options = options || {};
  
    this._doc = doc;
    this._docJSDOMParser = this._doc.firstChild.__JSDOMParser__;
    this._articleTitle = null;
    this._articleByline = null;
    this._articleDir = null;
    this._articleSiteName = null;
    this._attempts = [];
  
    
    this._debug = !!options.debug;
    this._maxElemsToParse = options.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE;
    this._nbTopCandidates = options.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES;
    this._charThreshold = options.charThreshold || this.DEFAULT_CHAR_THRESHOLD;
    this._classesToPreserve = this.CLASSES_TO_PRESERVE.concat(options.classesToPreserve || []);
    this._keepClasses = !!options.keepClasses;
    this._serializer = options.serializer || function(el) {
      return el.innerHTML;
    };
    this._disableJSONLD = !!options.disableJSONLD;
    this._allowedVideoRegex = options.allowedVideoRegex || this.REGEXPS.videos;
  
    
    this._flags = this.FLAG_STRIP_UNLIKELYS |
                  this.FLAG_WEIGHT_CLASSES |
                  this.FLAG_CLEAN_CONDITIONALLY;
  
  
    
    if (this._debug) {
      let logNode = function(node) {
        if (node.nodeType == node.TEXT_NODE) {
          return `${node.nodeName} ("${node.textContent}")`;
        }
        let attrPairs = Array.from(node.attributes || [], function(attr) {
          return `${attr.name}="${attr.value}"`;
        }).join(" ");
        return `<${node.localName} ${attrPairs}>`;
      };
      this.log = function () {
        if (typeof console !== "undefined") {
          let args = Array.from(arguments, arg => {
            if (arg && arg.nodeType == this.ELEMENT_NODE) {
              return logNode(arg);
            }
            return arg;
          });
          args.unshift("Reader: (Readability)");
          console.log.apply(console, args);
        } else if (typeof dump !== "undefined") {
          /* global dump */
          var msg = Array.prototype.map.call(arguments, function(x) {
            return (x && x.nodeName) ? logNode(x) : x;
          }).join(" ");
          dump("Reader: (Readability) " + msg + "\n");
        }
      };
    } else {
      this.log = function () {};
    }
  }
  
  Readability.prototype = {
    FLAG_STRIP_UNLIKELYS: 0x1,
    FLAG_WEIGHT_CLASSES: 0x2,
    FLAG_CLEAN_CONDITIONALLY: 0x4,
  
    
    ELEMENT_NODE: 1,
    TEXT_NODE: 3,
  
    
    DEFAULT_MAX_ELEMS_TO_PARSE: 0,
  
    
    
    DEFAULT_N_TOP_CANDIDATES: 5,
  
    
    DEFAULT_TAGS_TO_SCORE: "section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),
  
    
    DEFAULT_CHAR_THRESHOLD: 500,
  
    
    
    REGEXPS: {
      
      
      unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
      okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i,
  
      positive: /article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,
      negative: /-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,
      extraneous: /print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,
      byline: /byline|author|dateline|writtenby|p-author/i,
      replaceFonts: /<(\/?)font[^>]*>/gi,
      normalize: /\s{2,}/g,
      videos: /\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,
      shareElements: /(\b|_)(share|sharedaddy)(\b|_)/i,
      nextLink: /(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,
      prevLink: /(prev|earl|old|new|<|«)/i,
      tokenize: /\W+/g,
      whitespace: /^\s*$/,
      hasContent: /\S$/,
      hashUrl: /^#.+/,
      srcsetUrl: /(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,
      b64DataUrl: /^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,
      
      
      commas: /\u002C|\u060C|\uFE50|\uFE10|\uFE11|\u2E41|\u2E34|\u2E32|\uFF0C/g,
      
      jsonLdArticleTypes: /^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/
    },
  
    UNLIKELY_ROLES: [ "menu", "menubar", "complementary", "navigation", "alert", "alertdialog", "dialog" ],
  
    DIV_TO_P_ELEMS: new Set([ "BLOCKQUOTE", "DL", "DIV", "IMG", "OL", "P", "PRE", "TABLE", "UL" ]),
  
    ALTER_TO_DIV_EXCEPTIONS: ["DIV", "ARTICLE", "SECTION", "P"],
  
    PRESENTATIONAL_ATTRIBUTES: [ "align", "background", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "hspace", "rules", "style", "valign", "vspace" ],
  
    DEPRECATED_SIZE_ATTRIBUTE_ELEMS: [ "TABLE", "TH", "TD", "HR", "PRE" ],
  
    
    
    PHRASING_ELEMS: [
      
      "ABBR", "AUDIO", "B", "BDO", "BR", "BUTTON", "CITE", "CODE", "DATA",
      "DATALIST", "DFN", "EM", "EMBED", "I", "IMG", "INPUT", "KBD", "LABEL",
      "MARK", "MATH", "METER", "NOSCRIPT", "OBJECT", "OUTPUT", "PROGRESS", "Q",
      "RUBY", "SAMP", "SCRIPT", "SELECT", "SMALL", "SPAN", "STRONG", "SUB",
      "SUP", "TEXTAREA", "TIME", "VAR", "WBR"
    ],
  
    
    CLASSES_TO_PRESERVE: [ "page" ],
  
    
    HTML_ESCAPE_MAP: {
      "lt": "<",
      "gt": ">",
      "amp": "&",
      "quot": '"',
      "apos": "'",
    },
  
    /**
     * Run any post-process modifications to article content as necessary.
     *
     * @param Element
     * @return void
    **/
    _postProcessContent: function(articleContent) {
      
      this._fixRelativeUris(articleContent);
  
      this._simplifyNestedElements(articleContent);
  
      if (!this._keepClasses) {
        
        this._cleanClasses(articleContent);
      }
    },
  
    /**
     * Iterates over a NodeList, calls `filterFn` for each node and removes node
     * if function returned `true`.
     *
     * If function is not passed, removes all the nodes in node list.
     *
     * @param NodeList nodeList The nodes to operate on
     * @param Function filterFn the function to use as a filter
     * @return void
     */
    _removeNodes: function(nodeList, filterFn) {
      
      if (this._docJSDOMParser && nodeList._isLiveNodeList) {
        throw new Error("Do not pass live node lists to _removeNodes");
      }
      for (var i = nodeList.length - 1; i >= 0; i--) {
        var node = nodeList[i];
        var parentNode = node.parentNode;
        if (parentNode) {
          if (!filterFn || filterFn.call(this, node, i, nodeList)) {
            parentNode.removeChild(node);
          }
        }
      }
    },
  
    /**
     * Iterates over a NodeList, and calls _setNodeTag for each node.
     *
     * @param NodeList nodeList The nodes to operate on
     * @param String newTagName the new tag name to use
     * @return void
     */
    _replaceNodeTags: function(nodeList, newTagName) {
      
      if (this._docJSDOMParser && nodeList._isLiveNodeList) {
        throw new Error("Do not pass live node lists to _replaceNodeTags");
      }
      for (const node of nodeList) {
        this._setNodeTag(node, newTagName);
      }
    },
  
    /**
     * Iterate over a NodeList, which doesn't natively fully implement the Array
     * interface.
     *
     * For convenience, the current object context is applied to the provided
     * iterate function.
     *
     * @param  NodeList nodeList The NodeList.
     * @param  Function fn       The iterate function.
     * @return void
     */
    _forEachNode: function(nodeList, fn) {
      Array.prototype.forEach.call(nodeList, fn, this);
    },
  
    /**
     * Iterate over a NodeList, and return the first node that passes
     * the supplied test function
     *
     * For convenience, the current object context is applied to the provided
     * test function.
     *
     * @param  NodeList nodeList The NodeList.
     * @param  Function fn       The test function.
     * @return void
     */
    _findNode: function(nodeList, fn) {
      return Array.prototype.find.call(nodeList, fn, this);
    },
  
    /**
     * Iterate over a NodeList, return true if any of the provided iterate
     * function calls returns true, false otherwise.
     *
     * For convenience, the current object context is applied to the
     * provided iterate function.
     *
     * @param  NodeList nodeList The NodeList.
     * @param  Function fn       The iterate function.
     * @return Boolean
     */
    _someNode: function(nodeList, fn) {
      return Array.prototype.some.call(nodeList, fn, this);
    },
  
    /**
     * Iterate over a NodeList, return true if all of the provided iterate
     * function calls return true, false otherwise.
     *
     * For convenience, the current object context is applied to the
     * provided iterate function.
     *
     * @param  NodeList nodeList The NodeList.
     * @param  Function fn       The iterate function.
     * @return Boolean
     */
    _everyNode: function(nodeList, fn) {
      return Array.prototype.every.call(nodeList, fn, this);
    },
  
    /**
     * Concat all nodelists passed as arguments.
     *
     * @return ...NodeList
     * @return Array
     */
    _concatNodeLists: function() {
      var slice = Array.prototype.slice;
      var args = slice.call(arguments);
      var nodeLists = args.map(function(list) {
        return slice.call(list);
      });
      return Array.prototype.concat.apply([], nodeLists);
    },
  
    _getAllNodesWithTag: function(node, tagNames) {
      if (node.querySelectorAll) {
        return node.querySelectorAll(tagNames.join(","));
      }
      return [].concat.apply([], tagNames.map(function(tag) {
        var collection = node.getElementsByTagName(tag);
        return Array.isArray(collection) ? collection : Array.from(collection);
      }));
    },
  
    /**
     * Removes the class="" attribute from every element in the given
     * subtree, except those that match CLASSES_TO_PRESERVE and
     * the classesToPreserve array from the options object.
     *
     * @param Element
     * @return void
     */
    _cleanClasses: function(node) {
      var classesToPreserve = this._classesToPreserve;
      var className = (node.getAttribute("class") || "")
        .split(/\s+/)
        .filter(function(cls) {
          return classesToPreserve.indexOf(cls) != -1;
        })
        .join(" ");
  
      if (className) {
        node.setAttribute("class", className);
      } else {
        node.removeAttribute("class");
      }
  
      for (node = node.firstElementChild; node; node = node.nextElementSibling) {
        this._cleanClasses(node);
      }
    },
  
    /**
     * Converts each <a> and <img> uri in the given element to an absolute URI,
     * ignoring #ref URIs.
     *
     * @param Element
     * @return void
     */
    _fixRelativeUris: function(articleContent) {
      var baseURI = this._doc.baseURI;
      var documentURI = this._doc.documentURI;
      function toAbsoluteURI(uri) {
        
        if (baseURI == documentURI && uri.charAt(0) == "#") {
          return uri;
        }
  
        
        try {
          return new URL(uri, baseURI).href;
        } catch (ex) {
          
        }
        return uri;
      }
  
      var links = this._getAllNodesWithTag(articleContent, ["a"]);
      this._forEachNode(links, function(link) {
        var href = link.getAttribute("href");
        if (href) {
          
          
          if (href.indexOf("javascript:") === 0) {
            
            if (link.childNodes.length === 1 && link.childNodes[0].nodeType === this.TEXT_NODE) {
              var text = this._doc.createTextNode(link.textContent);
              link.parentNode.replaceChild(text, link);
            } else {
              
              var container = this._doc.createElement("span");
              while (link.firstChild) {
                container.appendChild(link.firstChild);
              }
              link.parentNode.replaceChild(container, link);
            }
          } else {
            link.setAttribute("href", toAbsoluteURI(href));
          }
        }
      });
  
      var medias = this._getAllNodesWithTag(articleContent, [
        "img", "picture", "figure", "video", "audio", "source"
      ]);
  
      this._forEachNode(medias, function(media) {
        var src = media.getAttribute("src");
        var poster = media.getAttribute("poster");
        var srcset = media.getAttribute("srcset");
  
        if (src) {
          media.setAttribute("src", toAbsoluteURI(src));
        }
  
        if (poster) {
          media.setAttribute("poster", toAbsoluteURI(poster));
        }
  
        if (srcset) {
          var newSrcset = srcset.replace(this.REGEXPS.srcsetUrl, function(_, p1, p2, p3) {
            return toAbsoluteURI(p1) + (p2 || "") + p3;
          });
  
          media.setAttribute("srcset", newSrcset);
        }
      });
    },
  
    _simplifyNestedElements: function(articleContent) {
      var node = articleContent;
  
      while (node) {
        if (node.parentNode && ["DIV", "SECTION"].includes(node.tagName) && !(node.id && node.id.startsWith("readability"))) {
          if (this._isElementWithoutContent(node)) {
            node = this._removeAndGetNext(node);
            continue;
          } else if (this._hasSingleTagInsideElement(node, "DIV") || this._hasSingleTagInsideElement(node, "SECTION")) {
            var child = node.children[0];
            for (var i = 0; i < node.attributes.length; i++) {
              child.setAttribute(node.attributes[i].name, node.attributes[i].value);
            }
            node.parentNode.replaceChild(child, node);
            node = child;
            continue;
          }
        }
  
        node = this._getNextNode(node);
      }
    },
  
    /**
     * Get the article title as an H1.
     *
     * @return string
     **/
    _getArticleTitle: function() {
      var doc = this._doc;
      var curTitle = "";
      var origTitle = "";
  
      try {
        curTitle = origTitle = doc.title.trim();
  
        
        if (typeof curTitle !== "string")
          curTitle = origTitle = this._getInnerText(doc.getElementsByTagName("title")[0]);
      } catch (e) {/* ignore exceptions setting the title. */}
  
      var titleHadHierarchicalSeparators = false;
      function wordCount(str) {
        return str.split(/\s+/).length;
      }
  
      
      if ((/ [\|\-\\\/>»] /).test(curTitle)) {
        titleHadHierarchicalSeparators = / [\\\/>»] /.test(curTitle);
        curTitle = origTitle.replace(/(.*)[\|\-\\\/>»] .*/gi, "$1");
  
        
        
        if (wordCount(curTitle) < 3)
          curTitle = origTitle.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi, "$1");
      } else if (curTitle.indexOf(": ") !== -1) {
        
        
        var headings = this._concatNodeLists(
          doc.getElementsByTagName("h1"),
          doc.getElementsByTagName("h2")
        );
        var trimmedTitle = curTitle.trim();
        var match = this._someNode(headings, function(heading) {
          return heading.textContent.trim() === trimmedTitle;
        });
  
        
        if (!match) {
          curTitle = origTitle.substring(origTitle.lastIndexOf(":") + 1);
  
          
          if (wordCount(curTitle) < 3) {
            curTitle = origTitle.substring(origTitle.indexOf(":") + 1);
            
            
          } else if (wordCount(origTitle.substr(0, origTitle.indexOf(":"))) > 5) {
            curTitle = origTitle;
          }
        }
      } else if (curTitle.length > 150 || curTitle.length < 15) {
        var hOnes = doc.getElementsByTagName("h1");
  
        if (hOnes.length === 1)
          curTitle = this._getInnerText(hOnes[0]);
      }
  
      curTitle = curTitle.trim().replace(this.REGEXPS.normalize, " ");
      
      
      
      
      var curTitleWordCount = wordCount(curTitle);
      if (curTitleWordCount <= 4 &&
          (!titleHadHierarchicalSeparators ||
           curTitleWordCount != wordCount(origTitle.replace(/[\|\-\\\/>»]+/g, "")) - 1)) {
        curTitle = origTitle;
      }
  
      return curTitle;
    },
  
    /**
     * Prepare the HTML document for readability to scrape it.
     * This includes things like stripping javascript, CSS, and handling terrible markup.
     *
     * @return void
     **/
    _prepDocument: function() {
      var doc = this._doc;
  
      
      this._removeNodes(this._getAllNodesWithTag(doc, ["style"]));
  
      if (doc.body) {
        this._replaceBrs(doc.body);
      }
  
      this._replaceNodeTags(this._getAllNodesWithTag(doc, ["font"]), "SPAN");
    },
  
    /**
     * Finds the next node, starting from the given node, and ignoring
     * whitespace in between. If the given node is an element, the same node is
     * returned.
     */
    _nextNode: function (node) {
      var next = node;
      while (next
          && (next.nodeType != this.ELEMENT_NODE)
          && this.REGEXPS.whitespace.test(next.textContent)) {
        next = next.nextSibling;
      }
      return next;
    },
  
    /**
     * Replaces 2 or more successive <br> elements with a single <p>.
     * Whitespace between <br> elements are ignored. For example:
     *   <div>foo<br>bar<br> <br><br>abc</div>
     * will become:
     *   <div>foo<br>bar<p>abc</p></div>
     */
    _replaceBrs: function (elem) {
      this._forEachNode(this._getAllNodesWithTag(elem, ["br"]), function(br) {
        var next = br.nextSibling;
  
        
        
        var replaced = false;
  
        
        
        
        while ((next = this._nextNode(next)) && (next.tagName == "BR")) {
          replaced = true;
          var brSibling = next.nextSibling;
          next.parentNode.removeChild(next);
          next = brSibling;
        }
  
        
        
        
        if (replaced) {
          var p = this._doc.createElement("p");
          br.parentNode.replaceChild(p, br);
  
          next = p.nextSibling;
          while (next) {
            
            if (next.tagName == "BR") {
              var nextElem = this._nextNode(next.nextSibling);
              if (nextElem && nextElem.tagName == "BR")
                break;
            }
  
            if (!this._isPhrasingContent(next))
              break;
  
            
            var sibling = next.nextSibling;
            p.appendChild(next);
            next = sibling;
          }
  
          while (p.lastChild && this._isWhitespace(p.lastChild)) {
            p.removeChild(p.lastChild);
          }
  
          if (p.parentNode.tagName === "P")
            this._setNodeTag(p.parentNode, "DIV");
        }
      });
    },
  
    _setNodeTag: function (node, tag) {
      this.log("_setNodeTag", node, tag);
      if (this._docJSDOMParser) {
        node.localName = tag.toLowerCase();
        node.tagName = tag.toUpperCase();
        return node;
      }
  
      var replacement = node.ownerDocument.createElement(tag);
      while (node.firstChild) {
        replacement.appendChild(node.firstChild);
      }
      node.parentNode.replaceChild(replacement, node);
      if (node.readability)
        replacement.readability = node.readability;
  
      for (var i = 0; i < node.attributes.length; i++) {
        try {
          replacement.setAttribute(node.attributes[i].name, node.attributes[i].value);
        } catch (ex) {
          /* it's possible for setAttribute() to throw if the attribute name
           * isn't a valid XML Name. Such attributes can however be parsed from
           * source in HTML docs, see https://github.com/whatwg/html/issues/4275,
           * so we can hit them here and then throw. We don't care about such
           * attributes so we ignore them.
           */
        }
      }
      return replacement;
    },
  
    /**
     * Prepare the article node for display. Clean out any inline styles,
     * iframes, forms, strip extraneous <p> tags, etc.
     *
     * @param Element
     * @return void
     **/
    _prepArticle: function(articleContent) {
      this._cleanStyles(articleContent);
  
      
      
      
      this._markDataTables(articleContent);
  
      this._fixLazyImages(articleContent);
  
      
      this._cleanConditionally(articleContent, "form");
      this._cleanConditionally(articleContent, "fieldset");
      this._clean(articleContent, "object");
      this._clean(articleContent, "embed");
      this._clean(articleContent, "footer");
      this._clean(articleContent, "link");
      this._clean(articleContent, "aside");
  
      
      
  
      var shareElementThreshold = this.DEFAULT_CHAR_THRESHOLD;
  
      this._forEachNode(articleContent.children, function (topCandidate) {
        this._cleanMatchedNodes(topCandidate, function (node, matchString) {
          return this.REGEXPS.shareElements.test(matchString) && node.textContent.length < shareElementThreshold;
        });
      });
  
      this._clean(articleContent, "iframe");
      this._clean(articleContent, "input");
      this._clean(articleContent, "textarea");
      this._clean(articleContent, "select");
      this._clean(articleContent, "button");
      this._cleanHeaders(articleContent);
  
      
      
      this._cleanConditionally(articleContent, "table");
      this._cleanConditionally(articleContent, "ul");
      this._cleanConditionally(articleContent, "div");
  
      
      this._replaceNodeTags(this._getAllNodesWithTag(articleContent, ["h1"]), "h2");
  
      
      this._removeNodes(this._getAllNodesWithTag(articleContent, ["p"]), function (paragraph) {
        var imgCount = paragraph.getElementsByTagName("img").length;
        var embedCount = paragraph.getElementsByTagName("embed").length;
        var objectCount = paragraph.getElementsByTagName("object").length;
        
        var iframeCount = paragraph.getElementsByTagName("iframe").length;
        var totalCount = imgCount + embedCount + objectCount + iframeCount;
  
        return totalCount === 0 && !this._getInnerText(paragraph, false);
      });
  
      this._forEachNode(this._getAllNodesWithTag(articleContent, ["br"]), function(br) {
        var next = this._nextNode(br.nextSibling);
        if (next && next.tagName == "P")
          br.parentNode.removeChild(br);
      });
  
      
      this._forEachNode(this._getAllNodesWithTag(articleContent, ["table"]), function(table) {
        var tbody = this._hasSingleTagInsideElement(table, "TBODY") ? table.firstElementChild : table;
        if (this._hasSingleTagInsideElement(tbody, "TR")) {
          var row = tbody.firstElementChild;
          if (this._hasSingleTagInsideElement(row, "TD")) {
            var cell = row.firstElementChild;
            cell = this._setNodeTag(cell, this._everyNode(cell.childNodes, this._isPhrasingContent) ? "P" : "DIV");
            table.parentNode.replaceChild(cell, table);
          }
        }
      });
    },
  
    /**
     * Initialize a node with the readability object. Also checks the
     * className/id for special names to add to its score.
     *
     * @param Element
     * @return void
    **/
    _initializeNode: function(node) {
      node.readability = {"contentScore": 0};
  
      switch (node.tagName) {
        case "DIV":
          node.readability.contentScore += 5;
          break;
  
        case "PRE":
        case "TD":
        case "BLOCKQUOTE":
          node.readability.contentScore += 3;
          break;
  
        case "ADDRESS":
        case "OL":
        case "UL":
        case "DL":
        case "DD":
        case "DT":
        case "LI":
        case "FORM":
          node.readability.contentScore -= 3;
          break;
  
        case "H1":
        case "H2":
        case "H3":
        case "H4":
        case "H5":
        case "H6":
        case "TH":
          node.readability.contentScore -= 5;
          break;
      }
  
      node.readability.contentScore += this._getClassWeight(node);
    },
  
    _removeAndGetNext: function(node) {
      var nextNode = this._getNextNode(node, true);
      node.parentNode.removeChild(node);
      return nextNode;
    },
  
    /**
     * Traverse the DOM from node to node, starting at the node passed in.
     * Pass true for the second parameter to indicate this node itself
     * (and its kids) are going away, and we want the next node over.
     *
     * Calling this in a loop will traverse the DOM depth-first.
     */
    _getNextNode: function(node, ignoreSelfAndKids) {
      
      if (!ignoreSelfAndKids && node.firstElementChild) {
        return node.firstElementChild;
      }
      
      if (node.nextElementSibling) {
        return node.nextElementSibling;
      }
      
      
      
      do {
        node = node.parentNode;
      } while (node && !node.nextElementSibling);
      return node && node.nextElementSibling;
    },
  
    
    
    
    
    _textSimilarity: function(textA, textB) {
      var tokensA = textA.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
      var tokensB = textB.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
      if (!tokensA.length || !tokensB.length) {
        return 0;
      }
      var uniqTokensB = tokensB.filter(token => !tokensA.includes(token));
      var distanceB = uniqTokensB.join(" ").length / tokensB.join(" ").length;
      return 1 - distanceB;
    },
  
    _checkByline: function(node, matchString) {
      if (this._articleByline) {
        return false;
      }
  
      if (node.getAttribute !== undefined) {
        var rel = node.getAttribute("rel");
        var itemprop = node.getAttribute("itemprop");
      }
  
      if ((rel === "author" || (itemprop && itemprop.indexOf("author") !== -1) || this.REGEXPS.byline.test(matchString)) && this._isValidByline(node.textContent)) {
        this._articleByline = node.textContent.trim();
        return true;
      }
  
      return false;
    },
  
    _getNodeAncestors: function(node, maxDepth) {
      maxDepth = maxDepth || 0;
      var i = 0, ancestors = [];
      while (node.parentNode) {
        ancestors.push(node.parentNode);
        if (maxDepth && ++i === maxDepth)
          break;
        node = node.parentNode;
      }
      return ancestors;
    },
  
    /***
     * grabArticle - Using a variety of metrics (content score, classname, element types), find the content that is
     *         most likely to be the stuff a user wants to read. Then return it wrapped up in a div.
     *
     * @param page a document to run upon. Needs to be a full document, complete with body.
     * @return Element
    **/
    _grabArticle: function (page) {
      this.log("**** grabArticle ****");
      var doc = this._doc;
      var isPaging = page !== null;
      page = page ? page : this._doc.body;
  
      
      if (!page) {
        this.log("No body found in document. Abort.");
        return null;
      }
  
      var pageCacheHtml = page.innerHTML;
  
      while (true) {
        this.log("Starting grabArticle loop");
        var stripUnlikelyCandidates = this._flagIsActive(this.FLAG_STRIP_UNLIKELYS);
  
        
        
        
        var elementsToScore = [];
        var node = this._doc.documentElement;
  
        let shouldRemoveTitleHeader = true;
  
        while (node) {
  
          if (node.tagName === "HTML") {
            this._articleLang = node.getAttribute("lang");
          }
  
          var matchString = node.className + " " + node.id;
  
          if (!this._isProbablyVisible(node)) {
            this.log("Removing hidden node - " + matchString);
            node = this._removeAndGetNext(node);
            continue;
          }
  
          
          if (node.getAttribute("aria-modal") == "true" && node.getAttribute("role") == "dialog") {
            node = this._removeAndGetNext(node);
            continue;
          }
  
          
          if (this._checkByline(node, matchString)) {
            node = this._removeAndGetNext(node);
            continue;
          }
  
          if (shouldRemoveTitleHeader && this._headerDuplicatesTitle(node)) {
            this.log("Removing header: ", node.textContent.trim(), this._articleTitle.trim());
            shouldRemoveTitleHeader = false;
            node = this._removeAndGetNext(node);
            continue;
          }
  
          
          if (stripUnlikelyCandidates) {
            if (this.REGEXPS.unlikelyCandidates.test(matchString) &&
                !this.REGEXPS.okMaybeItsACandidate.test(matchString) &&
                !this._hasAncestorTag(node, "table") &&
                !this._hasAncestorTag(node, "code") &&
                node.tagName !== "BODY" &&
                node.tagName !== "A") {
              this.log("Removing unlikely candidate - " + matchString);
              node = this._removeAndGetNext(node);
              continue;
            }
  
            if (this.UNLIKELY_ROLES.includes(node.getAttribute("role"))) {
              this.log("Removing content with role " + node.getAttribute("role") + " - " + matchString);
              node = this._removeAndGetNext(node);
              continue;
            }
          }
  
          
          if ((node.tagName === "DIV" || node.tagName === "SECTION" || node.tagName === "HEADER" ||
               node.tagName === "H1" || node.tagName === "H2" || node.tagName === "H3" ||
               node.tagName === "H4" || node.tagName === "H5" || node.tagName === "H6") &&
              this._isElementWithoutContent(node)) {
            node = this._removeAndGetNext(node);
            continue;
          }
  
          if (this.DEFAULT_TAGS_TO_SCORE.indexOf(node.tagName) !== -1) {
            elementsToScore.push(node);
          }
  
          
          if (node.tagName === "DIV") {
            
            var p = null;
            var childNode = node.firstChild;
            while (childNode) {
              var nextSibling = childNode.nextSibling;
              if (this._isPhrasingContent(childNode)) {
                if (p !== null) {
                  p.appendChild(childNode);
                } else if (!this._isWhitespace(childNode)) {
                  p = doc.createElement("p");
                  node.replaceChild(p, childNode);
                  p.appendChild(childNode);
                }
              } else if (p !== null) {
                while (p.lastChild && this._isWhitespace(p.lastChild)) {
                  p.removeChild(p.lastChild);
                }
                p = null;
              }
              childNode = nextSibling;
            }
  
            
            
            
            
            if (this._hasSingleTagInsideElement(node, "P") && this._getLinkDensity(node) < 0.25) {
              var newNode = node.children[0];
              node.parentNode.replaceChild(newNode, node);
              node = newNode;
              elementsToScore.push(node);
            } else if (!this._hasChildBlockElement(node)) {
              node = this._setNodeTag(node, "P");
              elementsToScore.push(node);
            }
          }
          node = this._getNextNode(node);
        }
  
        /**
         * Loop through all paragraphs, and assign a score to them based on how content-y they look.
         * Then add their score to their parent node.
         *
         * A score is determined by things like number of commas, class names, etc. Maybe eventually link density.
        **/
        var candidates = [];
        this._forEachNode(elementsToScore, function(elementToScore) {
          if (!elementToScore.parentNode || typeof(elementToScore.parentNode.tagName) === "undefined")
            return;
  
          
          var innerText = this._getInnerText(elementToScore);
          if (innerText.length < 25)
            return;
  
          
          var ancestors = this._getNodeAncestors(elementToScore, 5);
          if (ancestors.length === 0)
            return;
  
          var contentScore = 0;
  
          
          contentScore += 1;
  
          
          contentScore += innerText.split(this.REGEXPS.commas).length;
  
          
          contentScore += Math.min(Math.floor(innerText.length / 100), 3);
  
          
          this._forEachNode(ancestors, function(ancestor, level) {
            if (!ancestor.tagName || !ancestor.parentNode || typeof(ancestor.parentNode.tagName) === "undefined")
              return;
  
            if (typeof(ancestor.readability) === "undefined") {
              this._initializeNode(ancestor);
              candidates.push(ancestor);
            }
  
            
            
            
            
            if (level === 0)
              var scoreDivider = 1;
            else if (level === 1)
              scoreDivider = 2;
            else
              scoreDivider = level * 3;
            ancestor.readability.contentScore += contentScore / scoreDivider;
          });
        });
  
        
        
        var topCandidates = [];
        for (var c = 0, cl = candidates.length; c < cl; c += 1) {
          var candidate = candidates[c];
  
          
          
          
          var candidateScore = candidate.readability.contentScore * (1 - this._getLinkDensity(candidate));
          candidate.readability.contentScore = candidateScore;
  
          this.log("Candidate:", candidate, "with score " + candidateScore);
  
          for (var t = 0; t < this._nbTopCandidates; t++) {
            var aTopCandidate = topCandidates[t];
  
            if (!aTopCandidate || candidateScore > aTopCandidate.readability.contentScore) {
              topCandidates.splice(t, 0, candidate);
              if (topCandidates.length > this._nbTopCandidates)
                topCandidates.pop();
              break;
            }
          }
        }
  
        var topCandidate = topCandidates[0] || null;
        var neededToCreateTopCandidate = false;
        var parentOfTopCandidate;
  
        
        
        if (topCandidate === null || topCandidate.tagName === "BODY") {
          
          topCandidate = doc.createElement("DIV");
          neededToCreateTopCandidate = true;
          
          
          while (page.firstChild) {
            this.log("Moving child out:", page.firstChild);
            topCandidate.appendChild(page.firstChild);
          }
  
          page.appendChild(topCandidate);
  
          this._initializeNode(topCandidate);
        } else if (topCandidate) {
          
          
          var alternativeCandidateAncestors = [];
          for (var i = 1; i < topCandidates.length; i++) {
            if (topCandidates[i].readability.contentScore / topCandidate.readability.contentScore >= 0.75) {
              alternativeCandidateAncestors.push(this._getNodeAncestors(topCandidates[i]));
            }
          }
          var MINIMUM_TOPCANDIDATES = 3;
          if (alternativeCandidateAncestors.length >= MINIMUM_TOPCANDIDATES) {
            parentOfTopCandidate = topCandidate.parentNode;
            while (parentOfTopCandidate.tagName !== "BODY") {
              var listsContainingThisAncestor = 0;
              for (var ancestorIndex = 0; ancestorIndex < alternativeCandidateAncestors.length && listsContainingThisAncestor < MINIMUM_TOPCANDIDATES; ancestorIndex++) {
                listsContainingThisAncestor += Number(alternativeCandidateAncestors[ancestorIndex].includes(parentOfTopCandidate));
              }
              if (listsContainingThisAncestor >= MINIMUM_TOPCANDIDATES) {
                topCandidate = parentOfTopCandidate;
                break;
              }
              parentOfTopCandidate = parentOfTopCandidate.parentNode;
            }
          }
          if (!topCandidate.readability) {
            this._initializeNode(topCandidate);
          }
  
          
          
          
          
          
          
          
          parentOfTopCandidate = topCandidate.parentNode;
          var lastScore = topCandidate.readability.contentScore;
          
          var scoreThreshold = lastScore / 3;
          while (parentOfTopCandidate.tagName !== "BODY") {
            if (!parentOfTopCandidate.readability) {
              parentOfTopCandidate = parentOfTopCandidate.parentNode;
              continue;
            }
            var parentScore = parentOfTopCandidate.readability.contentScore;
            if (parentScore < scoreThreshold)
              break;
            if (parentScore > lastScore) {
              
              topCandidate = parentOfTopCandidate;
              break;
            }
            lastScore = parentOfTopCandidate.readability.contentScore;
            parentOfTopCandidate = parentOfTopCandidate.parentNode;
          }
  
          
          
          parentOfTopCandidate = topCandidate.parentNode;
          while (parentOfTopCandidate.tagName != "BODY" && parentOfTopCandidate.children.length == 1) {
            topCandidate = parentOfTopCandidate;
            parentOfTopCandidate = topCandidate.parentNode;
          }
          if (!topCandidate.readability) {
            this._initializeNode(topCandidate);
          }
        }
  
        
        
        
        var articleContent = doc.createElement("DIV");
        if (isPaging)
          articleContent.id = "readability-content";
  
        var siblingScoreThreshold = Math.max(10, topCandidate.readability.contentScore * 0.2);
        
        parentOfTopCandidate = topCandidate.parentNode;
        var siblings = parentOfTopCandidate.children;
  
        for (var s = 0, sl = siblings.length; s < sl; s++) {
          var sibling = siblings[s];
          var append = false;
  
          this.log("Looking at sibling node:", sibling, sibling.readability ? ("with score " + sibling.readability.contentScore) : "");
          this.log("Sibling has score", sibling.readability ? sibling.readability.contentScore : "Unknown");
  
          if (sibling === topCandidate) {
            append = true;
          } else {
            var contentBonus = 0;
  
            
            if (sibling.className === topCandidate.className && topCandidate.className !== "")
              contentBonus += topCandidate.readability.contentScore * 0.2;
  
            if (sibling.readability &&
                ((sibling.readability.contentScore + contentBonus) >= siblingScoreThreshold)) {
              append = true;
            } else if (sibling.nodeName === "P") {
              var linkDensity = this._getLinkDensity(sibling);
              var nodeContent = this._getInnerText(sibling);
              var nodeLength = nodeContent.length;
  
              if (nodeLength > 80 && linkDensity < 0.25) {
                append = true;
              } else if (nodeLength < 80 && nodeLength > 0 && linkDensity === 0 &&
                         nodeContent.search(/\.( |$)/) !== -1) {
                append = true;
              }
            }
          }
  
          if (append) {
            this.log("Appending node:", sibling);
  
            if (this.ALTER_TO_DIV_EXCEPTIONS.indexOf(sibling.nodeName) === -1) {
              
              
              this.log("Altering sibling:", sibling, "to div.");
  
              sibling = this._setNodeTag(sibling, "DIV");
            }
  
            articleContent.appendChild(sibling);
            
            
            siblings = parentOfTopCandidate.children;
            
            
            
            
            s -= 1;
            sl -= 1;
          }
        }
  
        if (this._debug)
          this.log("Article content pre-prep: " + articleContent.innerHTML);
        
        this._prepArticle(articleContent);
        if (this._debug)
          this.log("Article content post-prep: " + articleContent.innerHTML);
  
        if (neededToCreateTopCandidate) {
          
          
          
          
          topCandidate.id = "readability-page-1";
          topCandidate.className = "page";
        } else {
          var div = doc.createElement("DIV");
          div.id = "readability-page-1";
          div.className = "page";
          while (articleContent.firstChild) {
            div.appendChild(articleContent.firstChild);
          }
          articleContent.appendChild(div);
        }
  
        if (this._debug)
          this.log("Article content after paging: " + articleContent.innerHTML);
  
        var parseSuccessful = true;
  
        
        
        
        
        
        var textLength = this._getInnerText(articleContent, true).length;
        if (textLength < this._charThreshold) {
          parseSuccessful = false;
          page.innerHTML = pageCacheHtml;
  
          if (this._flagIsActive(this.FLAG_STRIP_UNLIKELYS)) {
            this._removeFlag(this.FLAG_STRIP_UNLIKELYS);
            this._attempts.push({articleContent: articleContent, textLength: textLength});
          } else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) {
            this._removeFlag(this.FLAG_WEIGHT_CLASSES);
            this._attempts.push({articleContent: articleContent, textLength: textLength});
          } else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)) {
            this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY);
            this._attempts.push({articleContent: articleContent, textLength: textLength});
          } else {
            this._attempts.push({articleContent: articleContent, textLength: textLength});
            
            this._attempts.sort(function (a, b) {
              return b.textLength - a.textLength;
            });
  
            
            if (!this._attempts[0].textLength) {
              return null;
            }
  
            articleContent = this._attempts[0].articleContent;
            parseSuccessful = true;
          }
        }
  
        if (parseSuccessful) {
          
          var ancestors = [parentOfTopCandidate, topCandidate].concat(this._getNodeAncestors(parentOfTopCandidate));
          this._someNode(ancestors, function(ancestor) {
            if (!ancestor.tagName)
              return false;
            var articleDir = ancestor.getAttribute("dir");
            if (articleDir) {
              this._articleDir = articleDir;
              return true;
            }
            return false;
          });
          return articleContent;
        }
      }
    },
  
    /**
     * Check whether the input string could be a byline.
     * This verifies that the input is a string, and that the length
     * is less than 100 chars.
     *
     * @param possibleByline {string} - a string to check whether its a byline.
     * @return Boolean - whether the input string is a byline.
     */
    _isValidByline: function(byline) {
      if (typeof byline == "string" || byline instanceof String) {
        byline = byline.trim();
        return (byline.length > 0) && (byline.length < 100);
      }
      return false;
    },
  
    /**
     * Converts some of the common HTML entities in string to their corresponding characters.
     *
     * @param str {string} - a string to unescape.
     * @return string without HTML entity.
     */
    _unescapeHtmlEntities: function(str) {
      if (!str) {
        return str;
      }
  
      var htmlEscapeMap = this.HTML_ESCAPE_MAP;
      return str.replace(/&(quot|amp|apos|lt|gt);/g, function(_, tag) {
        return htmlEscapeMap[tag];
      }).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi, function(_, hex, numStr) {
        var num = parseInt(hex || numStr, hex ? 16 : 10);
        return String.fromCharCode(num);
      });
    },
  
    /**
     * Try to extract metadata from JSON-LD object.
     * For now, only Schema.org objects of type Article or its subtypes are supported.
     * @return Object with any metadata that could be extracted (possibly none)
     */
    _getJSONLD: function (doc) {
      var scripts = this._getAllNodesWithTag(doc, ["script"]);
  
      var metadata;
  
      this._forEachNode(scripts, function(jsonLdElement) {
        if (!metadata && jsonLdElement.getAttribute("type") === "application/ld+json") {
          try {
            
            var content = jsonLdElement.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g, "");
            var parsed = JSON.parse(content);
            if (
              !parsed["@context"] ||
              !parsed["@context"].match(/^https?\:\/\/schema\.org\/?$/)
            ) {
              return;
            }
  
            if (!parsed["@type"] && Array.isArray(parsed["@graph"])) {
              parsed = parsed["@graph"].find(function(it) {
                return (it["@type"] || "").match(
                  this.REGEXPS.jsonLdArticleTypes
                );
              });
            }
  
            if (
              !parsed ||
              !parsed["@type"] ||
              !parsed["@type"].match(this.REGEXPS.jsonLdArticleTypes)
            ) {
              return;
            }
  
            metadata = {};
  
            if (typeof parsed.name === "string" && typeof parsed.headline === "string" && parsed.name !== parsed.headline) {
              
              
              
  
              var title = this._getArticleTitle();
              var nameMatches = this._textSimilarity(parsed.name, title) > 0.75;
              var headlineMatches = this._textSimilarity(parsed.headline, title) > 0.75;
  
              if (headlineMatches && !nameMatches) {
                metadata.title = parsed.headline;
              } else {
                metadata.title = parsed.name;
              }
            } else if (typeof parsed.name === "string") {
              metadata.title = parsed.name.trim();
            } else if (typeof parsed.headline === "string") {
              metadata.title = parsed.headline.trim();
            }
            if (parsed.author) {
              if (typeof parsed.author.name === "string") {
                metadata.byline = parsed.author.name.trim();
              } else if (Array.isArray(parsed.author) && parsed.author[0] && typeof parsed.author[0].name === "string") {
                metadata.byline = parsed.author
                  .filter(function(author) {
                    return author && typeof author.name === "string";
                  })
                  .map(function(author) {
                    return author.name.trim();
                  })
                  .join(", ");
              }
            }
            if (typeof parsed.description === "string") {
              metadata.excerpt = parsed.description.trim();
            }
            if (
              parsed.publisher &&
              typeof parsed.publisher.name === "string"
            ) {
              metadata.siteName = parsed.publisher.name.trim();
            }
            if (typeof parsed.datePublished === "string") {
              metadata.datePublished = parsed.datePublished.trim();
            }
            return;
          } catch (err) {
            this.log(err.message);
          }
        }
      });
      return metadata ? metadata : {};
    },
  
    /**
     * Attempts to get excerpt and byline metadata for the article.
     *
     * @param {Object} jsonld — object containing any metadata that
     * could be extracted from JSON-LD object.
     *
     * @return Object with optional "excerpt" and "byline" properties
     */
    _getArticleMetadata: function(jsonld) {
      var metadata = {};
      var values = {};
      var metaElements = this._doc.getElementsByTagName("meta");
  
      
      var propertyPattern = /\s*(article|dc|dcterm|og|twitter)\s*:\s*(author|creator|description|published_time|title|site_name)\s*/gi;
  
      
      var namePattern = /^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;
  
      
      this._forEachNode(metaElements, function(element) {
        var elementName = element.getAttribute("name");
        var elementProperty = element.getAttribute("property");
        var content = element.getAttribute("content");
        if (!content) {
          return;
        }
        var matches = null;
        var name = null;
  
        if (elementProperty) {
          matches = elementProperty.match(propertyPattern);
          if (matches) {
            
            
            name = matches[0].toLowerCase().replace(/\s/g, "");
            
            values[name] = content.trim();
          }
        }
        if (!matches && elementName && namePattern.test(elementName)) {
          name = elementName;
          if (content) {
            
            
            name = name.toLowerCase().replace(/\s/g, "").replace(/\./g, ":");
            values[name] = content.trim();
          }
        }
      });
  
      
      metadata.title = jsonld.title ||
                       values["dc:title"] ||
                       values["dcterm:title"] ||
                       values["og:title"] ||
                       values["weibo:article:title"] ||
                       values["weibo:webpage:title"] ||
                       values["title"] ||
                       values["twitter:title"];
  
      if (!metadata.title) {
        metadata.title = this._getArticleTitle();
      }
  
      
      metadata.byline = jsonld.byline ||
                        values["dc:creator"] ||
                        values["dcterm:creator"] ||
                        values["author"];
  
      
      metadata.excerpt = jsonld.excerpt ||
                         values["dc:description"] ||
                         values["dcterm:description"] ||
                         values["og:description"] ||
                         values["weibo:article:description"] ||
                         values["weibo:webpage:description"] ||
                         values["description"] ||
                         values["twitter:description"];
  
      
      metadata.siteName = jsonld.siteName ||
                          values["og:site_name"];
  
      
      metadata.publishedTime = jsonld.datePublished ||
        values["article:published_time"] || null;
  
      
      
      metadata.title = this._unescapeHtmlEntities(metadata.title);
      metadata.byline = this._unescapeHtmlEntities(metadata.byline);
      metadata.excerpt = this._unescapeHtmlEntities(metadata.excerpt);
      metadata.siteName = this._unescapeHtmlEntities(metadata.siteName);
      metadata.publishedTime = this._unescapeHtmlEntities(metadata.publishedTime);
  
      return metadata;
    },
  
    /**
     * Check if node is image, or if node contains exactly only one image
     * whether as a direct child or as its descendants.
     *
     * @param Element
    **/
    _isSingleImage: function(node) {
      if (node.tagName === "IMG") {
        return true;
      }
  
      if (node.children.length !== 1 || node.textContent.trim() !== "") {
        return false;
      }
  
      return this._isSingleImage(node.children[0]);
    },
  
    /**
     * Find all <noscript> that are located after <img> nodes, and which contain only one
     * <img> element. Replace the first image with the image from inside the <noscript> tag,
     * and remove the <noscript> tag. This improves the quality of the images we use on
     * some sites (e.g. Medium).
     *
     * @param Element
    **/
    _unwrapNoscriptImages: function(doc) {
      
      
      var imgs = Array.from(doc.getElementsByTagName("img"));
      this._forEachNode(imgs, function(img) {
        for (var i = 0; i < img.attributes.length; i++) {
          var attr = img.attributes[i];
          switch (attr.name) {
            case "src":
            case "srcset":
            case "data-src":
            case "data-srcset":
              return;
          }
  
          if (/\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
            return;
          }
        }
  
        img.parentNode.removeChild(img);
      });
  
      
      var noscripts = Array.from(doc.getElementsByTagName("noscript"));
      this._forEachNode(noscripts, function(noscript) {
        
        var tmp = doc.createElement("div");
        tmp.innerHTML = noscript.innerHTML;
        if (!this._isSingleImage(tmp)) {
          return;
        }
  
        
        
        
        var prevElement = noscript.previousElementSibling;
        if (prevElement && this._isSingleImage(prevElement)) {
          var prevImg = prevElement;
          if (prevImg.tagName !== "IMG") {
            prevImg = prevElement.getElementsByTagName("img")[0];
          }
  
          var newImg = tmp.getElementsByTagName("img")[0];
          for (var i = 0; i < prevImg.attributes.length; i++) {
            var attr = prevImg.attributes[i];
            if (attr.value === "") {
              continue;
            }
  
            if (attr.name === "src" || attr.name === "srcset" || /\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
              if (newImg.getAttribute(attr.name) === attr.value) {
                continue;
              }
  
              var attrName = attr.name;
              if (newImg.hasAttribute(attrName)) {
                attrName = "data-old-" + attrName;
              }
  
              newImg.setAttribute(attrName, attr.value);
            }
          }
  
          noscript.parentNode.replaceChild(tmp.firstElementChild, prevElement);
        }
      });
    },
  
    /**
     * Removes script tags from the document.
     *
     * @param Element
    **/
    _removeScripts: function(doc) {
      this._removeNodes(this._getAllNodesWithTag(doc, ["script", "noscript"]));
    },
  
    /**
     * Removes code tags from document.
     * 
     **/
    _removeCodeTags: function(doc) {
      this._removeNodes(this._getAllNodesWithTag(doc, ["code", "math", "mrow", "mi", "mo", "svg"]));
    },
    
    /**
     * Check if this node has only whitespace and a single element with given tag
     * Returns false if the DIV node contains non-empty text nodes
     * or if it contains no element with given tag or more than 1 element.
     *
     * @param Element
     * @param string tag of child element
    **/
    _hasSingleTagInsideElement: function(element, tag) {
      
      if (element.children.length != 1 || element.children[0].tagName !== tag) {
        return false;
      }
  
      
      return !this._someNode(element.childNodes, function(node) {
        return node.nodeType === this.TEXT_NODE &&
               this.REGEXPS.hasContent.test(node.textContent);
      });
    },
  
    _isElementWithoutContent: function(node) {
      return node.nodeType === this.ELEMENT_NODE &&
        node.textContent.trim().length == 0 &&
        (node.children.length == 0 ||
         node.children.length == node.getElementsByTagName("br").length + node.getElementsByTagName("hr").length);
    },
  
    /**
     * Determine whether element has any children block level elements.
     *
     * @param Element
     */
    _hasChildBlockElement: function (element) {
      return this._someNode(element.childNodes, function(node) {
        return this.DIV_TO_P_ELEMS.has(node.tagName) ||
               this._hasChildBlockElement(node);
      });
    },
  
    /***
     * Determine if a node qualifies as phrasing content.
     * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content
    **/
    _isPhrasingContent: function(node) {
      return node.nodeType === this.TEXT_NODE || this.PHRASING_ELEMS.indexOf(node.tagName) !== -1 ||
        ((node.tagName === "A" || node.tagName === "DEL" || node.tagName === "INS") &&
          this._everyNode(node.childNodes, this._isPhrasingContent));
    },
  
    _isWhitespace: function(node) {
      return (node.nodeType === this.TEXT_NODE && node.textContent.trim().length === 0) ||
             (node.nodeType === this.ELEMENT_NODE && node.tagName === "BR");
    },
  
    /**
     * Get the inner text of a node - cross browser compatibly.
     * This also strips out any excess whitespace to be found.
     *
     * @param Element
     * @param Boolean normalizeSpaces (default: true)
     * @return string
    **/
    _getInnerText: function(e, normalizeSpaces) {
      normalizeSpaces = (typeof normalizeSpaces === "undefined") ? true : normalizeSpaces;
      var textContent = e.textContent.trim();
  
      if (normalizeSpaces) {
        return textContent.replace(this.REGEXPS.normalize, " ");
      }
      return textContent;
    },
  
    /**
     * Get the number of times a string s appears in the node e.
     *
     * @param Element
     * @param string - what to split on. Default is ","
     * @return number (integer)
    **/
    _getCharCount: function(e, s) {
      s = s || ",";
      return this._getInnerText(e).split(s).length - 1;
    },
  
    /**
     * Remove the style attribute on every e and under.
     * TODO: Test if getElementsByTagName(*) is faster.
     *
     * @param Element
     * @return void
    **/
    _cleanStyles: function(e) {
      if (!e || e.tagName.toLowerCase() === "svg")
        return;
  
      
      for (var i = 0; i < this.PRESENTATIONAL_ATTRIBUTES.length; i++) {
        e.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[i]);
      }
  
      if (this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(e.tagName) !== -1) {
        e.removeAttribute("width");
        e.removeAttribute("height");
      }
  
      var cur = e.firstElementChild;
      while (cur !== null) {
        this._cleanStyles(cur);
        cur = cur.nextElementSibling;
      }
    },
  
    /**
     * Get the density of links as a percentage of the content
     * This is the amount of text that is inside a link divided by the total text in the node.
     *
     * @param Element
     * @return number (float)
    **/
    _getLinkDensity: function(element) {
      var textLength = this._getInnerText(element).length;
      if (textLength === 0)
        return 0;
  
      var linkLength = 0;
  
      
      this._forEachNode(element.getElementsByTagName("a"), function(linkNode) {
        var href = linkNode.getAttribute("href");
        var coefficient = href && this.REGEXPS.hashUrl.test(href) ? 0.3 : 1;
        linkLength += this._getInnerText(linkNode).length * coefficient;
      });
  
      return linkLength / textLength;
    },
  
    /**
     * Get an elements class/id weight. Uses regular expressions to tell if this
     * element looks good or bad.
     *
     * @param Element
     * @return number (Integer)
    **/
    _getClassWeight: function(e) {
      if (!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))
        return 0;
  
      var weight = 0;
  
      
      if (typeof(e.className) === "string" && e.className !== "") {
        if (this.REGEXPS.negative.test(e.className))
          weight -= 25;
  
        if (this.REGEXPS.positive.test(e.className))
          weight += 25;
      }
  
      
      if (typeof(e.id) === "string" && e.id !== "") {
        if (this.REGEXPS.negative.test(e.id))
          weight -= 25;
  
        if (this.REGEXPS.positive.test(e.id))
          weight += 25;
      }
  
      return weight;
    },
  
    /**
     * Clean a node of all elements of type "tag".
     * (Unless it's a youtube/vimeo video. People love movies.)
     *
     * @param Element
     * @param string tag to clean
     * @return void
     **/
    _clean: function(e, tag) {
      var isEmbed = ["object", "embed", "iframe"].indexOf(tag) !== -1;
  
      this._removeNodes(this._getAllNodesWithTag(e, [tag]), function(element) {
        
        if (isEmbed) {
          
          for (var i = 0; i < element.attributes.length; i++) {
            if (this._allowedVideoRegex.test(element.attributes[i].value)) {
              return false;
            }
          }
  
          
          if (element.tagName === "object" && this._allowedVideoRegex.test(element.innerHTML)) {
            return false;
          }
        }
  
        return true;
      });
    },
  
    /**
     * Check if a given node has one of its ancestor tag name matching the
     * provided one.
     * @param  HTMLElement node
     * @param  String      tagName
     * @param  Number      maxDepth
     * @param  Function    filterFn a filter to invoke to determine whether this node 'counts'
     * @return Boolean
     */
    _hasAncestorTag: function(node, tagName, maxDepth, filterFn) {
      maxDepth = maxDepth || 3;
      tagName = tagName.toUpperCase();
      var depth = 0;
      while (node.parentNode) {
        if (maxDepth > 0 && depth > maxDepth)
          return false;
        if (node.parentNode.tagName === tagName && (!filterFn || filterFn(node.parentNode)))
          return true;
        node = node.parentNode;
        depth++;
      }
      return false;
    },
  
    /**
     * Return an object indicating how many rows and columns this table has.
     */
    _getRowAndColumnCount: function(table) {
      var rows = 0;
      var columns = 0;
      var trs = table.getElementsByTagName("tr");
      for (var i = 0; i < trs.length; i++) {
        var rowspan = trs[i].getAttribute("rowspan") || 0;
        if (rowspan) {
          rowspan = parseInt(rowspan, 10);
        }
        rows += (rowspan || 1);
  
        
        var columnsInThisRow = 0;
        var cells = trs[i].getElementsByTagName("td");
        for (var j = 0; j < cells.length; j++) {
          var colspan = cells[j].getAttribute("colspan") || 0;
          if (colspan) {
            colspan = parseInt(colspan, 10);
          }
          columnsInThisRow += (colspan || 1);
        }
        columns = Math.max(columns, columnsInThisRow);
      }
      return {rows: rows, columns: columns};
    },
  
    /**
     * Look for 'data' (as opposed to 'layout') tables, for which we use
     * similar checks as
     * https://searchfox.org/mozilla-central/rev/f82d5c549f046cb64ce5602bfd894b7ae807c8f8/accessible/generic/TableAccessible.cpp#19
     */
    _markDataTables: function(root) {
      var tables = root.getElementsByTagName("table");
      for (var i = 0; i < tables.length; i++) {
        var table = tables[i];
        var role = table.getAttribute("role");
        if (role == "presentation") {
          table._readabilityDataTable = false;
          continue;
        }
        var datatable = table.getAttribute("datatable");
        if (datatable == "0") {
          table._readabilityDataTable = false;
          continue;
        }
        var summary = table.getAttribute("summary");
        if (summary) {
          table._readabilityDataTable = true;
          continue;
        }
  
        var caption = table.getElementsByTagName("caption")[0];
        if (caption && caption.childNodes.length > 0) {
          table._readabilityDataTable = true;
          continue;
        }
  
        
        var dataTableDescendants = ["col", "colgroup", "tfoot", "thead", "th"];
        var descendantExists = function(tag) {
          return !!table.getElementsByTagName(tag)[0];
        };
        if (dataTableDescendants.some(descendantExists)) {
          this.log("Data table because found data-y descendant");
          table._readabilityDataTable = true;
          continue;
        }
  
        
        if (table.getElementsByTagName("table")[0]) {
          table._readabilityDataTable = false;
          continue;
        }
  
        var sizeInfo = this._getRowAndColumnCount(table);
        if (sizeInfo.rows >= 10 || sizeInfo.columns > 4) {
          table._readabilityDataTable = true;
          continue;
        }
        
        table._readabilityDataTable = sizeInfo.rows * sizeInfo.columns > 10;
      }
    },
  
    /* convert images and figures that have properties like data-src into images that can be loaded without JS */
    _fixLazyImages: function (root) {
      this._forEachNode(this._getAllNodesWithTag(root, ["img", "picture", "figure"]), function (elem) {
        
        
        if (elem.src && this.REGEXPS.b64DataUrl.test(elem.src)) {
          
          var parts = this.REGEXPS.b64DataUrl.exec(elem.src);
          if (parts[1] === "image/svg+xml") {
            return;
          }
  
          
          
          var srcCouldBeRemoved = false;
          for (var i = 0; i < elem.attributes.length; i++) {
            var attr = elem.attributes[i];
            if (attr.name === "src") {
              continue;
            }
  
            if (/\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
              srcCouldBeRemoved = true;
              break;
            }
          }
  
          
          
          if (srcCouldBeRemoved) {
            var b64starts = elem.src.search(/base64\s*/i) + 7;
            var b64length = elem.src.length - b64starts;
            if (b64length < 133) {
              elem.removeAttribute("src");
            }
          }
        }
  
        
        if ((elem.src || (elem.srcset && elem.srcset != "null")) && elem.className.toLowerCase().indexOf("lazy") === -1) {
          return;
        }
  
        for (var j = 0; j < elem.attributes.length; j++) {
          attr = elem.attributes[j];
          if (attr.name === "src" || attr.name === "srcset" || attr.name === "alt") {
            continue;
          }
          var copyTo = null;
          if (/\.(jpg|jpeg|png|webp)\s+\d/.test(attr.value)) {
            copyTo = "srcset";
          } else if (/^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(attr.value)) {
            copyTo = "src";
          }
          if (copyTo) {
            //if this is an img or picture, set the attribute directly
            if (elem.tagName === "IMG" || elem.tagName === "PICTURE") {
              elem.setAttribute(copyTo, attr.value);
            } else if (elem.tagName === "FIGURE" && !this._getAllNodesWithTag(elem, ["img", "picture"]).length) {
              //if the item is a <figure> that does not contain an image or picture, create one and place it inside the figure
              //see the nytimes-3 testcase for an example
              var img = this._doc.createElement("img");
              img.setAttribute(copyTo, attr.value);
              elem.appendChild(img);
            }
          }
        }
      });
    },
  
    _getTextDensity: function(e, tags) {
      var textLength = this._getInnerText(e, true).length;
      if (textLength === 0) {
        return 0;
      }
      var childrenLength = 0;
      var children = this._getAllNodesWithTag(e, tags);
      this._forEachNode(children, (child) => childrenLength += this._getInnerText(child, true).length);
      return childrenLength / textLength;
    },
  
    /**
     * Clean an element of all tags of type "tag" if they look fishy.
     * "Fishy" is an algorithm based on content length, classnames, link density, number of images & embeds, etc.
     *
     * @return void
     **/
    _cleanConditionally: function(e, tag) {
      if (!this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))
        return;
  
      
      
      
      //
      
      this._removeNodes(this._getAllNodesWithTag(e, [tag]), function(node) {
        
        var isDataTable = function(t) {
          return t._readabilityDataTable;
        };
  
        var isList = tag === "ul" || tag === "ol";
        if (!isList) {
          var listLength = 0;
          var listNodes = this._getAllNodesWithTag(node, ["ul", "ol"]);
          this._forEachNode(listNodes, (list) => listLength += this._getInnerText(list).length);
          isList = listLength / this._getInnerText(node).length > 0.9;
        }
  
        if (tag === "table" && isDataTable(node)) {
          return false;
        }
  
        
        if (this._hasAncestorTag(node, "table", -1, isDataTable)) {
          return false;
        }
  
        if (this._hasAncestorTag(node, "code")) {
          return false;
        }
  
        var weight = this._getClassWeight(node);
  
        this.log("Cleaning Conditionally", node);
  
        var contentScore = 0;
  
        if (weight + contentScore < 0) {
          return true;
        }
  
        if (this._getCharCount(node, ",") < 10) {
          
          
          
          var p = node.getElementsByTagName("p").length;
          var img = node.getElementsByTagName("img").length;
          var li = node.getElementsByTagName("li").length - 100;
          var input = node.getElementsByTagName("input").length;
          var headingDensity = this._getTextDensity(node, ["h1", "h2", "h3", "h4", "h5", "h6"]);
  
          var embedCount = 0;
          var embeds = this._getAllNodesWithTag(node, ["object", "embed", "iframe"]);
  
          for (var i = 0; i < embeds.length; i++) {
            
            for (var j = 0; j < embeds[i].attributes.length; j++) {
              if (this._allowedVideoRegex.test(embeds[i].attributes[j].value)) {
                return false;
              }
            }
  
            
            if (embeds[i].tagName === "object" && this._allowedVideoRegex.test(embeds[i].innerHTML)) {
              return false;
            }
  
            embedCount++;
          }
  
          var linkDensity = this._getLinkDensity(node);
          var contentLength = this._getInnerText(node).length;
  
          var haveToRemove =
            (img > 1 && p / img < 0.5 && !this._hasAncestorTag(node, "figure")) ||
            (!isList && li > p) ||
            (input > Math.floor(p/3)) ||
            (!isList && headingDensity < 0.9 && contentLength < 25 && (img === 0 || img > 2) && !this._hasAncestorTag(node, "figure")) ||
            (!isList && weight < 25 && linkDensity > 0.2) ||
            (weight >= 25 && linkDensity > 0.5) ||
            ((embedCount === 1 && contentLength < 75) || embedCount > 1);
          
          if (isList && haveToRemove) {
            for (var x = 0; x < node.children.length; x++) {
              let child = node.children[x];
              
              if (child.children.length > 1) {
                return haveToRemove;
              }
            }
            let li_count = node.getElementsByTagName("li").length;
            
            if (img == li_count) {
              return false;
            }
          }
          return haveToRemove;
        }
        return false;
      });
    },
  
    /**
     * Clean out elements that match the specified conditions
     *
     * @param Element
     * @param Function determines whether a node should be removed
     * @return void
     **/
    _cleanMatchedNodes: function(e, filter) {
      var endOfSearchMarkerNode = this._getNextNode(e, true);
      var next = this._getNextNode(e);
      while (next && next != endOfSearchMarkerNode) {
        if (filter.call(this, next, next.className + " " + next.id)) {
          next = this._removeAndGetNext(next);
        } else {
          next = this._getNextNode(next);
        }
      }
    },
  
    /**
     * Clean out spurious headers from an Element.
     *
     * @param Element
     * @return void
    **/
    _cleanHeaders: function(e) {
      let headingNodes = this._getAllNodesWithTag(e, ["h1", "h2"]);
      this._removeNodes(headingNodes, function(node) {
        let shouldRemove = this._getClassWeight(node) < 0;
        if (shouldRemove) {
          this.log("Removing header with low class weight:", node);
        }
        return shouldRemove;
      });
    },
  
    /**
     * Check if this node is an H1 or H2 element whose content is mostly
     * the same as the article title.
     *
     * @param Element  the node to check.
     * @return boolean indicating whether this is a title-like header.
     */
    _headerDuplicatesTitle: function(node) {
      if (node.tagName != "H1" && node.tagName != "H2") {
        return false;
      }
      var heading = this._getInnerText(node, false);
      this.log("Evaluating similarity of header:", heading, this._articleTitle);
      return this._textSimilarity(this._articleTitle, heading) > 0.75;
    },
  
    _flagIsActive: function(flag) {
      return (this._flags & flag) > 0;
    },
  
    _removeFlag: function(flag) {
      this._flags = this._flags & ~flag;
    },
  
    _isProbablyVisible: function(node) {
      
      return (!node.style || node.style.display != "none")
        && (!node.style || node.style.visibility != "hidden")
        && !node.hasAttribute("hidden")
        //check for "fallback-image" so that wikimedia math images are displayed
        && (!node.hasAttribute("aria-hidden") || node.getAttribute("aria-hidden") != "true" || (node.className && node.className.indexOf && node.className.indexOf("fallback-image") !== -1));
    },
  
    /**
     * Runs readability.
     *
     * Workflow:
     *  1. Prep the document by removing script tags, css, etc.
     *  2. Build readability's DOM tree.
     *  3. Grab the article content from the current dom tree.
     *  4. Replace the current DOM tree with the new one.
     *  5. Read peacefully.
     *
     * @return void
     **/
    parse: function () {
      
      if (this._maxElemsToParse > 0) {
        var numTags = this._doc.getElementsByTagName("*").length;
        if (numTags > this._maxElemsToParse) {
          throw new Error("Aborting parsing document; " + numTags + " elements found");
        }
      }
  
      
      this._unwrapNoscriptImages(this._doc);
  
      
      var jsonLd = this._disableJSONLD ? {} : this._getJSONLD(this._doc);
  
      
      this._removeScripts(this._doc);
  
      this._removeCodeTags(this._doc);
  
      this._prepDocument();
  
      var metadata = this._getArticleMetadata(jsonLd);
      this._articleTitle = this._doc.title;
  
      var articleContent = this._grabArticle();
      if (!articleContent)
        return null;
  
      this.log("Grabbed: " + articleContent.innerHTML);
  
      this._postProcessContent(articleContent);
  
      
      
      
      if (!metadata.excerpt) {
        var paragraphs = articleContent.getElementsByTagName("p");
        if (paragraphs.length > 0) {
          metadata.excerpt = paragraphs[0].textContent.trim();
        }
      }
  
      var textContent = articleContent.textContent;
      return {
        title: this._articleTitle,
        byline: metadata.byline || this._articleByline,
        dir: this._articleDir,
        lang: this._articleLang,
        content: this._serializer(articleContent),
        textContent: textContent,
        length: textContent.length,
        excerpt: metadata.excerpt,
        siteName: metadata.siteName || this._articleSiteName,
        publishedTime: metadata.publishedTime
      };
    }
  };
  
  if (typeof module === "object") {
    /* global module */
    module.exports = Readability;
  }
  
var LZString=function(){var r=String.fromCharCode,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",e={};function t(r,o){if(!e[r]){e[r]={};for(var n=0;n<r.length;n++)e[r][r.charAt(n)]=n}return e[r][o]}var i={compressToBase64:function(r){if(null==r)return"";var n=i._compress(r,6,function(r){return o.charAt(r)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(n){return t(o,r.charAt(n))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(r){return null==r?"":""==r?null:i._decompress(r.length,16384,function(o){return r.charCodeAt(o)-32})},compressToUint8Array:function(r){for(var o=i.compress(r),n=new Uint8Array(2*o.length),e=0,t=o.length;e<t;e++){var s=o.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null==o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;e<t;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(r){return null==r?"":i._compress(r,6,function(r){return n.charAt(r)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(o){return t(n,r.charAt(o))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(r,o,n){if(null==r)return"";var e,t,i,s={},u={},a="",p="",c="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<r.length;i+=1)if(a=r.charAt(i),Object.prototype.hasOwnProperty.call(s,a)||(s[a]=f++,u[a]=!0),p=c+a,Object.prototype.hasOwnProperty.call(s,p))c=p;else{if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==o-1?(v=0,d.push(n(m)),m=0):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=c.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++),s[p]=f++,c=String(a)}if(""!==c){if(Object.prototype.hasOwnProperty.call(u,c)){if(c.charCodeAt(0)<256){for(e=0;e<h;e++)m<<=1,v==o-1?(v=0,d.push(n(m)),m=0):v++;for(t=c.charCodeAt(0),e=0;e<8;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;e<h;e++)m=m<<1|t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=c.charCodeAt(0),e=0;e<16;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}0==--l&&(l=Math.pow(2,h),h++),delete u[c]}else for(t=s[c],e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;0==--l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;e<h;e++)m=m<<1|1&t,v==o-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==o-1){d.push(n(m));break}v++}return d.join("")},decompress:function(r){return null==r?"":""==r?null:i._decompress(r.length,32768,function(o){return r.charCodeAt(o)})},_decompress:function(o,n,e){var t,i,s,u,a,p,c,l=[],f=4,h=4,d=3,m="",v=[],g={val:e(0),position:n,index:1};for(t=0;t<3;t+=1)l[t]=t;for(s=0,a=Math.pow(2,2),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;switch(s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;c=r(s);break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;c=r(s);break;case 2:return""}for(l[3]=c,i=c,v.push(c);;){if(g.index>o)return"";for(s=0,a=Math.pow(2,d),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;switch(c=s){case 0:for(s=0,a=Math.pow(2,8),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;l[h++]=r(s),c=h-1,f--;break;case 1:for(s=0,a=Math.pow(2,16),p=1;p!=a;)u=g.val&g.position,g.position>>=1,0==g.position&&(g.position=n,g.val=e(g.index++)),s|=(u>0?1:0)*p,p<<=1;l[h++]=r(s),c=h-1,f--;break;case 2:return v.join("")}if(0==f&&(f=Math.pow(2,d),d++),l[c])m=l[c];else{if(c!==h)return null;m=i+i.charAt(0)}v.push(m),l[h++]=i+m.charAt(0),i=m,0==--f&&(f=Math.pow(2,d),d++)}}};return i}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module?module.exports=LZString:"undefined"!=typeof angular&&null!=angular&&angular.module("LZString",[]).factory("LZString",function(){return LZString});
class ReadItTTS_0U3 {
    constructor(Wm, Wr, Wp, WM, WX = true) {
        this.text = Wm;
        this.kY = [];
        this.Vu(0x0);
        this.kz(0x0);
        this.kl = false;
        this.url = WM;
        this.A9 = Wr;
        this.lang = Wp;
        this.kh = 0x5;
        this.ko = 0x0;
        this.ks = [];
        this.ki = WX;
        this.kS = false;
        this.kK = false;
    }
    kP() {
        return this.url;
    }
    getLanguage() {
        return this.lang;
    }
    Ag() {
        this.stop();
        for (let Wm = 0x0; Wm < this.kY.length; Wm++) {
            this.kY[Wm]['VB'] = null;
        }
        this.Vu(this.kI());
    }
    init() {
        if (this.text) {
            let Wm = this.splitText(this.text);
            for (let Wr of Wm) {
                this.kY.push(new ReadItTTS_0WO(Wr, this.kY.length, this.lang));
            }
        }
    }
    kt() {
        return this.kc;
    }
    Vu(Wm) {
        if (Wm <= this.length()) {
            this.kc = Wm;
            return true;
        }
        return false;
    }
    kv() {
        this.VE = 0x0;
    }
    getData(Wm) {
        if (Wm >= 0x0 && Wm < this.kY.length) {
            return this.kY[Wm];
        }
        return null;
    }
    kN() {
        this.Vu(this.kc + 0x1);
    }
    kD() {
        if (this.kc < this.length()) {
            return this.kY[this.kc];
        }
        return null;
    }
    Vy() {
        while (this.VE < this.length() && (this.AV().VG() && this.km(this.AV().VB))) {
            this.kz(this.VE + 0x1);
        }
        if (this.VE < this.kY.length) {
            return this.AV();
        }
        return null;
    }
    kz(Wm) {
        if (Wm == null || Wm == undefined) {
        } else if (Wm <= this.kY.length) {
            this.VE = Wm;
            return true;
        }
        return false;
    }
    kI() {
        return this.VE;
    }
    AV() {
        return this.kY[this.VE];
    }
    Ak() {
        return this.kz(this.VE + 0x1);
    }
    length() {
        return this.kY ? this.kY.length : 0x0;
    }
    isArticleData() {
        return this.ki;
    }
    addDataStatusMonitor(Wm) {
        if (!this.ks.includes(Wm)) {
            this.ks.push(Wm);
        }
    }
    removeDataStatusMonitor(Wm) {
        this.ks = this.ks.filter(Wr => Wr != Wm);
    }
    V2(Wm) {
        for (const Wr of this.ks) {
            Wr.V2(Wm);
        }
    }
    V3(Wm, Wr = false) {
        const Wp = this.kr();
        for (const WM of this.ks) {
            WM.V3(Wm, Wp, Wr);
        }
    }
    kr() {
        return this.kY.map(Wm => {
            if (Wm.VG()) {
                if (Wm.VB) {
                    return 0x1;
                } else {
                    return 0x0;
                }
            } else {
                return 0x1;
            }
        });
    }
    reset() {
        this.kY = [];
        this.ko = 0x0;
        this.Vu(0x0);
        this.kz(0x0);
        this.kl = false;
        this.ko = 0x0;
        this.kS = false;
        this.kK = false;
        this.text = '';
    }
    stop() {
    }
    kp() {
        return this.text;
    }
    kM() {
        return this.kX();
    }
    kX(Wm) {
        let Wr = 0x0;
        for (var Wp = 0x0; Wp < Wm; Wp++) {
            if (this.kY[Wp]['VG']()) {
                Wr += this.kY[Wp]['text']['length'];
            }
        }
        return Wr;
    }
    V4() {
        return this.kc >= this.kY.length;
    }
    kx() {
        return this.kc < this.kY.length;
    }
    async AN() {
        this.kf(this.A9.config);
    }
    splitText(Wm) {
        const Wr = new ReadItTTS_0UV({ 'lang': this.lang });
        return Wr.split(Wm);
    }
    V4() {
        return this.kc >= this.length();
    }
    V5() {
        let Wm = 0x0;
        for (var Wr = this.VE; Wr <= this.kc && Wr < this.length(); Wr++) {
            const Wp = this.kY[Wr];
            if (Wp.VG()) {
                if (this.Vw(Wp.VB)) {
                    Wm++;
                } else {
                    break;
                }
            }
        }
        return Wm;
    }
    kf(Wm) {
        if (!this.kS) {
            this.kS = true;
            return new Promise(async (Wr, Wp) => {
                try {
                    while (this.A9.AA && this.kx()) {
                        if (this.kc < this.VE) {
                            this.Vu(this.VE);
                        }
                        if (!this.kx()) {
                            break;
                        }
                        const WM = this.kD();
                        if (WM.VG()) {
                            if (WM.VB) {
                                this.V3(WM.index);
                                this.kN();
                                continue;
                            }
                            if (ReadItTTS_0WM.containsOnlyWhitespace(WM.text)) {
                                WM.VB = new Blob();
                                this.V3(WM.index);
                                this.kN();
                                continue;
                            }
                            try {
                                await this.kV(WM.index, Wm);
                                await new Promise(WX => setTimeout(WX, 0x3e8));
                            } catch (WX) {
                                this.A9.ke();
                                await new Promise(Wx => setTimeout(Wx, 0x1388));
                            } finally {
                            }
                        } else {
                            this.V3(WM.index);
                            this.kN();
                        }
                    }
                    if (!this.kx()) {
                        this.V3(this.kY.length - 0x1);
                    }
                    Wr();
                } catch (Wx) {
                    Wp(Wx);
                } finally {
                    this.kS = false;
                }
            });
        }
    }
    VU() {
        let Wm = this.VE;
        while (Wm < this.length()) {
            const Wr = this.kY[Wm];
            const Wp = Wr.VB;
            if (Wr.Vq() || !this.Vw(Wp) || !this.km(Wp)) {
                return true;
            }
            Wm++;
        }
        return false;
    }
    Vw(Wm) {
        return Wm != null || Wm != undefined;
    }
    km(Wm) {
        return Wm && Wm.size == 0x0;
    }
    kV(Wm, Wr) {
        if (!this.kK) {
            this.kK = true;
            return new Promise(async (Wp, WM) => {
                const WX = Wm;
                while (this.A9.AA && WX < this.kY.length) {
                    try {
                        if (!this.kY[WX]['VB']) {
                            this.V2(WX);
                            const Wx = await this.A9.VF.kV(this.kY[WX]['text'], Wr.voice, 0x0, 0x64, Wr.pitch);
                            if (Wx != null) {
                                this.kY[WX]['VB'] = Wx;
                                this.ko = 0x0;
                                this.V3(WX, true);
                            }
                        }
                        break;
                    } catch (Wf) {
                        if (!this.kY || !this.kY[WX] || this.kY[WX]['VB']) {
                            break;
                        }
                        await new Promise(We => setTimeout(We, 0x3e8));
                        if (this.ko < this.kh) {
                            this.ko++;
                        } else {
                            this.kK = false;
                            WM('Cannot load tts data');
                            return;
                        }
                        if (WX != this.kc) {
                            break;
                        }
                    }
                }
                this.kK = false;
                Wp();
            });
        }
    }
    kF() {
        if (isUsingBlank(this.lang)) {
            return this.text.length;
        }
        let Wm = this.text.split(/\s+/).length;
        return Wm;
    }
    kZ() {
        let Wm = 0x0;
        for (const Wr of this.kY) {
            if (Wr.VG()) {
                Wm += Wr.kF();
            }
        }
        return Wm;
    }
}
class ReadItTTS_0U4 extends ReadItTTS_0U3 {
    constructor(Wm, Wr, Wp, WM) {
        super(Wm.kp(), Wr, Wp, WM);
        this.Vn = Wm;
        this.kQ = 0x0;
    }
    reset() {
        this.Vn = null;
        this.kQ = 0x0;
        super.reset();
    }
    kg() {
        for (let Wm = 0x0; Wm < this.Vn.kj.length; Wm++) {
            const Wr = this.Vn.kj[Wm];
            if (Wr.VG()) {
                const Wp = Wr.kp();
                if (Wp.length > 0x0) {
                    const WM = new ReadItTTS_0U1(Wp, this.kY.length, this.lang, Wr);
                    this.kY.push(WM);
                    Wr.kO(WM);
                } else {
                    console.error(new Error('Empty text subtitle group?'));
                }
            } else {
                const [WX, Wx, Wf] = Wr.getTime();
                const We = new ReadItTTS_0U2(this.kY.length, Wr, Wx);
                this.kY.push(We);
                Wr.kO(We);
            }
        }
    }
    init() {
        for (let Wm = 0x0; Wm < this.Vn.lines.length; Wm++) {
            const Wr = this.Vn.lines[Wm];
            if (Wr.VG()) {
                const Wp = Wr.kp();
                if (Wp.length > 0x0) {
                    const WM = new ReadItTTS_0U1(Wp, this.kY.length, this.lang, Wr);
                    this.kY.push(WM);
                    Wr.L0(WM);
                } else {
                    console.error(new Error('Empty text subtitle?'));
                }
            } else {
                const [WX, Wx, Wf] = Wr.getTime();
                const We = new ReadItTTS_0U2(this.kY.length, Wr, Wx);
                this.kY.push(We);
                Wr.L0(We);
            }
        }
    }
    VL() {
        let textData = this.AV();
        return textData.Vn.getTime()[0x0];
    }
    Ao(Wm) {
        if (Wm.Vn.VG()) {
            return Wm.Vn.Ao();
        }
    }
    L1(Wm, Wr) {
        let Wp = 0x0;
        let WM = 0x0;
        let WX = [];
        Wm.forEach((Wx, Wf) => {
            Wp += Wx;
            const We = Wp * Wr.length;
            WX.push({
                'index': Wf,
                'text': Wr.substring(WM, We)
            });
            WM = We;
        });
        return WX;
    }
    L2(Wm) {
        return this.Vn.getTtsDataByTime(Wm);
    }
    Ar(Wm) {
        let [Wr, Wp] = this.L2(Wm);
        let WM = false;
        if (Wr) {
            if (this.VE != Wr.index) {
                WM = true;
                if (!this.Vw(Wr.VB)) {
                    this.A9.VF.stop();
                }
                this.kz(Wr.index);
            }
        } else {
            if (this.VU()) {
                WM = true;
                this.A9.VF.stop();
                this.kz(this.length());
            }
        }
        return [
            Wp,
            WM
        ];
    }
}
class ReadItTTS_0U5 {
    static L3 = 'pause';
    static L4 = 'text';
    constructor(Wm, Wr, Wp) {
        this.startTime = Wm;
        this.duration = Wr;
        this.text = Wp ? Wp : '';
        this.type = Wp && Wp.trim().length > 0x0 ? ReadItTTS_0U5.L4 : ReadItTTS_0U5.L3;
    }
    L0(Wm) {
        this.ttsDataItem = Wm;
    }
    L5() {
        return this.ttsDataItem;
    }
    getTime() {
        return [
            this.L6(),
            this.VA(),
            this.L7()
        ];
    }
    Vq() {
        return this.type == ReadItTTS_0U5.L3;
    }
    VG() {
        return this.type == ReadItTTS_0U5.L4;
    }
    L7() {
        return this.L6() + this.VA();
    }
    L6() {
        return this.startTime;
    }
    VA() {
        return this.duration;
    }
    L8(Wm) {
        this.duration = Wm;
    }
    L9(Wm) {
        this.startTime = Wm;
    }
    kp() {
        return this.text;
    }
    La() {
        if (ReadItTTS_0WM.nE(this.sourceLang)) {
            return this.text.length;
        }
        return this.text.split(/\s+/).length;
    }
    Ln() {
        return this.La() / this.VA();
    }
    textLength() {
        return this.text.length;
    }
}
class ReadItTTS_0U6 {
    constructor(Wm, Wr) {
        this.sourceLang = Wm;
        this.targetLang = Wr || Wm;
        this.lines = [];
        this.time = null;
    }
    kp() {
        return '';
    }
    LA() {
        let Wm = [];
        for (let Wr of this.lines) {
            let Wp = Wr.getTime();
            let WM = '<' + Math.round(Wp[0x0]) + '-' + Math.round(Wp[0x1]) + '>' + Wr.kp();
            Wm.push(WM);
        }
        return Wm.join('');
    }
    LV() {
        let Wm = {
            'Lk': 'pb3',
            'LL': [{}],
            'Lb': [
                {},
                {
                    'LU': 0x2,
                    'Ly': 0x0,
                    'LG': 0x3
                }
            ],
            'LJ': [
                {},
                {
                    'LT': 0x6,
                    'Lq': 0x14,
                    'LR': 0x64,
                    'LH': 0x2,
                    'Ld': 0x28
                }
            ],
            'events': [{
                    'tStartMs': 0x0,
                    'dDurationMs': 0x28a604,
                    'id': 0x1,
                    'Lw': 0x1,
                    'LB': 0x1
                }]
        };
        let Wr = this.lines[this.lines.length - 0x1];
        Wm.events[0x0]['dDurationMs'] = Wr.getTime()[0x2];
        for (let Wp of this.lines) {
            let WM = Wp.getTime();
            Wm.events.push({
                'tStartMs': Math.round(WM[0x0]),
                'dDurationMs': Math.round(WM[0x1]),
                'Lu': 0x1,
                'segs': [{
                        'tStartMs': 0x0,
                        'dDurationMs': Math.round(WM[0x1]),
                        'utf8': Wp.kp()
                    }]
            });
        }
        return JSON.stringify(Wm);
    }
    LE(Wm) {
        for (let Wr = 0x0; Wr < Wm.events.length; Wr++) {
            const Wp = Wm.events[Wr];
            let {
                segs: segs = [],
                tStartMs: tStartMs,
                dDurationMs: dDurationMs
            } = Wp;
            if (Wr < Wm.events.length - 0x1) {
                const Wx = Wm.events[Wr + 0x1];
                if (Wx.tStartMs < tStartMs + dDurationMs) {
                    dDurationMs = Wx.tStartMs - tStartMs;
                }
            }
            let WM = '';
            segs.map(Wf => {
                WM += Wf.utf8.toString();
            });
            let WX = new ReadItTTS_0U5(tStartMs, dDurationMs, WM);
            this.LF(WX);
        }
    }
    LF(Wm) {
        Wm.index = this.lines.length;
        Wm.sourceLang = this.sourceLang;
        Wm.targetLang = this.targetLang;
        this.lines.push(Wm);
    }
    getLanguage() {
        return this.targetLang;
    }
    getTime() {
        let Wm = [
            0x0,
            0x0,
            0x0
        ];
        if (this.lines.length > 0x0) {
            const Wr = this.lines[0x0];
            const Wp = this.lines[this.lines.length - 0x1];
            Wm = [
                Wr.L6(),
                Wp.L7() - Wr.L6(),
                Wp.L7()
            ];
        }
        return Wm;
    }
    getTtsDataByTime(Wm) {
        let Wr = this.lines.find(Wp => {
            return Wp.L7() > Wm;
        });
        if (Wr) {
            let Wp = (Wm - Wr.L6()) / Wr.VA();
            return [
                Wr.L5(),
                Wp
            ];
        }
        return [
            null,
            0x0
        ];
    }
    aZ() {
        return this.lines.length > 0x0;
    }
}
class ReadItTTS_0U7 {
    constructor(Wm, Wr, Wp) {
        this.startTime = Wm;
        this.duration = Wr;
        this.text = Wp ? Wp : '';
    }
    L7() {
        return this.L6() + this.VA();
    }
    L6() {
        return this.startTime;
    }
    VA() {
        return this.duration;
    }
    L8(Wm) {
        this.duration = Wm;
    }
    L9(Wm) {
        this.startTime = Wm;
    }
    La() {
        if (ReadItTTS_0WM.nE(this.sourceLang)) {
            return this.text.length;
        }
        return this.text.split(/\s+/).length;
    }
    Ln() {
        return this.La() / this.VA();
    }
    textLength() {
        return this.text.length;
    }
    getTime(Wm, Wr) {
        if (this.textLength() == 0x0) {
            return [
                this.L6(),
                this.VA(),
                this.L7()
            ];
        }
        const startOffset = Wm / this.textLength() * this.VA();
        const Wp = (Wr - Wm) / this.textLength() * this.VA();
        const WM = this.L6() + startOffset;
        return [
            WM,
            Wp,
            WM + Wp
        ];
    }
}
class ReadItTTS_0U8 {
    static LC = 'pause';
    static LY = 'text';
    constructor(Wm) {
        this.type = Wm;
        this.Lz = [];
        this.ttsDataItems = [];
    }
    Vq() {
        return this.type == ReadItTTS_0U8.LC;
    }
    VG() {
        return this.type == ReadItTTS_0U8.LY;
    }
    Ll(Wm, Wr, Wp) {
        this.Lz.push({
            'Vn': Wm,
            'Lh': Wr,
            'Lo': Wp
        });
    }
    kO(Wm) {
        this.ttsDataItems.push(Wm);
    }
    aZ() {
        return this.Lz.length == 0x0;
    }
    kF() {
        if (ReadItTTS_0WM.nE(this.targetLang)) {
            return this.kp().length;
        }
        return this.kp().split(/\s+/).length;
    }
    Ao(Wm) {
        if (this.Vq()) {
            return 0x0;
        } else {
            return Wm / this.getTime()[0x1] * 0x3e8;
        }
    }
    VA() {
        return this.getTime()[0x1];
    }
    L7() {
        return this.getTime()[0x2];
    }
    L6() {
        return this.getTime()[0x0];
    }
    getTime() {
        if (this.Lz.length == 0x0) {
            return [
                0x0,
                0x0,
                0x0
            ];
        }
        const Wm = this.Lz[0x0];
        const Wr = this.Lz[this.Lz.length - 0x1];
        if (this.Vq()) {
            let Wp = Wm.Vn.getTime(0x0, 0x0)[0x0];
            let WM = Wr.Vn.getTime(0x0, 0x0)[0x2];
            return [
                Wp,
                WM - Wp,
                WM
            ];
        } else {
            const WX = Wm.Vn.getTime(Wm.Lh, Wm.Lo)[0x0];
            const Wx = Wr.Vn.getTime(Wr.Lh, Wr.Lo)[0x2];
            return [
                WX,
                Wx - WX,
                Wx
            ];
        }
    }
    kp() {
        let Wm = ' ';
        if (ReadItTTS_0WM.nE(this.targetLang)) {
            Wm = '';
        }
        let Wr = [];
        for (const Wp of this.Lz) {
            Wr.push(Wp.Vn.text.substring(Wp.Lh, Wp.Lo));
        }
        return Wr.join(Wm);
    }
    containsSubtitle(Wm) {
        return this.Lz.some(Wr => Wr.index == Wm.index);
    }
}
class ReadItTTS_0U9 {
    constructor(Wm, Wr, config) {
        this.sourceLang = Wm;
        this.targetLang = Wr || Wm;
        this.config = config;
        this.kj = [];
        this.time = null;
    }
    async init(Wm) {
        this.text = Wm;
        this.Ls(Wm);
        if (this.Lz.length <= 0x1) {
            throw new Error('There is only one line in subtitle!');
        }
        await this.Li();
    }
    LS(Wm, translatedText) {
        let Wr = ' ';
        if (ReadItTTS_0WM.nE(this.targetLang)) {
            Wr = '';
        }
        let Wp = Wm.split(ReadItTTS_0Wm.d);
        Wp = Wp.join(Wr);
        let WM = translatedText.split(ReadItTTS_0Wm.w);
        translatedText = WM.join(Wr);
        let WX;
        let Wx = '';
        let Wf = 0x0;
        while ((WX = ReadItTTS_0Wm.H.exec(Wm)) != null) {
            Wx += '<' + WX[0x1] + '-' + WX[0x2] + '>';
            let We = parseInt(WX[0x3]['length'] / Wp.length * translatedText.length);
            const WZ = translatedText.substring(Wf, Wf + We);
            Wx += WZ;
            Wf += We;
        }
        return Wx;
    }
    LK(Wm, Wr) {
        if (ReadItTTS_0WM.nE(Wr)) {
            return Wm.length;
        } else {
            return Wm.split(/\s+/).length;
        }
    }
    LP(Wm) {
        let Wr = false;
        let Wp = new RegExp(ReadItTTS_0Wm.J.source + '$', 'gu');
        if (Wp.test(Wm)) {
            Wr = true;
        } else {
            Wp = new RegExp(ReadItTTS_0Wm.T.source + '$', 'gu');
            if (Wp.test(Wm)) {
                Wr = true;
            }
            if (ReadItTTS_0WM.nE(this.targetLang)) {
                Wp = new RegExp(ReadItTTS_0Wm.q.source + '$', 'gu');
                if (Wp.test(Wm)) {
                    Wr = true;
                }
            }
        }
        return Wr;
    }
    LI(Wm) {
        let Wr = false;
        let Wp = new RegExp(ReadItTTS_0Wm.J.source, 'gu');
        if (Wp.test(Wm)) {
            Wr = true;
        } else {
            Wp = new RegExp(ReadItTTS_0Wm.T.source, 'gu');
            if (Wp.test(Wm)) {
                Wr = true;
            }
            if (ReadItTTS_0WM.nE(this.targetLang)) {
                Wp = new RegExp(ReadItTTS_0Wm.q.source, 'gu');
                if (Wp.test(Wm)) {
                    Wr = true;
                }
            }
        }
        return Wr;
    }
    Lt(Wm) {
        const Wr = /[\p{So}]/ug;
        return Wm.replace(Wr, '');
    }
    Ls(Wm) {
        const Wr = Wm.matchAll(ReadItTTS_0Wm.H);
        this.Lz = [];
        let Wp = new ReadItTTS_0Wp(0x3);
        let WM = parseFloat(this.config.dvl.split('-')[0x1]);
        let WX = 0xc8 * WM;
        let Wx = 0x5dc;
        for (const Wf of Wr) {
            let We = Wf[0x1];
            let WZ = Wf[0x2];
            let WQ = parseInt(We);
            let Wg = parseInt(WZ);
            let Wj;
            let WO = Wf[0x3]['trim']();
            WO = this.Lt(WO);
            if (ReadItTTS_0WM.nE(this.targetLang)) {
                if (WO.split(/\s+/g).length > WO.length / 0x6) {
                    WO = WO.replace(/\s+/g, '');
                }
            }
            if (ReadItTTS_0Wm.w.test(WO)) {
                ReadItTTS_0Wm.w.lastIndex = 0x0;
                WO = WO.replace(ReadItTTS_0Wm.w, '').trim();
            }
            const U0 = this.Lz.length > 0x0 ? this.Lz[this.Lz.length - 0x1] : null;
            let U1 = 0x0;
            if (WO.length == 0x0) {
                if (U0 != null) {
                    if (U0.text.length == 0x0) {
                        U0.L8(WQ - U0.L6());
                        continue;
                    }
                }
                Wj = new ReadItTTS_0U7(WQ, Wg, '');
            } else {
                if (Wp.ae()) {
                    WX = Wp.af();
                }
                let U2 = this.LK(WO, this.targetLang);
                U1 = parseInt(U2 / (Wg / 0xea60)) * WM;
                let U3 = U2 / WX * 0x3c * 0x3e8;
                if (U0 && U0.text.length > 0x0 && U0.L6() + U0.VA() < WQ) {
                    let U5 = Wp.length > 0x0 ? Wp.get(Wp.size() - 0x1) : U1;
                    if (Wp.ae() && U1 / U5 > 1.5) {
                        U0.L8(WQ - U0.L6() + Wg);
                        U0.text += WO;
                        continue;
                    }
                }
                let U4 = U1;
                let newDuration = Wg;
                if (Wp.ae() && Wg > U3 + Wx) {
                    newDuration = Math.ceil(U3);
                    U4 = parseInt(U2 / (U3 / 0xea60));
                }
                Wp.push(U4);
                Wj = new ReadItTTS_0U7(WQ, newDuration, WO);
            }
            if (this.Lz.length == 0x0) {
                if (Wj.L6() > 0x3e8) {
                    let U6 = new ReadItTTS_0U7(0x0, Wj.L6(), '');
                    this.Ll(U6);
                }
            } else {
                if (Wj.L6() - U0.L7() > Wx) {
                    if (this.LP(U0.text)) {
                        let U7 = new ReadItTTS_0U7(U0.L7(), Wj.L6() - U0.L7(), '');
                        this.Ll(U7);
                    }
                }
            }
            this.Ll(Wj);
        }
    }
    Ll(Wm) {
        Wm.index = this.Lz.length;
        Wm.sourceLang = this.sourceLang;
        Wm.targetLang = this.targetLang;
        this.Lz.push(Wm);
    }
    Lc(Wm) {
        Wm.index = this.kj.length;
        Wm.sourceLang = this.sourceLang;
        Wm.targetLang = this.targetLang;
        this.kj.push(Wm);
    }
    kp() {
        return this.text;
    }
    getLanguage() {
        return this.targetLang;
    }
    Lv(Wm, Wr) {
        const Wp = this.kj[Wm];
        Wp.Lv(Wr);
    }
    async Li() {
        let language = this.getLanguage();
        const Wm = new ReadItTTS_0Uk(this.config[ReadItTTS_0Wm.a5]['split']('-')[0x1], this.config[ReadItTTS_0Wm.a5]['split']('-')[0x2], language);
        for (const Wr of this.Lz) {
            Wm.consume(Wr, this);
        }
        if (!Wm.aZ()) {
            Wm.LN(this);
        }
    }
    LD(Wm) {
        return this.Lz[Wm];
    }
    getTime() {
        let Wm = [
            0x0,
            0x0,
            0x0
        ];
        if (this.Lz.length > 0x0) {
            const Wr = this.Lz[0x0];
            const Wp = this.Lz[this.Lz.length - 0x1];
            Wm = [
                Wr.L6(),
                Wp.L7() - Wr.L6(),
                Wp.L7()
            ];
        }
        return Wm;
    }
    getTtsDataByTime(Wm) {
        let Wr = this.kj.find(Wp => {
            return Wp.getTime()[0x2] > Wm;
        });
        if (Wr) {
            let [Wp, WM, WX] = Wr.getTime();
            let Wx = (Wm - Wp) / WM;
            return [
                Wr.ttsDataItems[0x0],
                Wx
            ];
        }
        return [
            null,
            0x0
        ];
    }
    length() {
        if (this.text) {
            return this.text.length;
        }
        return -0x1;
    }
}
class ReadItTTS_0Ua {
    constructor(Wm, Wr, config, Wp) {
        this[ReadItTTS_0Wm.aJ] = Wp;
        this[ReadItTTS_0Wm.URL] = Wm;
        this[ReadItTTS_0Wm.aL] = Wr;
        this[ReadItTTS_0Wm.ac] = config;
        this[ReadItTTS_0Wm.ay] = 0x0;
        this[ReadItTTS_0Wm.B] = false;
        this[ReadItTTS_0Wm.ab] = Date.now();
        this[ReadItTTS_0Wm.aW] = Date.now();
    }
    kP() {
        return this[ReadItTTS_0Wm.URL];
    }
    Lm() {
        return this[ReadItTTS_0Wm.aL];
    }
    Lr() {
        return this[ReadItTTS_0Wm.ay];
    }
    Lp() {
        return this[ReadItTTS_0Wm.URL] && this[ReadItTTS_0Wm.URL] !== '' && this[ReadItTTS_0Wm.aL] && this[ReadItTTS_0Wm.aL] !== '';
    }
    ar() {
        return JSON.stringify(this.ap());
    }
    static ap(Wm, Wr = true) {
        let Wp = {
            [ReadItTTS_0Wm.URL]: Wm[ReadItTTS_0Wm.URL],
            [ReadItTTS_0Wm.aL]: Wm[ReadItTTS_0Wm.aL],
            [ReadItTTS_0Wm.ac]: Wm[ReadItTTS_0Wm.ac],
            [ReadItTTS_0Wm.ay]: Wm[ReadItTTS_0Wm.ay],
            [ReadItTTS_0Wm.B]: Wm[ReadItTTS_0Wm.B],
            [ReadItTTS_0Wm.ab]: Wm[ReadItTTS_0Wm.ab],
            [ReadItTTS_0Wm.aW]: Wm[ReadItTTS_0Wm.aW],
            [ReadItTTS_0Wm.aJ]: Wm[ReadItTTS_0Wm.aJ]
        };
        if (Wr) {
            Wp[ReadItTTS_0Wm.URL] = ReadItTTS_0WM.nI(Wm[ReadItTTS_0Wm.URL]);
        }
        return Wp;
    }
    static aM(Wm) {
        if (typeof Wm === 'string') {
            Wm = JSON.parse(Wm);
        }
        let Wr = new ReadItTTS_0Ua(Wm[ReadItTTS_0Wm.URL], Wm[ReadItTTS_0Wm.aL], Wm[ReadItTTS_0Wm.ac], Wm[ReadItTTS_0Wm.aJ]);
        Wr[ReadItTTS_0Wm.ay] = Wm[ReadItTTS_0Wm.ay];
        Wr[ReadItTTS_0Wm.B] = Wm[ReadItTTS_0Wm.B];
        Wr[ReadItTTS_0Wm.ab] = Wm[ReadItTTS_0Wm.ab];
        Wr[ReadItTTS_0Wm.aW] = Wm[ReadItTTS_0Wm.aW];
        Wr[ReadItTTS_0Wm.aJ] = Wm[ReadItTTS_0Wm.aJ];
        return Wr;
    }
    LM() {
        return this[ReadItTTS_0Wm.ay] > 0x1f4;
    }
    LX() {
        return this[ReadItTTS_0Wm.B];
    }
    complete() {
        this[ReadItTTS_0Wm.B] = true;
    }
    Lx(Wm) {
        this[ReadItTTS_0Wm.ay] += Wm;
        this[ReadItTTS_0Wm.aW] = Date.now();
        if (this.LM()) {
            this[ReadItTTS_0Wm.B] = true;
        }
    }
    equals(Wm) {
        return this[ReadItTTS_0Wm.URL] == Wm[ReadItTTS_0Wm.URL] && this[ReadItTTS_0Wm.aL] == Wm[ReadItTTS_0Wm.aL] && this[ReadItTTS_0Wm.aJ] == Wm[ReadItTTS_0Wm.aJ];
    }
}
class ReadItTTS_0Un {
    init() {
        if (!this.Lf) {
            this.Lf = this.Le(document.body);
            this.consolidatedArray = this.consolidateBlanks(this.Lf);
            this.consolidatedString = this.consolidatedArray.join('');
            this.LZ = {
                'start': {
                    'index': 0x0,
                    'offset': 0x0
                },
                'end': {
                    'index': 0x0,
                    'offset': 0x0
                }
            };
            this.LQ = null;
            this.Lg = null;
        }
    }
    reset() {
        this.Lf = null;
    }
    Lj() {
        if (this.Lg != null && this.LQ != null) {
            this.Lg.style.border = this.LQ;
        }
        ;
        this.LQ = this.Lg = null;
    }
    LO(Wm) {
        const Wr = Wm.getBoundingClientRect();
        const Wp = window.innerHeight || document.documentElement.clientHeight;
        const WM = Wr.top + Wr.height;
        let WX = 'normal';
        if (Wr.top <= 0x0) {
            WX = 'above';
        } else if (WM > Wp + window.screenTop) {
            WX = 'below';
        }
        return WX;
    }
    b0(Wm) {
        if (this.Lg) {
            this.Lg.style.border = this.LQ;
        }
        if (Wm) {
            this.Lg = Wm;
            this.LQ = Wm.style.border;
            Wm.style.borderStyle = 'solid';
            Wm.style.borderColor = 'red';
            Wm.style.borderTopWidth = '0px';
            Wm.style.borderBottomWidth = '1px';
            Wm.style.borderLeftWidth = '0px';
            Wm.style.borderRightWidth = '0px';
            let Wr = this.LO(Wm);
            if (Wr == 'above') {
                Wm.scrollIntoView({
                    'behavior': 'smooth',
                    'block': 'start',
                    'inline': 'nearest'
                });
            } else if (Wr == 'below') {
                Wm.scrollIntoViewIfNeeded();
            }
        }
    }
    b1(Wm) {
        const Wr = [
            'script',
            'style',
            'link',
            'meta'
        ];
        if (Wr.includes(Wm.tagName.toLowerCase())) {
            return true;
        }
        let Wp = getComputedStyle(Wm);
        if (Wp.display == 'none' || Wp.visibility == 'hidden') {
            return true;
        }
        return false;
    }
    Le(Wm) {
        var Wr = [];
        var Wp = Wm.childNodes;
        for (var WM = 0x0; WM < Wp.length; WM++) {
            if (Wp[WM]['nodeType'] === Node.TEXT_NODE && Wp[WM]['textContent']['trim']().length > 0x0) {
                Wr.push(Wp[WM]);
            } else if (Wp[WM]['nodeType'] === Node.ELEMENT_NODE && !this.b1(Wp[WM])) {
                Wr = Wr.concat(this.Le(Wp[WM]));
            }
        }
        return Wr;
    }
    b2(Wm, Wr, startOffset, Wp) {
        let currentOffset = 0x0;
        for (let WM = Wr; WM < Wm.length; WM++) {
            let WX;
            let Wx;
            if (WM == Wr) {
                Wx = Wm[WM]['length'] - startOffset;
            } else {
                Wx = Wm[WM]['length'];
            }
            WX = currentOffset + Wx;
            if (WX >= Wp) {
                let Wf = Wp - currentOffset;
                if (WM == Wr) {
                    Wf += startOffset;
                }
                return {
                    'index': WM,
                    'offset': Wf
                };
            }
            currentOffset = WX;
        }
        return null;
    }
    b3(consolidatedArrayText, Wm, consolidatedArray, Wr) {
        let Wp = Wm.replace(/\s+/g, ' ').trim();
        let WM = consolidatedArrayText.indexOf(Wp);
        let WX = WM + Wp.length;
        if (WM >= 0x0) {
            let Wx = this.b2(consolidatedArray, Wr.end.index, Wr.end.offset, WM);
            let Wf = this.b2(consolidatedArray, Wr.end.index, Wr.end.offset, WX);
            return [
                Wx,
                Wf,
                consolidatedArrayText.slice(WX)
            ];
        }
        return [
            null,
            null,
            null
        ];
    }
    consolidateBlanks(Wm) {
        let consolidatedArr = [];
        for (let Wr = 0x0; Wr < Wm.length; Wr++) {
            let Wp = Wm[Wr]['textContent']['replace'](/\s+/g, ' ');
            if (Wr > 0x0) {
                if (/\s$/['test'](consolidatedArr[Wr - 0x1]) && /^\s/['test'](Wp)) {
                    consolidatedArr[Wr - 0x1] = consolidatedArr[Wr - 0x1]['replace'](/\s$/, '');
                }
            }
            consolidatedArr.push(Wp);
        }
        return consolidatedArr;
    }
    b4(Wm) {
        this.init();
        var Wr = Math.min(Wm.length, 0xa);
        Wm = Wm.substring(0x0, Wr);
        var Wp = this.b5(Wm);
        if (Wp) {
            if (!Wp.scrollIntoView) {
                Wp = Wp.parentElement;
            }
            if (Wp != this.Lg) {
                this.b0(Wp);
            }
        }
    }
    b5(Wm) {
        let [Wr, Wp, WM] = this.b3(this.consolidatedString, Wm, this.consolidatedArray, {
            'start': this.LZ.start,
            'end': this.LZ.end
        });
        if (!Wr || !Wp) {
            return null;
        }
        this.LZ.start = Wr;
        this.LZ.end = Wp;
        this.consolidatedString = WM;
        let WX = [];
        return this.Lf[Wp.index];
    }
}
class FloatingIcon {
    constructor(Wm) {
        this.A9 = null;
        this.b6 = 0x0;
        this.b7 = 0x0;
        this.b8 = 0x14;
        this.parentElement = Wm ? Wm : document.body;
        let Wr = document.getElementsByTagName('html');
        Wr = Wr.length > 0x0 ? Wr[0x0] : null;
        if (Wr) {
            this.parentElement = Wr;
        }
        this.language = '';
        this.voice = '';
        this.b9 = null;
    }
    play() {
        this.b9.getElementById('tts-play-button').style.backgroundImage = 'url("' + chrome.runtime.getURL('images/stop.png') + '")';
        this.ba(false);
    }
    stop() {
        if (this.b9.getElementById('tts-play-button')) {
            this.b9.getElementById('tts-play-button').style.backgroundImage = 'url("' + chrome.runtime.getURL('images/play.png') + '")';
            this.ba(false);
            this.bn(false);
        }
    }
    bA(Wm, Wr = 0x5a, Wp, WM, ytop) {
        let WX = '';
        Wr = Math.PI / 0x2 * (Wr / 0x5a);
        let Wx = Wr;
        const Wf = 0x2 * Math.PI / Wm.length;
        for (let We = 0x0; We < Wm.length; We++) {
            const WZ = WM + Wp * Math.cos(Wx);
            const WQ = ytop - Wp * Math.sin(Wx);
            if (We == 0x0) {
                WX += ' M ' + WZ + ',' + WQ;
            } else {
                if (Wm[We - 0x1] === 0x1) {
                    WX += ' A ' + Wp + ',' + Wp + ' 0 0,1 ' + WZ + ',' + WQ;
                } else {
                    WX += ' M ' + WZ + ',' + WQ;
                }
            }
            Wx -= Wf;
        }
        if (Wm[Wm.length - 0x1] === 0x1) {
            const Wg = WM + Wp * Math.cos(Wx);
            const Wj = ytop - Wp * Math.sin(Wx);
            WX += ' A ' + Wp + ',' + Wp + ' 0 0,1 ' + Wg + ',' + Wj;
        } else {
        }
        return WX;
    }
    bV() {
        if (this.bk) {
            clearInterval(this.bk);
            this.bk = null;
        }
    }
    bL(Wm) {
        Wm = !Wm ? document.documentElement : Wm;
        window.scrollTo(0x0, Wm.clientHeight);
    }
    bb(Wm, Wr) {
        Wr = !Wr ? document.documentElement : Wr;
        if (Wm) {
            Wr.scrollTo(0x0, 0x0);
        } else {
            Wr.scrollTo(0x0, -Wr.clientHeight / 0x2);
        }
    }
    bW(Wm) {
        Wm = !Wm ? document.documentElement : Wm;
        return new Promise(Wr => {
            function Wp() {
                Wm.scrollBy(0x0, Wm.clientHeight);
                if (this.b7 < this.b8 && Math.abs(this.b6 - Wm.scrollTop) > 0xa) {
                    this.b7++;
                    this.b6 = Wm.scrollTop;
                } else {
                    this.b7 = 0x0;
                    clearInterval(this.bk);
                    Wr();
                }
            }
            this.bk = setInterval(Wp.bind(this), 0x3e8);
        });
    }
    bU(Wm, Wr) {
        const Wp = this.b9.getElementById('tts-status-bar');
        if (Wp.clientHeight == 0x0) {
            return;
        }
        let WM = '';
        if (Wp) {
            if (Wr && Wr.length > 0x0) {
                const WX = [];
                let Wx = Math.ceil(Wr.length / 0xc8);
                for (let Wf = 0x0; Wf < Wr.length; Wf += Wx) {
                    const We = Wr.slice(Wf, Wf + Wx);
                    const WZ = We.reduce((WQ, Wg) => WQ & Wg == 0x1, true);
                    WX.push(WZ);
                }
                WM = this.bA(WX, 0x5a, Wp.clientWidth / 0x2 - 0x2, Wp.clientWidth / 0x2, Wp.clientWidth / 0x2);
            }
            this.b9.getElementById('tts-status-bar-progress').setAttribute('d', WM);
        }
    }
    by(Wm, Wr) {
        const Wp = this.b9.getElementById('tts-status-bar-progress_indicator');
        if (Wp) {
            const WM = this.b9.getElementById('tts-status-bar');
            let WX = Math.PI / 0x2 - Wm * (0x2 * Math.PI / Wr);
            let Wx = WX - Math.PI / 0x32;
            const Wf = WM.clientWidth / 0x2 - 0x2;
            let We = WM.clientWidth / 0x2;
            let ytop = WM.clientWidth / 0x2;
            const WZ = We + Wf * Math.cos(WX);
            const WQ = ytop - Wf * Math.sin(WX);
            const Wg = We + Wf * Math.cos(Wx);
            const Wj = ytop - Wf * Math.sin(Wx);
            let WO = ' M ' + WZ + ',' + WQ + ' A ' + Wf + ',' + Wf + ' 0 0,1 ' + Wg + ',' + Wj;
            Wp.setAttribute('d', WO);
        }
    }
    bG(Wm) {
        const Wr = this.b9.getElementById('tts-debug-text');
        if (Wr) {
            this.b9.getElementById('tts-debug-text').value = Wm;
        }
    }
    reset() {
        this.bU(0x0, null);
        this.by(0x0, 0x1);
    }
    async bJ(Wm = null) {
        this.bT();
        Wm = Wm || this.A9.config.show_tts_floating_icon;
        switch (Wm.toLowerCase()) {
        case 'hide':
            this.removeFloatingIcon();
            break;
        case 'small':
            this.controlBar.classList.remove('small');
            this.controlBar.classList.add('small');
            this.showFloatingIcon();
            break;
        default:
            this.controlBar.classList.remove('small');
            this.showFloatingIcon();
            break;
        }
        if (this.A9.config.floating_icon_position_left) {
            this.controlBar.classList.add('left');
        } else {
            this.controlBar.classList.remove('left');
        }
    }
    bq() {
        return this.b9.getElementById('tts-audio');
    }
    removeFloatingIcon() {
        this.controlBar.style.display = 'none';
    }
    showFloatingIcon() {
        this.controlBar.style.display = 'flex';
        this.controlBar.style['flex-direction'] = 'row';
    }
    bR() {
        return this.b9.getElementById('tts-floating-block').style.display === 'flex';
    }
    bH(Wm, Wr) {
        if (Wm) {
            Wr.style.backgroundImage = 'url("' + chrome.runtime.getURL('images/stop.png') + '")';
        } else {
            Wr.style.backgroundImage = 'url("' + chrome.runtime.getURL('images/play.png') + '")';
        }
    }
    async bd() {
        let Wm = await this.A9.kJ()[ReadItTTS_0Wm.Q];
        if (this.bw) {
            clearTimeout(this.bw);
            this.bw = null;
        }
        this.controlBar.classList.add('clicked');
        this.bH(Wm, this.b9.getElementById('tts-play-button'));
        let Wr = this.controlBar.querySelectorAll('button');
        let Wp = Wr.length;
        for (let WM of Wr) {
            if (WM.style.display == 'none') {
                Wp--;
            }
        }
        this.controlBar.style.width = (Wp + 0x1) * 0x28 + Wp * 0xa + 'px';
        this.A9.bB();
        this.bw = setTimeout(() => {
            this.bT();
        }, 0x1f40);
    }
    async bT() {
        if (this.bw) {
            clearTimeout(this.bw);
            this.bw = null;
        }
        this.controlBar.style.width = '40px';
        this.controlBar.classList.remove('clicked');
    }
    togleShowIcon() {
        if (this.controlBar.classList.contains('clicked')) {
            this.bT();
        } else {
            this.bd();
        }
    }
    VP() {
        const Wm = document.querySelector('video');
        return Wm;
    }
    async kT(Wm) {
        await this.A9.kT(Wm);
    }
    bu(Wm) {
        if (this.b9.getElementById('tts-floating-icon')) {
            this.b9.getElementById('tts-floating-icon').style.backgroundImage = Wm ? 'url("' + chrome.runtime.getURL('images/icon_ready.png') + '")' : 'url("' + chrome.runtime.getURL('images/icon.png') + '")';
        }
    }
    bn(Wm) {
        const Wr = this.b9.getElementById('tts-busy-indicator');
        if (!Wr) {
            return;
        }
        if (Wm) {
            let Wp = window.getComputedStyle(Wr);
            if (Wp.display == 'none') {
                window.removeEventListener('scroll', this.bE);
                window.addEventListener('scroll', this.bE.bind(this));
                let WM = {
                    'left': 0x0,
                    'top': 0x0,
                    'width': window.innerWidth,
                    'height': window.innerHeight
                };
                if (this.A9.V7()) {
                    let WX = this.VP();
                    WM = WX.getBoundingClientRect();
                }
                Wr.style.origTop = '' + WM.top;
                Wr.style.origLeft = '' + WM.left;
                Wr.style.left = WM.left + 'px';
                Wr.style.top = WM.top + 'px';
                Wr.style.height = WM.height + 'px';
                Wr.style.width = WM.width + 'px';
                Wr.style.display = 'flex';
            }
        } else {
            Wr.style.display = 'none';
            window.removeEventListener('scroll', this.bE);
        }
    }
    bF(Wm) {
        if (Wm <= 0x1) {
            this.b9.getElementById('tts-busy-indicator-mark').style.width = parseInt(Wm * 0x64) + '%';
        } else {
            this.b9.getElementById('tts-busy-indicator-mark').style.width = '0%';
        }
    }
    ba(Wm, Wr = null) {
        if (this.b9.getElementById('tts_message_bad_play_blocked')) {
            this.b9.getElementById('tts_message_bad_play_blocked').style.display = 'none';
        }
        if (this.b9.getElementById('tts_message_bad_subtitle_detail')) {
            this.b9.getElementById('tts_message_bad_subtitle_detail').style.display = 'none';
        }
        if (this.b9.getElementById('tts_message_tts_error')) {
            this.b9.getElementById('tts_message_tts_error').style.display = 'none';
        }
        if (this.b9.getElementById('tts_message_subtitle_is_not_ready')) {
            this.b9.getElementById('tts_message_subtitle_is_not_ready').style.display = 'none';
        }
        if (Wr != null && this.b9.getElementById(Wr)) {
            this.b9.getElementById(Wr).style.display = Wm ? 'inline' : 'none';
        }
        let Wp = this.b9.getElementById('tts_readit_message_box');
        if (!Wm) {
            Wp.close();
        } else {
            Wp.showModal();
        }
    }
    bE() {
        const Wm = this.b9.getElementById('tts-busy-indicator');
        if (!Wm) {
            return;
        }
        let Wr = window.getComputedStyle(Wm);
        if (Wr.display != 'none' && this.A9.V7()) {
            const Wp = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
            const WM = window.scrollX || window.pageXOffset || document.documentElement.scrollLeft;
            let WX = parseFloat(Wm.style.origTop) - parseFloat(Wp);
            let Wx = parseFloat(Wm.style.origLeft) - parseFloat(WM);
            Wm.style.top = WX + 'px';
            Wm.style.left = Wx + 'px';
        }
    }
    debug(Wm) {
        let Wr = this.b9.getElementById('tts-debug-textarea');
        if (Wr) {
            Wr.value += Wm + '\n';
        }
    }
    transVoices() {
        let Wm = this.b9.getElementById('tts-language');
        let Wr = Wm.getElementsByTagName('option');
        this.A9.i18n.transVoices(Array.from(Wr));
    }
    bC() {
        const languageElement = this.b9.getElementById('tts-language');
        languageElement.innerHTML = '';
        let Wm = this.A9.bY();
        languageElement.innerHTML = '';
        let myLanguages = ReadItTTS_0WM.nS();
        for (const language in Wm) {
            if (!ReadItTTS_0WM.containsSameL(myLanguages, language)) {
                continue;
            }
            const Wr = document.createElement('option');
            Wr.setAttribute('id', 'tts_vl' + Wm[language]['index']);
            Wr.setAttribute(ReadItTTS_0WX.nc, 'tts_vl' + Wm[language]['index']);
            Wr.setAttribute('value', language);
            Wr.textContent = Wm[language]['language'] + ' - ' + Wm[language]['language_code'];
            languageElement.appendChild(Wr);
        }
        if (this.language != null && this.language.trim() != '') {
            languageElement.value = this.language;
            this.bz(Wm[this.language]['voices']);
        } else {
            languageElement.value = '';
        }
        this.transVoices();
    }
    async bz(Wm) {
        const Wr = this.b9.getElementById('tts-voice');
        Wr.innerHTML = '';
        Wm.forEach(Wp => {
            if (!Wp.language) {
                return;
            }
            const WM = document.createElement('option');
            WM.setAttribute('id', 'tts_v' + Wp.index);
            WM.setAttribute('value', Wp.Name);
            let WX = this.A9.bl(Wp);
            let Wx = Wp.Locale.split('-');
            let locale = Wx.length > 0x1 ? Wx[0x1] : Wx[0x0];
            WM.textContent = WX + ' (' + locale + '), ' + Wp.Gender;
            Wr.appendChild(WM);
        });
        if (this.voice != null && this.voice.trim() != '') {
            Wr.value = this.voice;
        } else {
            Wr.value = '';
        }
        this.bh();
        this.transVoices();
    }
    kW(Wm) {
        const Wr = document.getElementById('tts-floating-controlbar-host');
        if (Wr) {
            return;
        }
        let controlBarHTML = '\n        <div id="tts-floating-controlbar-container" style="display:none">\n            <div id="tts-floating-controlbar" class="tts-floating-controlbar">\n                <audio id="tts-audio"></audio>\n                <div id="tts-floating-icon" draggable="true" class="tts-floating-icon">\n                </div>\n                <button id="tts-play-button" class="tts-floating-button b1">\n                        <svg id="tts-status-bar" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">\n                            <path id="tts-status-bar-progress" fill="none" stroke="#0c76f0" stroke-width="1"/>\n                            <path id="tts-status-bar-progress_indicator" fill="none" stroke="red" stroke-width="2"/>\n                        </svg>\n                </button>\n                <button id="tts-voice-button" class="tts-floating-button b2"></button>\n                <button id="tts-voice-level-button" class="tts-floating-button b3"></button>\n                <button id="tts-setup-button" class="tts-floating-button b4"></button>\n                \n            </div>\n            <div id="tts-busy-indicator" class="tts-busy-indicator">\n                <img id="tts-busy-indicator-img" class="tts-busy-indicator-img">\n                <div id="tts-busy-indicator-progress" class="tts-busy-indicator-progress">\n                    <div id="tts-busy-indicator-mark" class="tts-busy-indicator-mark"></div>\n                </div>\n            </div>\n            <dialog id="tts-floating-block" class="tts-floating-block tts-modal">\n                <div id="tts-floating-block-close" class="dialog-close"></div>\n                <section>\n                    <div id="yt_audio_voicelevel_controlbar" class="tts_audio_item_controlbar" style="display: ' + (this.A9.V7() ? 'flex' : 'none') + '">\n                        <div class="tts_audio_item_item_indicator_group">\n                            <div id="yt_audio_voicelevel_img" class="tts_audio_item_item_image"></div>\n                            <div id="yt_audio_voicelevel_label" class="tts_audio_item_item_label" tts-data-i18n="speed_panel_youtube_volume">Youtube Sound Volume</div>\n                        </div>\n                        <input id="yt_audio_voicelevel_input" class="tts_audio_item_value_mark" type="range">\n                    </div>\n                    <div id="tts_audio_voicelevel_controlbar" class="tts_audio_item_controlbar">\n                        <div class="tts_audio_item_item_indicator_group">\n                            <div id="audio_voicelevel_img" class="tts_audio_item_item_image"></div>\n                            <div id="tts_audio_voicelevel_label" class="tts_audio_item_item_label" tts-data-i18n="speed_panel_volume">Sound Volume</div>\n                        </div>\n                        <input id="tts_audio_voicelevel_input" class="tts_audio_item_value_mark" type="range">\n                    </div>\n                    <div class="tts_audio_item_controlbar" style="display: ' + (this.A9.V7() ? 'flex' : 'none') + '">\n                        <h2 tts-data-i18n="settings_dynamic_volume">Dynamic Voice Level\n                        </h2>\n                        <label class="switch">\n                            <input type="checkbox" id="dynamic_volume" />\n                            <span class="slider round"></span>\n                        </label>\n                    </div>\n                </section>\n            </dialog>\n            <dialog id="tts-voice-block" class="tts-floating-block">\n                <div id="tts-voice-block-close" class="dialog-close"></div>\n                <section>\n                    <div class="tts_audio_item_item_indicator_group">\n                        <div id="tts-voice-list-img" class="tts_audio_item_item_image"></div>\n                        <div tts-data-i18n="settings_voice_section" class="tts_audio_item_item_label">Voice *<div id="loading_span" class="loading_span"></div>\n                    </div>\n                    </div>\n                    <div class="tts-voice-select-container">\n                        <div style="display: flex; column-gap: 10px; width: 100%;">\n                            <select id="tts-language">\n                                <option value="" tts-data-i18n="settings_voice_language">Language...</option>\n                            </select>\n                            <select id="tts-voice">\n                                <option value="" tts-data-i18n="settings_voice_voice">Voice...</option>\n                            </select>\n                        </div>\n                        <input type="button" id="tts-voice-block-ok-button" class="round-button" value="OK" />\n                    </div>\n                </section>\n            </dialog>\n            <dialog id="tts_readit_message_box" class="tts-floating-block">\n                <section>\n                    <div id="tts_readit_message_box-close" class="dialog-close"></div>\n                    <p tts-data-i18n="message_error_reading_blocked">Error Playing</p>\n                    <span id="tts_message_bad_play_blocked" tts-data-i18n="message_error_blocked_detail">Please retry or refresh page. Site provider may block engine from reading in the page.</span>\n                    <span id="tts_message_bad_subtitle_detail" tts-data-i18n="message_error_bad_subtitle_detail">The subtitle is broken.</span>\n                    <span id="tts_message_tts_error" tts-data-i18n="message_error_tts_error">Network is slow.</span>\n                    <span id="tts_message_subtitle_is_not_ready" tts-data-i18n="message_error_tts_subtitle_not_ready">Subtitle is not ready. Please check if video has subtitle or try manually switch it on.</span>\n                </section>\n            </dialog>\n        </div>';
        this.parentElement.insertAdjacentHTML('beforeend', '<div id="tts-floating-controlbar-host"></div>');
        let Wp = document.getElementById('tts-floating-controlbar-host');
        this.b9 = Wp.attachShadow({ 'mode': 'open' });
        this.b9.innerHTML = controlBarHTML;
        const WM = chrome.runtime.getURL('ui/tss_control_bar.css');
        const WX = document.createElement('style');
        WX.textContent = '@import "' + WM + '";';
        this.b9.appendChild(WX);
        const Wx = this.b9.getElementById('tts-play-button');
        Wx.style.backgroundImage = 'url("' + chrome.runtime.getURL('images/play.png') + '")';
        Wx.addEventListener('mousedown', WQ => {
            this.bo = false;
            WQ.preventDefault();
            this.bs = setTimeout(() => {
                this.bo = !this.A9.AA;
            }, 0x7d0);
        });
        Wx.addEventListener('mouseup', async () => {
            clearTimeout(this.bs);
            await this.kT(this.bo);
            this.bd();
        });
        Wx.addEventListener('touchstart', WQ => {
            this.bo = false;
            WQ.preventDefault();
            this.bs = setTimeout(() => {
                this.bo = !this.A9.AA;
            }, 0x7d0);
        });
        Wx.addEventListener('touchend', async () => {
            clearTimeout(this.bs);
            await this.kT(this.bo);
            this.bd();
        });
        this.b9.getElementById('tts-voice-button').style.backgroundImage = 'url("' + chrome.runtime.getURL('images/voice.png') + '")';
        this.b9.getElementById('audio_voicelevel_img').style.backgroundImage = 'url("' + chrome.runtime.getURL('images/volume_white.png') + '")';
        this.b9.getElementById('yt_audio_voicelevel_img').style.backgroundImage = 'url("' + chrome.runtime.getURL('images/volume_white.png') + '")';
        this.b9.getElementById('tts-voice-list-img').style.backgroundImage = 'url("' + chrome.runtime.getURL('images/voice_white.png') + '")';
        this.b9.getElementById('tts-language').onchange = () => {
            const languageElement = this.b9.getElementById('tts-language');
            if (languageElement.value != '') {
                this.language = languageElement.value;
                this.bC();
            }
        };
        this.b9.getElementById('tts-voice').onchange = () => {
            this.voice = this.b9.getElementById('tts-voice').value;
        };
        this.b9.getElementById('tts-voice-block-ok-button').onclick = () => {
            this.A9.bi(this.language, this.voice);
            this.b9.getElementById('tts-voice-block').close();
        };
        this.b9.getElementById('tts-floating-block-close').onclick = () => {
            this.b9.getElementById('tts-floating-block').close();
        };
        this.b9.getElementById('tts-voice-block-close').onclick = () => {
            this.b9.getElementById('tts-voice-block').close();
        };
        this.b9.getElementById('tts_readit_message_box-close').onclick = () => {
            this.b9.getElementById('tts_readit_message_box').close();
        };
        this.b9.getElementById('tts-busy-indicator-img').src = '' + chrome.runtime.getURL('images/loading.gif');
        this.bS = this.b9.getElementById('tts-floating-icon');
        this.controlBar = this.b9.getElementById('tts-floating-controlbar');
        this.controlBar.style.top = Wm.floating_icon_position + 'px';
        if (Wm.floating_icon_position_left) {
            this.controlBar.classList.add('left');
        } else {
            this.controlBar.classList.remove('left');
        }
        this.bS.addEventListener('dragstart', function (WQ) {
            WQ.dataTransfer.setData('text/plain', WQ.target.id);
        });
        this.bS.addEventListener('dragend', WQ => {
            if (WQ.clientX < window.innerWidth / 0x2) {
                Wm.floating_icon_position_left = true;
                this.controlBar.classList.add('left');
            } else {
                Wm.floating_icon_position_left = false;
                this.controlBar.classList.remove('left');
            }
            this.controlBar.style.top = WQ.clientY + 'px';
            Wm.floating_icon_position = WQ.clientY;
            ReadItTTS_0WM.nb(Wm);
        });
        this.bS.style.backgroundImage = 'url("' + chrome.runtime.getURL('images/icon_ready.png') + '")';
        this.bS.addEventListener('click', () => {
            this.togleShowIcon();
        });
        const Wf = this.b9.getElementById('tts-setup-button');
        if (Wf) {
            Wf.style.backgroundImage = 'url("' + chrome.runtime.getURL('images/setup.png') + '")';
            Wf.addEventListener('click', () => {
                this.A9.kd();
            });
        }
        const We = this.b9.getElementById('tts-voice-level-button');
        if (We) {
            We.style.backgroundImage = 'url("' + chrome.runtime.getURL('images/volume.png') + '")';
            We.onclick = WQ => {
                WQ.stopPropagation();
                this.bd();
                this.kB();
            };
        }
        let WZ = this.b9.getElementById('tts-voice-button');
        if (WZ) {
            WZ.addEventListener('click', WQ => {
                WQ.stopPropagation();
                if (!ReadItTTS_0WM.n5(this.A9.config)) {
                    this.A9.kd();
                } else {
                    this.bd();
                    this.kw();
                }
            });
        }
        this.bJ();
        window.setTimeout(() => {
            this.b9.getElementById('tts-floating-controlbar-container').style.display = 'block';
        }, 0x3e8);
    }
    bK(Wm, Wr, Wp, WM, WX, Wx, Wf, We) {
        let WZ = 0.5;
        Wf = parseFloat(Wf);
        if (Wx < WX && Wx > WM) {
            if (Wf > Wx) {
                WZ += (Wf - Wx) / (WX - Wx) * 0.5;
            } else {
                WZ -= (Wx - Wf) / (Wx - WM) * 0.5;
            }
        } else {
            WZ = Wf / (WX - WM);
        }
        WZ = parseFloat(parseFloat(WZ).toFixed(0x2));
        Wr.value = WZ * 0x64;
        Wf = parseFloat(parseFloat(Wf).toFixed(0x2));
        Wp.innerText = Wp.innerText.split(/[(（]/g)[0x0] + (' (' + Wf + ')');
        Wm.onchange = Wg => {
            let Wj = WQ(Wr.value / 0x64);
            Wj = parseFloat(parseFloat(Wj).toFixed(0x2));
            Wp.innerText = Wp.innerText.split(/[(（]/g)[0x0] + (' (' + Wj + ')');
            We(Wj);
        };
        function WQ(Wg) {
            let Wj = 0x0;
            if (Wx < WX && Wx > WM) {
                if (Wg < 0.5) {
                    Wj = Wg / 0.5 * (Wx - WM) + WM;
                } else {
                    Wj = (Wg - 0.5) / 0.5 * (WX - Wx) + Wx;
                }
            } else {
                Wj = Wg * (WX - WM) + WM;
            }
            return Wj;
        }
    }
    kB() {
        const Wm = this.b9.getElementById('tts-floating-block');
        if (Wm.open) {
            Wm.close();
        } else {
            Wm.showModal();
            if (this.A9.V7()) {
                if (this.A9.bP() >= 0x0) {
                    const ytVoiceLevelBar = this.b9.getElementById('yt_audio_voicelevel_controlbar');
                    if (ytVoiceLevelBar) {
                        const ytVoiceLevelIndicator = this.b9.getElementById('yt_audio_voicelevel_input');
                        const WX = this.b9.getElementById('yt_audio_voicelevel_label');
                        this.bK(ytVoiceLevelBar, ytVoiceLevelIndicator, WX, 0x0, 0x1, 0x1, this.A9.bP(), Wx => {
                            this.A9.bI(Wx);
                        });
                    }
                }
                this.b9.getElementById('dynamic_volume').checked = this.A9.config.dynamic_volume;
                this.b9.getElementById('dynamic_volume').onclick = Wx => {
                    this.A9.bt(Wx.target.checked);
                };
            }
            const Wr = this.b9.getElementById('tts_audio_voicelevel_controlbar');
            const Wp = this.b9.getElementById('tts_audio_voicelevel_input');
            const WM = this.b9.getElementById('tts_audio_voicelevel_label');
            this.bK(Wr, Wp, WM, 0x0, 0x1, 0x1, this.A9.AS(), Wx => {
                this.A9.AK(Wx);
            });
        }
    }
    async kw() {
        const Wm = this.b9.getElementById('tts-voice-block');
        if (Wm.open) {
            Wm.close();
        } else {
            Wm.showModal();
            await this.A9.bc();
        }
    }
    bh() {
        if (this.b9.getElementById('loading_span')) {
            if (!this.voices || this.voices.length == 0x0) {
                this.b9.getElementById('loading_span').classList.add('active');
                this.b9.getElementById('loading_span').style.backgroundImage = 'url("./images/loading.gif")';
            } else {
                this.b9.getElementById('loading_span').classList.remove('active');
            }
        }
    }
    close() {
        this.bT();
    }
}
class ReadItTTS_0UA {
    getDomPath(Wm) {
        var Wr = [];
        while (Wm.parentNode != null) {
            var Wp = 0x0;
            var WM = 0x0;
            for (var WX = 0x0; WX < Wm.parentNode.childNodes.length; WX++) {
                var Wx = Wm.parentNode.childNodes[WX];
                if (Wx.nodeName == Wm.nodeName) {
                    if (Wx === Wm) {
                        WM = Wp;
                    }
                    Wp++;
                }
            }
            if (Wm.hasAttribute('id') && Wm.id != '') {
                Wr.unshift(Wm.nodeName.toLowerCase() + '#' + Wm.id);
            } else if (Wp > 0x1) {
                Wr.unshift(Wm.nodeName.toLowerCase() + ':eq(' + WM + ')');
            } else {
                Wr.unshift(Wm.nodeName.toLowerCase());
            }
            Wm = Wm.parentNode;
        }
        return Wr.slice(0x1);
    }
    bv(Wm) {
        const Wr = window.getComputedStyle(Wm);
        return Wr.display === 'block' || Wr.display === 'list-item';
    }
    bN(Wm) {
        const Wr = new Map();
        function Wp(WM) {
            if (WM.nodeType === Node.TEXT_NODE) {
                const WX = WM.textContent.trim();
                if (WX.length > 0x0) {
                    Wr.set(WX, WM);
                }
            } else if (WM.nodeType === Node.ELEMENT_NODE) {
                for (let Wx of WM.childNodes) {
                    Wp(Wx);
                }
                if (this.bv(WM)) {
                    Wr.set('\n', WM);
                }
            }
        }
        Wp(Wm);
        return Wr;
    }
    bD() {
        const Wm = document.cloneNode(true);
        const Wr = new Readability(Wm);
        const content = Wr.parse();
        let Wp = null;
        if (!content || !content.textContent) {
            return null;
        }
        const WM = {};
        Wp = content.title.length > ReadItTTS_0Wm.V ? content.title.substring(0x0, ReadItTTS_0Wm.V) + '...' : content.title;
        content.textContent = content.textContent.replace(/(https?:\/\/[^\s]+)/g, '...');
        let WX = [
            'pre',
            'code'
        ];
        WM.text = content.textContent;
        WM.title = Wp;
        WM.time = ReadItTTS_0WM.getCurrentTime();
        return WM;
    }
}
class ReadItTTS_0UV {
    constructor({
        minLength: minLength = ReadItTTS_0Wm.n,
        maxLength: maxLength = ReadItTTS_0Wm.A,
        lang: Wm
    }) {
        this.bm = [];
        this.minLength = parseInt(minLength) * ReadItTTS_0WM.ag(Wm, Language.LW);
        this.maxLength = (parseInt(maxLength) + 0x14) * ReadItTTS_0WM.ag(Wm, Language.LW);
        this.lang = Wm;
    }
    consume(Wm) {
        let Wr = Math.min(Wm.length, this.minLength);
        let Wp = Wr;
        let WM = Math.min(Wm.length, this.maxLength);
        let WX = Wm.substring(Wp, WM);
        let Wx;
        let Wf = false;
        let We = [
            {
                'br': ReadItTTS_0Wm.G,
                'bp': false
            },
            {
                'br': ReadItTTS_0Wm.J,
                'bp': true
            }
        ];
        for (let WQ of We) {
            let Wg = WQ.br;
            Wg.lastIndex = 0x0;
            let Wj = 0x0;
            while ((Wx = Wg.exec(WX)) != null) {
                Wj = Wx.index;
                if (Wj > 0x0 && Wj + 0x2 <= WX.length) {
                    let WO = WX.substring(Wj - 0x1, Wj + 0x2);
                    if (ReadItTTS_0Wm.R.test(WO)) {
                        Wj = -0x1;
                        continue;
                    }
                }
                Wf = true;
                WM = Wp + Wj + 0x1;
                if (!WQ.bp) {
                    break;
                }
            }
            if (Wf) {
                break;
            }
        }
        if (!Wf) {
            let U0 = WX.lastIndexOf(' ');
            if (U0 > 0x0) {
                WM = Wp + U0;
            }
        }
        const WZ = Wm.substring(0x0, WM);
        this.bm.push(WZ);
        return Wm.substring(WM, Wm.length);
    }
    split(Wm) {
        while (Wm.length > 0x0) {
            Wm = this.consume(Wm);
        }
        return this.bm;
    }
}
class ReadItTTS_0Uk {
    static bM = 0x1;
    static bX = 0x2;
    constructor(Wm = ReadItTTS_0Wm.n, Wr = ReadItTTS_0Wm.A, Wp) {
        this.minLength = Wm * ReadItTTS_0WM.ag(Wp, Language.LW);
        this.maxLength = Wr * ReadItTTS_0WM.ag(Wp, Language.LW);
        this.bx = null;
        this.Lz = [];
        this.text = '';
        this.lang = Wp;
        this.bf = null;
        this.be = null;
    }
    aZ() {
        return (!this.bx || this.bx.aZ()) && this.Lz.length == 0x0;
    }
    bZ() {
        let Wm = '';
        for (const Wr of this.Lz) {
            Wm += Wr.Vn.text.substring(Wr.Lh, Wr.Lo);
        }
        return Wm;
    }
    LN(Wm) {
        let Wr = 0x1;
        while (!this.aZ()) {
            if (this.bx == null) {
                this.bx = new ReadItTTS_0U8(ReadItTTS_0U8.LY);
            }
            if (!this.bf && !this.be) {
                while (this.Lz.length > 0x0) {
                    const Wp = this.Lz[0x0];
                    this.bx.Ll(Wp.Vn, Wp.Lh, Wp.Lo);
                    this.Lz.splice(0x0, 0x1);
                    if (this.bx.kp().length >= this.minLength && Wp.Vn.textLength() <= Wp.Lo) {
                        break;
                    }
                }
            } else {
                let WM = this.bf ? this.bf : this.be;
                while (this.Lz.length > 0x0) {
                    const WX = this.Lz[0x0];
                    if (WX.Vn.index <= WM.Vn.index) {
                        if (WX.Vn.index < WM.Vn.index || WX.Lo <= WM.offset) {
                            this.bx.Ll(WX.Vn, WX.Lh, WX.Lo);
                            this.Lz.splice(0x0, 0x1);
                        } else {
                            break;
                        }
                    } else {
                        break;
                    }
                }
                this.bf = this.be = null;
            }
            if (this.bx && !this.bx.aZ()) {
                Wm.Lc(this.bx);
            }
            this.bx = null;
        }
    }
    consume(Wm, Wr) {
        let Wp = Wm.text.trim();
        Wp = Wp.replace(ReadItTTS_0Wm.J, '');
        Wp = Wp.replace(ReadItTTS_0Wm.T, '');
        Wp = Wp.trim();
        if (Wp.length == 0x0) {
            if (!this.bx) {
                this.bx = new ReadItTTS_0U8(ReadItTTS_0U8.LC);
            } else if (this.bx.VG()) {
                this.bf = this.be = null;
                this.LN(Wr);
                this.bx = new ReadItTTS_0U8(ReadItTTS_0U8.LC);
            }
            this.bx.Ll(Wm, 0x0, 0x0);
            return;
        } else {
            if (!this.bx) {
                this.bx = new ReadItTTS_0U8(ReadItTTS_0U8.LY);
            } else if (this.bx.Vq()) {
                Wr.Lc(this.bx);
                this.bx = new ReadItTTS_0U8(ReadItTTS_0U8.LY);
            }
        }
        let WM = 0x0;
        ReadItTTS_0Wm.T.lastIndex = 0x0;
        ReadItTTS_0Wm.q.lastIndex = 0x0;
        ReadItTTS_0Wm.J.lastIndex = 0x0;
        while (WM < Wm.textLength()) {
            [Wm, WM] = this.process(Wm, Wr, WM);
        }
    }
    process(Wm, Wr, Wp) {
        let WM = this.bZ();
        let WX = this.maxLength - WM.length;
        let Wx = Wp + Math.max(this.minLength - WM.length, 0x0);
        let Wf = null;
        let We = ReadItTTS_0Wm.J;
        Wf = this.bQ(We, Wx, Wm, Wp, WX);
        if (!Wf) {
            We = ReadItTTS_0Wm.T;
            let WQ = this.bQ(We, Wx, Wm, Wp, WX);
            if (WQ) {
                this.be = WQ;
            } else {
                if (ReadItTTS_0WM.nE(this.lang)) {
                    We = ReadItTTS_0Wm.q;
                    WQ = this.bQ(We, Wx, Wm, Wp, WX, true);
                    if (WQ) {
                        this.be = WQ;
                    }
                }
            }
        }
        let WZ = 0x0;
        if (Wf) {
            WZ = this.bg(Wm, Wp, Wf, WZ, Wr);
        } else if (Wm.textLength() >= WX + Wp) {
            if (this.be) {
                Wf = this.be;
                WZ = this.bg(Wm, Wp, Wf, WZ, Wr);
            } else {
                this.Lz.push({
                    'Vn': Wm,
                    'Lh': Wp,
                    'Lo': WX + Wp
                });
                WZ = WX + Wp;
                this.LN(Wr);
                if (WX + Wp < Wm.textLength()) {
                    this.bx = new ReadItTTS_0U8(ReadItTTS_0U8.LY);
                }
            }
        } else {
            this.Lz.push({
                'Vn': Wm,
                'Lh': Wp,
                'Lo': Wm.textLength()
            });
            WZ = Wm.textLength();
        }
        return [
            Wm,
            WZ
        ];
    }
    bg(Wm, Wr, Wp, WM, WX) {
        this.Lz.push({
            'Vn': Wm,
            'Lh': Wr,
            'Lo': Wp.offset
        });
        WM = Wp.offset;
        this.bf = Wp;
        this.LN(WX);
        if (WM < Wm.textLength()) {
            this.bx = new ReadItTTS_0U8(ReadItTTS_0U8.LY);
        }
        this.bf = Wp;
        return WM;
    }
    bQ(Wm, Wr, Wp, WM, WX, Wx = false) {
        let Wf = null;
        let We = null;
        Wm.lastIndex = Wr;
        while ((We = Wm.exec(Wp.text)) != null) {
            if (We.index - WM >= WX) {
                break;
            }
            let WZ = We.index;
            if (WZ > 0x0 && WZ + 0x2 <= Wp.text.length) {
                let WQ = Wp.text.substring(WZ - 0x1, WZ + 0x2);
                if (ReadItTTS_0Wm.R.test(WQ)) {
                    continue;
                }
            }
            if (Wf == null) {
                Wf = {
                    'Vn': Wp,
                    'offset': WZ + 0x1
                };
            }
            Wf.offset = WZ + 0x1;
            if (!Wx) {
                break;
            }
        }
        return Wf;
    }
}
class ReadItTTS_0UL {
    constructor(Wm) {
        this.AA = false;
        this.bj = Wm;
        Wm.A9 = this;
    }
    bO(Wm) {
        this.AA = Wm;
    }
    isPlaying() {
        return this.AA;
    }
    kU() {
        this.bO(true);
        this.bj.play();
    }
    V3(Wm, Wr) {
    }
    A4() {
    }
    A5(Wm, Wr, Wp) {
    }
    A6(Wm, Wr, Wp) {
        this.bj.by(Wr, Wp);
    }
    kd() {
        chrome.runtime.sendMessage({ 'action': 'openOptions' });
    }
}
class FloatingIconController extends ReadItTTS_0UL {
    static W0 = 'a1';
    static AM = 'a2';
    static V6 = 'a3';
    static Ax = 'a4';
    static VC = 'a5';
    static AQ = 'a6';
    static async init() {
        const floatingIcon = new FloatingIcon();
        const controller = new FloatingIconController(floatingIcon);
        await controller.W1();
        return controller;
    }
    constructor(floatingIcon) {
        super(floatingIcon);
        this.contentExtractor = new ReadItTTS_0UA();
        this.b4 = new ReadItTTS_0Un();
        this.translator = new ReadItTTS_0Wx();
        this.W2 = false;
        this.W3 = null;
        this.W4 = null;
        this.An = null;
        this.W5 = null;
    }
    async W1() {
        this.i18n = new ReadItTTS_0WX(Language.COUNTRIES, true);
        this.config = await ReadItTTS_0WM.n8(true);
        this.bj.kW(this.config);
        this.i18n.translateDocument(this.bj.b9);
        this.W6(false);
        this.W7 = new ReadItTTS_0We(this.bj.bq(), this);
        this.W7.init();
        this.bO(false);
        if (this.V7()) {
            this.W8();
            this.W9();
        }
        this.VF = new ReadItTTS_0Wg(this);
        this.Wa = new ReadItTTS_0Wj(this);
        this.Wa.nA();
        this.ky('stop');
    }
    async Wn(Wm) {
        let Wr = Wm[ReadItTTS_0Wm.URL];
        let [Wp, WM, WX] = ReadItTTS_0WM.nR(Wr);
        let config = await ReadItTTS_0WM.n8(true);
        config = { [ReadItTTS_0Wm.a5]: config[ReadItTTS_0Wm.a5] };
        let Wx = await ReadItTTS_0WM.nW(Wp, WM, WX, config);
        let Wf = 0xc;
        let We = Wx.length == 0x0;
        let WZ = ['time'];
        let WQ = Date.now();
        if (Wx.length == 0x0) {
            this.Wa.kG(Wm, window.location.href, this.config.dvl);
        }
        while (Wx.length == 0x0) {
            Wx = await ReadItTTS_0WM.nW(Wp, WM, WX, config, null, false);
            await new Promise(Wg => setTimeout(Wg, 0x3e8));
            Wf -= 0x1;
            if (Wf <= 0x0) {
                WQ = (Date.now() - WQ) / 0x3e8;
                this.config[WZ[0x0]] = WQ;
                this.ky('subtitle_local');
                return null;
            }
        }
        if (We) {
            WQ = (Date.now() - WQ) / 0x3e8;
            this.config[WZ[0x0]] = WQ;
            this.ky('subtitle_remote');
        }
        return Wx[0x0];
    }
    async WA(Wm) {
        if (this.WV) {
            return;
        }
        if (Wm == null) {
            return;
        }
        let Wr = new RegExp('(' + ReadItTTS_0Wm.b + ')/');
        let Wp = Wr.exec(window.location.href);
        let WM = Wp[0x1];
        let WX = await ReadItTTS_0WM.n3(ReadItTTS_0Wm.aB, []);
        let Wx = WX.find(Wf => Wf.videoId === Wm);
        if (Wx == null) {
            let Wf = WM + '/' + ReadItTTS_0Wm.U + '?v=' + Wm;
            let We = Math.round((0.5 + Math.random() * 0.5) * 0x3e8);
            await new Promise(WO => setTimeout(WO, We));
            const WZ = await ReadItTTS_0WM.nk(Wf, null, 0x3, 0x1388, false);
            if (!WZ.ok || WZ.parsedData == null) {
                return;
            }
            let WQ = '"' + ReadItTTS_0Wm.ai + '"[\\s:]+"([^"]*?' + ReadItTTS_0Wm.k + '\\?v=[^&]*?[^"]+)"';
            WQ = new RegExp(WQ, 'gi');
            let Wg = null;
            const Wj = [];
            while ((Wg = WQ.exec(WZ.parsedData)) != null) {
                let WO = Wg[0x1]['replace'](/\\u([0-9a-fA-F]{4})(?=\D)/g, (U1, U2) => {
                    return String.fromCharCode(parseInt(U2, 0x10));
                });
                let U0 = new RegExp(ReadItTTS_0Wm.b + '/', 'i');
                if (!U0.test(WO)) {
                    let U1 = WO.trim().split('/');
                    WO = WM + '/' + ReadItTTS_0Wm.e + '/' + U1[U1.length - 0x1];
                }
                Wj.push({ [ReadItTTS_0Wm.ai]: WO });
            }
            if (Wj.length > 0x0) {
                Wx = {
                    [ReadItTTS_0Wm.aE]: Wm,
                    [ReadItTTS_0Wm.x]: Wj
                };
                WX.push(Wx);
                await ReadItTTS_0WM.n4(ReadItTTS_0Wm.aB, WX);
            }
        }
        return Wx;
    }
    async Wk() {
        let Wm = false;
        let Wr = await this.LD();
        if (Wr.length > 0x0) {
            return;
        }
        let Wp = this.WL();
        let WM = await this.WA(Wp);
        if (WM != null) {
            let WX = WM[ReadItTTS_0Wm.x];
            let Wx = await ReadItTTS_0WM.ns();
            let Wf = [];
            let We = 0x0;
            for (let WZ of WX) {
                if (WZ[ReadItTTS_0Wm.ai]) {
                    let WQ = WZ[ReadItTTS_0Wm.ai];
                    let [Wg, Wj, WO] = ReadItTTS_0WM.nR(WQ);
                    if (WO == null) {
                        continue;
                    }
                    WQ = ReadItTTS_0WM.n0(WQ, Wj, WO);
                    if (ReadItTTS_0WM.aj(WO, Wx)) {
                        if (Wj == null) {
                            Wf.push({
                                'url': WQ,
                                'index': We,
                                'order': 0x1
                            });
                        }
                    } else if (ReadItTTS_0WM.aj('en', WO)) {
                        if (ReadItTTS_0WM.aj(Wx, Wj)) {
                            Wf.push({
                                'url': WQ,
                                'index': We,
                                'order': 0x2
                            });
                        } else {
                            let U0 = ReadItTTS_0WM.n0(WQ, Wx, WO);
                            Wf.push({
                                'url': U0,
                                'index': We,
                                'order': 0x4
                            });
                        }
                    } else {
                        if (ReadItTTS_0WM.aj(Wj, Wx)) {
                            Wf.push({
                                'url': WQ,
                                'index': We,
                                'order': 0x3
                            });
                        } else if (Wj == null) {
                            let U1 = ReadItTTS_0WM.n0(WQ, Wx, WO);
                            Wf.push({
                                'url': U1,
                                'index': We,
                                'order': 0x5
                            });
                        }
                    }
                    We++;
                }
            }
            Wf.sort((U2, U3) => U2.order - U3.order);
            for (let U2 of Wf) {
                try {
                    let U3 = Math.round((0.5 + Math.random() * 0.5) * 0x3e8);
                    await new Promise(U4 => setTimeout(U4, U3));
                    Wm = await this.Wb(U2.url);
                    if (Wm) {
                        break;
                    }
                } catch (U4) {
                }
            }
        }
        if (!Wm) {
            ReadItTTS_0WM.n4(ReadItTTS_0Wm.aB, null);
            throw new Error('Cannot find subtitle!');
        }
    }
    async Wb(Wm) {
        const [Wr, Wp, WM] = ReadItTTS_0WM.nR(Wm);
        if (Wr == null || WM == null) {
            return false;
        }
        if (await ReadItTTS_0WM.nU(Wr, Wp, WM)) {
            return true;
        }
        const localLang = await ReadItTTS_0WM.ns();
        if (!localLang) {
            throw new Error('Not initialized');
        }
        let WX;
        try {
            await ReadItTTS_0WM.nd(true);
            WX = await ReadItTTS_0WM.nk(Wm);
            if (WX.ok && WX.parsedData != null) {
                await ReadItTTS_0WM.nw(Wm, WX.parsedData);
                return true;
            }
        } finally {
            await ReadItTTS_0WM.releaseLock();
        }
        return false;
    }
    WW() {
        if (!this.voices) {
            if (!this.WU) {
                this.WU = true;
                return new Promise((Wm, Wr) => {
                    ReadItTTS_0WM.n3(ReadItTTS_0Wm.C).then(async Wp => {
                        if (Wp) {
                            this.voices = Wp;
                            Wm(this.voices);
                        } else {
                            let WM = 0x0;
                            while (WM < 0x5 && !this.voices) {
                                try {
                                    let WX = await this.VF.Vf();
                                    if (WX && WX.length > 0x0) {
                                        this.voices = WX;
                                        await ReadItTTS_0WM.n4(ReadItTTS_0Wm.C, this.voices);
                                    }
                                } catch (Wx) {
                                    WM++;
                                }
                            }
                            this.WU = false;
                            Wm(this.voices);
                        }
                    });
                });
            }
        }
        return this.voices;
    }
    getLanguageNameByLocale(locale) {
        for (const Wm in Language.COUNTRIES) {
            if (Wm == locale) {
                return Language.COUNTRIES[Wm]['language_name'];
            }
        }
    }
    bl(Wm) {
        let Wr = Wm.Name;
        if (Wr.indexOf(Wm.Locale) >= 0x0) {
            Wr = Wr.substr(Wm.Locale.length, Wr.length);
            if (Wr.startsWith('-')) {
                Wr = Wr.substr(0x1);
            }
            if (Wr.indexOf('Neural') >= 0x0) {
                Wr = Wr.substr(0x0, Wr.indexOf('Neural'));
            }
        }
        return Wr;
    }
    async Wy() {
        if (this.WG == null) {
            let Wm = await this.WW();
            let Wr = 0x0;
            let Wp = 0x0;
            this.WG = {};
            let WM = [];
            let myLanguages = ReadItTTS_0WM.nS();
            Wm.forEach(WX => {
                if ((!WX.language || !ReadItTTS_0WM.containsSameL(myLanguages, WX.language_code)) && !ReadItTTS_0WM.no(WX.Name)) {
                    return;
                }
                let Wx = WX.language_code;
                if (!this.WG[Wx]) {
                    this.WG[Wx] = {
                        'index': Wp,
                        'language': WX.language,
                        'language_code': WX.language_code,
                        'voices': [],
                        'WJ': Wx
                    };
                    Wp++;
                }
                if (ReadItTTS_0WM.no(WX.Name)) {
                    WM.push(WX);
                    WX.index = Wr;
                } else {
                    this.WG[Wx]['voices']['push'](WX);
                }
                Wr++;
            });
            WM.forEach(WX => {
                for (let language_code in this.WG) {
                    this.WG[language_code]['voices']['push'](WX);
                }
            });
        }
    }
    bY() {
        return this.WG;
    }
    WT(Wm) {
        Wm.forEach(Wr => {
            let Wp = this.getLanguageNameByLocale(Wr.Locale);
            if (Wp) {
                Wr.language = Wp;
                Wr.language_code = Wr.Locale.split('-')[0x0]['trim']().toLowerCase();
                Wr.country = Wr.Locale.split('-')[0x1]['trim']();
            }
        });
    }
    kB() {
        this.bj.kB();
    }
    kw() {
        this.bj.kw();
    }
    async bc() {
        let Wm = await this.WW();
        this.WT(Wm);
        await this.Wy();
        this.bj.language = this.config.language;
        this.bj.voice = this.config.voice;
        this.bj.bC();
    }
    VP() {
        if (this.V7()) {
            return this.bj.VP();
        } else {
            return null;
        }
    }
    Ao() {
        return this.W7.Ao();
    }
    async Wq(Wm) {
        await this.stop();
        this.bO(true);
        let Wr = await ReadItTTS_0WM.ns(false);
        let ttsData = new ReadItTTS_0U3(Wm, this, Wr, '', false);
        ttsData.init();
        this.W7.AI(ttsData);
        this.W7.start();
    }
    async reset(Wm = true) {
        await this.stop(Wm);
        this.W7.reset();
        this.bj.reset();
        if (this.An) {
            this.An.reset();
        }
        this.b4.reset();
    }
    bP() {
        const Wm = this.VP();
        if (Wm) {
            return Wm.volume;
        } else {
            return -0x1;
        }
    }
    async VT() {
        const Wm = this.VP();
        if (Wm) {
            if (this.config.dynamic_volume) {
                let Wr = this.AS();
                Wr = this.WR(Wr);
                if (!this.WH) {
                    Wr = this.WR(Wr * ReadItTTS_0Wm.h);
                }
                Wm.volume = Wr;
            }
            Wm[ReadItTTS_0Wm.D] = this.W7.AT;
        }
    }
    async Wd() {
        if (!this.config.dynamic_volume) {
            return;
        }
        const Wm = this.VP();
        if (Wm) {
            let Wr = ReadItTTS_0Wm.o * this.AS();
            Wr = this.WR(Wr);
            Wm.volume = Wr;
        }
    }
    VK() {
        if (!this.config.dynamic_volume) {
            return;
        }
        const Wm = this.VP();
        if (Wm) {
            let Wr = ReadItTTS_0Wm.h * this.AS();
            Wr = this.WR(Wr);
            Wm.volume = Wr;
        }
    }
    WR(Wm) {
        Wm = Math.min(Wm, 0x1);
        Wm = Math.max(Wm, 0x0);
        return Wm;
    }
    async bI(Wm) {
        const Wr = this.VP();
        if (Wr) {
            Wm = this.WR(Wm);
            Wr.volume = Wm;
        }
    }
    AS() {
        return this.W7.AS();
    }
    VI(Wm) {
        const Wr = this.VP();
        if (Wr) {
            Wr[ReadItTTS_0Wm.D] = Wm;
        }
    }
    async AK(Wm) {
        Wm = this.WR(Wm);
        this.config.play_volume = Wm;
        await ReadItTTS_0WM.nb(this.config);
        this.W7.AK(Wm);
    }
    bt(Wm) {
        this.config.dynamic_volume = Wm;
        ReadItTTS_0WM.nb(this.config);
    }
    V7() {
        return ReadItTTS_0WM.ny(window.location.href);
    }
    Ww(Wm) {
        return Wm.textContent;
    }
    WB() {
        return /(?:https|http)\:\/\/\w*.youtube.com\/watch\?(v=([^&]*?)|.*?&v=([^&]*?))(&|$)/gi;
    }
    WL(Wm = null) {
        const Wr = this.WB();
        if (!Wm) {
            Wm = window.location.href;
        }
        const Wp = Wr.exec(Wm);
        let WM;
        if (Wp) {
            WM = Wp[0x2] || Wp[0x3];
        }
        return WM;
    }
    LD(language = null, Wm = null) {
        return new Promise(async Wr => {
            if (!language) {
                language = await ReadItTTS_0WM.ns();
            }
            if (!language) {
                Wr([]);
                return;
            }
            let Wp = this.WL(Wm);
            if (Wp) {
                ReadItTTS_0WM.n3(ReadItTTS_0Wm.au).then(WM => {
                    if (WM) {
                        let WX = [];
                        let Wx = WM.filter(Wf => {
                            return Wf[ReadItTTS_0Wm.aE] == Wp && Wf[ReadItTTS_0Wm.aF] == null && ReadItTTS_0WM.aj(Wf[ReadItTTS_0Wm.aC], language) && ReadItTTS_0Wm.a2 in Wf && ReadItTTS_0Wm.as in Wf[ReadItTTS_0Wm.a2];
                        });
                        WX = [
                            ...WX,
                            ...Wx
                        ];
                        if (Wx.length == 0x0) {
                            Wx = WM.filter(Wf => {
                                return Wf[ReadItTTS_0Wm.aE] == Wp && ReadItTTS_0WM.aj(Wf[ReadItTTS_0Wm.aF], language);
                            });
                            WX = [
                                ...WX,
                                ...Wx
                            ];
                        }
                        Wr(WX);
                    } else {
                        Wr([]);
                    }
                });
            } else {
                Wr([]);
            }
        });
    }
    bD() {
        return this.contentExtractor.bD();
    }
    async play(Wm, Wr = true) {
        if (this.AA) {
            return;
        }
        if (!ReadItTTS_0WM.n5(this.config)) {
            this.kd();
            return;
        }
        if (this.V7()) {
            await this.tpy(Wr, Wm);
        } else {
            await this.tpp(Wm);
        }
    }
    async kT(Wm) {
        if (this.AA) {
            await this.stop();
            this.Wu(true);
        } else {
            await this.play(Wm, true);
        }
    }
    async WE() {
        if (this.config.scroll_before_reading_page) {
            this.bj.bb(true);
            await this.bj.bW();
            this.bj.bb(true);
        }
        let Wm = this.bD();
        if (!Wm) {
            alert('No content has been found on this page.');
        } else {
            Wm.url = window.location.href;
        }
        return Wm;
    }
    WF(Wm) {
        let Wr = this.An != null && this.An.length() > 0x0;
        Wr = Wr && this.An.kP() == window.location.href;
        Wr = Wr && ReadItTTS_0WM.aj(this.An.getLanguage(), Wm);
        return Wr;
    }
    WC() {
        if (this.An && this.An.url) {
            return this.An.url;
        }
        return null;
    }
    async tpp(Wm) {
        if (Wm) {
            await this.reset();
        }
        this.AX(FloatingIconController.AM);
        this.W7.AG = 0x3;
        if (this.WF(this.config.language)) {
            if (Wm || !this.An.VU()) {
                this.An.kv();
            }
            this.bO(true);
            this.bj.play();
            this.W7.start();
        } else {
            let Wr = await this.WE();
            if (!Wr) {
                return;
            }
            this.An = new ReadItTTS_0U3(Wr.text, this, this.config.language, window.location.href);
            this.An.init();
            this.W7.AI(this.An);
            this.bO(true);
            this.bj.play();
            this.W7.start();
        }
        this.ky('tpp');
    }
    ky(Wm, Wr = null) {
        if (Wr == null) {
            Wr = new ReadItTTS_0Ua(window.location.href, this.config.voice, this.config, Wm);
        }
        if (Wr.Lp()) {
            this.Wa.ky(Wr);
        }
    }
    async tpy(Wm = true, Wr = false) {
        if (Wm) {
            this.W6(false);
        } else if (this.WV || this.WH) {
            return;
        }
        if (this.AA) {
            return;
        }
        if (!ReadItTTS_0WM.n5(this.config)) {
            if (Wm) {
                this.kd();
            }
            return;
        }
        if (this.WL() == null) {
            return;
        }
        if (!this.WY) {
            this.WY = true;
            return new Promise(async (Wp, WM) => {
                const WX = this.VP();
                let Wx = !WX.paused;
                if (!WX) {
                    return;
                }
                if (Wr) {
                    await this.reset();
                }
                this.config = await ReadItTTS_0WM.n8(true);
                try {
                    this.W7.AG = this.config[ReadItTTS_0Wm.a5]['split']('-')[0x0];
                    this.W7.Ah(WX[ReadItTTS_0Wm.D]);
                    if (this.WF(this.config.language)) {
                        this.AX(FloatingIconController.AM);
                        this.W7.AD();
                        this.bO(true);
                        this.bj.play();
                        this.W7.start();
                        this.VK();
                        if (Wm) {
                            this.Wz();
                        }
                    } else {
                        WX.pause();
                        this.AX(FloatingIconController.AM);
                        let Wf = await this.LD();
                        if (Wf.length == 0x0) {
                            await this.Wk();
                            Wf = await this.LD();
                        }
                        let We = false;
                        for (let WZ of Wf) {
                            try {
                                let WQ = null;
                                let Wg = WZ[ReadItTTS_0Wm.aF] || WZ[ReadItTTS_0Wm.aC];
                                let Wj = await this.Wn(WZ);
                                if (Wj == null || Wj.content == null) {
                                    let content = WZ[ReadItTTS_0Wm.a2];
                                    ReadItTTS_0WM.nG(content);
                                    let WO = ReadItTTS_0WM.nJ(content);
                                    WO = ReadItTTS_0WM.nB(WO, Wg);
                                    if (WO && WO.length > 0x0) {
                                        const U0 = new ReadItTTS_0U9(WZ[ReadItTTS_0Wm.aC], Wg, this.config);
                                        await U0.init(WO);
                                        WQ = new ReadItTTS_0U4(U0, this, Wg, window.location.href);
                                        WQ.kg();
                                        this.config[ReadItTTS_0Wm.j] = false;
                                    }
                                } else {
                                    const U1 = new ReadItTTS_0U6(WZ[ReadItTTS_0Wm.aC], Wg);
                                    U1.LE(Wj.content);
                                    WQ = new ReadItTTS_0U4(U1, this, Wg, window.location.href);
                                    WQ.init();
                                    this.config[ReadItTTS_0Wm.j] = true;
                                }
                                if (WQ != null) {
                                    this.An = WQ;
                                    this.W7.AI(this.An);
                                    this.W7.AD();
                                    this.W7.Ai(1.1);
                                    this.bO(true);
                                    this.bj.play();
                                    this.AX(FloatingIconController.Ax);
                                    this.W7.start();
                                    this.VK();
                                    this.W9();
                                    if (Wm) {
                                        this.Wz();
                                    }
                                    We = true;
                                    break;
                                }
                            } catch (U2) {
                                this.W6(true);
                            }
                        }
                        if (!We) {
                            throw new Error('No subtitle found');
                        }
                    }
                    this.ky('tpy');
                } catch (U3) {
                    this.reset();
                    this.bj.bn(false);
                    this.W6(true);
                    this.Wl(U3.message);
                    if (Wx) {
                        WX.play();
                    }
                } finally {
                    this.WY = false;
                    Wp();
                }
            });
        }
    }
    W6(Wm) {
        this.WV = Wm;
    }
    Wh(Wm) {
        return Wm && (Wm.type == ReadItTTS_0Wm.at || Wm.type == ReadItTTS_0Wm.av);
    }
    AX(Wm) {
        switch (Wm) {
        case FloatingIconController.AM:
            this.bj.bn(true);
            break;
        case FloatingIconController.Ax:
            if (this.AA) {
                if (this.V7()) {
                    this.VP().pause();
                }
                this.W7.stop();
                this.bj.bn(true);
            }
            break;
        case FloatingIconController.V6:
            if (this.AA) {
                if (this.status == FloatingIconController.Ax) {
                    if (this.V7()) {
                        this.VP().play();
                    }
                    this.W7.start();
                }
                this.bj.bn(false);
            }
            break;
        case FloatingIconController.W0:
            this.bj.bn(false);
            break;
        }
        let Wr = this.status;
        this.status = Wm;
        if (Wr != Wm) {
        }
    }
    Am() {
        const Wm = this.VP();
        let Wr = null;
        if (Wm && this.W4) {
            if (Wm.currentTime >= 0x0 && Wm.duration > 0x0) {
                let Wp = false;
                let WM = 'play';
                switch (this.W4[ReadItTTS_0Wm.a7]) {
                case ReadItTTS_0Wm.at:
                case ReadItTTS_0Wm.av:
                    let WX = Date.now() / 0x3e8;
                    if (this.Wo != null) {
                        if (Math.round(this.Wo) > Math.round(Wm.currentTime)) {
                            WM = 'backward';
                        } else if (this.W5 && WX - this.W5 <= Wm.currentTime - this.Wo - 0x1) {
                            WM = 'forward';
                        }
                    }
                    Wp = Wm.paused;
                    if (parseInt(Wm.currentTime) >= parseInt(Wm.duration)) {
                        WM = 'ended';
                    }
                    break;
                case ReadItTTS_0Wm.aI:
                case ReadItTTS_0Wm.F:
                    Wp = true;
                    WM = 'paused';
                    break;
                default:
                    Wp = Wm.paused || Wm.duration < 0x3c;
                    if (Wp) {
                        WM = 'paused';
                    }
                    break;
                }
                Wr = {
                    'paused': Wp,
                    'status': WM,
                    'type': this.W4[ReadItTTS_0Wm.a7],
                    'currentTime': Math.round(Wm.currentTime),
                    'Ws': Wm.duration
                };
                this.Wo = Math.round(Wm.currentTime);
            } else {
                const Wx = this.WL();
                if (Wx != null) {
                    Wr = {
                        'paused': true,
                        'status': 'paused',
                        'type': ReadItTTS_0Wm.aI,
                        'currentTime': Math.round(Wm.currentTime),
                        'Ws': Math.round(Wm.duration)
                    };
                }
            }
        }
        this.W5 = Date.now() / 0x3e8;
        return Wr;
    }
    W9() {
        if (!this.Wi) {
            this.Wi = setInterval(() => {
                const Wm = this.Am();
                if (Wm) {
                    this.ytc(Wm);
                } else {
                    if (this.AA) {
                        this.reset();
                    }
                }
            }, 0x1f4);
        }
    }
    async kR(config) {
        let Wm = config;
        Object.assign(this.config, Wm);
        if (this.AA) {
            window.location.reload();
        } else {
            this.bj.bJ();
        }
    }
    WS() {
        if (this.Wi) {
            clearInterval(this.Wi);
            this.Wi = null;
        }
    }
    W8() {
        if (!this.WK) {
            this.WK = setInterval(() => {
                let Wm = this.WC();
                if (Wm != null && Wm != window.location.href) {
                    this.WP();
                }
                this.LD().then(async Wr => {
                    if (Wr.length > 0x0) {
                        this.stir(true);
                    } else {
                        this.stir(false);
                    }
                });
            }, 0x7d0);
        }
    }
    WI() {
        if (this.WK) {
            clearInterval(this.WK);
            this.WK = null;
        }
    }
    Wt() {
        if (this.Wc) {
            clearInterval(this.Wc);
            this.Wc = null;
        }
    }
    stir(Wm) {
        this.bj.bu(Wm);
    }
    ytc(Wm) {
        if (Wm.status != 'ended' && !Wm.paused && !this.WH) {
            if (this.config.auto_play) {
                this.tpy(false);
            }
        }
        if (this.AA) {
            this.W7.Vo(Wm);
        }
    }
    async translate(Wm, sourceLanguage, targetLanguage) {
        const Wr = 0x1f4;
        const Wp = Wm.split(/\s+/);
        let translatedText = '';
        let WM = Math.ceil(Wp.length / Wr);
        for (let WX = 0x0; WX < WM; WX++) {
            const Wx = Wp.slice(WX * Wr, (WX + 0x1) * Wr);
            let Wf = Wx.join(' ');
            const We = await this.translator.translate(Wf, sourceLanguage, targetLanguage);
            translatedText += We.translation;
        }
        translatedText = translatedText.replace(/\u200B/g, '');
        translatedText = translatedText.replace(/ /g, '');
        if (ReadItTTS_0WM.nu(targetLanguage)) {
            translatedText = translatedText.replaceAll('呃', '嗯');
        }
        return translatedText;
    }
    kU() {
        this.b4.Lj();
    }
    forward() {
        this.Wa.forward();
    }
    async stop(Wm = true) {
        this.bO(false);
        if (Wm) {
            this.AX(FloatingIconController.W0);
        }
        if (this.V7()) {
            this.WS();
            this.VT();
        } else {
            this.b4.Lj();
        }
        if (this.An) {
            this.An.removeDataStatusMonitor(this);
        }
        if (this.W7) {
            this.W7.At(this);
        }
        this.bj.stop();
        await this.VF.stop();
        this.W7.stop();
        this.ky('stop');
    }
    async bi(language, Wm) {
        if (language != this.config.language || Wm != this.config.voice) {
            this.config.language = language;
            this.config.voice = Wm;
            let Wr = this.AA;
            let Wp = false;
            if (this.V7()) {
                let WM = this.VP();
                if (!WM) {
                    return;
                }
                Wp = !WM.paused;
                WM.pause();
            }
            if (Wr) {
                this.AX(FloatingIconController.Ax);
            }
            await this.stop(false);
            if (this.WF(language)) {
                this.W7.Ag();
            }
            this.ky('change');
            await ReadItTTS_0WM.nb(this.config);
            if (Wr) {
                this.play(false, true);
            } else if (this.V7() && Wp) {
                let WX = this.VP();
                WX.play();
            }
        }
    }
    kJ() {
        let Wm = {
            [ReadItTTS_0Wm.Q]: this.isPlaying(),
            [ReadItTTS_0Wm.O]: this.An?.['kI'](),
            [ReadItTTS_0Wm.a0]: this.An?.['kr'](),
            [ReadItTTS_0Wm.a1]: this.An?.['length']()
        };
        return Wm;
    }
    bB() {
        if (!this.An) {
            this.bj.bU(0x0, []);
            return;
        }
        let Wm = this.An.kr();
        this.bj.bU(this.An.kt(), Wm);
    }
    V2(Wm) {
        if (this.usage) {
        }
        this.usage = new ReadItTTS_0Ua(window.location.href, this.config.voice, this.config, 'cache');
        this.kc = Wm;
    }
    async V3(Wm, Wr, Wp) {
        if (this.W7.An) {
            let WM = this.W7.An.getData(Wm);
            if (WM && WM.VG()) {
                if (Wp) {
                    let WX = this.usage;
                    if (!WX || this.kc != Wm) {
                        WX = new ReadItTTS_0Ua(window.location.href, this.config.voice, this.config, 'cache');
                    }
                    WX.Lx(WM.text.length);
                    this.ky(null, WX);
                }
            }
            this.bj.ba(false);
            if (this.AA) {
                this.bj.bU(Wm, Wr);
                this.bj.bF(this.W7.An.V5() / this.W7.AG);
            }
        }
    }
    Wv() {
        this.bj.ba(true, 'tts_message_subtitle_is_not_ready');
    }
    Ay() {
        this.stop();
        this.bj.ba(true, 'tts_message_bad_play_blocked');
    }
    async ke() {
        this.VF.stop();
    }
    Wl(Wm) {
        this.stop();
        this.bj.ba(true, 'tts_message_bad_subtitle_detail', Wm);
    }
    Wu(Wm) {
        this.WH = Wm;
    }
    async A7() {
        this.Wu(true);
        await this.reset();
        this.W7.AP();
        this.bj.bJ();
    }
    WN() {
        return this.W3 != this.WL();
    }
    async A5(Wm, Wr, Wp) {
        if (!this.V7()) {
            this.b4.b4(Wm);
        } else {
            this.Wd();
        }
    }
    A4() {
        this.bj.play();
        this.bO(true);
        if (this.V7()) {
            this.VP().play();
        }
        this.bj.bn(false);
    }
    async WP() {
        await this.reset();
        this.An = null;
        this.Wz();
        this.Wa.nA();
    }
    Wz() {
        this.W8();
        this.W9();
        this.W6(false);
        this.Wu(false);
    }
    WD(Wm) {
        let Wr = 'unknown';
        if (Wm) {
            if (Wm.type != 'adunit') {
                Wr = 'main';
            } else {
                Wr = 'ad';
            }
        }
        return Wr;
    }
    kq(Wm) {
        this.W4 = Wm;
        let Wr = this.WD(this.W4);
        if (Wr == 'main') {
            let Wp = Wm[ReadItTTS_0Wm.aE];
            if (Wp) {
                if (this.W3 != null && Wp != this.W3) {
                    this.WP();
                }
                this.W3 = Wp;
            }
        }
    }
}
class ReadItTTS_0Ub {
    async kW() {
        if (ReadItTTS_0WM.nK(window.location.href)) {
            const controller = await FloatingIconController.init();
        }
    }
}
const ReadItTTS_0UW = new ReadItTTS_0Ub();
ReadItTTS_0UW.kW();
