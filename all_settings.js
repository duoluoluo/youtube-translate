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

class ReadItTTS_0v5 {
    static U = 'subtitleIndex';
    static T = 0xa;
    static h = 0x64;
    static v = 0xa;
    static a = 'timedtext';
    static t = '*://*.youtube.com';
    static j = '(?:https|http)://\\w*\\.youtube\\.com';
    static s = 'stats/watchtime?*';
    static u = 'watch';
    static M = 'cache';
    static m = /[؟؛.。;；:：…?!！？]+/gu;
    static i = /[؟،؛\.。，,;；:：、…\?!！？「」『』・।|]+/gu;
    static P = /[【】\[\]\(\)（）\{\}“”"　…\-—<>]+/gu;
    static y = /\s+/gu;
    static b = /\d+[,，\.]\d+/u;
    static L = /<\s*(\d+)\s*-\s*(\d+)\s*>(.*?)(?=<[^>]*?>|$)/sg;
    static n = /<\s*\d+\s*-\s*\d+\s*>/g;
    static p = /(?:\(|\[|（|「|『).{1,20}(?:\)|\]|）|」|』)/g;
    static k = 'completed';
    static x = 'speech.platform.bing.com';
    static J = 0x5;
    static Q = 'adunit';
    static o = 'vs';
    static w = ['TTSD'];
    static C = 0.5;
    static c = 'fix_sub';
    static f = 0.5;
    static S = 0.06;
    static G = 'currentTime';
    static E = 'ci';
    static A = 'dvl';
    static DEBUG = {
        [ReadItTTS_0v5.w[0x0]]: { 'default': false },
        'I': { 'default': true },
        'default': true
    };
    static TRACE = { 'default': false };
    static ERROR = { 'default': true };
    static l = 'user';
    static g = 'processSub';
    static B = false;
    static e = 0.8;
    static H = 0.65;
    static O = 0.3;
    static V = 'playbackRate';
    static D = 0x3;
    static z = 0x1388;
    static d = 'pg';
    static R = 'TTSPlugin';
    static r = 'TTSPluginA';
    static Y = 'urls';
    static URL = 'url';
    static F = 'sub_url';
    static q = 'api';
    static K = 'value';
    static N = 'st';
    static X = 'psd';
    static Z = 'server';
    static N = 'st';
    static W = 'idx';
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
    static UT = 'accountStatus';
    static Uh = 'visitorId';
    static Uv = 'usage';
    static Ua = 'time';
    static Ut = 'voice';
    static Uj = 'time1';
    static Us = 'time2';
    static Uu = 'day';
    static UM = 'text_length';
    static Um = 'ut';
    static Ui = 'action';
    static UP = 'extension_id';
    static Uy = 'data';
    static Ub = 'TTSPlayingStatus';
    static UL = 'Updated';
    static Un = 'TTSTranslation_page';
    static Up = 'TTSTranslation_settings';
    static Uk = 'TTSsu';
    static Ux = 'ReaditTTSt';
    static UJ = 'videoId';
    static UQ = 'targetLang';
    static Uo = 'sourceLang';
    static Uw = 'tab';
    static source = 'source';
    static UC = 'v';
    static Uc = 'tlang';
    static Uf = 'lang';
    static US = 0x3;
    static UG = 'events';
    static UE = 'baseUrl';
    static UA = 'stats/qoe?*';
    static UI = 'docid';
    static Ul = 'uid';
    static Ug = 'ad';
    static UB = 'main';
    static Ue = 'con';
    static UH = 'detailpage';
    static UO = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
    static GET = 'get';
}
class ReadItTTS_0v6 {
    constructor(v5, v6 = '', v7 = null) {
        this.UV = v5;
        this.map = new Map();
        this.name = v6;
        this.UD = v7;
    }
    push(v5, v6) {
        let v7 = Array.from(this.map.keys());
        if (v7.length >= this.UV) {
            this.remove(v7[0x0]);
        }
        this.map.set(v5, v6);
    }
    get(v5, v6 = null) {
        let v7 = this.map.get(v5);
        if (v7 == null) {
            v7 = v6;
        }
        return v7;
    }
    getKey(v5) {
        for (let v6 of this.map.keys()) {
            if (this.map.get(v6) == v5) {
                return v6;
            }
        }
        return null;
    }
    shift() {
        let v5 = null;
        let v6 = this.map.keys().next().value;
        if (v6 != null) {
            v5 = this.get(v6);
            this.remove(v6);
        }
        return v5;
    }
    Uz() {
        return JSON.stringify(this.Ud());
    }
    Ud() {
        let v5 = {};
        for (let [v7, v8] of this.map) {
            if (this.UD != null) {
                v5[v7] = this.UD.Ud(v8);
            } else {
                v5[v7] = v8;
            }
        }
        let v6 = {
            'name': this.name,
            'UV': this.UV,
            'map': v5
        };
        return v6;
    }
    update(v5) {
        if (typeof v5 === 'string') {
            v5 = JSON.parse(v5);
        }
        this.UV = v5.UV;
        this.name = v5.name;
        let v6 = Object.keys(v5.map);
        for (let v7 of v6) {
            if (this.UD != null) {
                this.map.set(v7, this.UD.UR(v5.map[v7]));
            } else {
                this.map.set(v7, v5.map[v7]);
            }
        }
    }
    static UR(v5) {
        let v6 = new ReadItTTS_0v6(v5.UV, v5.name);
        v6.update(v5);
        return v6;
    }
    remove(v5) {
        this.map.delete(v5);
    }
    contains(v5) {
        return this.map.has(v5);
    }
    clear() {
        this.map.clear();
    }
    size() {
        return this.map.size;
    }
}
class ReadItTTS_0v7 {
    constructor(v5, v6 = '', v7 = 0x0, v8 = null) {
        this.UV = v5;
        this.Ur = [];
        this.name = v6;
        this.UY = v7;
        this.UD = v8;
    }
    push(v5) {
        if (this.Ur.length >= this.UV) {
            this.Ur.shift();
        }
        this.Ur.push(v5);
    }
    remove(v5) {
        let v6 = this.Ur.indexOf(v5);
        if (v6 > -0x1) {
            this.Ur.splice(v6, 0x1);
        }
    }
    Uz() {
        return JSON.stringify(this.Ud());
    }
    Ud() {
        let v5 = {
            'name': this.name,
            'UV': this.UV,
            'UY': this.UY,
            'Ur': this.Ur
        };
        return v5;
    }
    update(v5) {
        if (typeof v5 === 'string') {
            v5 = JSON.parse(v5);
        }
        this.UV = v5.UV;
        this.name = v5.name;
        this.UY = v5.UY;
        if (this.UD != null) {
            this.Ur = v5.Ur.map(v6 => this.UD.UR(v6));
        } else {
            this.Ur = [...v5.Ur];
        }
    }
    static UR(v5, v6 = null) {
        let v7 = new ReadItTTS_0v7(v5.UV, v5.name, v5.UY, v6);
        v7.update(v5);
        return v7;
    }
    clear(v5 = 0x1) {
        let v6 = Math.round(v5 * this.Ur.length);
        while (v6 > 0x0 && this.Ur.length > 0x0) {
            this.Ur.shift();
            v6--;
        }
    }
    get(v5) {
        if (v5 >= 0x0 && v5 < this.Ur.length) {
            return this.Ur[v5];
        }
        return null;
    }
    indexOf(v5) {
        return this.Ur.indexOf(v5);
    }
    filter(v5) {
        let v6 = [];
        for (let v7 of this.Ur) {
            if (v5(v7)) {
                v6.push(v7);
            }
        }
        return v6;
    }
    find(v5) {
        for (let v6 of this.Ur) {
            if (v5(v6)) {
                return v6;
            }
        }
        return null;
    }
    UF() {
        let v5 = this.UY;
        if (this.Ur.length > 0x0) {
            v5 = this.Ur.reduce((v6, v7) => v6 + v7, 0x0) / this.Ur.length;
        }
        return v5;
    }
    Uq() {
        return this.Ur.length >= this.UV;
    }
    size() {
        return this.Ur.length;
    }
    shift() {
        return this.Ur.shift();
    }
    pop() {
        return this.Ur.pop();
    }
    UK() {
        return this.Ur.length == 0x0;
    }
}
class ReadItTTS_0v8 {
    static UN = false;
    static UX(v5, v6) {
        for (let v7 in v6) {
            if (ReadItTTS_0v8.UZ(v5, v7)) {
                return v6[v7];
            }
        }
        return v6.default;
    }
    static UW() {
        let v5 = false;
        let v6 = new Error().stack;
        v6 = v6.split('\n');
        for (let v7 of v6) {
            let v8 = v7.match(/at (.+)\s\((.+):(\d+):(\d+)\)/);
            if (v8) {
                let v9 = v8[0x1];
                let vU = v9.split('.');
                if (vU.length > 0x1) {
                    if (v5) {
                        return vU;
                    } else {
                        if (vU[0x0] == ReadItTTS_0v8.name && [
                                this.error.name,
                                this.log.name,
                                this.trace.name
                            ]['includes'](vU[0x1])) {
                            v5 = true;
                        }
                    }
                }
            }
        }
        return null;
    }
    static T0(v5, v6 = null, v7 = null, v8 = 'json3') {
        const v9 = new URL(v5);
        const vU = v9.searchParams;
        let vT = [
            'tlang',
            'lang',
            'fmt'
        ];
        if (v6 != null) {
            vU.set(vT[0x0], v6);
        } else {
            vU.delete(vT[0x0]);
        }
        if (v7 != null) {
            vU.set(vT[0x1], v7);
        }
        vU.set(vT[0x2], v8);
        return v9.toString();
    }
    static T1(v5, v6, v7) {
        let v8 = null;
        switch (v7) {
        case 'DEBUG':
            if (v5) {
                if (ReadItTTS_0v5.DEBUG[v5] != null) {
                    if (ReadItTTS_0v5.DEBUG[v5][v6] != null) {
                        v8 = ReadItTTS_0v5.DEBUG[v5][v6];
                    } else if (ReadItTTS_0v5.DEBUG[v5]['default'] != null) {
                        v8 = ReadItTTS_0v5.DEBUG[v5]['default'];
                    }
                }
            }
            if (v8 == null) {
                v8 = ReadItTTS_0v5.DEBUG.default;
            }
            break;
        case 'ERROR':
            if (v5) {
                if (ReadItTTS_0v5.ERROR[v5] != null) {
                    if (ReadItTTS_0v5.ERROR[v5][v6] != null) {
                        v8 = ReadItTTS_0v5.ERROR[v5][v6];
                    } else if (ReadItTTS_0v5.ERROR[v5]['default'] != null) {
                        v8 = ReadItTTS_0v5.ERROR[v5]['default'];
                    }
                }
            }
            if (v8 == null) {
                v8 = ReadItTTS_0v5.ERROR.default;
            }
            break;
        case 'TRACE':
            if (v5) {
                if (ReadItTTS_0v5.TRACE[v5] != null) {
                    if (ReadItTTS_0v5.TRACE[v5][v6] != null) {
                        v8 = ReadItTTS_0v5.TRACE[v5][v6];
                    } else if (v8 = ReadItTTS_0v5.TRACE[v5]['default'] != null) {
                        v8 = ReadItTTS_0v5.TRACE[v5]['default'];
                    }
                }
            }
            if (v8 == null) {
                v8 = ReadItTTS_0v5.TRACE.default;
            }
            break;
        }
        return v8;
    }
    static error(v5) {
        const v6 = ReadItTTS_0v8.UW();
        if (v6 && ReadItTTS_0v8.T1(v6[0x0], v6[0x1], 'ERROR')) {
            console.error(this.getCurrentTime() + ' - [' + v6[0x0] + ', ' + v6[0x1] + '] ' + v5);
        } else {
            console.error(v5);
        }
    }
    static trace(v5) {
        const v6 = ReadItTTS_0v8.UW();
        if (v6 && ReadItTTS_0v8.T1(v6[0x0], v6[0x1], 'TRACE')) {
            console.log(this.getCurrentTime() + ' - [' + v6[0x0] + ', ' + v6[0x1] + '] ' + v5);
        }
    }
    static log(v5, v6 = null) {
        if (v6 == null) {
            v6 = ReadItTTS_0v8.UW();
        }
        if (v6 && ReadItTTS_0v8.T1(v6[0x0], v6[0x1], 'DEBUG')) {
            console.log(this.getCurrentTime() + ' - [' + v6[0x0] + ', ' + v6[0x1] + '] ' + v5);
        }
    }
    static assert(condition, v5) {
        if (!condition) {
            throw new Error(v5 || 'Assertion failed');
        }
    }
    static T2(v5) {
        return v5.pendingUrl || v5.url;
    }
    static T3(v5, v6 = null) {
        return new Promise((v7, v8) => {
            chrome.storage.local.get([v5], function (v9) {
                let vU = v6;
                if (v9 && v9[v5]) {
                    vU = v9[v5];
                    if (v6 !== null) {
                        if (Array.isArray(v9[v5])) {
                            vU = [
                                ...v6,
                                ...v9[v5]
                            ];
                        } else if (typeof v9[v5] == 'object') {
                            vU = {
                                ...v6,
                                ...v9[v5]
                            };
                        }
                    }
                }
                v7(vU);
            });
        });
    }
    static T4(v5, v6) {
        return new Promise(async (v7, v8) => {
            if (v6 == null) {
                chrome.storage.local.remove([v5], function () {
                    var v9 = chrome.runtime.lastError;
                    if (v9) {
                    }
                    v7();
                });
            } else {
                chrome.storage.local.set({ [v5]: v6 }, function () {
                    v7();
                });
            }
        });
    }
    static T5(config) {
        let v5 = config.voice != null && config.voice.trim().length > 0x0 && config.language != null && config.language.trim().length > 0x0;
        return v5;
    }
    static T6() {
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
        let v5 = 'language_name';
        for (let v6 in Language.COUNTRIES) {
            if (ReadItTTS_0v8.UZ(v6, language)) {
                return Language.COUNTRIES[v6][v5];
            }
        }
    }
    static T7() {
        let v5 = {
            'play_volume': 0x1,
            'pitch': 0x0,
            'voice': null,
            'language': ReadItTTS_0v8.getLanguage(navigator.language || navigator.userLanguage),
            'show_my_language_only': true,
            'scroll_before_reading_page': false,
            'show_tts_floating_icon': 'Normal',
            [ReadItTTS_0v5.U5]: '3-15-60',
            'floating_icon_position': 0x96,
            'floating_icon_position_left': false,
            'scroll_to_highlighted_text': true,
            [ReadItTTS_0v5.A]: '1.20-1.1',
            'dynamic_volume': true,
            'volume_rate': 0.13,
            'auto_play': false
        };
        return v5;
    }
    static async T8() {
        let v5 = ReadItTTS_0v8.T7();
        let v6 = await ReadItTTS_0v8.T3(ReadItTTS_0v5.R, v5);
        let v7 = await ReadItTTS_0v8.T9();
        v6[ReadItTTS_0v5.U5] = v7[ReadItTTS_0v5.U5] != null ? v7[ReadItTTS_0v5.U5] : v5[ReadItTTS_0v5.U5];
        let v8 = v6[ReadItTTS_0v5.A];
        let v9 = v7[ReadItTTS_0v5.A];
        let vU = v9.findIndex(vv => vv == v8);
        vU = vU == -0x1 ? v9.findIndex(vv => vv != null) : vU;
        v6[ReadItTTS_0v5.A] = v9[vU];
        let vT = v7.pitch;
        let vh = vT.findIndex(vv => vv == v6.pitch);
        vh = vh == -0x1 ? vT.findIndex(vv => vv != null) : vh;
        v6.pitch = vT[vh];
        return v6;
    }
    static T9() {
        let v5 = {
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
        return ReadItTTS_0v8.T3(ReadItTTS_0v5.r, v5);
    }
    static async TU(v5) {
        if (v5 && v5[ReadItTTS_0v5.Ul] != null) {
            let v6 = await ReadItTTS_0v8.TT();
            v6[ReadItTTS_0v5.Ul] = v5[ReadItTTS_0v5.Ul];
            await ReadItTTS_0v8.T4(ReadItTTS_0v5.l, v6);
        }
    }
    static async Th() {
        let v5 = await ReadItTTS_0v8.T3(ReadItTTS_0v5.r, null);
        if (v5 != null) {
            return v5;
        }
        return new Promise((v6, v7) => {
            let v8 = {};
            ReadItTTS_0v8.TT().then(v9 => {
                if (v9 != null && v9[ReadItTTS_0v5.Ul] != null) {
                    v8[ReadItTTS_0v5.Ul] = v9[ReadItTTS_0v5.Ul];
                }
            }).finally(() => {
                v8[ReadItTTS_0v5.UP] = ReadItTTS_0v8.Tv();
                const v9 = {
                    'method': 'POST',
                    'headers': { 'Content-Type': 'application/json' },
                    'body': JSON.stringify(v8)
                };
                let vU = ReadItTTS_0v5.U3 + '/config/get';
                ReadItTTS_0v8.Ta(vU, v9, 0x1, 0x1f40).then(async vT => {
                    if (vT.ok && vT.parsedData?.['data'] != null) {
                        await ReadItTTS_0v8.TU(vT.parsedData);
                        v5 = vT.parsedData.data;
                        await ReadItTTS_0v8.T4(ReadItTTS_0v5.r, v5);
                    }
                }).finally(async () => {
                    v6(v5);
                });
            });
        });
    }
    static async Tt(v5 = {}, v6 = true) {
        if (v5) {
            let v7 = [
                'version',
                'settingChanged',
                'playStatus',
                'ttsChanged'
            ];
            if (v5[v7[0x1]] || v6) {
                await ReadItTTS_0v8.Tj(null);
                await ReadItTTS_0v8.T4(ReadItTTS_0v5.r, null);
            }
            if (v5[v7[0x2]] || v6) {
                await ReadItTTS_0v8.T4(ReadItTTS_0v5.Ub, null);
            }
            if (v5[v7[0x3]] || v6) {
                await ReadItTTS_0v8.T4(ReadItTTS_0v5.o, null);
            }
            if (v6) {
                await ReadItTTS_0v8.T4(ReadItTTS_0v5.Uk, null);
                await ReadItTTS_0v8.T4(ReadItTTS_0v5.Ux, null);
                await ReadItTTS_0v8.T4(ReadItTTS_0v5.Uv, null);
                await ReadItTTS_0v8.T4(ReadItTTS_0v5.Un, null);
                await ReadItTTS_0v8.T4(ReadItTTS_0v5.Up, null);
            }
        }
    }
    static async Tj(config) {
        await ReadItTTS_0v8.T4(ReadItTTS_0v5.R, config);
    }
    static async Ts(v5, v6 = '*', v7 = '*', config = null, v8 = null, v9 = true, isSameLanguage = true) {
        v6 = v6 == null || v6.trim() == 0x0 ? null : v6;
        v7 = v7 == null || v7.trim() == 0x0 ? null : v7;
        if (v8 == null) {
            v8 = await ReadItTTS_0v8.T3(ReadItTTS_0v5.Ux, []);
        }
        let vU = v8.filter(vT => {
            let vh = vT[ReadItTTS_0v5.UJ] === v5;
            vh &= vT[ReadItTTS_0v5.UQ] === v6 || v6 == '*' || isSameLanguage && ReadItTTS_0v8.UZ(vT[ReadItTTS_0v5.UQ], v6);
            vh &= vT[ReadItTTS_0v5.Uo] === v7 || v7 == '*' || isSameLanguage && ReadItTTS_0v8.UZ(vT[ReadItTTS_0v5.Uo], v7);
            vh &= !v9 || vT[ReadItTTS_0v5.X] === true || vT[ReadItTTS_0v5.X] === 'true';
            vh &= config == null || vT[ReadItTTS_0v5.Ue] === JSON.stringify(config);
            return vh;
        });
        return vU;
    }
    static async Tu(v5, v6, v7, config = null, v8 = null, v9 = false) {
        let vU = await ReadItTTS_0v8.Ts(v5, v6, v7, config, v8, v9);
        return vU.length > 0x0 ? vU[0x0] : null;
    }
    static async Ta(v5, v6 = null, v7 = 0x3, v8 = 0xbb8, v9 = true) {
        let vU = {
            'ok': false,
            'status': 0x0,
            'statusText': '',
            'response': null
        };
        while (v7 > 0x0) {
            let vT = null;
            try {
                const controller = new AbortController();
                vT = setTimeout(() => {
                    controller.abort();
                    vT = null;
                }, v8);
                let vh = { 'signal': controller.signal };
                if (v6 != null) {
                    vh = {
                        ...vh,
                        ...v6
                    };
                }
                let vv = await fetch(v5, vh);
                clearTimeout(vT);
                vU = { 'ok': vv.ok };
                if (vU.ok) {
                    vT = null;
                    try {
                        vU.parsedData = v9 ? await vv.json() : await vv.text();
                    } catch (va) {
                        vU.parsedData = null;
                    }
                    return vU;
                } else {
                    if ([
                            0x198,
                            0x1f4,
                            0x1f6,
                            0x1f7,
                            0x1f8
                        ]['includes'](vv.status)) {
                        throw new Error('Error in response.');
                    } else {
                        vU.parsedData = null;
                        vU.ok = true;
                        return vU;
                    }
                }
            } catch (vt) {
                if (vt.name == 'AbortError') {
                    console.log('Timeout, retry...');
                    vU.statusText = 'Timeout';
                } else {
                    vU.statusText = vt.message ? vt.message : 'Unknown error';
                    console.log('Error fetching data, retry...');
                }
                if (vT != null) {
                    clearTimeout(vT);
                    vT = null;
                }
            } finally {
                v7--;
            }
        }
        return vU;
    }
    static TM(v5) {
        let v6 = new URL(v5);
        return v6.hostname.includes('youtube.com');
    }
    static Tm(v5, v6 = false) {
        v5.events = v5?.['events']['filter'](v7 => v7?.['segs'] && (v6 || Boolean((' ' + v7?.['segs']['map'](v8 => v8.utf8).toString()).trim())));
    }
    static Ti(v5, v6 = true) {
        let v7 = '';
        let v8 = v5.events;
        for (let v9 = 0x0; v9 < v8.length; v9++) {
            const vU = v8[v9];
            let {
                segs: segs = [],
                tStartMs: tStartMs,
                dDurationMs: dDurationMs
            } = vU;
            if (v9 < v8.length - 0x1) {
                const vh = v8[v9 + 0x1];
                if (vh.tStartMs < tStartMs + dDurationMs) {
                    dDurationMs = vh.tStartMs - tStartMs;
                }
            }
            const vT = '<' + tStartMs + ' - ' + dDurationMs + '>';
            if (v6) {
                v7 += vT;
            } else {
                v7 += ' ';
            }
            segs.map(vv => {
                v7 += vv.utf8.toString();
            });
        }
        return v7;
    }
    static TP() {
        const v5 = new Date();
        const v6 = v5.getFullYear();
        const v7 = String(v5.getMonth() + 0x1).padStart(0x2, '0');
        const v8 = String(v5.getDate()).padStart(0x2, '0');
        const v9 = v6 + '-' + v7 + '-' + v8;
        return v9;
    }
    static getCurrentTime() {
        const v5 = new Date();
        let v6 = ReadItTTS_0v8.TP();
        const v7 = String(v5.getHours()).padStart(0x2, '0');
        const v8 = String(v5.getMinutes()).padStart(0x2, '0');
        const seconds = String(v5.getSeconds()).padStart(0x2, '0');
        const miliSeconds = String(v5.getMilliseconds()).padStart(0x3, '0');
        const v9 = v6 + ': ' + v7 + ':' + v8 + ':' + seconds + ':' + miliSeconds;
        return v9;
    }
    static async Ty(v5, v6) {
        if (v6 == null) {
            let vh = new Error('qualityScore is null');
            vh.reason = 'null';
            throw vh;
        }
        const [v7, v8, v9] = ReadItTTS_0v8.Tb(v5);
        let vU = await ReadItTTS_0v8.T3(ReadItTTS_0v5.Ux, []);
        let vT = await ReadItTTS_0v8.Tu(v7, v8, v9, null, vU);
        vT[ReadItTTS_0v5.TL] = v6;
        await ReadItTTS_0v8.T4(ReadItTTS_0v5.Ux, vU);
    }
    static async Tn(v5 = false) {
        let v6 = ReadItTTS_0v8.T3(ReadItTTS_0v5.U4, null);
        if (v6 == null && v5) {
            ReadItTTS_0v8.T4(ReadItTTS_0v5.U4, {});
            return {};
        }
        return v6;
    }
    static async releaseLock() {
        let v5 = ReadItTTS_0v8.T3(ReadItTTS_0v5.U4, null);
        if (v5 != null) {
            ReadItTTS_0v8.T4(ReadItTTS_0v5.U4, null);
        }
    }
    static async Tp(v5, content, v6 = false, config = null, v7 = null) {
        if (content == null) {
            let va = new Error('content is null');
            va.reason = 'null';
            throw va;
        }
        const [v8, v9, vU] = ReadItTTS_0v8.Tb(v5);
        let vT = await ReadItTTS_0v8.T3(ReadItTTS_0v5.Ux, []);
        const vh = await ReadItTTS_0v8.Tu(v8, v9, vU, config, vT, v6);
        if (vh) {
            return;
        }
        vT.sort((vt, vj) => {
            return vt.time - vj.time;
        });
        if (vT.length > 0x14) {
            vT.splice(0x0, vT.length - 0x14);
        }
        const vv = {
            [ReadItTTS_0v5.URL]: v5,
            [ReadItTTS_0v5.UJ]: v8,
            [ReadItTTS_0v5.Uo]: vU,
            [ReadItTTS_0v5.UQ]: v9,
            [ReadItTTS_0v5.U2]: content,
            [ReadItTTS_0v5.X]: v6,
            [ReadItTTS_0v5.Ua]: Date.now(),
            [ReadItTTS_0v5.Ue]: config == null ? null : JSON.stringify(config),
            [ReadItTTS_0v5.TL]: v7
        };
        vT.push(vv);
        await ReadItTTS_0v8.T4(ReadItTTS_0v5.Ux, vT);
    }
    static Tk(content, targetLanguage) {
        if (ReadItTTS_0v8.Tx(targetLanguage)) {
            content = content.replaceAll('呃', '嗯');
        }
        if (ReadItTTS_0v8.TJ(targetLanguage)) {
            content = content.replaceAll('\n', '');
        } else {
            content = content.replaceAll('\n', ' ');
        }
        content = content.replaceAll(/\s+/g, ' ');
        return content;
    }
    static TQ(v5, v6, v7) {
        let v8 = 0x0;
        let v9 = 0x0;
        let vU;
        while (v8 < v7) {
            vU = v5.indexOf(v6, v9);
            if (vU === -0x1) {
                break;
            }
            v9 = vU + v6.length;
            v8++;
        }
        if (v8 < v7) {
            return -0x1;
        }
        return [
            vU,
            v8
        ];
    }
    static getJsonByPath(v5, v6) {
        const v7 = v6.split('.');
        let v8 = v5;
        for (const v9 of v7) {
            if (v8[v9]) {
                v8 = v8[v9];
            } else {
                return null;
            }
        }
        return v8;
    }
    static setJsonByPath(v5, v6, v7) {
        var v8 = v6.split('.');
        var v9 = v5;
        for (var vU = 0x0; vU < v8.length; vU++) {
            if (vU === v8.length - 0x1) {
                v9[v8[vU]] = v7;
            } else if (!(v8[vU] in v9)) {
                v9[v8[vU]] = {};
            }
            v9 = v9[v8[vU]];
        }
    }
    static TT() {
        return ReadItTTS_0v8.T3(ReadItTTS_0v5.l, {});
    }
    static getTTSLanguageItem(v5, tts_user_language) {
        if (v5 in tts_user_language) {
            return tts_user_language[v5];
        } else {
            for (const v6 in tts_user_language) {
                if (ReadItTTS_0v8.UZ(v5, v6)) {
                    return tts_user_language[v6];
                }
            }
        }
        return null;
    }
    static TJ(v5) {
        if (v5) {
            const v6 = [
                'ja',
                'zh',
                'th'
            ];
            const v7 = v5.split('-')[0x0];
            return v6.includes(v7.toLowerCase());
        }
        return false;
    }
    static Tx(v5) {
        if (v5) {
            v5 = v5.split('-')[0x0];
        }
        return v5 === 'zh';
    }
    static To(v5, v6) {
        return v5 && v6 && v5.toLocaleLowerCase() === v6.toLocaleLowerCase();
    }
    static Tw(v5) {
        return new Promise((v6, v7) => {
            chrome.tabs.query({}, tabs => {
                let v8 = [];
                for (const v9 of tabs) {
                    if (ReadItTTS_0v8.T2(v9) == v5) {
                        v8.push(v9);
                    }
                }
                ;
                v6(v8);
            });
        });
    }
    static TC(v5) {
        return new Promise((v6, v7) => {
            chrome.tabs.query({}, tabs => {
                let v8 = null;
                for (const v9 of tabs) {
                    if (v9.id == v5) {
                        v8 = v9;
                        break;
                    }
                }
                ;
                v6(v8);
            });
        });
    }
    static Tc(v5) {
        try {
            const v6 = new URL(v5);
            if (v6.protocol === 'chrome-extension:') {
                return true;
            }
        } catch (v7) {
        }
        return false;
    }
    static Tf() {
        return new Promise((v5, v6) => {
            const v7 = [
                'active',
                'currentWindow'
            ];
            chrome.tabs.query({
                [v7[0x0]]: true,
                [v7[0x1]]: true
            }, tabs => {
                if (tabs.length > 0x0) {
                    v5(tabs[0x0]);
                } else {
                    v5(null);
                }
            });
        });
    }
    static UZ(v5, v6) {
        if (v5 == null || v6 == null) {
            return false;
        }
        v5 = ReadItTTS_0v8.getLanguage(v5);
        v6 = ReadItTTS_0v8.getLanguage(v6);
        return v5 === v6;
    }
    static getLanguage(v5) {
        return v5 ? v5.toLocaleLowerCase().split('-')[0x0] : null;
    }
    static containsSameL(languages, language) {
        for (const v5 of languages) {
            if (ReadItTTS_0v8.UZ(v5, language)) {
                return true;
            }
        }
        return false;
    }
    static TS(v5) {
        if (v5) {
            v5 = v5.toLowerCase();
            return v5.indexOf('multilingual') >= 0x0 || v5.indexOf('multi-lingual') >= 0x0 || v5.indexOf('multilingual') >= 0x0;
        }
    }
    static Tb(v5) {
        let v6 = ['searchParams'];
        let v7 = new URL(v5)[v6[0x0]];
        return [
            v7.get('v'),
            v7.get('tlang'),
            v7.get('lang')
        ];
    }
    static async TG(v5 = true) {
        const config = await ReadItTTS_0v8.T8(true);
        if (!config.voice || !config.language) {
            return null;
        }
        let userLanguage = ReadItTTS_0v8.TE();
        if (config.language) {
            userLanguage = config.language;
        }
        if (v5) {
            let v6 = ReadItTTS_0v8.getTTSLanguageItem(userLanguage, Language.COUNTRIES);
            const yt_language = v6 ? v6.yt : null;
            return yt_language;
        } else {
            return userLanguage;
        }
    }
    static TE() {
        return navigator.language || navigator.userLanguage;
    }
    static TA() {
        return navigator.languages;
    }
    static TI(v5) {
        const v6 = /^(http|https):\/\//;
        const localHostPattern = /^(http|https):\/\/localhost/;
        const v7 = /^(http|https):\/\/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/;
        v5 = v5.toLocaleLowerCase();
        return v6.test(v5) && !v7.test(v5);
    }
    static containsOnlyWhitespace(v5) {
        return !v5 || /^\s*$/['test'](v5);
    }
    static Tl(v5) {
        if (!Array.isArray(v5) || v5.length === 0x0) {
            return null;
        }
        let v6 = v5[0x0];
        for (let v7 = 0x1; v7 < v5.length; v7++) {
            let v8 = v5[v7];
            if (v8 == null) {
                return null;
            }
            while (v6 !== v8 && !v6.contains(v8)) {
                v6 = v6.parentNode;
                if (v6 === null) {
                    return null;
                }
            }
        }
        return v6;
    }
    static Tg(v5) {
        let v6 = 0x0;
        if (v5.length == 0x0)
            return v6;
        for (let v7 = 0x0; v7 < v5.length; v7++) {
            let v8 = v5.charCodeAt(v7);
            v6 = (v6 << 0x5) - v6 + v8;
            v6 = v6 & v6;
        }
        return v6;
    }
    static Tv() {
        let v5 = ['getManifest'];
        var manifestData = chrome.runtime[v5[0x0]]();
        return manifestData.version;
    }
    static TB(v5, v6) {
        v5 = v5.replace(ReadItTTS_0v5.i, v6);
        v5 = v5.replace(ReadItTTS_0v5.m, v6);
        v5 = v5.replace(ReadItTTS_0v5.P, v6);
        v5 = v5.replace(/\s+/g, v6);
        v5 = v5.trim();
        return v5;
    }
}
const ReadItI18nData = {};
class ReadItTTS_0v9 {
    static Te = 'tts-data-i18n';
    constructor(tts_user_language, v5) {
        this.translations = null;
        this.language = 'en';
        this.targetLanguage = ReadItTTS_0v8.TE();
        this.TH = {};
        this.tts_user_language = tts_user_language;
        this.TO = v5;
        this.storageKey = v5 ? ReadItTTS_0v5.Un : ReadItTTS_0v5.Up;
    }
    async reset() {
        await ReadItTTS_0v8.T4(ReadItTTS_0v5.Un, null);
        await ReadItTTS_0v8.T4(ReadItTTS_0v5.Up, null);
    }
    async translateDocument(v5) {
        try {
            let v6 = Array.from(v5.querySelectorAll('[' + ReadItTTS_0v9.Te + ']'));
            let v7 = v6.filter(v9 => {
                return v9.nodeName && v9.nodeName.toLowerCase() != 'optgroup';
            });
            let v8 = v6.filter(v9 => v9.nodeName && v9.nodeName.toLowerCase() == 'optgroup');
            this.translateElements(v7);
            this.transVoices(v8);
        } catch (v9) {
            console.error(v9);
        }
    }
    transVoices(v5) {
        if (v5 && v5.length > 0x0) {
            let v6 = chrome.i18n.getMessage('voices');
            let v7 = /<\s*(\d+)\s*-\s*(\w+)\s*>([^<]+?)(?=<|$)/gs;
            let v8;
            while ((v8 = v7.exec(v6)) != null) {
                let v9 = parseInt(v8[0x1]);
                let language_code = v8[0x2]['trim']();
                let vU = v8[0x3]['trim']();
                let vT = v5.find(vh => vh.getAttribute('value') == language_code);
                if (vT) {
                    this.translateElement(vT, vU);
                }
            }
        }
    }
    translateElements(v5) {
        try {
            for (let v6 of v5) {
                this.translateElement(v6);
            }
        } catch (v7) {
            console.error(v7);
        }
    }
    translateElement(v5, v6 = null) {
        let i18nAttr = v5.getAttribute(ReadItTTS_0v9.Te);
        let v7 = [i18nAttr];
        if (i18nAttr.includes('[')) {
            v7 = JSON.parse(i18nAttr);
        }
        for (let v8 of v7) {
            let v9 = null;
            let vU;
            if (v8.includes('->')) {
                [vU, v9] = v8.split('->');
            } else {
                vU = v8;
            }
            let i18nValue = v6 == null ? chrome.i18n.getMessage(vU) : v6;
            if (i18nValue) {
                if (v9) {
                    v5.setAttribute(v9, i18nValue);
                } else {
                    this.TV(v5, i18nValue);
                }
            }
        }
    }
    TV(v5, v6) {
        if (v6 != null) {
            for (let v7 = 0x0; v7 < v5.childNodes.length; v7++) {
                const v8 = v5.childNodes[v7];
                if (v8.nodeType == Node.TEXT_NODE && v8.textContent.trim().length > 0x0) {
                    v8.textContent = v6;
                    break;
                }
            }
        }
    }
}
class ReadItTTS_0vU {
    constructor() {
        this.TD = 0x0;
        this.Tz = 0x5;
    }
    async on_translation_response(v5, v6, v7, v8) {
        let v9;
        const {
            Td: vU,
            TR: vT,
            Tr: vh
        } = this.TY(v5, v6);
        const translation = {
            'TF': v7,
            'Td': vU,
            'TR': vT,
            'Tq': v6,
            'TK': v8
        };
        if (vU) {
            v9 = vh;
        } else {
            v9 = '';
        }
        translation.translation = v9;
        return translation;
    }
    TN(v5) {
        return v5.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    TX(v5, {
        TR: v6,
        TF: v7
    }) {
        const v8 = 'sl=' + v6 + '&tl=' + v7 + '&q=' + encodeURIComponent(v5.trim());
        const urls = [
            'https://clients5.google.com/translate_a/single?dj=1&dt=t&dt=sp&dt=ld&dt=bd&client=dict-chrome-ex&' + v8,
            'https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&dt=bd&dj=1&source=input&' + v8
        ];
        return urls;
    }
    translationIsTheSameAsInput(sentences, v5) {
        return sentences[0x0]['trans']['match'](new RegExp(this.TN(v5.trim()), 'i'));
    }
    TY(v5, v6) {
        let v7, v8, v9;
        if (!v5.TZ && !v5.sentences || !v5.TZ && this.translationIsTheSameAsInput(v5.sentences, v6)) {
            v8 = false;
        } else {
            v8 = true;
            v7 = [];
            if (v5.TZ) {
                v5.TZ.forEach(function (vU) {
                    const translationItem = {
                        'TW': vU.TW,
                        'h0': vU.h1.map(vT => {
                            if (vT.h2) {
                                if (vT.h2.match(/'$/)) {
                                    return '' + vT.h2 + vT.Tq;
                                } else {
                                    return vT.h2 + ' ' + vT.Tq;
                                }
                            }
                            return vT.Tq;
                        })
                    };
                    v7.push(translationItem);
                });
            } else {
                v5.sentences.forEach(function (vU) {
                    v7.push(vU.trans);
                });
                v7 = v7.join(' ');
            }
            v9 = v5.src;
        }
        return {
            'Td': v8,
            'TR': v9,
            'Tr': v7
        };
    }
    h3(v5) {
        return 'Too many requests - translation is temporary disabled. Will retry in ' + formatDistanceToNow(v5) + '.';
    }
    async translateInner(v5, v6, v7, v8, v9) {
        const urls = this.TX(v5, {
            'TR': v6,
            'TF': v7
        });
        const vU = async () => {
            let vh = await ReadItTTS_0v8.Ta(urls[0x0], null, 0x5, 0x1388);
            if (vh.ok) {
                const vv = await vh.parsedData;
                return await v8.bind(this)(vv, v5, v7, v9);
            } else {
                console.error(vh);
                if (vh.status == 0x1ad) {
                    return {
                        'message': this.h3(blockExpiresAt),
                        'error': true
                    };
                }
            }
        };
        let vT = await ReadItTTS_0v8.Ta(urls[0x1], null, 0x5, 0x1388);
        if (vT.ok) {
            let vh = await vT.parsedData;
            if (vh.sentences) {
                return await v8.bind(this)(vh, v5, v7, v9);
            } else {
                return await vU();
            }
        } else {
            console.error(vT);
            return await vU();
        }
    }
    async translate(v5, v6, v7, v8 = false) {
        const v9 = await this.translateInner(v5, v6, v7, this.on_translation_response, v8);
        return v9;
    }
}
class ReadItTTS_0vT {
    constructor() {
        this.h4 = false;
        this.h5 = false;
    }
    h6(v5, v6, v7) {
        const v8 = v5[v7]['toLowerCase']();
        const v9 = v6[v7]['toLowerCase']();
        if (v8 < v9)
            return -0x1;
        if (v8 > v9)
            return 0x1;
        return 0x0;
    }
    h7(v5) {
        for (var v6 = 0x0; v6 < v5.length; v6++) {
            if (v5.charCodeAt(v6) > 0x7f) {
                return true;
            }
        }
        return false;
    }
    h8(v5) {
        if (typeof v5 === 'string') {
            var v6 = new TextEncoder();
            var v7 = v6.encode(v5);
            v5 = new TextDecoder('utf-8').decode(v7);
        } else if (!this.h7(v5)) {
            throw new TypeError('text must be a string or a Buffer');
        }
        return v5;
    }
    h9(v5, v6) {
        if (v6 !== '%' && v6 !== 'Hz' || !v6) {
            throw new Error('Unsupported suffix: ' + v6);
        }
        let v7 = '';
        let v8 = String(v5).trim();
        if (v8.endsWith(v6)) {
            v8 = v8.slice(0x0, v8.indexOf(v6));
            v5 = Number(v8);
        } else {
            v5 = Number(v8);
        }
        if (isNaN(v5)) {
            throw new Error('Invalid parameter: ' + v8 + ', suffix ' + v6);
        }
        if (v5 >= 0x0) {
            v7 = '+' + v5 + v6;
        } else {
            v7 = '' + v5 + v6;
        }
        return v7;
    }
    hU() {
        let v5 = 'https://';
        v5 += ReadItTTS_0v5.x;
        v5 += '/consumer/speech/synthesize/readaloud/voices/list';
        return v5;
    }
    async hT(v5) {
        const v6 = new Headers({
            'hh': 'speech.platform.bing.com',
            'hv': '" Not;A Brand";v="99", "Microsoft Edge";v="91", "Chromium";v="91"',
            'ha': '?0',
            'ht': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36 Edg/91.0.864.41',
            'Accept': '*/*',
            'hj': 'none',
            'hs': 'cors',
            'hu': 'empty',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9'
        });
        const v7 = {
            'method': 'GET',
            'headers': v6,
            'mode': 'cors',
            'cache': 'default'
        };
        const v8 = await fetch(this.hU() + '?trustedclienttoken=' + ReadItTTS_0v5.UO, v7);
        if (!v8.ok) {
            throw new Error('Failed to fetch voice list');
        }
        let v9 = await v8.json();
        v9 = v9.sort((vT, vh) => this.h6(vT, vh, 'ShortName'));
        const vU = [];
        for (const [vT, vh] of v9.entries()) {
            let vv = {};
            for (const va in vh) {
                if (va in [
                        'SuggestedCodec',
                        'FriendlyName',
                        'Status',
                        'VoiceTag',
                        'Name'
                    ])
                    continue;
                let vt = va != 'ShortName' ? va : 'Name';
                if ([
                        'Name',
                        'Gender',
                        'Locale'
                    ]['includes'](vt))
                    vv[vt] = vh[va];
                if ('Name' in vv && 'Gender' in vv && 'Locale' in vv) {
                    vU.push(vv);
                    vv = {};
                }
            }
        }
        return vU;
    }
    hM(v5, v6, v7) {
        if (typeof v6 !== 'string') {
            throw new TypeError(v5 + ' must be a string');
        }
        if (!v7.test(v6)) {
            throw new Error('Invalid ' + v5 + ' "' + v6 + '".');
        }
        return v6;
    }
    hm() {
        let v5 = 'wss://';
        v5 += ReadItTTS_0v5.x;
        v5 += '/consumer/speech/synthesize/readaloud/edge/v1';
        return v5;
    }
    hi(v5) {
        if (typeof v5 === 'string') {
        } else if (this.h7(v5)) {
            v5 = v5.toString('utf-8');
        } else {
            throw new TypeError('string must be a string or a Buffer');
        }
        const v6 = v5.split('');
        for (let v7 = 0x0; v7 < v6.length; v7++) {
            const v8 = v6[v7]['charCodeAt'](0x0);
            if (0x0 <= v8 && v8 <= 0x8 || 0xb <= v8 && v8 <= 0xc || 0xe <= v8 && v8 <= 0x1f) {
                v6[v7] = ' ';
            }
        }
        return v6.join('');
    }
    hP(v5) {
        if (typeof v5 === 'string') {
            v5 = this.h8(v5);
        }
        const v6 = {};
        if (typeof v5 !== 'string') {
            console.log('None string?');
        }
        const v7 = v5.indexOf('\r\n\r\n');
        if (v7 === -0x1) {
            throw new Error('Invalid data format: missing header/body separator');
        }
        const v8 = v5.slice(0x0, v7).toString('utf-8').split('\r\n');
        for (const vU of v8) {
            const [vT, vh] = vU.split(':', 0x2);
            v6[vT.trim()] = vh.trim();
        }
        const v9 = v5.slice(v7 + 0x4);
        return [
            v6,
            v9
        ];
    }
    *['hy'](v5, byteLength) {
        v5 = this.h8(v5);
        if (byteLength <= 0x0) {
            throw new ValueError('byteLength must be greater than 0');
        }
        while (v5.length > byteLength) {
            let v7 = v5.lastIndexOf(' ', byteLength);
            v7 = v7 !== -0x1 ? v7 : byteLength;
            while (v5.slice(0x0, v7).includes('&')) {
                const v9 = v5.lastIndexOf('&', v7);
                if (v5.slice(v9, v7).includes(';')) {
                    break;
                }
                v7 = v9 - 0x1;
                if (v7 < 0x0) {
                    throw new ValueError('Maximum byte length is too small or invalid text');
                }
                if (v7 === 0x0) {
                    break;
                }
            }
            const v8 = v5.slice(0x0, v7).toString('utf-8').trim();
            if (v8) {
                yield v8;
            }
            if (v7 === 0x0) {
                v7 = 0x1;
            }
            v5 = v5.slice(v7);
        }
        const v6 = this.h8(v5).trim();
        if (v6) {
            yield v6;
        }
    }
    hb(v5, v6, v7, v8, v9) {
        if (typeof v5 === 'string') {
            if (typeof v5 === 'string') {
                var vU = new TextEncoder();
                var vT = vU.encode(v5);
                v5 = new TextDecoder('utf-8').decode(vT);
            } else if (!this.h7(v5)) {
                throw new TypeError('text must be a string or a Buffer');
            }
        } else if (this.h7(v5)) {
            v5 = this.h8(v5);
        } else {
            throw new TypeError('text must be a string or a Buffer');
        }
        const vh = '<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">' + ('<voice name="' + v6 + '"><prosody pitch="' + v9 + '" rate="' + v7 + '" volume="' + v8 + '">') + (v5 + '</prosody></voice></speak>');
        return vh;
    }
    hL(v5, v6, v7, v8) {
        const v9 = Math.pow(0x2, 0x10);
        const vU = this.ssmlHeadersPlusData(this.hn(), this.hp(), this.hb('', v5, v6, v7, v8)).length + 0x32;
        return v9 - vU;
    }
    hp() {
        const v5 = new Date();
        const v6 = v5.toUTCString();
        const timezoneOffsetMinutes = -v5.getTimezoneOffset();
        const timezoneOffsetHours = Math.floor(timezoneOffsetMinutes / 0x3c);
        const timezoneOffsetMinutesFormatted = Math.abs(timezoneOffsetMinutes % 0x3c).toString().padStart(0x2, '0');
        const v7 = timezoneOffsetHours >= 0x0 ? '+' : '-';
        const timezoneOffsetHoursFormatted = Math.abs(timezoneOffsetHours).toString().padStart(0x2, '0');
        const v8 = 'GMT' + v7 + timezoneOffsetHoursFormatted + timezoneOffsetMinutesFormatted;
        const v9 = v6 + ' (' + v8 + ')';
        return v9;
    }
    ssmlHeadersPlusData(v5, v6, v7) {
        const headersAndData = 'X-RequestId:' + v5 + '\r\n' + 'Content-Type:application/ssml+xml\r\n' + ('X-Timestamp:' + v6 + 'Z\r\n') + 'Path:ssml\r\n\r\n' + ('' + v7);
        return headersAndData;
    }
    hn() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'['replace'](/[xy]/g, function (v5) {
            var v6 = Math.random() * 0x10 | 0x0, v7 = v5 == 'x' ? v6 : v6 & 0x3 | 0x8;
            return v7.toString(0x10);
        });
    }
    hk(v5) {
        let v6 = [
            '&',
            '<',
            '>',
            '"',
            String.fromCharCode(0x27)
        ];
        var v7 = {
            [v6[0x0]]: '&amp;',
            [v6[0x1]]: '&lt;',
            [v6[0x2]]: '&gt;',
            [v6[0x3]]: '&quot;',
            [v6[0x4]]: '&#39;'
        };
        return v5.replace(/[&<>"']/g, function (v8) {
            return v7[v8];
        });
    }
    async stop() {
        try {
            if (this.hx != null) {
                this.h5 = true;
                this.hx.close();
                await this.hJ();
            }
        } catch (v5) {
        }
    }
    async hJ() {
        let v5 = 0x5;
        if (this.hx) {
            while (this.hx.readyState !== WebSocket.CLOSED && v5 > 0x0) {
                v5--;
                await new Promise(v6 => setTimeout(v6, 0x3e8));
            }
            if (v5 > 0x0) {
                let v6 = 0x1;
            }
        }
    }
    async hQ(v5, v6, v7, v8, v9, vU = ReadItTTS_0v5.z) {
        return new Promise(async (vT, vh) => {
            this.h5 = false;
            let vv = this;
            function va() {
                if (vv.ho) {
                    clearTimeout(vv.ho);
                }
            }
            try {
                this.results = [];
                function vt() {
                    va();
                    try {
                        if (vv.hx)
                            vv.hx.close();
                    } catch (vy) {
                    }
                    vh(new Error('WebSocket timed out'));
                }
                function vj() {
                    vv.ho = setTimeout(vt, vv.timeoutSeconds);
                }
                ;
                if (typeof v5 !== 'string') {
                    new TypeError('text must be a string');
                }
                this.text = v5;
                v7 = this.h9(v7, '%');
                v8 = this.h9(v8, '%');
                v9 = this.h9(v9, 'Hz');
                if (typeof v6 !== 'string') {
                    throw new TypeError('voice must be a string');
                }
                this.voice = v6;
                const vs = v6.match(/^([a-z]{2,})-([A-Z]{2,})-(.+Neural)$/);
                if (vs !== null) {
                    const vy = vs[0x1];
                    let vb = vs[0x2];
                    let vL = vs[0x3];
                    const vn = vL.indexOf('-');
                    if (vn !== -0x1) {
                        vb += '-' + vL.substring(0x0, vn);
                        vL = vL.substring(vn + 0x1);
                    }
                    this.voice = 'Microsoft Server Speech Text to Speech Voice (' + vy + '-' + vb + ', ' + vL + ')';
                }
                this.voice = this.hM('voice', this.voice, /^Microsoft Server Speech Text to Speech Voice \(.+,.+\)$/);
                this.rate = this.hM('rate', v7, /^[+-]\d+%$/);
                this.volume = this.hM('volume', v8, /^[+-]\d+%$/);
                this.pitch = this.hM('pitch', v9, /^[+-]\d+Hz$/);
                if (typeof vU !== 'number' || !Number.isInteger(vU)) {
                    throw new TypeError('receiveTimeout must be an integer');
                }
                this.timeoutSeconds = vU;
                this.hw = false;
                async function vu(vp) {
                    const vk = 'X-Timestamp:' + vp.hp() + '\r\n' + 'Content-Type:application/json; charset=utf-8\r\n' + 'Path:speech.config\r\n\r\n' + '{"context":{"synthesis":{"audio":{"metadataoptions":{' + '"sentenceBoundaryEnabled":false,"wordBoundaryEnabled":true},' + '"outputFormat":"audio-24khz-48kbitrate-mono-mp3"' + '}}}}\r\n';
                    vp.hx.send(vk);
                }
                async function vM(vp) {
                    const vk = vi.next().value;
                    if (vk === undefined) {
                        return false;
                    }
                    vj();
                    vp.hx.send(vp.ssmlHeadersPlusData(vp.hn(), vp.hp(), vp.hb(vk, vp.voice, vp.rate, vp.volume, vp.pitch)));
                    return true;
                }
                function vm(vp) {
                    const metaData = JSON.parse(vp).Metadata;
                    for (const vk of metaData) {
                        const metaType = vk.Type;
                        if (metaType === 'WordBoundary') {
                            const currentOffset = vk.Data.Offset + vP;
                            const currentDuration = vk.Data.Duration;
                            return {
                                'type': metaType,
                                'offset': currentOffset,
                                'duration': currentDuration,
                                'text': vk.Data.text.Text
                            };
                        }
                        if (['SessionEnd']['includes'](metaType)) {
                            continue;
                        }
                        throw new Error('Unknown metadata type: ' + metaType);
                    }
                    throw new Error('No WordBoundary metadata found');
                }
                const vi = this.hy(this.hk(this.hi(vv.text)), this.hL(vv.voice, vv.rate, vv.volume, vv.pitch));
                let lastDurationOffset = 0x0;
                let vP = 0x0;
                vj();
                this.hx = new WebSocket(this.hm() + '?TrustedClientToken=' + ReadItTTS_0v5.UO + '&ConnectionId=' + this.hn());
                this.hx.addEventListener('open', async vp => {
                    va();
                    let vk = 0x5;
                    while (this.hx.readyState !== WebSocket.OPEN && vk > 0x0) {
                        await new Promise(vx => setTimeout(vx, 0x3e8));
                        vk--;
                    }
                    if (this.hx.readyState !== WebSocket.OPEN) {
                        try {
                            if (this.hx)
                                this.hx.close();
                        } catch (vx) {
                        }
                        vh(error);
                        return;
                    }
                    try {
                        await vu(vv);
                        await vM(vv);
                    } catch (vJ) {
                        try {
                            if (this.hx)
                                this.hx.close();
                        } catch (vQ) {
                        }
                        vh(vJ);
                    }
                });
                this.hx.addEventListener('message', async vp => {
                    try {
                        const vk = vp;
                        va();
                        if (vk.data instanceof Blob) {
                            if (vk.data.size < 0x2) {
                                throw new Error('We received a binary message, but it is missing the header length.');
                            }
                            vk.data.arrayBuffer().then(vx => {
                                let vJ = new DataView(vx);
                                const vQ = vJ.getUint16(0x0);
                                if (vk.data.size < vQ + 0x2) {
                                    throw new Error('We received a binary message, but it is missing the audio data.');
                                }
                                const audioData = vk.data.slice(vQ + 0x2);
                                this.results.push(audioData);
                                vv.hw = true;
                            });
                        } else {
                            const [vx, vJ] = this.hP(vk.data);
                            const vQ = vx.Path;
                            if (vQ === 'audio.metadata') {
                                const parsedMetadata = vm(vJ);
                                lastDurationOffset = parsedMetadata.offset + parsedMetadata.duration;
                            } else if (vQ === 'turn.end') {
                                vP = lastDurationOffset + 0x8583b0;
                                const vo = await vM(vv);
                                if (!vo && vv.hx) {
                                    vv.hx.close();
                                }
                            } else if ([
                                    'response',
                                    'turn.start'
                                ]['includes'](vQ)) {
                            } else {
                                throw new Error('The response from the service is not recognized.\n' + vk.data);
                            }
                        }
                    } catch (vw) {
                        try {
                            if (this.hx)
                                this.hx.close();
                        } catch (vC) {
                        }
                        vh(vw);
                    }
                });
                this.hx.addEventListener('close', async vp => {
                    va();
                    if (!this.h5) {
                        if (!this.hw) {
                            vh(new Error('No audio was received. Please verify that your parameters are correct.'));
                        } else {
                            this.hC(this.results).then(vk => {
                                vT(vk);
                            }).catch(vk => {
                                vh(vk);
                            });
                        }
                    } else {
                        vT(null);
                    }
                });
                this.hx.addEventListener('error', vp => {
                    if (!this.h5) {
                        vh(new Error(vp));
                    } else {
                        vT(null);
                    }
                });
            } catch (vp) {
                va();
                try {
                    if (this.hx)
                        this.hx.close();
                } catch (vk) {
                }
                vh(vp);
            } finally {
            }
        });
    }
    async hC(v5) {
        if (!v5 || v5.length === 0x0) {
            return null;
        }
        let v6 = [];
        for (let v9 = 0x0; v9 < v5.length; v9++) {
            let vU = v5[v9];
            try {
                let vT = await vU.arrayBuffer();
                v6.push(vT);
            } catch (vh) {
                console.error(vh);
                return null;
            }
        }
        let v7 = v6.reduce((vv, va) => vv + va.byteLength, 0x0);
        let concatenatedBuffer = new Uint8Array(v7);
        let v8 = 0x0;
        v6.forEach(vv => {
            concatenatedBuffer.set(new Uint8Array(vv), v8);
            v8 += vv.byteLength;
        });
        return new Blob([concatenatedBuffer]);
    }
}
class ReadItTTS_0vh {
    constructor() {
        this.i18n = new ReadItTTS_0v9(Language.COUNTRIES, false);
        this.hc = new ReadItTTS_0vT();
        this.hf = false;
        this.hS = null;
        this.voiceChanged = false;
    }
    hG() {
        if (!this.voices) {
            if (!this.hf) {
                this.hf = true;
                this.hE();
                return new Promise((v5, v6) => {
                    ReadItTTS_0v8.T3(ReadItTTS_0v5.o).then(async v7 => {
                        if (v7) {
                            this.voices = v7;
                            v5(this.voices);
                        } else {
                            let v8 = 0x0;
                            while (v8 < 0x5 && !this.voices) {
                                try {
                                    let v9 = await this.hc.hT();
                                    if (v9 && v9.length > 0x0) {
                                        this.voices = v9;
                                        ReadItTTS_0v8.T4(ReadItTTS_0v5.o, this.voices);
                                    }
                                } catch (vU) {
                                    v8++;
                                }
                            }
                            if (!this.voices) {
                                this.hA('tts_error_fail_load', true);
                            } else {
                                this.hA('tts_error_fail_load', false);
                            }
                            this.hf = false;
                            v5(this.voices);
                        }
                    });
                });
            }
        }
        return this.voices;
    }
    getLanguageNameByLocale(locale) {
        for (const v5 in Language.COUNTRIES) {
            if (v5 == locale) {
                return Language.COUNTRIES[v5]['language_name'];
            }
        }
    }
    async hI(v5) {
        v5.forEach(v6 => {
            let v7 = this.getLanguageNameByLocale(v6.Locale);
            if (v7) {
                v6.language = v7;
                v6.language_code = v6.Locale.split('-')[0x0]['trim']().toLowerCase();
                v6.country = v6.Locale.split('-')[0x1]['trim']();
            }
        });
    }
    async hl(v5) {
        let v6 = await this.hG();
        return [
            v6.find(v7 => v7.Name == v5),
            v6
        ];
    }
    async hg() {
        let v5 = await this.hG();
        this.hI(v5);
        this.hB(v5);
        this.he();
    }
    hH() {
        this.config.show_my_language_only = document.getElementById('show_my_language_only').checked;
        this.he();
    }
    async hO() {
        this.config.voice = document.getElementById('voice').value;
        this.hE();
    }
    hV(v5) {
        let v6 = v5.Name;
        if (v6.indexOf(v5.Locale) >= 0x0) {
            v6 = v6.substr(v5.Locale.length, v6.length);
            if (v6.startsWith('-')) {
                v6 = v6.substr(0x1);
            }
            if (v6.indexOf('Neural') >= 0x0) {
                v6 = v6.substr(0x0, v6.indexOf('Neural'));
            }
        }
        return v6;
    }
    he() {
        const languageElement = document.getElementById('language');
        languageElement.innerHTML = '';
        let v5 = this.hD();
        languageElement.innerHTML = '';
        let myLanguages = ReadItTTS_0v8.TA();
        for (const language_code in v5) {
            if (this.config.show_my_language_only && !ReadItTTS_0v8.containsSameL(myLanguages, language_code)) {
                continue;
            }
            const v6 = document.createElement('option');
            v6.setAttribute('id', 'tts_vl' + v5[language_code]['index']);
            v6.setAttribute(ReadItTTS_0v9.Te, 'tts_vl' + v5[language_code]['index']);
            v6.setAttribute('value', language_code);
            v6.textContent = v5[language_code]['language'] + ' - ' + v5[language_code]['language_code'];
            languageElement.appendChild(v6);
        }
        if (this.config.language != null && this.config.language.trim() != '') {
            languageElement.value = this.config.language;
            this.hz(v5[languageElement.value]['voices']);
        } else {
            languageElement.value = '';
        }
        this.transVoices();
    }
    hd() {
        const languageElement = document.getElementById('language');
        if (languageElement.value != '') {
            this.config.language = languageElement.value;
            this.he();
        }
    }
    hz(v5) {
        const v6 = document.getElementById('voice');
        v6.innerHTML = '';
        v5.forEach(v7 => {
            if (!v7.language) {
                return;
            }
            const v8 = document.createElement('option');
            v8.setAttribute('id', 'tts_v' + v7.index);
            v8.setAttribute('value', v7.Name);
            let v9 = this.hV(v7);
            let vU = v7.Locale.split('-');
            let locale = vU.length > 0x1 ? vU[0x1] : vU[0x0];
            v8.textContent = v9 + ' (' + locale + '), ' + v7.Gender;
            v6.appendChild(v8);
        });
        if (this.config.voice != null && this.config.voice.trim() != '') {
            v6.value = this.config.voice;
            this.hE();
        } else {
            v6.value = '';
        }
        this.hR();
    }
    hB(v5) {
        if (this.hS == null) {
            let v6 = 0x0;
            let v7 = 0x0;
            this.hS = {};
            let v8 = [];
            v5.forEach(v9 => {
                if (!v9.language) {
                    return;
                }
                let vU = v9.language_code;
                if (!this.hS[vU]) {
                    this.hS[vU] = {
                        'index': v7,
                        'language': v9.language,
                        'language_code': v9.language_code,
                        'voices': [],
                        'hr': vU
                    };
                    v7++;
                }
                if (ReadItTTS_0v8.TS(v9.Name)) {
                    v8.push(v9);
                    v9.index = v6;
                } else {
                    this.hS[vU]['voices']['push'](v9);
                }
                v6++;
            });
            v8.forEach(v9 => {
                for (let language in this.hS) {
                    this.hS[language]['voices']['push'](v9);
                }
            });
        }
    }
    hD() {
        return this.hS;
    }
    hY() {
        let v5 = document.getElementById('alertDiv');
        for (let v6 = 0x0; v6 < v5.children.length; v6++) {
            v5.children[v6]['style']['display'] = 'none';
        }
    }
    hA(v5, v6) {
        let v7 = document.getElementById('alertDiv');
        for (let v8 = 0x0; v8 < v7.children.length; v8++) {
            if (v5 == v7.children[v8]['id']) {
                v7.children[v8]['style']['display'] = v6 ? 'block' : 'none';
                break;
            }
        }
    }
    async hF() {
        for (var v5 in this.config) {
            if (document.getElementById(v5)) {
                if (document.getElementById(v5).nodeName.toLowerCase() == 'ol') {
                    this.hq(v5);
                } else {
                    const v6 = document.getElementById(v5);
                    if (v6) {
                        if (v6.type == 'checkbox') {
                            this.config[v5] = v6.checked;
                        } else {
                            this.config[v5] = v6.value;
                        }
                    }
                }
            }
        }
        await ReadItTTS_0v8.Tj(this.config);
        if (this.hK(this.config)) {
            this.hA('tts_message_success_saved', true);
        }
        this.hN().then(() => {
            window.close();
        });
    }
    hq(v5) {
        for (let v6 = 0x0; v6 < document.getElementById(v5).children.length; v6++) {
            const v7 = document.getElementById(v5).children[v6];
            if (v7.classList.contains('is-hovered')) {
                let v8 = v7.getAttribute('value');
                if (this.hX[v5] != null) {
                    v8 = this.hX[v5][parseInt(v8)];
                }
                this.config[v5] = v8;
            }
        }
    }
    hN() {
        return new Promise((v5, v6) => {
            chrome.runtime.sendMessage({
                'action': 'settings',
                'type': 'changed',
                'data': this.config
            }, v7 => {
                if (!chrome.runtime.lastError) {
                }
                v5();
            });
        });
    }
    async Tt() {
        await ReadItTTS_0v8.Tt();
        this.hX = await ReadItTTS_0v8.Th();
        this.config = await ReadItTTS_0v8.T8();
        await this.i18n.reset();
        this.hK(this.config);
        this.hN(false);
    }
    hZ(v5) {
        let v6 = v5.target.getAttribute(ReadItTTS_0v5.K);
        if (this.hX.pitch != null) {
            v6 = this.hX.pitch[parseInt(v6)];
        }
        this.config.pitch = v6;
        this.hK(this.config);
    }
    hW(v5) {
        let v6 = v5.target.getAttribute(ReadItTTS_0v5.K);
        if (this.hX.dvl != null) {
            v6 = this.hX.dvl[parseInt(v6)];
        }
        this.config.dvl = v6;
        this.hK(this.config);
    }
    v0(v5) {
        this.config.scroll_before_reading_page = v5.target;
    }
    v1(v5) {
        this.config.auto_play = v5.target;
    }
    v2(v5) {
        this.config.dynamic_volume = v5.target;
    }
    v3(config, v5) {
        for (let v6 = 0x0; v6 < document.getElementById(v5).children.length; v6++) {
            const v7 = document.getElementById(v5).children[v6];
            let v8 = v7.getAttribute('value');
            if (this.hX[v5] != null) {
                v8 = this.hX[v5][parseInt(v8)];
            }
            if (v8.toString() == config[v5]) {
                v7.classList.add('is-hovered');
            } else {
                v7.classList.remove('is-hovered');
            }
        }
    }
    hK(config) {
        if (this.hX != null) {
            for (let v6 in this.hX) {
                let v7 = document.getElementById(v6);
                switch (v6) {
                case 'pitch':
                case ReadItTTS_0v5.A: {
                        let v8 = v7.querySelectorAll('li');
                        for (let v9 = 0x0; v9 < v8.length; v9++) {
                            const vU = v8[v9];
                            let vT = parseInt(vU.getAttribute('value'));
                            if (vT >= this.hX[v6]['length'] || this.hX[v6][vT] == null) {
                                v7.removeChild(vU);
                            }
                        }
                    }
                    break;
                }
            }
        }
        for (var v5 in config) {
            if (document.getElementById(v5)) {
                if (document.getElementById(v5).type == 'checkbox') {
                    document.getElementById(v5).checked = config[v5];
                } else if (document.getElementById(v5).nodeName.toLowerCase() == 'ol') {
                    this.v3(config, v5);
                } else if (v5 == 'show_tts_floating_icon') {
                    let vh = document.getElementById('show_tts_floating_icon');
                    for (let vv = 0x0; vv < vh.children.length; vv++) {
                        const va = vh.children[vv];
                        if (ReadItTTS_0v8.To(va.value, config[v5])) {
                            va.setAttribute('selected', 'selected');
                        } else {
                            va.removeAttribute('selected');
                        }
                    }
                } else {
                    document.getElementById(v5).value = config[v5];
                }
            }
        }
        this.hR();
        this.hE();
        return true;
    }
    hR() {
        if (!this.voices || this.voices.length == 0x0) {
            document.getElementById('loading_span').classList.add('active');
            document.getElementById('loading_span').style.backgroundImage = 'url("./images/loading.gif")';
        } else {
            document.getElementById('loading_span').classList.remove('active');
        }
    }
    hE() {
        this.hY();
        if (ReadItTTS_0v8.containsOnlyWhitespace(this.config.voice)) {
            this.hA('tts_error_not_initialized', true);
        } else {
            this.hA('tts_error_not_initialized', false);
        }
        if (!this.voices && !this.hf) {
            this.hA('tts_error_fail_load', true);
        } else {
            this.hA('tts_error_fail_load', false);
        }
        let v5 = ['status'];
        ReadItTTS_0v8.T3(ReadItTTS_0v5.UL).then(v6 => {
            if (v6 && v6[v5[0x0]]) {
                this.hA('tts_message_updated', true);
                ReadItTTS_0v8.T4(ReadItTTS_0v5.UL, null);
            } else {
                this.hA('tts_message_updated', false);
            }
        });
    }
    transVoices() {
        let language = document.getElementById('language');
        let v5 = language.getElementsByTagName('option');
        this.i18n.transVoices(Array.from(v5));
    }
    v4() {
        document.getElementById('voice').addEventListener('change', this.hO.bind(this));
        document.getElementById('language').addEventListener('change', this.hd.bind(this));
        document.getElementById('show_my_language_only').addEventListener('change', this.hH.bind(this));
        document.getElementById('save_button').addEventListener('click', this.hF.bind(this));
        document.getElementById('reset_button').addEventListener('click', this.Tt.bind(this));
        document.getElementById('pitch').addEventListener('click', this.hZ.bind(this));
        document.getElementById('dvl').addEventListener('click', this.hW.bind(this));
        document.getElementById('scroll_before_reading_page').addEventListener('change', this.v0.bind(this));
        document.getElementById('auto_play').addEventListener('change', this.v1.bind(this));
        document.getElementById('dynamic_volume').addEventListener('change', this.v2.bind(this));
        document.getElementById('helpHyperlink').setAttribute('href', ReadItTTS_0v5.U3 + '/feedback/help.html');
    }
}
window.onload = async function () {
    const configPage = new ReadItTTS_0vh();
    configPage.config = await ReadItTTS_0v8.T8();
    configPage.hX = await ReadItTTS_0v8.Th();
    configPage.hK(configPage.config);
    await configPage.hg();
    await configPage.i18n.translateDocument(document);
    configPage.v4();
};
